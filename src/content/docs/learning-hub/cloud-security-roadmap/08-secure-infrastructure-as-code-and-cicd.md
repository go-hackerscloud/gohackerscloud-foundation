---
title: "08 · Secure Infrastructure as Code and CI/CD"
description: "Repeatable infrastructure makes controls auditable, but automation multiplies mistakes quickly. Add policy, secrets controls and security review "
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Repeatable infrastructure makes controls auditable, but automation multiplies mistakes quickly. Add policy, secrets controls and security review to delivery pipelines.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Infrastructure as code declares intended resources; plans and pull requests provide review evidence before changes are applied.

### How it works in practice

Secure deployment pipelines use scoped identities, reviewed dependency sources, secret management, environment approvals and protected branches.

### Enterprise controls and responsibilities

Static IaC checks, secret detection, software composition analysis and container scanning each catch different classes of risk.

### Verification and evidence

Policy-as-code and drift detection should improve feedback without blocking legitimate changes through unexplained false positives.

## Worked example: an enterprise situation

A Terraform change proposes a public database endpoint. CI identifies the exposure, explains which control was violated and routes the plan for human review before deployment.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Write a minimal plan for a private web app architecture.
2. List three CI checks and describe what each protects against.
3. Define a pull-request approval requirement for production IAM changes.
4. Describe safe rollback and drift monitoring.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **What does shift-left security mean in practice?**

   <details><summary>Suggested reasoning</summary>Provide earlier feedback and safer defaults before insecure changes reach production.</details>

2. **Is passing a scan enough to certify security?**

   <details><summary>Suggested reasoning</summary>No. Contextual risk, runtime exposure and design review still matter.</details>

## Common mistakes to avoid

- Committing secrets into source control.
- Giving CI runners full administrator rights.
- Treating a 'green' pipeline as proof the application is secure.

## Portfolio artifact

**Deliverable:** A sample secure change checklist and CI control map.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Cloud Audit Trails and Detection Engineering](/learning-hub/cloud-security-roadmap/07-cloud-audit-trails-and-detection-engineering/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Containers and Kubernetes Security →](/learning-hub/cloud-security-roadmap/09-containers-and-kubernetes-security/)
