---
title: "07 · AWS Security and Compliance Services"
description: "Be able to match a security need to the right class of AWS service without assuming that every tool detects the same threats."
---

**Track:** AWS Cloud Practitioner CLF-C02 · **Level:** Foundation · **Suggested study time:** 30–50 minutes

Be able to match a security need to the right class of AWS service without assuming that every tool detects the same threats.

[Back to the complete AWS Cloud Practitioner guide](/learning-hub/aws-clf-c02/)

## Concepts to learn

### The key idea

AWS CloudTrail provides records of AWS account API activity; Amazon CloudWatch supports metrics, logs and alarms. They complement rather than replace each other.

### What changes between services

Amazon GuardDuty analyzes supported telemetry for suspicious or potentially malicious activity; AWS Security Hub aggregates and prioritizes security findings.

### Real-world decision

AWS WAF helps filter web traffic at supported application entry points; AWS Shield addresses DDoS protection; AWS Network Firewall supplies network filtering capabilities.

### How to evaluate it

AWS Config records and evaluates supported resource configurations; AWS Artifact makes AWS compliance reports and agreements available where applicable. None alone establishes customer compliance.

## Worked scenario

A security manager asks whether a web application has protection against malicious HTTP patterns, whether infrastructure configuration has drifted, and whether suspicious cloud activity is being detected. These are separate requirements and may need separate tools.

**Exam thinking pattern:** identify the requirement first—availability, security, performance, data model, integration, operations or cost—then select the service that directly addresses it. Be wary of answer options that are real services but solve a different problem.

## Study and practical reinforcement

No paid AWS account is required for the conceptual exercises. If you choose to experiment in your own AWS account, review charges, apply least privilege, never publish access keys, and clean up resources.

1. Create a three-column table: requirement, recommended AWS service, evidence.
2. Explain CloudWatch vs CloudTrail in one sentence each.
3. Identify which service helps review a configuration compliance rule.
4. Write a short note about scope and limitations of a managed security service.

## Mini knowledge check

1. **Is GuardDuty equivalent to AWS WAF?**

   <details><summary>Reveal explanation</summary>No. GuardDuty analyzes signals for threats while WAF filters certain web requests.</details>

2. **Does an AWS Artifact report certify a customer's application?**

   <details><summary>Reveal explanation</summary>No. It describes AWS-side assurances relevant to the customer's assessed scope.</details>

## Study deliverable

A security-service selection worksheet with four scenarios. Keep this artifact in your own notes; identify services you still confuse and repeat the reasoning without looking at definitions.

## Official source and next lesson

- [Official AWS CLF-C02 exam guide](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/)
- [AWS in-scope service references](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)
- [Exam guide revisions](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-revisions.html)

[← AWS IAM and Account Protection](/learning-hub/aws-clf-c02/06-aws-iam-and-account-protection/) · [Guide contents](/learning-hub/aws-clf-c02/) · [Compute Containers and Serverless →](/learning-hub/aws-clf-c02/08-compute-containers-and-serverless/)
