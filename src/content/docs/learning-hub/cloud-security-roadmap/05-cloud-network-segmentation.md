---
title: "05 · Cloud Network Segmentation"
description: "Network design reduces exposure and constrains lateral movement. Understand which controls protect a packet path and where identity-based control"
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Network design reduces exposure and constrains lateral movement. Understand which controls protect a packet path and where identity-based controls remain necessary.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

Distinguish public and private subnets, routes, NAT, ingress/egress, security groups and subnet access control lists. Be precise about which controls are stateful.

### How it works in practice

Use private service access, workload-to-workload segmentation, minimal ingress and explicit egress where it is operationally possible.

### Enterprise controls and responsibilities

Treat DNS and load-balancing configuration as part of the security design, including private endpoints and certificate termination.

### Verification and evidence

Understand why 'not publicly routable' does not mean 'unreachable to an attacker' when credentials or a connected workload are compromised.

## Worked example: an enterprise situation

A public web tier needs HTTPS ingress, but a database should accept connections only from the application tier. Security validates routes, source restrictions, credentials, logs and a tested access path for maintenance.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Sketch a web–application–database topology.
2. List ports and origin/destination pairs actually needed.
3. Explain why an admin dashboard should not have unrestricted Internet access.
4. Write three verification tests including one expected-deny test.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **What is the limitation of a security group?**

   <details><summary>Suggested reasoning</summary>It enforces network-level rules, not application authentication or data-level authorization.</details>

2. **Why test denied connections?**

   <details><summary>Suggested reasoning</summary>A positive test only shows the intended path works; negative testing checks the isolation boundary.</details>

## Common mistakes to avoid

- Opening 0.0.0.0/0 on administrative ports.
- Using one flat subnet for unrelated workloads.
- Forgetting outbound flows and DNS dependencies during hardening.

## Portfolio artifact

**Deliverable:** A reviewed network traffic matrix with expected-allow and expected-deny outcomes.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: IAM, Federation and Least Privilege](/learning-hub/cloud-security-roadmap/04-iam-federation-and-least-privilege/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Data Classification, Encryption and Key Management →](/learning-hub/cloud-security-roadmap/06-data-classification-encryption-and-key-management/)
