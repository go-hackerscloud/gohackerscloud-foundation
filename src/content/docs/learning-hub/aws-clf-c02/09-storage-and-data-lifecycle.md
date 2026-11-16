---
title: "09 · Storage and Data Lifecycle"
description: "Match AWS storage families to object, block, file and archival needs. Understand durability, access and lifecycle as separate concepts."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Match AWS storage families to object, block, file and archival needs. Understand durability, access and lifecycle as separate concepts.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Amazon S3 is object storage for data such as images, backups and static content; object access and sharing must be controlled.

### What changes between services

Amazon EBS provides block storage commonly attached to EC2; Amazon EFS provides shared file storage using a file-system interface.

### Real-world decision

S3 storage classes and lifecycle policies help balance access frequency, retrieval needs and cost; some classes introduce retrieval or minimum-duration considerations.

### How to evaluate it

AWS Backup can help coordinate backups for supported services; backup configuration, immutability and restore testing still need appropriate ownership.

## Worked scenario

A media team stores millions of product photos. It chooses S3 object storage with a lifecycle policy, controlled sharing and delivery through an appropriate content path rather than a single EC2 disk.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Classify data types as object, block or file storage.
2. Identify what changes when old data becomes infrequently accessed.
3. Draw a backup and restore decision flow for a small workload.
4. Explain why encryption and bucket policies are separate decisions.

## Mini knowledge check

1. **Does EBS act like an automatically shared filesystem across all EC2 instances?**

   <details><summary>Reveal explanation</summary>No. It is block storage; attachment patterns are limited and differ from a general shared file system.</details>

2. **What should a backup strategy verify?**

   <details><summary>Reveal explanation</summary>Recoverability, scope, retention, access controls and successful restore.</details>

## Study deliverable

A storage choice table including access, security and cost considerations. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Compute Containers and Serverless](/learning-hub/aws-clf-c02/08-compute-containers-and-serverless/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Databases and Application Integration →](/learning-hub/aws-clf-c02/10-databases-and-application-integration/)
