---
title: "11 · VPC Networking and Content Delivery"
description: "Understand the role of Amazon VPC, subnets, security groups, network ACLs, Route 53 and CloudFront when building secure AWS applications."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Understand the role of Amazon VPC, subnets, security groups, network ACLs, Route 53 and CloudFront when building secure AWS applications.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

Amazon VPC is a logically isolated networking environment in which you define addressing, subnets, routing and related controls.

### What changes between services

Security groups are stateful network controls associated with resources; network ACLs apply at subnet boundaries and are stateless.

### Real-world decision

Amazon Route 53 offers DNS and related routing functionality; CloudFront distributes content using edge locations; neither substitutes for application authorization.

### How to evaluate it

Internet gateways, NAT gateways, private endpoints and transit connectivity serve different network paths. Route tables determine where traffic is directed.

## Worked scenario

A public website should accept HTTPS while its database should remain private. The design uses a public application entry point, restricted internal flows and separate access roles.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Diagram a VPC with public and private subnets.
2. State which flows must be allowed and denied.
3. Explain how a security group differs from a network ACL.
4. Show where Route 53 and CloudFront fit in a public web architecture.

## Mini knowledge check

1. **Can a public DNS record make a private service reachable by itself?**

   <details><summary>Reveal explanation</summary>No. Network paths and access controls must also permit connection.</details>

2. **Is a NAT gateway the same as a public inbound web endpoint?**

   <details><summary>Reveal explanation</summary>No. It commonly supports outbound access from private networks, subject to design.</details>

## Study deliverable

A network diagram with a positive and negative traffic test. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Databases and Application Integration](/learning-hub/aws-clf-c02/10-databases-and-application-integration/) · [Guide contents](/learning-hub/aws-clf-c02/) · [AWS Monitoring Management and Migration Tools →](/learning-hub/aws-clf-c02/12-aws-monitoring-management-and-migration-tools/)
