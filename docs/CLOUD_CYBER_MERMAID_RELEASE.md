# Foundation Stage 02 — Cloud & Cybersecurity Mermaid Diagrams

## Scope

This milestone improves existing lessons, without moving or renaming their paths:

| Module | Existing lesson | Mermaid diagrams |
|---|---|---:|
| Cloud Computing Fundamentals | 01 Cloud Computing | 3 |
| Cloud Computing Fundamentals | 02 IaaS | 1 |
| Cloud Computing Fundamentals | 11 Shared Responsibility | 1 |
| Cybersecurity Fundamentals | 01 Security Mindset | 3 |
| Cybersecurity Fundamentals | 02 CIA Triad | 1 |
| Cybersecurity Fundamentals | 08 Defense in Depth | 1 |
| Cybersecurity Fundamentals | 10 Security Architecture | 1 |
| Cybersecurity Fundamentals | 12 Security Operations | 1 |
| **Total** | **8 original lessons** | **12** |

Every graph is accompanied by a text explanation, a hypothetical industry example, safe independent practice or scenario worksheet, and key questions.

## Why the Mermaid integration is included

Before this PR the Foundation package and Astro configuration did **not** include a Mermaid renderer. A fenced `mermaid` code block by itself would show as code in a Starlight page. This PR pins `astro-mermaid@2.1.0` and `mermaid@11.17.2`, registers Mermaid before Starlight for Astro 7 compatibility, and provides responsive layout styles.

CI checks all 12 diagrams are transformed into `pre.mermaid` elements in the built static output. **Browser rendering still requires a post-deploy visual check**, including dark and light themes, small screens, and complex diagrams.

## Obsidian publishing warning

The existing `publish-foundation.ps1` replaces the website's Foundation lessons with the Obsidian originals. **After merging this PR, import these 8 lessons into Obsidian before using the publisher again**. Otherwise an older local note can overwrite the Mermaid changes.

### Review and safely import on Windows

1. Back up the Obsidian vault. Pause Obsidian Sync or other writers if they may edit these eight notes while copying.
2. Make sure the local Foundation Git checkout is clean and updated from the merged `main`:

```powershell
cd "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
git status
git pull --ff-only origin main
```

3. **Dry-run only** (no files written):

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CloudCyberUpdates
```

Expected scope: exactly the **eight named Cloud/Cybersecurity lesson files**. Files may report `Changed`, `New` or `Same`. Unexpected files are a blocker; do not continue.

4. Inspect any differing local notes for recent work. Once satisfied that GitHub contains the desired version and your vault is backed up, explicitly apply:

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CloudCyberUpdates -Apply -Overwrite
```

The script backs up replaced Obsidian versions **outside the vault** in `foundation-obsidian-sync-backups`; it does not delete local notes.

5. Repeat the preview:

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope CloudCyberUpdates
```

Expected: `Same: 8 | New: 0 | Changed: 0` if nothing else modified these notes.

6. Inspect the cloud and cybersecurity Mermaid blocks in Obsidian Reading view. Confirm syntax, Markdown tables, links and exercise text.
7. Only after the source is reconciled, resume normal Obsidian → Astro publishing, run `npm run build`, and review Git changes before deployment.

## Architecture quality criteria

- Never represent a conceptual diagram as a deployed production system.
- Do not promise that using cloud automatically removes customer security duties.
- Do not confuse authentication, network reachability and API authorization.
- Make control placement meaningful: public entry, private services, identity, monitoring and backup have distinct purposes.
- Avoid putting real customer records, credentials, IPs or tokens in a free lesson example.
- Clearly label subscription-based GHC Labs as optional advanced practice.

## Post-merge checks

Visit the original first lessons:

- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/07-cloud-computing-fundamentals/01-cloud-computing/
- https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/08-cybersecurity-fundamentals/01-security-mindset/

Verify that Mermaid flows are **rendered diagrams**, not highlighted code. Scroll sideways where needed on mobile rather than allowing diagrams to cut off. Check the separate IaaS, Shared Responsibility, CIA, Defense in Depth, Security Architecture and Security Operations lessons as well.
