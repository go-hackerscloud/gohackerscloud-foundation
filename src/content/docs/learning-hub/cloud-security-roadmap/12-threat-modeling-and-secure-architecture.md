---
title: "12 · Threat Modeling and Secure Architecture"
description: "Threat modeling helps make design reviews systematic. Start with an accurate data flow, identify trust boundaries and ask which controls fail whe"
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Threat modeling helps make design reviews systematic. Start with an accurate data flow, identify trust boundaries and ask which controls fail when assumptions change.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Define assets, trust boundaries, identities, data flows and assumptions before enumerating threats.

### How it works in practice

Use a lightweight model such as STRIDE as a checklist, not as an automatic generator of truth. Prioritize based on credible pathways and business impact.

### Enterprise controls and responsibilities

Defense in depth should combine identity, network controls, application checks, logging and resilience; the layers should cover different failure modes.

### Verification and evidence

Document design decisions with rationale, alternatives, validation tests and residual risks for teams to review later.

## Worked example: an enterprise situation

An API accepts uploaded files, stores metadata and writes objects to storage. Threat modeling highlights untrusted input, service permissions, object access, audit logging, rate limits and retention.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Draw the user–API–object store–database data flow.
2. Label every trust boundary.
3. Select three threats and map each to a control and test.
4. Record one accepted residual risk with justification.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Why is a diagram essential to threat modeling?**

   <details><summary>Suggested reasoning</summary>It makes assumptions about flows, identities and boundaries visible and reviewable.</details>

2. **How do you prioritize threats?**

   <details><summary>Suggested reasoning</summary>Use plausibility, exposure, asset value and potential impact rather than counting threats alone.</details>

## Common mistakes to avoid

- Threat-modeling a system nobody has diagrammed.
- Adding controls without defining what they protect.
- Skipping re-review after architecture changes.

## Portfolio artifact

**Deliverable:** An architecture diagram and a short threat register.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Cloud Incident Response and Recovery](/learning-hub/cloud-security-roadmap/11-cloud-incident-response-and-recovery/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Portfolio Projects and Evidence →](/learning-hub/cloud-security-roadmap/13-portfolio-projects-and-evidence/)
