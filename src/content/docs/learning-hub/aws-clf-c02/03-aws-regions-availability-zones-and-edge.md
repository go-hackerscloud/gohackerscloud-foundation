---
title: "03 · AWS Regions Availability Zones and Edge"
description: "Choose the correct AWS infrastructure concept by understanding geography, fault isolation and the reason services are deployed in multiple locati"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Choose the correct AWS infrastructure concept by understanding geography, fault isolation and the reason services are deployed in multiple locations.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

A Region is a geographic AWS area; Availability Zones are distinct locations within a Region engineered for fault isolation. Service availability varies by location.

### What changes between services

A multi-AZ architecture improves tolerance to an AZ failure but does not automatically provide resilience to an entire Region outage.

### Real-world decision

Amazon CloudFront uses a distributed edge network to deliver cached content closer to users; edge and regional compute serve different purposes.

### How to evaluate it

Data residency and latency can constrain Region choices alongside service availability, regulatory requirements and cost.

## Worked scenario

An application serves users in two continents and contains regulated data. The team evaluates Region placement for residency, availability zones for resilience and CloudFront for public static assets.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Draw a Region containing two AZs, one load balancer and replicated application tiers.
2. Compare a single-AZ and multi-AZ failure scenario.
3. State two reasons not to place every workload in the geographically closest Region.
4. Explain why a CDN is not the same thing as a disaster recovery plan.

## Mini knowledge check

1. **Does CloudFront by itself make a database multi-AZ?**

   <details><summary>Reveal explanation</summary>No. It caches or distributes suitable content; database resilience is separate.</details>

2. **What does an Availability Zone improve?**

   <details><summary>Reveal explanation</summary>Isolation against failures affecting an individual AZ within a Region.</details>

## Study deliverable

An annotated infrastructure diagram. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Cloud Value and Economic Models](/learning-hub/aws-clf-c02/02-cloud-value-and-economic-models/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Service Models and Migration Strategies →](/learning-hub/aws-clf-c02/04-service-models-and-migration-strategies/)
