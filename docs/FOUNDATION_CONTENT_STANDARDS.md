# GoHackersCloud Foundation — Curriculum Editorial Standard

**Scope:** Free Foundation documentation published from Obsidian into Astro/Starlight.

## Source-of-truth rule

Edit lesson text in the Obsidian vault first, under `02-CareerTracks/foundation`, and republish using `publish-foundation.ps1`. Do **not** make lasting editorial changes only under `src/content/docs/foundation/`; the next publishing run replaces that directory.

Site-level navigation components and these standards can be edited in GitHub. Preserve existing public lesson slugs or supply and test explicit redirects.

## What Foundation promises

Foundation provides free, self-paced reading, examples, suggested independent exercises and review material. Academy memberships and browser-hosted Labs are separate. Do not imply that Foundation registration grants paid labs, automatically grades quizzes, tracks lesson completion or awards a professional certification.

In examples, describe labs as **self-directed exercises** unless a hosted environment is actually linked and made available to this audience. Do not instruct every learner to complete nonexistent linked labs or runbooks.

## A standard lesson (recommended)

```md
---
title: "Lesson 01 — Topic"
description: "Plain-language summary of the skills learned."
---

## Before you begin

**Level:** Beginner | **Estimated study time:** 15–25 minutes
**Prerequisites:** A short list or "None".

## What you will learn

- Explain ... with your own words.
- Identify ... in a real working environment.
- Demonstrate ... using a safe, optional exercise.

## Why this matters at work

One short scenario, role-relevant without implying the learner is already a senior engineer.

## The concept

Short explanation with a diagram or table where this clarifies the idea.

### Worked example

A realistic, clearly labeled hypothetical example.

## Try it yourself (optional)

Safe, copyable commands or a paper exercise; say what tools/permissions are needed.
Provide expected observations and what to do if the output differs.
Do not require a paid lab or live external service to pass a free lesson.

## Check your understanding

1. Question one
2. Question two
3. Explain one real-world use case.

<details>
<summary>Show suggested answers</summary>

Answers and reasoning.
</details>

## Key takeaways

Three to five concise, specific points.

## Continue learning

- [Next lesson](relative-or-canonical-link)
- [Return to the Foundation curriculum](/curriculum/)
```

Use one page title from frontmatter; in the body, use **H2 (`##`) for main sections** and **H3 (`###`) for subtopics**. Avoid repeated H1 (`#`) headings. Starlight normally uses H2/H3 for the right-hand table of contents.

## Module quality checklist

- A published module overview clearly lists prerequisites, lesson directory, outcomes, estimated time, exercises and its assessment.
- Lesson titles reflect what is actually taught, and `description` frontmatter is specific.
- Every lesson uses heading hierarchy, relevant visuals and a few contextual links.
- All terminal commands are fenced and language-labeled, and can be copied independently.
- All code/examples are safe on learner-owned or explicitly authorized systems.
- Every practice exercise provides expected output or evaluation guidance.
- Quizzes do not expose answers beside questions; answer keys are separated and explain why.
- Assessments distinguish self-checks from externally graded exams.
- No unverifiable statements about certification, employment, guaranteed skills or access.
- Broken internal links, inaccessible images and obsolete technology claims are reviewed before publish.
- An example enterprise company is **hypothetical**, not a claim that a company granted access.

## Findings from the November 2026 source review

This inventory contains 205 Foundation module documents plus 7 other docs pages (4 front-door docs, one certification guide, one roadmap and one interview guide).

High priority:

1. **Module 00:** "Welcome to the Academy", "How to Use the Academy", the 90-day plan and orientation assessment still assume Academy membership, labs, runbooks and project completion. Rewrite the **Obsidian originals**, keeping the canonical URLs until a redirect plan is verified. The site-wide Start Here guide is already Foundation-specific.
2. **Heading hierarchy:** Sampled lessons in all sixteen modules commonly use many `#` headings after a title field, which hurts document semantics and the table of contents. Normalize H2/H3 in the source.
3. **Contextual navigation:** Sampled first lessons across all sixteen modules contain zero Markdown links. Add accessible "previous", "next", "return to module", "related concept" links. The new curriculum directory complements rather than replaces these.
4. **Assessment quality:** The Module 07 cloud assessment chiefly describes objectives and criteria, whereas several other modules provide many questions with immediate answers. Establish one assessment template and provide an answer key separately.
5. **Audience positioning:** Many modules use the same hypothetical CloudNova/Cloud Security Engineer scenario. Vary examples to match the role and level of the topic, and call the company fictional where needed.

Medium priority:

6. **Module 05:** The practical-projects guide is useful, but the module has no distinct end-of-module assessment comparable to many others. Add a short project checklist and rubric.
7. **Module 13:** Professional Skills finishes without a dedicated recap/assessment. Consider a portfolio-ready one-page writing/presentation exercise.
8. **Module 15:** Five self-directed GRC labs and three runbooks are included, unlike most Foundation modules. Label access requirements and deliverables carefully to distinguish document exercises from hosted labs.
9. **Supporting resources:** One roadmap, one certification guide and one interview preparation resource are present. Expand only when editorially complete; do not create empty directories solely for visual breadth.

## Recommended sequence

- **Editorial Phase A:** Rewrite and source-correct the 13-page orientation module and remove Academy-only requirements from Foundation self-study plans.
- **Editorial Phase B:** Apply a normalized lesson structure to Modules 01–06 and improve safe independent exercises.
- **Editorial Phase C:** Apply the structure to Modules 07–11, emphasizing correct security terminology and concrete examples.
- **Editorial Phase D:** Apply the structure to Modules 12–15, improve GRC labs/runbooks and add a Professional Skills capstone.
- **Quality Phase E:** Review the 205 pages with human editorial review, validated links and automated structural linting. Re-publish from Obsidian and verify canonical URLs.

## Publishing QA

After copying source content, run `npm ci`, `npm run build` and the GitHub Foundation checks. Review the homepage, curriculum, syllabus links and representative mobile lesson pages before production deployment.
