---
title: "07 · Cloud Audit Trails and Detection Engineering"
description: "Security operations need trustworthy signals. Learn how cloud control-plane events, application logs and infrastructure telemetry differ."
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Security operations need trustworthy signals. Learn how cloud control-plane events, application logs and infrastructure telemetry differ.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Cloud control-plane audit trails record API calls and management actions. CloudTrail, Azure Activity logs and Google Cloud Audit Logs each have platform-specific coverage and configuration.

### How it works in practice

Operational metrics answer performance and availability questions; security detections need context such as principal, asset sensitivity, action, origin and expected behavior.

### Enterprise controls and responsibilities

A useful alert has a clear hypothesis, reliable event fields, thresholds, enrichment, severity, owner, response runbook and false-positive review.

### Verification and evidence

Centralized storage, retention, integrity protections and access controls make logs useful during incidents and investigations.

## Worked example: an enterprise situation

An administrator disables audit logging during a maintenance change. Detection engineering identifies the relevant control-plane event, enriches the identity and account context, and routes a high-priority alert to an owner for verification.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Define a detection: 'logging disabled in production'.
2. List required fields: timestamp, principal, resource, action and outcome.
3. Write a response checklist with validation steps and containment options.
4. Create five synthetic JSON events and identify which should alert.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Why are CloudWatch metrics not a replacement for CloudTrail?**

   <details><summary>Suggested reasoning</summary>One is primarily observability/telemetry, while the other records AWS account API activity; security needs both in different cases.</details>

2. **What makes a detection actionable?**

   <details><summary>Suggested reasoning</summary>A defined investigative path, accountable owner, context and a measurable signal.</details>

## Common mistakes to avoid

- Enabling logging without verifying delivery.
- Generating alerts without runbooks or ownership.
- Ignoring clock synchronization and retention requirements.

## Portfolio artifact

**Deliverable:** A detection specification with sample event, logic, triage instructions and test evidence.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Data Classification, Encryption and Key Management](/learning-hub/cloud-security-roadmap/06-data-classification-encryption-and-key-management/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Secure Infrastructure as Code and CI/CD →](/learning-hub/cloud-security-roadmap/08-secure-infrastructure-as-code-and-cicd/)
