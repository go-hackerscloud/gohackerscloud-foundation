# GoHackersCloud GHC Labs — Five-Video Publishing Guide

**Status:** Five video placements configured; real recordings are not yet published in the Foundation repository.

## Where each video appears

Public student-facing gallery: `/ghc-labs/instructor-demo/`

| Slot | Section link | Planned video |
|---|---|---|
| 1 | `/ghc-labs/instructor-demo/#video-1` | Getting started with GHC Labs |
| 2 | `/ghc-labs/instructor-demo/#video-2` | Ethical hacking and OSCP-style lab workflow |
| 3 | `/ghc-labs/instructor-demo/#video-3` | Web, API and bug bounty testing methodology |
| 4 | `/ghc-labs/instructor-demo/#video-4` | AWS and cloud security lab tour |
| 5 | `/ghc-labs/instructor-demo/#video-5` | SOC triage and DevSecOps engineering practice |

These are **valid internal section links**, not fictitious YouTube video URLs.

## Publishing a recording

1. Publish the approved recording as a public or permitted unlisted YouTube video.
2. Open `src/data/ghc-labs-demo.mjs`.
3. Locate its slot by `id: 'video-1'` through `id: 'video-5'`.
4. Paste the **11-character video ID only** into `videoId`, not a watch URL or iframe snippet. Example: `https://www.youtube.com/watch?v=ABCDEFGHIJK` → `videoId:'ABCDEFGHIJK'` (example is not a real GHC video).
5. Commit and open a small PR. GitHub CI validates the video collection. After deployment, the gallery uses `youtube-nocookie.com` embeds and displays an external YouTube watch link for the published slot.
6. Slot 1 also powers the hero video area on `/ghc-labs/`. Slots 2–5 work independently and do not require slot 1 to be published first.

## Pre-publication checks

- Never display passwords, tokens, real customer data or private infrastructure.
- Use synthetic or owned and explicitly authorized practice targets.
- Confirm narration and captions are legible, and timestamps are current.
- Validate access in a signed-out browser; unlisted does not mean private.
- Test mobile aspect ratio, playback restrictions and the fallback placeholder.
- Ensure video claims match the specific hosted lab or track's current availability.

## Career and certification system

`src/data/ghc-career-pathways.mjs` is the single source of truth for nine career role mappings, Foundation study guides, independent certification suggestions and original interview questions. New official credentials should be researched and reviewed before being added, with the issuer's verified source link. Updating this data will update all corresponding route components.

The existing Cloud Security Engineer 14-chapter roadmap, AWS Cloud Practitioner 14-chapter guide, and 14-chapter IT Interview Handbook remain unchanged apart from added cross-links.
