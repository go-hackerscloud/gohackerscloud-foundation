# Foundation Stage 01 + Stage 02 Mermaid Expansion — Release & Obsidian Import

## What changed

This is a **content-only update** to the existing Foundation website. The previously installed and tested `astro-mermaid` integration is reused; no additional dependencies or subscriptions are introduced.

| Stage | Updated pages | New diagrams |
|---|---:|---:|
| Stage 01: Core IT & DevOps — first original lesson in Modules 00–06 | 7 | 14 |
| Stage 01: Core IT & DevOps — seven detailed module guides | 7 | 7 |
| Stage 02: Cloud & Cybersecurity — previously uncovered lessons | 8 | 8 |
| **Total** | **22** | **29** |

Stage 02 already had 12 rendered Mermaid diagrams from the earlier PR. These eight new diagrams extend that coverage without replacing the originals.

### Stage 01 topics

- **00 Orientation:** seven-step Foundation journey and the professional troubleshooting cycle
- **01 IT:** physical/virtual resource architecture and CPU/memory/storage diagnosis
- **02 Networking:** browser-to-server flow and DNS/TCP/TLS/HTTP troubleshooting
- **03 Linux:** userspace/kernel/process identity and safe service investigation
- **04 Windows:** process/kernel layers and authentication versus authorization
- **05 Programming:** validated data processing and safe event-summary logic
- **06 DevOps:** working tree → index → commit and reviewed CI/CD deployment

The seven detailed `/core-it-devops/module-00/` through `module-06/` guides also gain complementary Mermaid overviews with short practice tasks. These guides are GitHub-maintained and **not** part of the existing Obsidian publisher's source directories.

### Stage 02 topics

- **07 Cloud Computing:** PaaS delivery, hybrid cloud boundaries, VPC networking and cloud IAM
- **08 Cybersecurity:** risk management, security control functions, Zero Trust decisions and secure design/threat modeling

All examples are conceptual or synthetic, and the practical steps are safe for self-study. Advanced GHC Labs access is separate and optional.

## Verification before merge

CI must pass:

1. npm dependency audits and `npm ci`
2. Astro/Starlight production build
3. All existing Foundation lesson and sitemap checks
4. Previous Stage 02 and Stage 03 Mermaid checks
5. New `node scripts/verify-stage01-stage02-mermaid.mjs` asserting **29 transformed diagrams, 22 working public routes, 15 restricted original Obsidian files and 7 optional guide references**

No original lesson file names or public URLs change.

## Preserve the Obsidian source of truth

The normal `publish-foundation.ps1` **replaces** the repository's Foundation lesson subtree from the local Obsidian vault. Therefore, after merging and deploying this PR, copy the **15 changed original lessons** back to Obsidian **before** running the regular publisher. Otherwise the new diagrams can be overwritten.

### 1 — Update the repository after merge

Back up your Obsidian vault. In Windows PowerShell, check that there are no uncommitted changes:

```powershell
cd "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
git status
git pull --ff-only origin main
```

Do not force-reset unresolved changes. Pause automated writing or syncing to the affected notes during import.

### 2 — Preview exactly 15 original lesson updates

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope Stage0102Diagrams
```

The dry run should count exactly 15 files across **Same + New + Changed**; it does not write anything. Unexpected files, especially from Modules 09–15 or reference folders, are a blocker.

### 3 — Apply after reviewing differences and backups

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope Stage0102Diagrams -Apply -Overwrite
```

The script backs up overwritten notes outside the vault under `foundation-obsidian-sync-backups`. It never deletes local notes. **Only run this after reviewing whether your Obsidian copy contains newer unpublished work**, because `-Overwrite` intentionally replaces differences.

### 4 — Verify the 15 copied originals

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope Stage0102Diagrams
```

Expected, when no concurrent edits occurred: `Same: 15 | New: 0 | Changed: 0`.

### 5 — Optionally refresh the seven Core IT guide reference notes

The new guide diagrams live in GitHub-maintained `src/content/docs/core-it-devops`. The Obsidian reference copies from an earlier `-IncludeHub` import will **not** update unless you explicitly request it.

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope Stage0102Diagrams -IncludeHub
```

This scope selects the **same 15 original lessons plus only 7 updated Core IT guide reference notes**, not the entire Learning Hub. After carefully reviewing, use `-Apply -Overwrite -IncludeHub` to import. A subsequent preview should show `Same: 22`.

**Important:** Guide references under `99 Foundation Published References` are for reading in Obsidian; the existing publisher does not export them to the website. The authoritative published versions remain in GitHub.

## Post-deployment visual checks

Test these original entry lessons and guides in light/dark modes and on mobile:

- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/
- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/02-networking-fundamentals/01-networking-basics/
- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/06-devops--version-control/01-git/
- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/07-cloud-computing-fundamentals/08-cloud-networking/
- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/08-cybersecurity-fundamentals/09-zero-trust/
- https://foundation.gohackerscloud.com/core-it-devops/module-03/

Check that diagrams render as graphics rather than Markdown code, the text remains readable, the sidebar links work, no graph extends beyond its viewport without an accessible scroll option, and new questions have usable answer details.

## Authoring standards

Use meaningful, accurate diagrams: **components, boundaries, decisions and evidence**, not pictures drawn merely for decoration. Every graph must have a beginner explanation, a hypothetical workplace application, an expected output and a safe exercise. This supports the learner independently and makes advanced GHC Labs a natural, optional progression.
