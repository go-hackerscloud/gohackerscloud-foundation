---
title: "08 · Cloud and IAM Interview Fundamentals"
description: "Explain infrastructure, service models, identity controls and cloud responsibility boundaries."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Explain infrastructure, service models, identity controls and cloud responsibility boundaries.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

Cloud providers operate infrastructure; customers still own the appropriate data, identity and application configuration controls.

### Practical distinctions

IaaS, PaaS and SaaS change which tasks the customer manages.

### How teams use it

Temporary roles, MFA, role-scoped permissions and federation help reduce credential risk.

### How to show evidence

Cloud networking and account boundaries need to be explained alongside application-level authorization.

## Real interview scenario

A developer cannot upload to a storage bucket. The investigation checks the principal, requested action, resource policy, permission boundaries and audit evidence.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. Draw a cloud account and workload structure.
2. Write a plain-English least-privilege requirement.
3. Explain how roles differ from long-lived credentials.
4. Choose one expected-allow and one expected-deny test.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **Is the cloud provider responsible for customer IAM policies?**

   <details><summary>Show a model answer</summary>Generally no. Shared responsibility depends on service but customer identity decisions remain central.</details>

2. **Is identity enough to secure a database?**

   <details><summary>Show a model answer</summary>No. Data access, network exposure, logging, patching and recovery also matter.</details>


## Deliverable

A cloud permissions and troubleshooting matrix.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Python Scripting and Automation](/learning-hub/it-interview/07-python-scripting-and-automation/)
[All chapters](/learning-hub/it-interview/)
[Git DevOps and Container Delivery →](/learning-hub/it-interview/09-git-devops-and-container-delivery/)