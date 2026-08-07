$ErrorActionPreference = "Stop"

# ==========================================
# GoHackersCloud Foundation Publisher
# Obsidian -> Astro / Starlight
# ==========================================

$vaultRoot = "C:\Projects\GHC-Platform\gohackerscloud"

$projectRoot = "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
$docsRoot    = Join-Path $projectRoot "src\content\docs"

# ------------------------------------------
# SOURCE OF TRUTH — OBSIDIAN
# ------------------------------------------

$foundationSource = Join-Path `
    $vaultRoot `
    "02-CareerTracks\foundation"

$roadmapsSource = Join-Path `
    $vaultRoot `
    "10 Resources\Career Roadmaps"

$certificationsSource = Join-Path `
    $vaultRoot `
    "05 Certifications\Certification Guides"

$resourcesSource = Join-Path `
    $vaultRoot `
    "10 Resources\Interview Preparation"

# ------------------------------------------
# ASTRO DESTINATIONS
# ------------------------------------------

$foundationDestination = Join-Path `
    $docsRoot `
    "foundation"

$roadmapsDestination = Join-Path `
    $docsRoot `
    "roadmaps"

$certificationsDestination = Join-Path `
    $docsRoot `
    "certifications"

$resourcesDestination = Join-Path `
    $docsRoot `
    "resources"

Write-Host ""
Write-Host "=============================================="
Write-Host " GoHackersCloud Foundation Publisher"
Write-Host " Obsidian -> Astro"
Write-Host "=============================================="
Write-Host ""

# UTF-8 without BOM
$utf8 = New-Object System.Text.UTF8Encoding($false)

# ==========================================
# PUBLISH FOLDER FUNCTION
# ==========================================

function Publish-Folder {

    param (
        [string]$Source,
        [string]$Destination,
        [string]$Label
    )

    Write-Host "----------------------------------------------"
    Write-Host "Publishing: $Label"
    Write-Host ""

    if (-not (Test-Path $Source)) {
        throw "Source folder not found: $Source"
    }

    Write-Host "Source:"
    Write-Host $Source
    Write-Host ""

    Write-Host "Destination:"
    Write-Host $Destination
    Write-Host ""

    # Remove only the previously published copy.
    # Obsidian source is NEVER modified.
    if (Test-Path $Destination) {
        Write-Host "Cleaning previous published copy..."
        Remove-Item -Recurse -Force $Destination
    }

    New-Item `
        -ItemType Directory `
        -Path $Destination `
        -Force | Out-Null

    Copy-Item `
        -Path "$Source\*" `
        -Destination $Destination `
        -Recurse `
        -Force

    Write-Host "$Label copied successfully."
    Write-Host ""
}

# ==========================================
# PUBLISH CONTENT
# ==========================================

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

# ==========================================
# ADD STARLIGHT FRONTMATTER
# ==========================================

Write-Host "=============================================="
Write-Host " Checking Starlight Frontmatter"
Write-Host "=============================================="
Write-Host ""

$publishDestinations = @(
    $foundationDestination,
    $roadmapsDestination,
    $certificationsDestination,
    $resourcesDestination
)

$totalFiles = 0
$frontmatterAdded = 0

foreach ($destination in $publishDestinations) {

    if (-not (Test-Path $destination)) {
        continue
    }

    $markdownFiles = Get-ChildItem `
        -Path $destination `
        -Recurse `
        -File `
        -Include *.md, *.mdx

    foreach ($file in $markdownFiles) {

        $totalFiles++

        # Read explicitly as UTF-8.
        # This protects emojis, arrows and other Unicode characters.
        $content = [System.IO.File]::ReadAllText(
            $file.FullName,
            $utf8
        )

        # Keep valid existing YAML frontmatter untouched.
        if ($content -match '^\s*---\s*\r?\n') {
            continue
        }

        $title = [System.IO.Path]::GetFileNameWithoutExtension(
            $file.Name
        )

        $safeTitle = $title.Replace('"', '\"')

        $frontmatter = @"
---
title: "$safeTitle"
---

"@

        $newContent = $frontmatter + $content

        # Write UTF-8 without BOM.
        [System.IO.File]::WriteAllText(
            $file.FullName,
            $newContent,
            $utf8
        )

        $frontmatterAdded++
    }
}

# ==========================================
# COMPLETE
# ==========================================

Write-Host ""
Write-Host "=============================================="
Write-Host " Foundation Publishing Complete"
Write-Host "=============================================="
Write-Host ""

Write-Host "Foundation Learning:"
Write-Host "  $foundationDestination"
Write-Host ""

Write-Host "Career Roadmaps:"
Write-Host "  $roadmapsDestination"
Write-Host ""

Write-Host "Certification Guides:"
Write-Host "  $certificationsDestination"
Write-Host ""

Write-Host "Free Resources:"
Write-Host "  $resourcesDestination"
Write-Host ""

Write-Host "Markdown / MDX files processed: $totalFiles"
Write-Host "Frontmatter added: $frontmatterAdded"
Write-Host ""
Write-Host "Source of truth remains Obsidian."
Write-Host ""