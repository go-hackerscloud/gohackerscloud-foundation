---
title: Lab 03 — Conduct an ISO/IEC 27001 Gap Assessment
description: Learn how to perform an enterprise ISO/IEC 27001 Gap Assessment by evaluating an organization's Information Security Management System (ISMS), identifying compliance gaps, assessing risks, and developing a remediation roadmap.
---

# Lab 03 — Conduct an ISO/IEC 27001 Gap Assessment

## Lab Overview

Welcome to **Lab 03** of the Enterprise Governance, Risk & Compliance (GRC) module.

In this lab, you'll assume the role of a **Cloud Security Engineer** at **CloudNova Technologies**.

The organization plans to achieve **ISO/IEC 27001 certification** within the next 12 months.

Before beginning the certification process, executive management has requested a comprehensive **ISO/IEC 27001 Gap Assessment** to determine the organization's current security maturity and identify areas requiring improvement.

Your responsibility is to evaluate the existing Information Security Management System (ISMS), review governance documentation, assess technical and administrative controls, identify compliance gaps, and prepare a professional remediation roadmap.

This mirrors the work performed by Cloud Security Engineers, GRC Analysts, ISO 27001 Consultants, Compliance Officers, Internal Auditors, and Information Security Managers.

---

# Lab Information

| Item | Details |
|------|----------|
| Lab Name | Conduct an ISO/IEC 27001 Gap Assessment |
| Difficulty | Intermediate |
| Estimated Time | 2–3 Hours |
| Lab Type | Governance, Risk & Compliance (GRC) |
| Environment | Documentation, AWS Reference Environment |
| Skills | ISO 27001, Gap Assessment, ISMS, Compliance, Risk Assessment |

---

# Learning Objectives

By completing this lab, you will learn how to:

- Understand ISO/IEC 27001 requirements.
- Evaluate an Information Security Management System (ISMS).
- Review security governance documentation.
- Identify compliance gaps.
- Assess Annex A security controls.
- Prioritize remediation activities.
- Build a Gap Assessment Report.
- Prepare an ISO 27001 implementation roadmap.

---

# Business Scenario

CloudNova Technologies provides cloud-based software solutions to enterprise customers across multiple industries.

Several new customers now require the company to obtain **ISO/IEC 27001 certification** before signing long-term contracts.

Executive leadership has approved the initiative and requested an initial Gap Assessment to determine certification readiness.

You have been assigned as the Cloud Security Engineer supporting the Governance, Risk & Compliance (GRC) team throughout this assessment.

---

# Lab Objectives

Your assessment should determine:

- Does the organization have an ISMS?
- Are security policies documented?
- Are risks formally managed?
- Are security controls implemented?
- Which ISO controls are missing?
- What remediation activities are required?
- Is the organization ready for certification?

---

# Enterprise Environment

CloudNova Technologies currently operates:

- AWS Multi-Account Environment
- Amazon EC2
- Amazon RDS
- Amazon S3
- AWS IAM
- Amazon CloudFront
- AWS WAF
- Amazon GuardDuty
- AWS Security Hub
- Kubernetes (Amazon EKS)

Supporting documentation includes:

- Information Security Policy
- Risk Register
- Incident Response Plan
- Asset Inventory
- Business Continuity Plan
- Disaster Recovery Plan
- Vendor Register

---

# Task 1 — Review the ISMS Scope

Review the Information Security Management System (ISMS).

Verify:

- Organizational Scope
- Business Units
- Cloud Services
- Applications
- Information Assets
- Supporting Processes

Questions to consider:

- Is the scope documented?
- Does it cover critical business operations?
- Are exclusions justified?

---

# Task 2 — Review Governance Documentation

Evaluate governance documentation.

Review:

- Information Security Policy
- Risk Management Policy
- Access Control Policy
- Incident Response Policy
- Backup Policy
- Vendor Security Policy
- Acceptable Use Policy

Record missing or outdated documentation.

---

# Task 3 — Review Risk Management

Evaluate the organization's risk management process.

Verify:

- Risk Assessment Methodology
- Risk Register
- Risk Owners
- Risk Treatment Plans
- Residual Risks
- Executive Approval

Confirm that risks are regularly reviewed and updated.

---

# Task 4 — Review Asset Management

Verify that critical assets are identified and maintained.

