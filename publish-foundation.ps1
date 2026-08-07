$ErrorActionPreference = "Stop"

# =========================
# GoHackersCloud Foundation
# Publishing Configuration
# =========================

$projectRoot = "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
$docsRoot    = Join-Path $projectRoot "src\content\docs"

$foundationSource     = "C:\Projects\GHC-Platform\gohackerscloud\02-CareerTracks\foundation"
$roadmapsSource       = "C:\Projects\GHC-Platform\gohackerscloud\10 Resources\Career Roadmaps"
$certificationsSource = "C:\Projects\GHC-Platform\gohackerscloud\05 Certifications\Certification Guides"
$resourcesSource      = "C:\Projects\GHC-Platform\gohackerscloud\10 Resources\Interview Preparation"

$foundationDestination     = Join-Path $docsRoot "foundation"
$roadmapsDestination       = Join-Path $docsRoot "roadmaps"
$certificationsDestination = Join-Path $docsRoot "certifications"
$resourcesDestination      = Join-Path $docsRoot "resources"

Write-Host ""
Write-Host "======================================"
Write-Host " GoHackersCloud Foundation Publisher"
Write-Host "======================================"
Write-Host ""

function Publish-Folder {
    param (
        [string]$Source,
        [string]$Destination,
        [string]$Label
    )

    Write-Host "Publishing $Label..."

    if (-not (Test-Path $Source)) {
        throw "Source folder not found: $Source"
    }

    if (Test-Path $Destination) {
        Remove-Item -Recurse -Force $Destination
    }

    New-Item -ItemType Directory -Path $Destination | Out-Null

    Copy-Item `
        -Path "$Source\*" `
        -Destination $Destination `
        -Recurse `
        -Force
}

Publish-Folder `
    -Source $foundationSource `
    -Destination $foundationDestination `
    -Label "Foundation Learning"

Publish-Folder `
    -Source $roadmapsSource `
    -Destination $roadmapsDestination `
    -Label "Career Roadmaps"

Publish-Folder `
    -Source $certificationsSource `
    -Destination $certificationsDestination `
    -Label "Certification Guides"

Publish-Folder `
    -Source $resourcesSource `
    -Destination $resourcesDestination `
    -Label "Free Resources"

Write-Host ""
Write-Host "Adding required Starlight frontmatter..."

$markdownFiles = Get-ChildItem `
    -Path $docsRoot `
    -Recurse `
    -File `
    -Include *.md, *.mdx

foreach ($file in $markdownFiles) {

    $content = Get-Content -LiteralPath $file.FullName -Raw

    if ($content -match '^\s*---\s*\r?\n') {
        continue
    }

    $title = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $safeTitle = $title.Replace('"', '\"')

    $frontmatter = @"
---
title: "$safeTitle"
---

"@

    Set-Content `
        -LiteralPath $file.FullName `
        -Value ($frontmatter + $content) `
        -Encoding utf8
}

Write-Host ""
Write-Host "Publishing complete."
Write-Host "Foundation Learning  -> $foundationDestination"
Write-Host "Career Roadmaps      -> $roadmapsDestination"
Write-Host "Certification Guides -> $certificationsDestination"
Write-Host "Free Resources       -> $resourcesDestination"
Write-Host ""