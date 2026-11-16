---
title: "10 · Databases and Application Integration"
description: "Choose managed relational, NoSQL and integration services based on data and application characteristics rather than familiarity with product name"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Choose managed relational, NoSQL and integration services based on data and application characteristics rather than familiarity with product names.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Amazon RDS offers managed relational database engines; Amazon Aurora is an AWS relational database service with its own managed architecture and compatible engines.

### What changes between services

Amazon DynamoDB is a managed NoSQL database designed for key-value and document access patterns, but modeling keys and access patterns remains a customer design task.

### Real-world decision

Amazon SQS decouples producers and consumers through message queues; Amazon SNS uses a pub/sub notification pattern for fan-out use cases.

### How to evaluate it

Amazon API Gateway exposes APIs; Amazon EventBridge routes event-driven integrations based on rules and supported event sources.

## Worked scenario

An order platform needs transactional customer records, asynchronous order processing and notifications. A relational database, message queue and publish/subscribe service each address different needs.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Explain the difference between relational schemas and key-based NoSQL patterns.
2. Choose SQS or SNS for point-to-point work queues vs fan-out notifications.
3. Identify a situation where API Gateway is useful.
4. Draw a producer → queue → consumer flow and label failure handling.

## Mini knowledge check

1. **Does DynamoDB support every relational join pattern by default?**

   <details><summary>Reveal explanation</summary>No. Access patterns and data modeling differ significantly.</details>

2. **When should SNS and SQS be used together?**

   <details><summary>Reveal explanation</summary>For fan-out notifications to independently processed queues or consumers.</details>

## Study deliverable

An application data and messaging architecture diagram. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Storage and Data Lifecycle](/learning-hub/aws-clf-c02/09-storage-and-data-lifecycle/) · [Guide contents](/learning-hub/aws-clf-c02/) · [VPC Networking and Content Delivery →](/learning-hub/aws-clf-c02/11-vpc-networking-and-content-delivery/)
