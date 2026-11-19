# GoHackersCloud Foundation — API Object Authorization Test Plan

> Free educational template. Use synthetic or explicitly authorized information only. No login, paid lab, certification, actual customer engagement or instructor verification is implied.

**Learner / alias:** ____________________  
**Date:** ____________________  
**Exercise status:** Not started / In progress / Self-reviewed  
**Information classification:** Fictional / Public / Approved training

## Authorized fixture

Synthetic API or owned demo target:
Function under review:
Actors: Student A, Student B and Admin (fictional)
Asset: sample training record
Explicitly permitted endpoints:
Excluded real websites and production data:

## Access matrix

| Actor | Read own record | Read another student's record | Admin-only action |
|---|---|---|---|
| Student A | Allow | Deny | Deny |
| Student B | Allow | Deny | Deny |
| Admin | Scoped policy decision | Scoped policy decision | Allow per role |

## Test cases

| Case ID | Precondition | Test input (synthetic) | Expected HTTP/status | Expected body/data | Result |
|---|---|---|---|---|---|
| AUTH-01 | Valid A session | A requests A record | 200 | A's own record only | Not executed |
| AUTH-02 | Valid A session | A requests B record | 403/404 per design | No B data | Not executed |
| AUTH-03 | Anonymous | Protected record | 401/403 per design | No protected data | Not executed |

## Observation and remediation

Observed outcome (do not invent executed results):
Evidence and response redactions:
Potential object-level authorization issue:
Proposed server-side ownership check:
Negative retest after change:
Remaining risks:

## Scope declaration

Only run tests in a local synthetic fixture or with written owner authorization. Never probe a third-party API based solely on public reachability.

---

**Publishing note:** Evidence should be reproducible, source-backed and scrubbed of secrets or personal data. A self-completed template is a learning artifact, not an accredited achievement or verified assessment.