Review:

- Hardware Inventory
- Software Inventory
- Cloud Resources
- Information Assets
- Data Classification
- Asset Owners

Ensure every critical asset has an assigned owner.

---

# Task 5 — Assess Access Control

Review Identity & Access Management.

Evaluate:

- MFA
- Least Privilege
- RBAC
- PAM
- Access Reviews
- Joiner/Mover/Leaver Process
- Privileged Account Monitoring

Identify any access control weaknesses.

---

# Task 6 — Review Security Operations

Evaluate operational security controls.

Verify:

- Logging
- Monitoring
- Vulnerability Management
- Patch Management
- Security Awareness Training
- Incident Response
- Threat Detection

Confirm that operational controls are documented and functioning.

---

# Task 7 — Assess Cloud Security Controls

Review AWS security controls.

Examples:

- CloudTrail Enabled
- AWS Config Enabled
- GuardDuty Enabled
- Security Hub Enabled
- Encryption Enabled
- S3 Public Access Block
- Backup Configuration
- IAM Policies

Document any missing controls.

---

# Task 8 — Review Annex A Controls

Evaluate organizational implementation of ISO/IEC 27001 Annex A controls.

Example assessment:

| Control Domain | Status |
|---------------|--------|
| Information Security Policies | Implemented |
| Asset Management | Partially Implemented |
| Access Control | Implemented |
| Cryptography | Implemented |
| Operations Security | Partially Implemented |
| Supplier Relationships | Needs Improvement |
| Incident Management | Implemented |
| Business Continuity | Partially Implemented |

Record observations for each domain.

---

# Task 9 — Identify Compliance Gaps

Document findings.

Example:

| Gap | Risk | Priority |
|-----|------|----------|
| Missing Vendor Assessments | High | High |
| No Annual Policy Review | Medium | Medium |
| Weak Backup Testing | High | High |
| Missing Asset Owners | Medium | Medium |

Prioritize gaps based on business impact.

---

# Task 10 — Build a Remediation Roadmap

Recommend actions for each identified gap.

Example:

| Finding | Recommendation |
|----------|----------------|
| Missing Vendor Reviews | Implement Third-Party Risk Management Program |
| Weak Asset Inventory | Deploy Centralized Asset Management |
| Missing Policy Reviews | Annual Governance Review Process |
| Incomplete Backup Testing | Quarterly Disaster Recovery Exercises |

Create a realistic implementation timeline.

---

# Deliverables

By the end of this lab, produce:

- ISMS Scope Review
- Documentation Review
- Risk Assessment Summary
- Asset Management Review
- Access Control Assessment
- Cloud Security Assessment
- ISO 27001 Gap Register
- Remediation Roadmap
- Executive Summary

---

# Expected Outcome

Upon successful completion of this lab, you will have:

- Evaluated an enterprise ISMS.
- Identified ISO/IEC 27001 compliance gaps.
- Reviewed security governance.
- Assessed technical and administrative controls.
- Developed a remediation roadmap.
- Prepared documentation suitable for executive review and certification planning.

This reflects the responsibilities of Cloud Security Engineers, GRC Consultants, Compliance Officers, Internal Auditors, and Information Security Managers supporting ISO 27001 certification initiatives.

---

# Best Practices

While conducting the assessment:

- Review documentation before interviewing stakeholders.
- Validate evidence rather than relying on assumptions.
- Focus on business risk, not just technical findings.
- Record objective observations.
- Prioritize high-risk gaps first.
- Assign clear remediation owners.
- Maintain audit-ready documentation.
- Align recommendations with business objectives.

---

# Lab Summary

Congratulations!

You have successfully completed an **ISO/IEC 27001 Gap Assessment**.

You now understand how organizations evaluate Information Security Management Systems (ISMS), measure compliance maturity, identify security gaps, and prepare remediation plans prior to certification.

This experience closely mirrors real consulting and audit engagements performed by Cloud Security Engineers, ISO 27001 Consultants, GRC Analysts, Compliance Officers, Internal Auditors, and Security Architects.

---

# Next Lab

➡️ **Lab 04 — Perform a Third-Party Security Assessment**

In the next lab, you'll assess the security posture of a critical cloud service provider by reviewing governance, compliance certifications, security controls, contractual obligations, and operational risks before approving the vendor for enterprise use.