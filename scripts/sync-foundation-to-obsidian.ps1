#requires -Version 5.1
<#
.SYNOPSIS
  Safe one-way import from the local Foundation GitHub checkout to Obsidian.
.DESCRIPTION
  Preview by default. Changes are NEVER deleted from Obsidian.
  Existing notes are not overwritten unless -Apply -Overwrite are both set.
  Original overwritten notes are backed up OUTSIDE the Obsidian vault.
  Run on the Windows machine that holds your vault, after git pull --ff-only.
  Do NOT run publish-foundation.ps1 before importing the reviewed GitHub edits.
.EXAMPLE
  .\scripts\sync-foundation-to-obsidian.ps1 -Scope Core
.EXAMPLE
  .\scripts\sync-foundation-to-obsidian.ps1 -Scope Core -Apply -Overwrite
.EXAMPLE
  .\scripts\sync-foundation-to-obsidian.ps1 -Scope All -IncludeHub -Apply -Overwrite
#>
[CmdletBinding()]
param(
  [ValidateSet('Core','All')]
  [string]$Scope = 'Core',

  [string]$RepoPath = 'C:\Projects\GoHackersCloud\gohackerscloud-foundation',

  [string]$VaultRoot = 'C:\Projects\GHC-Platform\gohackerscloud',

  [switch]$IncludeHub,
  [switch]$Apply,
  [switch]$Overwrite
)

$ErrorActionPreference = 'Stop'

if (-not (Test-Path -LiteralPath $RepoPath -PathType Container)) {
  throw "Foundation checkout not found: $RepoPath"
}
if (-not (Test-Path -LiteralPath $VaultRoot -PathType Container)) {
  throw "Obsidian vault not found: $VaultRoot"
}
$RepoPath = (Resolve-Path -LiteralPath $RepoPath).Path.TrimEnd('\')
$VaultRoot = (Resolve-Path -LiteralPath $VaultRoot).Path.TrimEnd('\')
if (-not (Test-Path -LiteralPath (Join-Path $RepoPath 'publish-foundation.ps1') -PathType Leaf)) {
  throw "This is not the expected Foundation repository: $RepoPath"
}
if ($Overwrite -and -not $Apply) {
  Write-Host 'PREVIEW: -Overwrite has no effect until -Apply is also supplied.' -ForegroundColor Yellow
}

$docsRoot = Join-Path $RepoPath 'src\content\docs'
$mappings = @(
  [pscustomobject]@{ Name='Foundation'; Source='foundation'; Destination='02-CareerTracks\foundation' }
)
if ($Scope -eq 'All') {
  $mappings += @(
    [pscustomobject]@{ Name='Roadmaps'; Source='roadmaps'; Destination='10 Resources\Career Roadmaps' },
    [pscustomobject]@{ Name='Certifications'; Source='certifications'; Destination='05 Certifications\Certification Guides' },
    [pscustomobject]@{ Name='Interview Resources'; Source='resources'; Destination='10 Resources\Interview Preparation' }
  )
}
if ($IncludeHub) {
  # Reference copies are visible in Obsidian but NOT exported by publish-foundation.ps1.
  # Keep edits to these in GitHub unless an explicit single-source publishing plan is adopted.
  $mappings += @(
    [pscustomobject]@{ Name='Core IT & DevOps Reference'; Source='core-it-devops'; Destination='99 Foundation Published References\core-it-devops' },
    [pscustomobject]@{ Name='Learning Hub Reference'; Source='learning-hub'; Destination='99 Foundation Published References\learning-hub' },
    [pscustomobject]@{ Name='GHC Labs Reference'; Source='ghc-labs'; Destination='99 Foundation Published References\ghc-labs' }
  )
}

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path (Split-Path -Parent $RepoPath) "foundation-obsidian-sync-backups\$stamp"
$counters = @{ Same=0; New=0; Changed=0; Copied=0; Skipped=0 }
$records = New-Object System.Collections.Generic.List[object]

foreach ($mapping in $mappings) {
  $sourceRoot = Join-Path $docsRoot $mapping.Source
  if (-not (Test-Path -LiteralPath $sourceRoot -PathType Container)) {
    throw "Source directory missing: $sourceRoot"
  }
  $destinationRoot = Join-Path $VaultRoot $mapping.Destination
  $files = @(Get-ChildItem -LiteralPath $sourceRoot -Recurse -File | Where-Object {
      $_.Extension -in @('.md','.mdx')
  })

  foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($sourceRoot.Length).TrimStart([char[]]@('\','/'))
    if ($mapping.Name -eq 'Foundation' -and $Scope -eq 'Core') {
      $parts = $relativePath -split '[\\/]'
      if ($parts.Count -lt 3 -or $parts[0] -ne 'GoHackersCloud Foundation' -or $parts[1] -notmatch '^0[0-6] ') {
        continue
      }
    }

    $target = Join-Path $destinationRoot $relativePath
    $state = 'New'
    if (Test-Path -LiteralPath $target -PathType Leaf) {
      $fromHash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash
      $toHash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash
      if ($fromHash -eq $toHash) { $state = 'Same' } else { $state = 'Changed' }
    }
    $counters[$state]++
    $records.Add([pscustomobject]@{ State=$state; Source=$file.FullName; Target=$target; Group=$mapping.Name })
    if ($state -eq 'Same') { continue }

    if (-not $Apply) {
      Write-Host "[PREVIEW/$state] $($mapping.Name): $relativePath"
      continue
    }
    if ($state -eq 'Changed' -and -not $Overwrite) {
      Write-Warning "CONFLICT SKIPPED: $target (use -Overwrite after reviewing your dry run)"
      $counters.Skipped++
      continue
    }

    if ($state -eq 'Changed') {
      $backup = Join-Path (Join-Path $backupRoot $mapping.Destination) $relativePath
      New-Item -ItemType Directory -Path (Split-Path -Parent $backup) -Force | Out-Null
      Copy-Item -LiteralPath $target -Destination $backup -Force
    }
    New-Item -ItemType Directory -Path (Split-Path -Parent $target) -Force | Out-Null
    Copy-Item -LiteralPath $file.FullName -Destination $target -Force
    Write-Host "[COPIED/$state] $($mapping.Name): $relativePath" -ForegroundColor Green
    $counters.Copied++
  }
}

Write-Host ''
Write-Host '== Foundation -> Obsidian report =='
Write-Host "Scope: $Scope | IncludeHub: $IncludeHub | Apply: $Apply | Overwrite: $Overwrite"
Write-Host "Same: $($counters.Same) | New: $($counters.New) | Changed: $($counters.Changed)"
Write-Host "Copied: $($counters.Copied) | Skipped: $($counters.Skipped)"
if ($Apply -and $Overwrite -and (Test-Path -LiteralPath $backupRoot)) {
  $reportPath = Join-Path $backupRoot 'sync-report.csv'
  $records | Export-Csv -LiteralPath $reportPath -NoTypeInformation -Encoding UTF8
  Write-Host "Previous Obsidian versions preserved outside vault: $backupRoot"
}
if (-not $Apply) {
  Write-Host 'NO FILES CHANGED. Review the preview, back up your Obsidian vault, and run with -Apply -Overwrite only when satisfied.' -ForegroundColor Yellow
} elseif ($counters.Skipped -gt 0) {
  Write-Warning 'Some Obsidian edits were preserved. Review the conflicts before publishing.'
}
