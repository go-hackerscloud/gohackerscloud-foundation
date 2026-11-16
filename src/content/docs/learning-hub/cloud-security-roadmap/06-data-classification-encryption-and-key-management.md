---
title: "06 · Data Classification, Encryption and Key Management"
description: "Data controls must follow the data lifecycle: creation, transit, storage, replication, sharing and deletion. Encryption is essential but not suff"
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Data controls must follow the data lifecycle: creation, transit, storage, replication, sharing and deletion. Encryption is essential but not sufficient.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Classify information by confidentiality, integrity and availability needs. Mapping customer records, credentials and operational logs to owners clarifies what must be restricted.

### How it works in practice

Differentiate TLS in transit, encryption at rest and application-level encryption; key custody and trust boundaries influence the risk each addresses.

### Enterprise controls and responsibilities

Learn the purposes of key management systems, envelope encryption, rotation policies, key access logging and separation of duties.

### Verification and evidence

Treat backups, object-storage replication, retention and deletion as security requirements, not only reliability features.

## Worked example: an enterprise situation

A customer-data export is stored in object storage. Even when encrypted, a broadly accessible bucket remains a problem. The review checks access policies, sharing scope, lifecycle, data minimization and audit logs.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Create a data inventory for a sample customer portal.
2. Mark each dataset's classification, owner and retention.
3. Specify one access boundary and one encryption expectation per dataset.
4. Describe a controlled backup restore test using synthetic data.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Why isn't encryption enough for confidential data?**

   <details><summary>Suggested reasoning</summary>Authorized-but-overprivileged principals can still decrypt and read the data.</details>

2. **What distinguishes key rotation from data deletion?**

   <details><summary>Suggested reasoning</summary>Rotating a key changes cryptographic material; deletion and retention must follow separate verified processes.</details>

## Common mistakes to avoid

- Treating backup snapshots as exempt from data policy.
- Keeping encryption keys and encrypted payloads under the same overly broad access controls.
- Assuming that 'default encryption on' means sharing permissions are safe.

## Portfolio artifact

**Deliverable:** A data protection matrix including retention, key owner, backup and recovery tests.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Cloud Network Segmentation](/learning-hub/cloud-security-roadmap/05-cloud-network-segmentation/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Cloud Audit Trails and Detection Engineering →](/learning-hub/cloud-security-roadmap/07-cloud-audit-trails-and-detection-engineering/)
