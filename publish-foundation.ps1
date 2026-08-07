$ErrorActionPreference = "Stop"

$contentSource = "C:\Projects\GHC-Platform\gohackerscloud\02-CareerTracks\foundation"
$astroDestination = "C:\Projects\GoHackersCloud\gohackerscloud-foundation\src\content\docs\foundation"

Write-Host "Publishing GoHackersCloud Foundation content..."

if (-not (Test-Path $contentSource)) {
    throw "Foundation source folder not found: $contentSource"
}

if (Test-Path $astroDestination) {
    Remove-Item -Recurse -Force $astroDestination
}

New-Item -ItemType Directory -Path $astroDestination | Out-Null

Copy-Item `
    -Path "$contentSource\*" `
    -Destination $astroDestination `
    -Recurse `
    -Force

Write-Host "Adding required Starlight frontmatter..."

$markdownFiles = Get-ChildItem `
    -Path $astroDestination `
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

Write-Host "Foundation content published successfully."
Write-Host "Markdown files processed: $($markdownFiles.Count)"