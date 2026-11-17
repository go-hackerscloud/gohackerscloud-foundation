# GoHackersCloud Promotional Catalog — Source and Publishing Notes

**Snapshot:** 2026-11-17 · **Editorial status:** reviewable draft, not a live SKU/price/availability feed.

## New Foundation pages

- `/about-gohackerscloud/catalog/` — unified marketing catalog of courses, bundles, test engine, Academy tracks, lab docs, enterprise services and video links
- `/about-gohackerscloud/lab-directory/` — names and context for 90 dedicated GHC Labs curriculum documents, with extended category totals for 398 other lab-related documents

The new pages are linked in `astro.config.mjs` under **Explore GoHackersCloud**, are promoted from the homepage, and cross-linked in existing About, Courses, Services and Labs pages.

**No `src/content/docs/foundation/` changes:** these pages are owned by GitHub and fall outside the folders replaced by `publish-foundation.ps1`; reverse-sync is not required for this PR.

## Source-of-truth mapping and verification

| Source | Used for | Editorial limits |
|---|---|---|
| https://www.gohackerscloud.org/ | Public categories: self-paced courses, exam-style questions, mentorship, labs, certification pathways | Dynamic `/courses` content was not machine-readable through available search; cannot guarantee every active SKU |
| https://gohackerscloud.com/ghc-offers | Canonical live bundles/offers destination | Dynamic page was not readable through search; confirm published cards, prices and checkout URLs in browser |
| Previously prepared `GHC_AWS_Bundle_Landing_Page.html` marketing file | 9 explicitly named AWS bundle course areas and original Classplus course ID 905776 | Historic document, not proof of live availability, price or lifetime-access terms |
| Previously prepared `GHC_YouTube_Five_Bundle_Video_Upload_Copy.md` | Five promotional bundle page paths and written bundle descriptions | Marketing drafts; links and inclusions must be rechecked against current public pages |
| Previous user-supplied YouTube Studio video IDs | `Hibo0zLnKDM` (Cloud Security bundle), `iT3ml297v4w` (ISC2 bundle) | Public playback could not be verified by browsing; do not show embedded players until tested |
| `gohackerscloud-academy/src/data/tracks.mjs` | Exactly 13 Academy track names, categories and link IDs | Track visibility does not guarantee every lesson has a provisioned hosted lab |
| Academy source tree `src/content/docs/academy` | 90 documented titles under `03 GoHackersCloud Labs`; 398 other lab-related Markdown entries | Counts refer to documentation, including orientation and projects. NOT distinct live lab environments |
| `gohackerscloud-cybersecurity-services/docs/service-mapping.md` | Eight enterprise service module names and example work products | These are catalog modules, not confirmed available regulated/accredited client engagements |

### Exact previously promoted bundle destinations

- AWS Complete Learning Bundle: https://gohackerscloud.com/aws-training-aws-certification-preparation
- CompTIA Certification Preparation Bundle: https://gohackerscloud.com/ghc-comptia-certification-preparation-bundle
- Cloud Security Learning Bundle: https://gohackerscloud.com/cloud-security-courses-bundle-aws-google-ccsp
- Master AI Learning Bundle: https://gohackerscloud.com/ai-course-bundle-prompt-engineering-course-ai-for-cybersecurity
- Google Cloud Learning Bundle: https://gohackerscloud.com/google-cloud-course-bundle

**The pages above are from prior GoHackersCloud marketing materials, not automatically confirmed working endpoints on 2026-11-17.** An editor should inspect each in a signed-out browser and replace any moved URL in one PR.

### Video link status

| Topic | YouTube watch URL | Verification |
|---|---|---|
| Cloud Security Learning Bundle (AWS, Google Cloud, CCSP) | https://www.youtube.com/watch?v=Hibo0zLnKDM | ID previously supplied; public playback unverified |
| ISC2 Preparation Bundle (CISSP, CCSP, SSCP) | https://www.youtube.com/watch?v=iT3ml297v4w | ID previously supplied; public playback unverified |
| AWS Complete Learning Bundle | Not supplied | Placeholder text only |
| CompTIA Certification Preparation | Not supplied | Placeholder text only |
| Master AI Learning Bundle | Not supplied | Placeholder text only |
| Google Cloud Learning Bundle | Not supplied | Placeholder text only |
| GHC Labs demo | Official public video not yet linked | Existing `ghc-labs-demo.mjs` remains unmodified |

Do not invent video IDs, embed unverified media or refer to planned upload-copy as a published live video. Update links after verification.

## Bundle and services scope

- Prices are deliberately omitted, including historic AWS bundle purchase copy and previously displayed GHC Labs subscription amounts; the storefront controls current terms.
- Certifications and exams are operated by the respective vendors/bodies. Courses, guides and practice tests do not automatically grant a vendor credential or exam voucher.
- An Academy track and a published lab lesson are not the same as a provisioned, launchable, available lab session.
- Separate customer cybersecurity services require explicit business scope, legal authorization and any legally/contractually applicable professional qualifications.
- Do not advertise the eight module names as SOC 2, ISO, PCI or other formal certification/attestation status.

## QA and release

GitHub Actions runs the existing security audit, Astro build and prior navigation/Mermaid checks, plus `node scripts/verify-unified-catalog.mjs`. This script confirms the two catalog routes, six rendered diagrams, 9 AWS course topics, five previously marketed landing paths, 13 track links, the 90-title dedicated lab inventory, eight service module labels, two prior video links, and no hard-coded prices.

After merge and deployment:
1. Check both new routes on desktop/mobile in light/dark mode.
2. Confirm that all six diagrams render as diagrams, not code blocks.
3. Click every previously published bundle destination in a signed-out browser.
4. Verify the two YouTube videos actually play publicly and match the displayed titles; remove or relabel any incorrect link.
5. Verify current product lists and checkout terms in Classplus and on the offers page.
6. Verify Academy track access in a normal student account; do not promise live availability based on the static inventory.
7. Verify business services copy with the service owner and legal/compliance stakeholders before using it in an enterprise proposal.

## Future improvement: authoritative import

For a complete **live Classplus SKU-by-SKU catalog**, export an approved current course/bundle list from the Classplus dashboard, including course title, product ID, canonical public URL, current state, included topics and media links. Reconcile it with the marketing page and build a versioned catalog data file. Until then, this published catalog is an accurately qualified *curated product-family inventory*, not an exhaustive live storefront.
