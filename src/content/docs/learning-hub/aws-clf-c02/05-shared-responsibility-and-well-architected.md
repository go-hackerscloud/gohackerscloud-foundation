---
title: "05 · Shared Responsibility and Well Architected"
description: "Cloud security is shared between AWS and the customer; the boundary depends on which services are chosen. AWS Well-Architected offers a framework"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Cloud security is shared between AWS and the customer; the boundary depends on which services are chosen. AWS Well-Architected offers a framework for reviewing workload quality.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Under AWS shared responsibility, AWS secures infrastructure of the cloud while customers secure appropriate identities, information and configurations in the cloud.

### What changes between services

For EC2 the customer manages guest OS configuration and patching; for many fully managed services AWS assumes more infrastructure operations, but customers still manage access and content.

### Real-world decision

The Well-Architected Framework has six pillars: operational excellence, security, reliability, performance efficiency, cost optimization and sustainability.

### How to evaluate it

An architecture review should document tradeoffs, risks and follow-up; no single checklist makes an application 'well architected' indefinitely.

## Worked scenario

A team assumes that encrypting an S3 bucket covers every security requirement. The review adds identity policy, public access controls, lifecycle, audit access and incident ownership.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Build a responsibility matrix for EC2, S3 and a managed database.
2. List all six Well-Architected pillars and one example question for each.
3. Explain an example where improving reliability could increase cost.
4. Write one unresolved risk the team should track.

## Mini knowledge check

1. **Who configures application IAM policies?**

   <details><summary>Reveal explanation</summary>The customer or workload operator, not automatically AWS.</details>

2. **Is encryption at rest the same as a public access block?**

   <details><summary>Reveal explanation</summary>No, they address different risks.</details>

## Study deliverable

A one-page responsibility matrix and architecture review checklist. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Service Models and Migration Strategies](/learning-hub/aws-clf-c02/04-service-models-and-migration-strategies/) · [Guide contents](/learning-hub/aws-clf-c02/) · [AWS IAM and Account Protection →](/learning-hub/aws-clf-c02/06-aws-iam-and-account-protection/)
