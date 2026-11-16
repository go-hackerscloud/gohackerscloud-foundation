---
title: "AWS Certified Cloud Practitioner (CLF-C02) — Complete Study Guide"
description: "Four-domain AWS CLF-C02 exam preparation with 14 study chapters, original practice questions, AWS service comparisons and a revision plan."
---

# AWS Certified Cloud Practitioner (CLF-C02)

This free study guide teaches the concepts, service choices and decision patterns used in AWS's foundational Cloud Practitioner certification. **It is not an AWS-endorsed course, exam voucher, official question bank or passing guarantee.**

## Current exam blueprint

| Official content domain | Weight |
|---|---:|
| Cloud Concepts | 24% |
| Security and Compliance | 30% |
| Cloud Technology and Services | 34% |
| Billing, Pricing, and Support | 12% |

The official exam guide currently describes **50 scored and 15 unscored questions**, multiple-choice and multiple-response formats, and a minimum passing scaled score of 700/1000. Verify these details and the service list immediately before booking. [AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/) · [October 2026 revision history](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html).

## Complete chapter navigation

| Chapter | Practical skill |
|---|---|
| [01 · Exam Blueprint and Study Strategy](/learning-hub/aws-clf-c02/01-exam-blueprint-and-study-strategy/) | CLF-C02 is a foundational knowledge examination rather than a hands-on administrator test. Anch |
| [02 · Cloud Value and Economic Models](/learning-hub/aws-clf-c02/02-cloud-value-and-economic-models/) | Understand the reasons organizations adopt cloud: flexible capacity, faster experimentation and |
| [03 · AWS Regions Availability Zones and Edge](/learning-hub/aws-clf-c02/03-aws-regions-availability-zones-and-edge/) | Choose the correct AWS infrastructure concept by understanding geography, fault isolation and t |
| [04 · Service Models and Migration Strategies](/learning-hub/aws-clf-c02/04-service-models-and-migration-strategies/) | Distinguish infrastructure, platform and software services and understand how cloud migration a |
| [05 · Shared Responsibility and Well Architected](/learning-hub/aws-clf-c02/05-shared-responsibility-and-well-architected/) | Cloud security is shared between AWS and the customer; the boundary depends on which services a |
| [06 · AWS IAM and Account Protection](/learning-hub/aws-clf-c02/06-aws-iam-and-account-protection/) | Identity and Access Management authorizes requests to AWS resources. Understand identities, rol |
| [07 · AWS Security and Compliance Services](/learning-hub/aws-clf-c02/07-aws-security-and-compliance-services/) | Be able to match a security need to the right class of AWS service without assuming that every  |
| [08 · Compute Containers and Serverless](/learning-hub/aws-clf-c02/08-compute-containers-and-serverless/) | Recognize when EC2, Lambda, container services, load balancing or Auto Scaling are appropriate, |
| [09 · Storage and Data Lifecycle](/learning-hub/aws-clf-c02/09-storage-and-data-lifecycle/) | Match AWS storage families to object, block, file and archival needs. Understand durability, ac |
| [10 · Databases and Application Integration](/learning-hub/aws-clf-c02/10-databases-and-application-integration/) | Choose managed relational, NoSQL and integration services based on data and application charact |
| [11 · VPC Networking and Content Delivery](/learning-hub/aws-clf-c02/11-vpc-networking-and-content-delivery/) | Understand the role of Amazon VPC, subnets, security groups, network ACLs, Route 53 and CloudFr |
| [12 · AWS Monitoring Management and Migration Tools](/learning-hub/aws-clf-c02/12-aws-monitoring-management-and-migration-tools/) | Know which service provides monitoring, audit trails, deployment management and migration assis |
| [13 · Billing Pricing Support and Cost Governance](/learning-hub/aws-clf-c02/13-billing-pricing-support-and-cost-governance/) | Understand pricing models and the tools used to plan, allocate, monitor and optimize cloud expe |
| [14 · Practice Questions and Four Week Revision Plan](/learning-hub/aws-clf-c02/14-practice-questions-and-four-week-revision-plan/) | Test your understanding with original scenario questions, explain why distractors are wrong and |

## Understand the exam through a familiar architecture

```text
Visitors ──► Route 53 ──► CloudFront / Load Balancer
                                      │
                              EC2 / Lambda / Containers
                                      │
                               RDS or DynamoDB
                                      │
                                  S3 Storage

Security: IAM + MFA + data policies
Visibility: CloudTrail + CloudWatch + Config
Costs: Pricing Calculator + Cost Explorer + AWS Budgets
```

Every service above has its own scope. A diagram is a way to reason about requirements, not evidence that each workload needs every service.

## Efficient study approach

1. Read the official domain and task statements.
2. Learn why a service exists, which requirement it meets and its nearest alternatives.
3. Use a glossary, a service-choice table and a 'wrong-answer journal'.
4. Practise original scenario questions; explain why the distractors are wrong.
5. Revisit the official guide before scheduling because AWS services and exam scope can change.

**Start with [Chapter 01 — Exam Blueprint and Study Strategy](/learning-hub/aws-clf-c02/01-exam-blueprint-and-study-strategy/).** Return to the [Foundation Cloud Concepts module](/foundation/gohackerscloud-foundation/07-cloud-computing-fundamentals/01-cloud-computing/) whenever a term is unfamiliar.

## Practice exam disclaimer

The scenario questions in Chapter 14 are original teaching material; they are not claimed to be AWS's official exam questions. Actual AWS Certification is awarded only by AWS, not by completing this guide.
