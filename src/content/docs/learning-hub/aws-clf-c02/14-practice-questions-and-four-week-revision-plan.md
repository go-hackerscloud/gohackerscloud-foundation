---
title: "14 · Practice Questions and Four Week Revision Plan"
description: "Test your understanding with original scenario questions, explain why distractors are wrong and retest missed domains. This page is not an offici"
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Test your understanding with original scenario questions, explain why distractors are wrong and retest missed domains. This page is not an official or leaked AWS examination.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

For Cloud Concepts, focus on elasticity, operational value, regions, availability and the difference between migration strategies.

### What changes between services

For Security and Compliance, distinguish customer and AWS duties, IAM, MFA, audit activity, threat detection, web filtering and configuration assessment.

### Real-world decision

For Cloud Technology, compare EC2/Lambda/containers; object/block/file storage; managed relational vs NoSQL; network and integration services.

### How to evaluate it

For Billing and Support, understand estimating, tracking, alarms, consumption and discount models, including the limits of cost assumptions.

## Worked scenario

A learner scores well on definitions but fails service-choice scenarios. The revision plan requires an explanation for each answer that names the business requirement, the winning service and why the nearest distractor is wrong.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Take the original self-check questions below before opening the answers.
2. Record the domain and root cause for each mistake.
3. Review the official exam-guide revision history and in-scope service list.
4. Retest missed questions after 48 hours; explain each correct answer aloud.

## Mini knowledge check

1. **Why should a learner check the official exam guide again before booking?**

   <details><summary>Reveal explanation</summary>AWS can update exam scope and service references; third-party materials may lag.</details>

2. **What does a wrong answer log contain?**

   <details><summary>Reveal explanation</summary>Question theme, chosen answer, correct concept, confusing alternative and a retest date.</details>

## Study deliverable

A domain-level revision dashboard and documented readiness decision. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Original scenario practice set — 20 questions

Try to answer each question before opening the explanation. These are **independently written study questions**, not real AWS exam items.

1. **Which AWS service primarily provides object storage?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon S3</strong>. S3 stores objects and associated metadata; EBS offers block storage and EFS provides file storage.</details>

2. **A team wants a managed function triggered by an S3 event. Which compute service is a natural fit?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: AWS Lambda</strong>. Lambda is event-driven function compute and does not require management of an EC2 server.</details>

3. **Which principle says customers configure appropriate IAM permissions?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Shared responsibility</strong>. AWS runs security of the cloud; customers remain responsible for identities and other in-cloud security decisions.</details>

4. **A user needs an extra sign-in factor. What control helps?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: MFA</strong>. Multifactor authentication reduces risk from compromised passwords for supported sign-in flows.</details>

5. **Which service mainly captures AWS API activity?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: AWS CloudTrail</strong>. CloudTrail is an audit trail; CloudWatch is commonly used for metrics, logs and alarms.</details>

6. **Which service is suited to detecting suspicious activity using supported telemetry?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon GuardDuty</strong>. GuardDuty provides threat detection findings, unlike WAF's HTTP filtering.</details>

7. **Which tool estimates expected AWS spending before deployment?** *(Billing)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: AWS Pricing Calculator</strong>. Pricing Calculator is for estimates; Cost Explorer analyzes incurred costs.</details>

8. **Which service can alert when a budget threshold is met?** *(Billing)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: AWS Budgets</strong>. Budgets provides budget monitoring and notifications.</details>

9. **A globally distributed static website needs lower-latency caching. Which service is relevant?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon CloudFront</strong>. CloudFront uses an edge network to deliver suitable content closer to viewers.</details>

10. **What separates an Availability Zone from a Region?** *(Cloud)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Failure isolation within a geographic area</strong>. A Region is a geographic location containing AZs; AZ design supports fault tolerance.</details>

11. **Which storage option commonly exposes a shared file interface?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon EFS</strong>. EFS supports file storage rather than S3 object storage or EBS block volumes.</details>

12. **A transaction system requires a managed relational database. Which service fits?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon RDS</strong>. RDS supports managed relational engines, subject to engine and design requirements.</details>

13. **A queue should decouple a producer and worker. Which service fits?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon SQS</strong>. SQS enables asynchronous message queuing and consumer processing.</details>

14. **One event should notify several independent subscribers. Which service is natural?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Amazon SNS</strong>. SNS uses publish/subscribe fan-out patterns.</details>

15. **Which network control is stateful in a VPC?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Security group</strong>. Security groups track connections; network ACLs are stateless at subnet boundaries.</details>

16. **Which AWS control helps assess configuration against rules?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: AWS Config</strong>. AWS Config records and evaluates resource configuration; logging alone does not demonstrate compliance.</details>

17. **How does elasticity help a seasonal workload?** *(Cloud)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Capacity can adjust with demand</strong>. Elasticity scales available resources up and down as requirements change.</details>

18. **Which compute option can be interrupted and suits fault-tolerant work?** *(Billing)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Spot Instances</strong>. Spot capacity can be reclaimed and is inappropriate without appropriate interruption tolerance.</details>

19. **Which AWS service helps distribute traffic across application targets?** *(Technology)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: Elastic Load Balancing</strong>. Load balancing routes requests among targets according to configuration.</details>

20. **Is a provider compliance report alone proof of customer compliance?** *(Security)*

   <details><summary>Show answer and reasoning</summary><strong>Answer: No</strong>. Customer scope, controls and evidence remain necessary.</details>

## Four-week revision calendar

| Week | Main focus | Checkpoint |
|---|---|---|
| 1 | Cloud Concepts and global infrastructure | Explain each model from an example |
| 2 | IAM, security, compliance and controls | Pass a self-created security service matching quiz |
| 3 | Compute, databases, networking, storage and monitoring | Draw and explain a small cloud application |
| 4 | Billing, support, timed practice and mistake review | Demonstrate accuracy and reasoning across all domains |

**Readiness rule:** do not rely on a single mock-test percentage. Review error patterns, answer timing and whether you understand why alternatives are wrong.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← Billing Pricing Support and Cost Governance](/learning-hub/aws-clf-c02/13-billing-pricing-support-and-cost-governance/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Continue with Cloud Security Engineering](/learning-hub/cloud-security-roadmap/)
