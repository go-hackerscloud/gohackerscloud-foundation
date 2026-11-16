# Core IT & DevOps Editorial Upgrade + Obsidian Reverse-Sync Runbook

## Why this exists

Foundation is published by the local PowerShell script `publish-foundation.ps1`:

```text
C:\Projects\GHC-Platform\gohackerscloud\02-CareerTracks\foundation
  -> C:\Projects\GoHackersCloud\gohackerscloud-foundation\src\content\docs\foundation
  -> GitHub main -> Hostinger -> foundation.gohackerscloud.com
```

The publisher **deletes and rebuilds the repository's four Obsidian-owned content folders** before copying them from the local vault. Therefore GitHub edits inside `src/content/docs/foundation/` can be lost during the next publish unless first transferred into Obsidian.

## What has been upgraded in this PR

- New public `/core-it-devops/` pathway plus seven substantial module-specific guides with scenarios, exercises, expected observations, questions and evidence artifacts. These eight guide pages live outside the folders deleted by the existing publisher.
- The first two Orientation lesson bodies are rewritten to be Foundation-specific while keeping the original filenames and URLs for compatibility.
- The first lesson in each of IT, Networking, Linux, Windows, Programming and DevOps has been expanded with a read-only or synthetic-data workshop, accessible answers and a relevant optional Academy link. The six lesson URLs remain unchanged.
- The Foundation header SVG now says **FOUNDATION**, not ACADEMY.

**The other Core IT lesson files remain unchanged in this first milestone.** Subsequent editorial phases should extend all 88 Core module documents carefully in Obsidian, preserving canonical URLs and using the content standards in `docs/FOUNDATION_CONTENT_STANDARDS.md`.

## Back up before making any local changes

1. Close or pause any automated Obsidian-to-Astro publishing job.
2. Make an independent backup or snapshot of the Obsidian vault.
3. Make sure no Obsidian note editor or automatic sync tool is actively changing these notes during the import.
4. Ensure the local Foundation checkout is clean and synchronized with the approved GitHub `main` branch.

### 1 — Get the approved content on your Windows machine

Open PowerShell (in the Foundation Git repository):

```powershell
cd "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
git status
git pull --ff-only origin main
```

If Git reports local modifications or a failed fast-forward, **resolve those changes first**. Do not use `git reset --hard` to make the checkout appear clean.

### 2 — Preview the reverse sync (no writes)

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CoreUpdates
```

This defaults to the **eight edited lesson files** from this PR (Orientation lessons 01–02 and the first lesson of Modules 01–06), preserving all other local notes. To inspect all 88 Core module documents instead, explicitly use `-Scope Core`. It reports three states:

- **Same:** matching content already exists in Obsidian.
- **New:** published file is not present locally.
- **Changed:** the GitHub copy and Obsidian copy differ.

The preview does not modify or remove anything.

### 3 — Review conflicts, then apply with a backup

If the preview shows that GitHub includes the intended latest edits and your existing Obsidian notes are backed up, run:

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CoreUpdates -Apply -Overwrite
```

Existing differing notes are backed up automatically to a timestamped folder under:

```text
C:\Projects\GoHackersCloud\foundation-obsidian-sync-backups\
```

The backup sits **outside your Obsidian vault**, so the publisher will not accidentally copy historical note versions. The tool never deletes Obsidian files. Without `-Overwrite`, conflicting local notes are skipped.

### 4 — Optionally import the rest of the existing Foundation and the new guides

To inspect or import **all 88 Core documents**, use `-Scope Core` with the same preview → `-Apply -Overwrite` sequence. To import all four Obsidian-published document categories:

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope All
.\scripts\sync-foundation-to-obsidian.ps1 -Scope All -Apply -Overwrite
```

To also copy new GitHub-maintained guide pages into Obsidian as a reference:

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CoreUpdates -IncludeHub
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CoreUpdates -IncludeHub -Apply -Overwrite
```

The `-IncludeHub` option stores copies under `99 Foundation Published References` in the vault. **These are reference notes; `publish-foundation.ps1` does not publish that directory**. The guides under `src/content/docs/core-it-devops/`, `learning-hub/` and `ghc-labs/` remain GitHub-owned until a single-source publishing plan for them is explicitly adopted.

### 5 — Verify Obsidian, then resume one-way publishing

1. In Obsidian, open `02-CareerTracks/foundation/GoHackersCloud Foundation/00 Welcome to GoHackersCloud/01 Welcome to the Academy.md`. Confirm its title now says **Welcome to GoHackersCloud Foundation**, even though the filename remains unchanged for URL stability.
2. Confirm the new free-practice workshops appear in the first lessons of Modules 01–06.
3. Inspect tables, code fences and internal links in Obsidian Reading view.
4. Review your vault sync/backup state before continuing.
5. Only **after this** run the existing `publish-foundation.ps1`, build locally and commit changes in the usual direction (Obsidian → Astro → GitHub).

## Recommended long-term model

```text
Obsidian (source of truth for lesson bodies)
        ↓ review/publish
GitHub (version history + validation)
        ↓ automated build/deploy
Foundation website

GitHub → Obsidian: manual, supervised bootstrap or recovery ONLY
```

Do **not** activate an automatic two-way file mirror. Divergent edits, Obsidian metadata, asset links and generated frontmatter can cause conflicts or accidental overwrites.

## Branding and educational ethics

Foundation remains free and must be complete as independent learning. A contextual link to advanced Academy/GHC Labs is appropriate **after** a substantial free activity; it should not imply a subscription is mandatory for basic understanding.

## Post-deploy checks

- Foundation logo clearly identifies Foundation.
- `/core-it-devops/` and `/core-it-devops/module-00/` through `module-06/` load.
- The first two Orientation lessons no longer claim the free site is the Academy.
- Introductory technical lessons retain their original URLs and include practical exercises.
- Existing 205 original module documents remain addressable.
- The GHC Labs CTA opens the official offerings page, which controls current pricing and access.
