---
title: "09 · Containers and Kubernetes Security"
description: "Containers package processes; they do not automatically remove operating-system, identity or networking risk. Focus on image provenance, runtime "
---

**Learning level:** Foundation to early intermediate · **Suggested study time:** 35–60 minutes

Containers package processes; they do not automatically remove operating-system, identity or networking risk. Focus on image provenance, runtime controls and orchestration.

[Back to the complete Cloud Security Engineer Roadmap](/learning-hub/cloud-security-roadmap/)

## Skills and concepts to understand

### Concept and scope

A container image contains layers and software dependencies. Provenance, pinned versions, vulnerability remediation and image-signature policy improve the supply chain.

### How it works in practice

Container runtime hardening includes unprivileged users, restrictive capabilities, minimal writable filesystems and controlled host mounts.

### Enterprise controls and responsibilities

Kubernetes adds namespaces, service accounts, RBAC, network policies, admission controls and workload identity. Each operates at a different boundary.

### Verification and evidence

Keep secrets out of images and deployment manifests; secure registries, runtime access and audit logs all matter.

## Worked example: an enterprise situation

A team wants to deploy a reporting service with root privileges and a broad Kubernetes service account. Security proposes a non-root image, scoped account, restricted network flows and a documented exception process.

**What a security engineer should write down:** affected assets, required permissions, attack surface, compensating controls, validation evidence, owner, priority and unresolved questions.

## Guided self-study activity

This exercise is designed for your own computer, a whiteboard or an explicitly authorized practice environment. It does not require a paid GoHackersCloud lab.

1. Inspect a safe local Dockerfile and identify unnecessary privileges.
2. Write a checklist for an image and Kubernetes workload review.
3. Map a service account to just the actions it needs.
4. Describe how you would verify a container cannot reach an unrelated service.

**Expected result:** a short, reviewable artifact that another engineer could understand without needing access to your personal environment.

## Knowledge check with explanations

1. **Why is an image scan only one layer of assurance?**

   <details><summary>Suggested reasoning</summary>It covers known software issues; runtime privileges, credentials and network exposure remain separate risks.</details>

2. **Why use workload identity instead of static cloud keys in a pod?**

   <details><summary>Suggested reasoning</summary>It enables more manageable, scoped credentials linked to the workload.</details>

## Common mistakes to avoid

- Mounting the host Docker socket into untrusted containers.
- Using latest image tags without reproducible pinning.
- Assuming namespaces by themselves create a strong isolation boundary.

## Portfolio artifact

**Deliverable:** A hardening review for one synthetic deployment including expected tests.

Suggested README headings: Purpose, Scope, Assumptions, Diagram, Controls, Test Approach, Results, Limitations and Next Steps. Keep real credentials and customer information out of public repositories.

## Continue learning

[← Previous: Secure Infrastructure as Code and CI/CD](/learning-hub/cloud-security-roadmap/08-secure-infrastructure-as-code-and-cicd/) · [Roadmap contents](/learning-hub/cloud-security-roadmap/) · [Next: Risk, Compliance and Cloud Governance →](/learning-hub/cloud-security-roadmap/10-risk-compliance-and-cloud-governance/)
