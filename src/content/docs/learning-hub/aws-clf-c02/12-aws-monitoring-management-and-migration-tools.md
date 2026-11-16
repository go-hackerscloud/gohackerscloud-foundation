---
title: "12 · AWS Monitoring Management and Migration Tools"
description: "Know which service provides monitoring, audit trails, deployment management and migration assistance. Avoid confusing signals with controls."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Know which service provides monitoring, audit trails, deployment management and migration assistance. Avoid confusing signals with controls.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Amazon CloudWatch provides monitoring through metrics, logs and alarms; CloudTrail captures AWS API activity; AWS Config evaluates resource configuration history and compliance rules.

### What changes between services

AWS CloudFormation expresses infrastructure templates; AWS Systems Manager provides operations capabilities for supported managed nodes and environments.

### Real-world decision

AWS Trusted Advisor surfaces applicable checks and guidance; the AWS Well-Architected Tool supports architecture reviews.

### How to evaluate it

Migration services and data-transfer tools serve different source environments, volumes and constraints; the right choice depends on the migration plan.

## Worked scenario

An operations team wants a CPU alarm, an audit record of who changed an IAM policy and evidence that certain buckets have encryption configured. These are three different data questions.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Match six example requirements to services.
2. Write a short description of a monitoring alarm vs an audit event.
3. Explain why CloudFormation templates are not a replacement for security review.
4. Document a basic operational escalation flow.

## Mini knowledge check

1. **Which service records that an IAM policy was changed?**

   <details><summary>Reveal explanation</summary>CloudTrail records supported AWS API activity.</details>

2. **Can CloudWatch alone prove configuration compliance?**

   <details><summary>Reveal explanation</summary>No; metrics and logs may help but configuration/compliance evaluation requires suitable controls and evidence.</details>

## Study deliverable

An AWS services comparison sheet. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← VPC Networking and Content Delivery](/learning-hub/aws-clf-c02/11-vpc-networking-and-content-delivery/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Billing Pricing Support and Cost Governance →](/learning-hub/aws-clf-c02/13-billing-pricing-support-and-cost-governance/)
