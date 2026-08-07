---
title: Lab 01 — Perform an Enterprise Risk Assessment
description: Learn how to perform an enterprise risk assessment by identifying assets, threats, vulnerabilities, business impacts, and risk treatment options using industry-standard GRC methodologies.
---

## Lab Overview

Welcome to your first **Enterprise Governance, Risk & Compliance (GRC)** lab.

In this lab, you'll take on the role of a **Cloud Security Engineer** at **CloudNova Technologies**.

The company is preparing to launch a new customer-facing cloud application into production.

Before the application can go live, executive management requires a formal **Enterprise Risk Assessment** to ensure business, security, operational, and compliance risks have been identified and appropriately managed.

Your responsibility is to evaluate the cloud environment, identify risks, prioritize them based on business impact, recommend mitigation strategies, and prepare a professional Risk Register for management approval.

This lab mirrors the work performed by Cloud Security Engineers, Security Architects, GRC Analysts, Risk Managers, and Security Consultants in enterprise environments.

---

# Lab Information

| Item | Details |
|------|----------|
| Lab Name | Perform an Enterprise Risk Assessment |
| Difficulty | Intermediate |
| Estimated Time | 90–120 Minutes |
| Lab Type | Governance, Risk & Compliance (GRC) |
| Environment | AWS, Documentation, Risk Register |
| Skills | Risk Identification, Risk Analysis, Risk Treatment, Risk Register |

---

# Learning Objectives

By completing this lab, you will learn how to:

- Identify business assets.
- Identify threats and vulnerabilities.
- Assess business impact.
- Calculate enterprise risks.
- Prioritize risks.
- Recommend mitigation controls.
- Build a professional Risk Register.
- Present findings to management.

---

# Business Scenario

CloudNova Technologies is launching a new online customer portal hosted in AWS.

The application contains:

- Amazon EC2
- Amazon RDS
- Amazon S3
- AWS IAM
- Amazon CloudFront
- AWS WAF
- Amazon Route 53

The platform processes:

- Customer accounts
- Payment information
- Personal information
- Internal business reports

Before production deployment, executive management requires a formal enterprise risk assessment.

You have been assigned as the Cloud Security Engineer responsible for completing the assessment.

---

# Lab Architecture

```text
Internet Users

↓

Amazon CloudFront

↓

AWS WAF

↓

Application Load Balancer

↓

Amazon EC2

↓

Amazon RDS

↓

Amazon S3

↓

AWS IAM

↓

AWS CloudTrail

↓

AWS Backup
```

---

# Prerequisites

Before beginning this lab, you should understand:

- AWS Fundamentals
- IAM
- Networking
- Cloud Security
- Risk Management Fundamentals
- Security Policies
- Compliance Basics

---

# Lab Objectives

Your assessment should answer:

- What assets are critical?
- What threats exist?
- What vulnerabilities are present?
- What is the business impact?
- How likely are the risks?
- What controls should be implemented?
- Which risks require immediate action?

---

# Task 1 — Identify Business Assets

Create an inventory of critical assets.

Example:

| Asset | Business Importance |
|--------|---------------------|
| Customer Database | Critical |
| AWS IAM | Critical |
| Payment Application | Critical |
| Amazon S3 | High |
| Backup Repository | High |
| CloudTrail Logs | High |

---

# Task 2 — Identify Threats

Document potential threats.

Examples include:

- Credential Theft
- Ransomware
- Insider Threats
- Public S3 Access
- Data Breach
- DDoS Attack
- Supply Chain Attack
- Misconfiguration

---

# Task 3 — Identify Vulnerabilities

Review the environment for weaknesses.

Examples:

- Missing MFA
- Weak Password Policy
- Public Storage
- Excessive IAM Permissions
- Missing Logging
- Unpatched EC2
- Open Security Groups

Document every finding.

---

# Task 4 — Assess Business Impact

Evaluate the impact of each identified risk.

Consider:

- Financial Loss
- Customer Trust
- Regulatory Fines
- Business Disruption
- Operational Downtime
- Reputation Damage

Rate each impact as:

- Low
- Medium
- High
- Critical

---

# Task 5 — Determine Likelihood

Estimate the probability that each risk may occur.

Example:

| Likelihood | Description |
|------------|-------------|
| Low | Rare |
| Medium | Possible |
| High | Likely |
| Critical | Very Likely |

---

# Task 6 — Calculate Risk Rating

Use a simple Risk Matrix.

| Impact | Likelihood | Risk Rating |
|---------|------------|-------------|
| High | High | Critical |
| High | Medium | High |
| Medium | Medium | Medium |
| Low | Low | Low |

Prioritize risks accordingly.

---

# Task 7 — Build a Risk Register

Create a professional Risk Register.

Example:

| Risk ID | Description | Impact | Likelihood | Rating | Owner | Status |
|----------|-------------|---------|------------|---------|-------|--------|
| R-001 | Public S3 Bucket | High | High | Critical | Cloud Team | Open |
| R-002 | Missing MFA | High | Medium | High | IAM Team | Open |
| R-003 | Weak Backup Testing | Medium | Medium | Medium | Infrastructure | Planned |

---

# Task 8 — Recommend Risk Treatments

Recommend appropriate actions.

Choose one of the following:

- Avoid
- Mitigate
- Transfer
- Accept

Example:

| Risk | Treatment |
|------|-----------|
| Public S3 Bucket | Enable Block Public Access |
| Weak IAM | Apply Least Privilege |
| Missing MFA | Enable MFA |
| Missing Backups | Configure AWS Backup |

---

# Task 9 — Executive Risk Summary

Prepare a one-page executive summary.

Include:

- Scope
- Critical Risks
- Business Impact
- High-Priority Recommendations
- Residual Risk
- Overall Security Posture

Remember:

Executives care about business risk—not technical details.

---

# Deliverables

At the end of this lab, you should produce:

- Asset Inventory
- Threat List
- Vulnerability Assessment
- Risk Matrix
- Risk Register
- Risk Treatment Plan
- Executive Summary

---

# Expected Outcome

Upon successful completion of this lab, you will have:

- Performed a complete enterprise risk assessment.
- Built a professional Risk Register.
- Prioritized security risks.
- Recommended mitigation strategies.
- Presented findings suitable for executive review.

This mirrors the real-world responsibilities of Cloud Security Engineers, Security Consultants, GRC Analysts, and Security Architects.

---

# Best Practices

During the assessment:

- Focus on business impact.
- Prioritize critical assets.
- Document all findings.
- Assign risk ownership.
- Recommend practical mitigations.
- Maintain clear documentation.
- Review risks periodically.
- Communicate in business language.

---

# Lab Summary

Congratulations!

You have successfully completed your first **Enterprise Risk Assessment**.

You now understand how enterprise organizations evaluate cyber risks, prioritize remediation efforts, maintain Risk Registers, and support business decision-making through structured Governance, Risk & Compliance (GRC) processes.

This experience reflects a common responsibility performed by Cloud Security Engineers, Security Architects, GRC Analysts, Risk Managers, and Security Consultants across enterprise organizations.

---

# Next Lab

➡️ **Lab 02 — Build an Information Security Policy**

In the next lab, you'll create a professional enterprise Information Security Policy, define governance requirements, establish security responsibilities, and align organizational security objectives with business and regulatory expectations.