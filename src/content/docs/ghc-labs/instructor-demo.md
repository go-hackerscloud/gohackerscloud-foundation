---
title: "GHC Labs — Demo Video and Instructor Walkthrough"
description: "A ready-to-record demonstration script and exact steps to embed an official GHC Labs video on the Foundation overview."
---

## Where the demo will appear

The [GHC Labs overview](/ghc-labs/) already includes an accessible 16:9 demo area. Until an official public demo is published, it displays an honest placeholder rather than a broken player.

### How to attach the real demo

1. Publish the final video as a public or unlisted YouTube video after checking that no email addresses, session tokens, internal hostnames or student details appear.
2. Copy the 11-character video ID from the YouTube watch URL.
3. In the Foundation repository, edit `src/data/ghc-labs-demo.mjs` and set `demoVideoId` to the ID.
4. Optionally update `demoTitle` to describe the recording.
5. Submit the change through a PR. The Foundation overview will embed the video through the privacy-enhanced `youtube-nocookie.com` player.
6. Check mobile sizing, captions, playback permissions, browser privacy settings and the fallback text before deploying.

**Do not paste a full YouTube URL into the video ID field.** The component validates an 11-character ID.

## Suggested 3–5 minute instructor demo script

| Segment | Show on screen | Instructor narration |
|---|---|---|
| 0:00–0:30 | Foundation and Academy landing pages | Explain the difference between free theory and Academy lab practice |
| 0:30–1:00 | Academy tracks directory | Select a track and show which skills it teaches |
| 1:00–1:35 | Lab lesson objectives and rules | Identify learning goal, target and authorized scope |
| 1:35–2:20 | Authorized terminal or desktop | Run a harmless inspection step and explain expected output |
| 2:20–3:10 | Evidence, findings and remediation | Explain how a security professional records a result |
| 3:10–3:40 | End Lab and return to Academy | Demonstrate cleanup and why sessions are temporary |
| 3:40–4:00 | Subscription and access page | Show where students check current access and commercial terms |

Use an authorized demonstration account and synthetic target data. Never show real credentials, service tokens or private enterprise information.

## Two alternative demo formats

**Beginner:** Linux terminal basics and a simple HTTP response observation. Emphasize what every line means and how a student follows guided steps.

**Cloud-focused:** Explain a simulated AWS account structure and a basic IAM or security group review. Highlight evidence, least privilege and what is deliberately offline or mocked.

## Suggested publishing checklist

- [ ] Record in 16:9 landscape format.
- [ ] Include readable captions and narration.
- [ ] Confirm details are current.
- [ ] Remove credential and privacy risks.
- [ ] Verify public access on a signed-out browser.
- [ ] Update the video ID in GitHub and validate.
- [ ] Add a short transcript or chapter markers when available.

[See GHC Labs overview](/ghc-labs/) · [Explore subscriptions](https://gohackerscloud.com/hands-on-cybersecurity-labs)
