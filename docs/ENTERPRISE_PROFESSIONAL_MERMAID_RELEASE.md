# Foundation Stage 03 — Enterprise & Professional Content Release

## Purpose and design

This PR improves the learner experience of **Stage 03 — Enterprise & Professional** while preserving all existing original lesson filenames, URLs and the Obsidian-to-GitHub publishing structure.

Every expanded lesson includes a Mermaid diagram, a reasoned explanation of the workflow or architecture, a hypothetical workplace case and either an independent exercise, a mini assessment or a concrete output to save. These examples are **synthetic**, not real client assessments or evidence of professional services delivered.

## Lesson inventory

| Module | Enhanced original lessons | Diagram count |
|---|---|---:|
| 12 Enterprise Security Operations | SOC Fundamentals (3), SIEM (1), Vulnerability Management (1) | 5 |
| 13 Professional Skills | Technical Documentation (3), Report Writing (1), Communication Skills (1) | 5 |
| 14 AI Fundamentals | AI Concepts (3), Generative AI (1), Responsible AI & Governance (1) | 5 |
| 15 Enterprise GRC | Introduction to GRC (3), Risk Management Fundamentals (1), Security Audits & Compliance Assessments (1) | 5 |
| **Total** | **12 existing lessons** | **20** |

## Editorial rules

- Preserve the intended lesson progression, titles, frontmatter descriptions and public routes.
- Explain diagrams in plain language and show when models are conceptual rather than deployed.
- For SOC, do not equate an alert with a confirmed compromise or confuse detection with response authority.
- For professional reporting, distinguish **observed evidence**, **inference**, **impact**, **recommendation** and **test/closure**.
- For AI, distinguish models, training, inference and deterministic automation. AI output must be validated; avoid real sensitive information in unapproved services.
- For GRC, do not imply completing a worksheet grants ISO 27001 certification or guarantees regulatory compliance. Formal audit and legal obligations depend on scope and independent assessment.
- Link to Academy and GHC Labs as **optional advanced practice**, not prerequisites for free Foundation content.
- Ensure existing diagrams and new Mermaid graphs fit mobile screens and work in light/dark modes.

## Release checks

The existing `astro-mermaid` integration was merged in the previous Stage 02 PR. This change **adds no dependencies** and does not touch production runtime, labs, authentication or pricing.

CI validates existing security audits, Astro build, sitemap and old lesson URLs, plus a new verifier for all **20 compiled Mermaid diagrams across 12 exact lesson routes**. Visual browser checks are still required after deployment.

## Critical Obsidian source-of-truth warning

The local `publish-foundation.ps1` removes and rebuilds the published Foundation lesson subtree using the Obsidian originals. The 12 GitHub lesson edits in this PR will be lost on the next forward publish if they are not imported into your vault.

**After the PR is merged and the site is verified, perform the targeted import before running the original publisher.**

### 1. Back up the vault; update local Git checkout

```powershell
cd "C:\Projects\GoHackersCloud\gohackerscloud-foundation"
git status
git pull --ff-only origin main
```

Do not pull over unresolved local modifications or run a hard reset. Pause any automated Obsidian sync/edit jobs during a planned import.

### 2. Preview exactly the 12 changed Stage 03 lessons

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope EnterpriseProUpdates
```

This dry run should report exactly **12** lesson files as Same, Changed or New; it makes no edits and should not mention other modules.

### 3. Apply only after verifying the preview and vault backup

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope EnterpriseProUpdates -Apply -Overwrite
```

The reverse-sync utility backs up overwritten local notes in a timestamped folder **outside your Obsidian vault**, under `foundation-obsidian-sync-backups`. It does not delete existing notes.

### 4. Verify and resume one-way publishing

```powershell
.\scripts\sync-foundation-to-obsidian.ps1 -Scope EnterpriseProUpdates
```

Expected if no concurrent edits: **Same: 12 | New: 0 | Changed: 0**.

Inspect the diagrams in Obsidian Reading view. If the Markdown Mermaid code blocks render correctly, continue editing the original lessons in **Obsidian first**, then publish through the existing workflow.

Do not activate continuous two-way mirroring; only use reverse-sync for an approved bootstrap/reconciliation operation.

## Post-deployment spot checks

- Module 12 first lesson: https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/12-enterprise-security-operations/01-security-operations-center-soc/
- Module 13 first lesson: https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/13-professional-skills/01-technical-documentation/
- Module 14 first lesson: https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/14-ai-fundamentals/01-ai-concepts/
- Module 15 first lesson: https://foundation.gohackerscloud.com/foundation/gohackerscloud-foundation/15-enterprise-grc/01-introduction-to-grc/

Verify the diagrams appear as diagrams (not code), keyboard links work, the right-hand table of contents uses readable H2/H3 headings, and the new practical sections remain usable on mobile.
