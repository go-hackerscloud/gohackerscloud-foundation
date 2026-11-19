# Foundation Seven-Day Challenge — Right Sidebar UX Upgrade

## User report and intended outcome

Screenshot taken from the live page `https://foundation.gohackerscloud.com/7-day-challenge/` shows a wide, unused right-hand area, particularly beside the **Assessments and progress** and **After the challenge** sections. The free challenge already has valid lessons, quizzes and clear progress privacy controls. The improvement should add **real navigational value** rather than filler illustrations or unrelated marketing.

## Design decision

Keep Starlight's existing page title and `template: splash`. Wrap the existing MDX article content in a small Astro layout:

- **Left (primary):** original introduction, Mermaid learning flow, seven-day summary table, interactive day/quiz component, progress/privacy explanations and next steps.
- **Right (desktop):** sticky learner companion, visible inside the reading area and separate from the platform's global Starlight navigation.
- **Responsive:** below 62rem viewport width, use a single column. Place the study companion above the article and make the seven day links horizontally scrollable to avoid a narrow quiz column.
- The right sidebar contains practical links only: day 01–07 anchors, current **self-reviewed day count/progress bar**, free Career & Portfolio Hub, 16-module curriculum and Student/Professional paths.
- All resource links are existing **free** destinations. Hosted GHC Academy Labs remain an optional separate offering; no new checkout, promotions, pricing, tracking or data collection are introduced.

## Behavior and access

- Day links point to `#challenge-day-01` through `#challenge-day-07` on the existing `<details>` panels, and the target panel opens automatically when selected.
- Pasted/bookmarked day links also open on initial load and subsequent hash changes.
- Review checkmarks and progress are mirrored from the existing in-memory quiz state. The new sidebar **does not save progress** or add a second data store.
- The checkbox remains **off by default**. Learners may explicitly enable local-only saving using the existing control; deselecting it or choosing Clear deletes the stored data as before.
- No badges or qualifications are implied by reviewed-day markers.

## GitHub files changed

- `src/components/FoundationChallengeLayout.astro` — new responsive, sticky, accessible learning companion.
- `src/content/docs/7-day-challenge.mdx` — wraps the existing content in the new layout without removing or rewording the original learning sections.
- `src/components/FoundationChallenge.astro` — adds stable day IDs, opens selected day from the URL fragment, and synchronizes the companion's progress UI from existing review state.
- `scripts/verify-challenge-page-layout.mjs` — checks the generated route structure, 7 anchors, 7 shortcuts, 21 questions, one Mermaid diagram, sidebar resource links, responsive styling, and progress controls.
- `.github/workflows/security-audit-nov2026.yml` — adds the new test after the original seven-day challenge test.
- This runbook.

**No modifications to Obsidian-owned `src/content/docs/foundation/` lessons.** No Obsidian reverse sync is required.

## CI verification and manual acceptance

Do not merge until both the existing security/build workflow and full functional test workflow pass.

On a desktop viewport around 1440–1920 pixels wide, verify:

1. A readable two-column layout, with the existing content on the left and the learner companion aligned on the right.
2. The sidebar remains accessible while scrolling through long quizzes, without covering the fixed header or overlapping questions.
3. All seven day links open their matching exercise and scroll to a visible day header.
4. Submitting a complete three-question quiz updates score feedback; selecting **Mark day reviewed** updates both progress bars and review checkmarks.
5. Browser saving is still opt-in; enable, reload, opt in again to restore. Clear and confirm sidebar progress returns to zero.
6. Existing Markdown table, Mermaid diagram, progress explanation and full downstream learning links remain readable and accessible.
7. Test light and dark themes; no missing text or low-contrast links.

On a phone/tablet, verify:

1. The page uses one column rather than squeezing quiz answer options beside a sidebar.
2. Day shortcuts appear as a horizontal, touch-scrollable row before the article; the rest of the resources remain available.
3. No horizontal overflow of the page, no overlapping cards and clear keyboard focus outlines.
4. Tab through anchors and exercise details. All seven lessons remain reachable with keyboard, and the jump links work with pasted fragments.

## Post-deployment

Merge the PR after checks pass; allow Hostinger to deploy from main. Reload the published route with cache bypass. Reconfirm the primary assessment and progress functions from a signed-out browser. Other Foundation lessons and the Academy lab runtime are unaffected.
