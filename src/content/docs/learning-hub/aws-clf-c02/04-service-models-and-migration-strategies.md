---
title: "04 · Service Models and Migration Strategies"
description: "Distinguish infrastructure, platform and software services and understand how cloud migration approaches change work, risk and cost."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Distinguish infrastructure, platform and software services and understand how cloud migration approaches change work, risk and cost.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

IaaS offers configurable infrastructure; PaaS and managed runtimes reduce certain operations; SaaS exposes software functionality. Responsibility is different in each model.

### What changes between services

Public, private and hybrid cloud describe ownership and placement. Multi-cloud is a strategy using more than one provider and is not automatically the most resilient or economical solution.

### Real-world decision

Common migration strategies include rehost, replatform, refactor, repurchase, retain and retire; evaluate operational change and business value.

### How to evaluate it

Cloud Adoption Framework and migration programs provide organizational guidance across people, governance, platforms and operations, not merely a copy operation.

## Worked scenario

A legacy payroll application must remain on-premises temporarily, while a new reporting portal can use a managed service. The team chooses a phased hybrid approach and documents integration dependencies.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Classify five familiar applications into IaaS, PaaS or SaaS.
2. Map three applications to plausible migration options and explain why.
3. Define when retaining a system is more appropriate than immediate migration.
4. List owners for security, connectivity and backup during transition.

## Mini knowledge check

1. **Is moving a VM without changing its architecture a refactor?**

   <details><summary>Reveal explanation</summary>No, it is closer to rehosting.</details>

2. **Does managed service mean zero customer responsibility?**

   <details><summary>Reveal explanation</summary>No; identity, data, configuration and application behavior remain relevant.</details>

## Study deliverable

A service-model comparison and migration decision matrix. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← AWS Regions Availability Zones and Edge](/learning-hub/aws-clf-c02/03-aws-regions-availability-zones-and-edge/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Shared Responsibility and Well Architected →](/learning-hub/aws-clf-c02/05-shared-responsibility-and-well-architected/)
