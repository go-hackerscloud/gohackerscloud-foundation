# PR #14 — Seven-Day Free Foundation Starter Challenge

## Purpose

Create an approachable, interactive **free** learning experience for newcomers and working professionals that makes existing Foundation lessons easier to start and revisit. Learners can complete seven self-directed exercises, take three original questions per day and (optionally) remember local progress.

This does **not** add registration, payments, Academy access, lab provisioning or a credentialing system.

## Public entry points

- `/7-day-challenge/` — public challenge page with 7-day curriculum, explanatory learning-loop Mermaid diagram and interactive quizzes.
- Foundation homepage — a focused, responsive seven-day challenge card appears **after the Student/Professional audience choice and before the featured module explorer**.
- Start Here — links to the challenge as a first-week option.
- Student and Professional free pathway pages — challenge included as a self-study option.
- First navigation group — `7-Day Free Foundation Challenge` appears directly after Start Here.

## Seven original activities

| Day | Foundation source lesson | Self-study deliverable |
|---|---|---|
| 1 | IT Fundamentals / Computer Hardware | CPU/RAM/storage or VM diagram and evidence note |
| 2 | Networking Fundamentals / Networking Basics | DNS/TLS/HTTPS request path and fault distinctions |
| 3 | Linux Fundamentals / Linux Introduction | Read-only identity and process observations, or labeled synthetic output |
| 4 | Windows Fundamentals / Windows Architecture | Sign-in versus resource authorization decision tree |
| 5 | Cloud Computing Fundamentals / Cloud Computing | Cloud app sketch and IaaS responsibility matrix |
| 6 | Cybersecurity Fundamentals / Security Mindset | CIA-based risk/control worksheet |
| 7 | DevOps & Version Control / Git Fundamentals | Git staging/commit diagram and a five-sentence technical reflection |

All seven existing lesson URLs and secondary reading links were checked against the current published source tree. The question bank is in `src/data/foundation-challenge.mjs` for editorial revision. It contains **21 original, authored, four-option multiple-choice questions** with explanations—not copied vendor certification content.

## Quiz behavior

- All seven days are available immediately, with no calendar locking or countdown timer.
- A day shows its objective, links to free lessons, a safe practical exercise and three independent questions.
- Answer selection is accessible through native radio groups and fieldset/legend semantics.
- Users must select all three answers before receiving a score or an explanation.
- Scoring is formative; correct answers and rationales are shown through a live region.
- Each day can be retried at any time. A learner may mark a day reviewed after making an attempt, regardless of score.
- Progress represents **self-reported review checkmarks**, not verified lesson completions, teacher grading or an accredited credential.

## Optional progress — privacy design

**Default:** no browser persistence. Scores/checkmarks stay in the current page's JavaScript memory until reload.

If the learner explicitly checks **Remember progress in this browser**:
1. The page attempts to load a stored record, if one exists, from `window.localStorage` on the same origin.
2. Only `{version:1, days:{"01":{score:0..3,reviewed:true|false},...}}` is saved under `ghc-foundation-seven-day-challenge-v1`.
3. No names, email addresses, IP addresses, input text, selected answer positions, evidence files or identity identifiers are stored as part of this feature.
4. Storage is best-effort; disabled or private storage environments continue to support the full quiz session in memory.
5. Turning the checkbox **off** removes the saved record (session scores remain until reload). **Clear my progress** asks for confirmation, removes local storage, clears quiz selections and resets all review marks.

No `fetch`, XHR, cookies, beacon, external storage or server/API mutations are introduced by this component. The Foundation site may have separate platform logs; the statement here applies to **quiz scores and checkmarks**, not a promise of anonymity for every HTTP request.

**Browser scope:** Local storage is origin-bound and device/browser-specific, generally not portable, and can disappear when users clear site data. The system is deliberately not an authenticated learning dashboard.

## Accessibility and mobile

- Native `details` panels offer keyboard-accessible expansion; Day 1 is open by default.
- Each question is a native `fieldset` with `legend`, and 4 labeled radio inputs.
- Score explanations are inserted using `textContent`/DOM nodes rather than HTML injection.
- Review state and total progress are updated in live status regions.
- Buttons have clear names, visible focus outlines and appropriate disabled state before attempting a quiz.
- Layouts collapse to single-column answers on narrow screens; all seven days remain available.
- Starlight frontmatter supplies the only page H1, avoiding the duplicate-heading issue previously fixed.

## CI and manual acceptance

`node scripts/verify-seven-day-challenge.mjs` validates the 7-day data schema, 21 distinct questions and rationales, 84 radio options, 7 forms, 7 review buttons, 7 original lesson URLs, 7 optional learning URLs, privacy-related controls, no tracking mechanisms in the challenge component, real navigation and the single-H1 rule. The default Foundation CI continues to run npm security audits, full Astro build, existing lessons, Mermaid, catalog and homepage checks.

**Post-deploy manual browser checks (required before broad promotion):**
1. Signed out, open `https://foundation.gohackerscloud.com/7-day-challenge/` in desktop and mobile widths.
2. Confirm Day 1 shows the correct lesson links, quiz and explanatory diagram; expand Day 7 and confirm its content.
3. Submit an incomplete quiz → should ask for all three answers; no score.
4. Answer all three → receive a 0–3 result and explanatory feedback. Retry after changing answers → result updates without duplicate feedback.
5. Press Mark day reviewed → progress increases by one. Reload with browser saving **off** → score/checkmark returns to zero.
6. Check browser saving, answer and mark another day, reload, check browser saving again → stored progress is restored.
7. Switch browser saving off → saved record removed but current session result stays until refresh.
8. Use Clear my progress → confirm and verify all selections/scores/checkmarks reset.
9. Run in a private browser with local storage disabled if possible → user can still attempt quizzes.
10. Check keyboard access, focus, error messages and light/dark styling.

## Source-of-truth and deployment safety

All changes are GitHub-owned pages, components, data files and CI. No content under `src/content/docs/foundation/` is modified. **Obsidian reverse-sync is not necessary for this PR.** Continue editing original lessons in Obsidian first; the challenge's curated question content is reviewed through GitHub.

No paid subscriptions are required. The advanced Academy/GHC Labs entry remains an optional separate learning path and is not automatically unlocked by scoring.

## Possible next milestone

A later PR may introduce **downloadable personal worksheets**, a user-controlled export/import of local progress or verified instructor-led assessments. An account-backed dashboard would require a separate privacy/security design, data retention and consent decisions. Do not add unapproved tracking or claim certified completions in this version.
