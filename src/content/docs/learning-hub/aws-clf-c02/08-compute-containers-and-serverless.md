---
title: "08 · Compute Containers and Serverless"
description: "Recognize when EC2, Lambda, container services, load balancing or Auto Scaling are appropriate, and what customers need to manage."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Recognize when EC2, Lambda, container services, load balancing or Auto Scaling are appropriate, and what customers need to manage.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Amazon EC2 provides virtual server capacity with instance-family choices and OS management responsibilities.

### What changes between services

AWS Lambda runs functions in response to events without managing servers; duration, invocation model and integration requirements influence suitability.

### Real-world decision

Amazon ECS orchestrates containers; EKS provides managed Kubernetes control-plane functionality; AWS Fargate is a serverless compute option for supported container workloads.

### How to evaluate it

Elastic Load Balancing distributes traffic and EC2 Auto Scaling changes EC2 capacity based on policies and workload conditions.

## Worked scenario

An image-processing application runs briefly whenever an object arrives in S3. A team evaluates event-driven Lambda against a continuously running EC2 instance or container service.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Classify four workloads as better aligned with EC2, Lambda or containers.
2. Explain the difference between an EC2 instance and a container image.
3. Choose which service helps balance requests across application instances.
4. Draw the flow from object upload to a processing task.

## Mini knowledge check

1. **Does Lambda mean there are no security controls to configure?**

   <details><summary>Reveal explanation</summary>No. Function IAM, dependencies, secrets, logging and event inputs still matter.</details>

2. **Is Fargate a container registry?**

   <details><summary>Reveal explanation</summary>No. It is a compute capability for container workloads.</details>

## Study deliverable

A compute selection matrix with two example workloads. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← AWS Security and Compliance Services](/learning-hub/aws-clf-c02/07-aws-security-and-compliance-services/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Storage and Data Lifecycle →](/learning-hub/aws-clf-c02/09-storage-and-data-lifecycle/)
