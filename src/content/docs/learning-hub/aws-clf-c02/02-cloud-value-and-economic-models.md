---
title: "02 · Cloud Value and Economic Models"
description: "Understand the reasons organizations adopt cloud: flexible capacity, faster experimentation and global services. Evaluate those advantages agains"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Understand the reasons organizations adopt cloud: flexible capacity, faster experimentation and global services. Evaluate those advantages against governance, migration cost and operational constraints.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Capital expenditure buys assets upfront; operating expenditure pays for consumption. Cloud often shifts spending toward consumption-based costs but does not remove the need to manage spending.

### What changes between services

Elasticity adjusts available resources to demand; scalability supports handling more workload. An architecture may scale without using resources efficiently.

### Real-world decision

Shared infrastructure and managed services may reduce routine physical maintenance, but engineering, identity, operational reviews and application costs remain.

### How to evaluate it

Total cost of ownership includes people, software, migration, networking, support, and operational risk—not only monthly virtual machine fees.

## Worked scenario

A seasonal retailer needs enough capacity for peak demand but not for the whole year. The business case compares autoscaling to idle owned hardware while accounting for data transfer and monitoring costs.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Compare a fixed on-premises server with an illustrative hourly cloud deployment; state assumptions rather than inventing a price.
2. Describe a scenario where cloud migration is not immediately cost-saving.
3. List four factors influencing TCO.
4. Explain how tagging and cost allocation help teams make decisions.

## Mini knowledge check

1. **Does pay-as-you-go mean AWS automatically minimizes cost?**

   <details><summary>Reveal explanation</summary>No. Customers must design, right-size, monitor and retire resources.</details>

2. **What is a practical example of elasticity?**

   <details><summary>Reveal explanation</summary>An application adds capacity during peak hours and reduces it when demand declines.</details>

## Study deliverable

A one-page cloud business-case worksheet. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Exam Blueprint and Study Strategy](/learning-hub/aws-clf-c02/01-exam-blueprint-and-study-strategy/) · [Guide contents](/learning-hub/aws-clf-c02/) · [AWS Regions Availability Zones and Edge →](/learning-hub/aws-clf-c02/03-aws-regions-availability-zones-and-edge/)
