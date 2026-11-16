---
title: "06 · AWS IAM and Account Protection"
description: "Identity and Access Management authorizes requests to AWS resources. Understand identities, roles, temporary credentials, MFA and the place of fe"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Identity and Access Management authorizes requests to AWS resources. Understand identities, roles, temporary credentials, MFA and the place of federation.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

IAM policies express allowed and denied actions, resources and conditions. Effective permissions can be constrained by several policy layers.

### What changes between services

Users and groups represent identity organization; roles are assumed by trusted principals and commonly provide temporary credentials to workloads or people.

### Real-world decision

MFA improves protection for sensitive sign-in. Root credentials should be protected and not used for routine administration.

### How to evaluate it

AWS Organizations, organizational units and service control policies help govern multiple accounts, but an SCP does not grant permissions on its own.

## Worked scenario

A service requires read-only access to one storage bucket. The engineer creates a dedicated role and scopes permissions rather than embedding an administrative access key in code.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Compare a human federated sign-in and a workload role.
2. Draft a plain-English least-privilege S3 requirement.
3. Explain how MFA and temporary credentials complement each other.
4. Describe why access keys must never appear in screenshots or public repositories.

## Mini knowledge check

1. **Can an SCP give a role access by itself?**

   <details><summary>Reveal explanation</summary>No. It defines an authorization ceiling for member accounts; appropriate permissions are still required.</details>

2. **Why should production workloads avoid root credentials?**

   <details><summary>Reveal explanation</summary>Root has broad access and lacks the constraints and accountability of workload roles.</details>

## Study deliverable

An AWS identity map with controls and responsibilities. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Shared Responsibility and Well Architected](/learning-hub/aws-clf-c02/05-shared-responsibility-and-well-architected/) · [Guide contents](/learning-hub/aws-clf-c02/) · [AWS Security and Compliance Services →](/learning-hub/aws-clf-c02/07-aws-security-and-compliance-services/)
