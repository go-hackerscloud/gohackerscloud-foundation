# Foundation dependency remediation — November 2026

## Release decision

**SECURITY REVIEW / PARTIAL REMEDIATION. NOT CLEARED FOR MERGE WHILE HIGH-SEVERITY FINDINGS REMAIN.**

Separate this work from the free seven-day Foundation Challenge (PR #14). The security change is based on `main`, with **no changes to learner features, authentication, lab runtime, enterprise services or pricing**.

## Evidence from actual Foundation dependency lockfile

Before this change, `package-lock.json` installed:

| Package | Version | Dependency path / reason |
|---|---|---|
| `katex` | `0.16.47` | Transitive dependency of `mermaid@11.17.2` |
| `mermaid` | `11.17.2` | Pinned direct Foundation dependency and Astro Mermaid integration |
| `picomatch` | `4.0.7` (and `2.3.2` under `anymatch`) | Transitive glob matcher via Astro, Vite, Tinyglobby and other build-time packages |

The first November 17 CI audit in PR #14 reported **15 vulnerabilities (13 high, 2 low)**, principally:

1. **KaTeX prototype-pollution/trust advisory:** `GHSA-238p-pmpm-9mq7`. KaTeX `0.18.2` is a patched release.
2. **Picomatch ReDoS advisory:** `GHSA-fc5q-39xc-vjpf` / `CVE-2026-112366`. Public advisory affects Picomatch through `4.0.7`. At verification time, upstream's latest official release was `4.0.7`; no patched version was published in the consulted advisory.

Authoritative references:

- https://github.com/KaTeX/KaTeX/security/advisories/GHSA-238p-pmpm-9mq7
- https://github.com/micromatch/picomatch/releases/latest
- https://github.com/advisories/GHSA-fc5q-39xc-vjpf

## What this security branch changes

- Add **exact transitive npm override `"katex": "0.18.2"`** to `package.json` for Mermaid math rendering.
- Regenerate `package-lock.json` against the npm registry on an isolated GitHub Actions job. Inspection showed **one transitive version change only**: `node_modules/katex` `0.16.47` → `0.18.2`. The lockfile includes a SHA-512 integrity hash for the patched tarball.
- Keep existing `mermaid@11.17.2`, `astro`, `@astrojs/starlight`, `astro-mermaid` and all other resolved versions unchanged.
- Add `scripts/verify-dependency-overrides.mjs` to assert the pinned patch, exact lockfile mapping and normal math HTML/MathML rendering.
- Keep the **existing `npm audit --audit-level=high` and `npm audit --omit=dev --audit-level=high` steps fully enabled**.

**Compatibility caveat:** `mermaid@11.17.2` declares `katex: ^0.16.47`. The override deliberately selects a newer `0.18.2` minor line to address a known security issue. All current built Foundation diagrams and static routes should be revalidated; a separate manual browser check should include equations / math-specific Mermaid labels if used. Remove this override only after Mermaid's maintained dependency range is updated and verified.

## What is NOT resolved

**Picomatch ReDoS.** The affected matching engine is pulled in by the current Astro/Vite build toolchain and possibly other transitive packages. No public, released fixed version was established as of November 17, 2026.

This project is currently a **statically built Starlight site**. Picomatch is generally involved in compiling/globbing repository paths during the site build; a public visitor's quiz answers do not become Picomatch glob patterns. This limits the **apparent** direct attack surface for this specific static Foundation deployment, but **does not prove the dependency safe**, clear the advisory or justify bypassing security audit.

Operational precautions until upstream patch:
- Only maintainers should control build-time glob patterns, CI input, config files and Astro content paths. Do not allow anonymous users or untrusted external payloads to supply glob expressions to build tooling.
- Continue reviewing repository contributions and third-party packages before CI builds.
- Do not add custom server code that passes user-provided expressions to Picomatch or similar glob engines.
- Monitor the official Picomatch release and advisory for a fixed version; update the lockfile and repeat all tests when available.
- Reject unverified forks, unreviewed vendor patches or forced major Astro/Mermaid downgrade/upgrade as a quick substitute for a security fix.

**Do not** use `npm audit fix --force` blindly. The CI output suggested potentially **breaking dependency changes** (including Mermaid and Astro version jumps), which could disrupt scores of Foundation Mermaid diagrams and Starlight routes.

## CI matrix and acceptance criteria

| Check | Required result |
|---|---|
| Lockfile generated from current `package.json` | `npm ci` succeeds without lockfile edits |
| Patched KaTeX `0.18.2` only | Pass `verify-dependency-overrides.mjs` |
| Astro production build | Pass |
| Existing source and generated routes | All `scripts/verify-*.mjs` pass |
| Mermaid diagrams | Existing compiled routes and browser rendering pass |
| Dependency security audits | **Must pass before approving merge**; do not suppress warnings |
| PR #14 free challenge | Re-run its full functional checks after dependencies resolve |
| Production | Keep unchanged until review and authorized merge/deployment |

The one-time lockfile regeneration workflow was used **only on the isolated security branch** to regenerate and inspect the lockfile on a trusted GitHub Actions runner. It is not needed as a permanent runtime feature and is removed before this PR is proposed for merge.

## Recommended merge sequence

1. Keep **PR #14 open and unmerged**.
2. Review the security PR for KaTeX patch and lockfile correctness. The remaining Picomatch advisory is a **blocking unresolved finding** under current release policy.
3. When upstream publishes a fixed Picomatch release, open a follow-on, narrowly scoped security update. Validate compatible dependency resolution and then make sure the full security workflow is green.
4. Merge the approved security dependency changes into `main` after passing the required security gate. Re-run PR #14 CI against updated main and perform browser acceptance tests (quiz scoring, explanations, save/restore, reset and mobile).
5. Merge and deploy PR #14 only after all required gates pass.

Never claim there are zero vulnerabilities while npm audit reports otherwise. Document any future formal exception as a separate risk-acceptance decision rather than silently removing or ignoring audit enforcement.
