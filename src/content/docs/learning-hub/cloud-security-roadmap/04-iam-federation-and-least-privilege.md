---
title: "04 · IAM, Federation and Least Privilege"
description: "Identity is a core cloud security control. Work from human identities and service roles through federation, temporary credentials and measurable "
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Identity is a core cloud security control. Work from human identities and service roles through federation, temporary credentials and measurable least privilege.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Authentication verifies a principal; authorization decides what the principal can do. A role, group or policy is a control expression, not a guarantee of safe behavior.

### How it works in practice

Prefer organization-managed identity federation, MFA, just-in-time access and short-lived credentials over static shared passwords or long-term access keys.

### Enterprise controls and responsibilities

Study privilege boundaries, resource policies, deny rules, condition keys and service-linked roles. Effective permissions may result from multiple policy layers.

### Verification and evidence

Access reviews need ownership, change justification and evidence. Unused broad permissions should be removed after observing application requirements and testing.

## Worked example: an enterprise situation

A data science pipeline is granted broad object-storage permissions for convenience. Security inventories actual API use, scopes the role to one bucket and prefix, tests upload and read behavior, and confirms alerting for denied actions.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Describe the actors and required actions in a two-column matrix.
2. Draft a plain-English minimal policy before writing vendor syntax.
3. Identify one condition for stronger assurance, such as MFA for sensitive actions.
4. Document a rollback plan before changing an existing role.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Why are temporary credentials preferable for many workloads?**

   <details><summary>Suggested reasoning</summary>They have constrained validity and can be rotated or revoked through the identity flow.</details>

2. **What does a least-privilege review need beyond a policy file?**

   <details><summary>Suggested reasoning</summary>Observed activity, resource scope, workload owner approval and tests demonstrating required tasks still work.</details>

## Common mistakes to avoid

- Granting wildcard permissions because 'the app might need them'.
- Treating a role name as evidence of its actual permissions.
- Storing keys in repositories, images or shared documents.

## Portfolio artifact

**Deliverable:** An access matrix with permissions, conditions, role owner, justification and test results.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Cloud Platforms and Shared Responsibility](/learning-hub/cloud-security-roadmap/03-cloud-platforms-and-shared-responsibility/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Cloud Network Segmentation →](/learning-hub/cloud-security-roadmap/05-cloud-network-segmentation/)
