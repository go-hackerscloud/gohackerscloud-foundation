---
title: "03 · Cloud Platforms and Shared Responsibility"
description: "Learn the building blocks common to AWS, Azure and Google Cloud, then map them to service-specific names. Cloud security is about boundaries, not"
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Learn the building blocks common to AWS, Azure and Google Cloud, then map them to service-specific names. Cloud security is about boundaries, not memorizing product catalogs.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Distinguish IaaS virtual machines, PaaS managed runtimes and SaaS applications; responsibility for patching, network access and application behavior differs for each.

### How it works in practice

Understand accounts/subscriptions/projects as administrative boundaries; regions and zones as availability or data-placement boundaries; organizations/folders as governance structures.

### Enterprise controls and responsibilities

Use landing-zone concepts: centralized identity, logging, approved networking, policy enforcement, cost attribution and consistent account lifecycle.

### Verification and evidence

Read shared-responsibility models carefully. Cloud vendors secure the underlying cloud service; customers still control identities, data choices, configurations and many application concerns.

## Worked example: an enterprise situation

A company wants to separate development and production systems. Rather than putting everything in one cloud account with naming conventions, the team considers separate accounts, centralized audit logs and controlled deployment permissions.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Draw an account hierarchy for development, testing and production.
2. Mark which controls are provider-managed and customer-managed for a virtual machine and a managed database.
3. Choose two guardrails applicable to all environments.
4. Write a rationale for separating high-risk workloads.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Does using a managed database remove customer security duties?**

   <details><summary>Suggested reasoning</summary>No. Customers still manage access, classification, configuration and other responsibilities defined by the service.</details>

2. **Why use separate cloud accounts?**

   <details><summary>Suggested reasoning</summary>They support isolation, clearer ownership, billing and blast-radius reduction.</details>

## Common mistakes to avoid

- Assuming the cloud provider backs up every application dataset automatically.
- Using public access as a substitute for sound identity design.
- Mixing central logging with unrestricted operator access.

## Portfolio artifact

**Deliverable:** A reference landing-zone diagram and responsibility matrix.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Networking, Linux and Scripting Foundations](/learning-hub/cloud-security-roadmap/02-networking-linux-and-scripting-foundations/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: IAM, Federation and Least Privilege →](/learning-hub/cloud-security-roadmap/04-iam-federation-and-least-privilege/)
