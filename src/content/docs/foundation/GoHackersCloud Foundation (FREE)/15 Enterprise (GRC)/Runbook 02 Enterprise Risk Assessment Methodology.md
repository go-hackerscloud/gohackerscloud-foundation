---
title: Runbook 02 — Enterprise Risk Assessment Methodology
description: A standardized enterprise methodology for identifying, analyzing, evaluating, treating, and monitoring cybersecurity risks across cloud, on-premises, and hybrid environments.
---

## Purpose

This runbook provides a structured methodology for conducting an **Enterprise Risk Assessment** that aligns with industry best practices and internationally recognized frameworks such as:

- ISO/IEC 27001
- ISO 31000
- NIST Risk Management Framework (RMF)
- NIST Cybersecurity Framework (CSF)
- CIS Controls
- COBIT
- FAIR (Factor Analysis of Information Risk)

It enables security teams to consistently identify, assess, prioritize, and manage cyber risks while supporting business objectives and regulatory compliance.

This methodology is commonly used by:

- Cloud Security Engineers
- GRC Analysts
- Security Architects
- Security Consultants
- Risk Managers
- Internal Auditors
- Compliance Officers
- CISOs

---

# Runbook Objectives

This runbook helps organizations:

- Identify critical business assets.
- Understand threat exposure.
- Identify vulnerabilities.
- Evaluate business impact.
- Measure enterprise risk.
- Recommend risk treatments.
- Maintain an enterprise Risk Register.
- Support executive decision-making.

---

# Assessment Workflow

```text
Planning

↓

Define Scope

↓

Identify Assets

↓

Identify Threats

↓

Identify Vulnerabilities

↓

Assess Existing Controls

↓

Determine Likelihood

↓

Determine Business Impact

↓

Calculate Risk Rating

↓

Risk Treatment

↓

Management Approval

↓

Continuous Monitoring
```

---

# Prerequisites

Before beginning the assessment:

- Identify business owner.
- Obtain management approval.
- Define assessment objectives.
- Assemble assessment team.
- Gather existing documentation.
- Schedule stakeholder interviews.

---

# Required Documentation

Collect the following:

- Information Security Policy
- Risk Management Policy
- Asset Inventory
- Network Diagrams
- Cloud Architecture
- IAM Documentation
- Vulnerability Reports
- Previous Risk Assessments
- Audit Reports
- Business Continuity Plan
- Disaster Recovery Plan
- Incident Response Plan

---

# Step 1 — Define Assessment Scope

Document:

- Business Unit
- Applications
- Cloud Environment
- AWS Accounts
- Azure Subscriptions
- Kubernetes Clusters
- Databases
- Third-Party Services
- Critical Business Processes

Questions:

- What systems are included?
- Which locations are covered?
- Which business processes are in scope?

---

# Step 2 — Identify Critical Assets

Create an asset inventory.

Examples:

| Asset | Owner | Criticality |
|--------|-------|-------------|
| Customer Database | DBA Team | Critical |
| AWS IAM | Cloud Team | Critical |
| Amazon S3 | Cloud Team | High |
| Kubernetes Cluster | Platform Team | High |
| Financial Application | Business Owner | Critical |

Every asset should have an assigned owner.

---

# Step 3 — Identify Threats

Identify realistic threats.

Examples include:

### External Threats

- Ransomware
- Phishing
- DDoS
- Credential Theft
- Supply Chain Attack

### Internal Threats

- Insider Threat
- Human Error
- Privilege Misuse
- Configuration Errors

### Environmental Threats

- Power Failure
- Natural Disaster
- Regional Cloud Outage

Document all relevant threats.

---

# Step 4 — Identify Vulnerabilities

Review:

- Vulnerability Scan Results
- Penetration Testing Reports
- Cloud Security Findings
- IAM Reviews
- Patch Status
- Security Configurations

Examples:

- Missing MFA
- Weak Password Policy
- Public Storage Buckets
- Excessive IAM Permissions
- Unencrypted Resources
- Unsupported Software

---

# Step 5 — Evaluate Existing Controls

Identify controls already in place.

Examples:

- MFA
- RBAC
- Encryption
- WAF
- IDS/IPS
- AWS GuardDuty
- AWS Security Hub
- CloudTrail
- Vulnerability Management
- Endpoint Protection

Determine whether controls are:

- Effective
- Partially Effective
- Ineffective
- Missing

---

# Step 6 — Determine Likelihood

Assess the probability of each risk occurring.

Example scale:

| Rating | Description |
|---------|-------------|
| Very Low | Rare |
| Low | Unlikely |
| Medium | Possible |
| High | Likely |
| Critical | Expected |

Consider:

- Threat activity
- Exposure
- Existing controls
- Historical incidents

---

# Step 7 — Assess Business Impact

Evaluate impact across multiple domains.

### Financial

- Revenue Loss
- Recovery Costs
- Regulatory Penalties

### Operational

- Service Outage
- Productivity Loss

### Legal

- Contract Violations
- Litigation

### Reputational

- Customer Trust
- Brand Damage

### Compliance

- Regulatory Findings
- Certification Risks

---

# Step 8 — Calculate Risk Rating

Use the enterprise risk matrix.

| Likelihood | Low | Medium | High |
|------------|-----|--------|------|
| High | Medium | High | Critical |
| Medium | Low | Medium | High |
| Low | Low | Low | Medium |

Classify risks as:

- Critical
- High
- Medium
- Low

---

# Step 9 — Record Risks

Document findings in the Risk Register.

Example:

| Risk ID | Description | Rating | Owner | Status |
|----------|-------------|--------|-------|--------|
| R-001 | Public S3 Bucket | Critical | Cloud Team | Open |
| R-002 | Missing MFA | High | IAM Team | Open |
| R-003 | Legacy Server | Medium | Infrastructure | Planned |

Every risk should include:

- Description
- Business Impact
- Owner
- Target Completion Date
- Current Status

---

# Step 10 — Recommend Risk Treatment

Select one of four treatment options.

## Avoid

Remove the activity creating the risk.

Example:

- Decommission unsupported software.

---

## Mitigate

Reduce likelihood or impact.

Examples:

- Enable MFA
- Patch systems
- Encrypt data
- Restrict IAM permissions

---

## Transfer

Transfer financial responsibility.

Examples:

- Cyber Insurance
- Managed Security Services

---

## Accept

Accept residual risk with formal management approval.

Accepted risks must be documented and reviewed periodically.

---

# Step 11 — Assign Risk Owners

Assign responsibility for remediation.

Example:

| Risk | Owner |
|------|-------|
| IAM Issues | Cloud Team |
| Vendor Risk | Procurement |
| Compliance Gaps | GRC Team |
| Vulnerabilities | Security Operations |
| Backup Failures | Infrastructure Team |

---

# Step 12 — Executive Reporting

Prepare a business-focused summary.

Include:

- Executive Summary
- Scope
- Top Risks
- Risk Trends
- Critical Findings
- Recommended Actions
- Residual Risk
- Overall Risk Rating

Avoid excessive technical details.

---

# Continuous Risk Monitoring

Enterprise risk management is continuous.

Activities include:

- Quarterly Risk Reviews
- Monthly Risk Register Updates
- Annual Enterprise Risk Assessment
- Continuous Vulnerability Monitoring
- Third-Party Risk Reviews
- Cloud Security Assessments
- Compliance Monitoring

---

# Risk Assessment Checklist

Before closing the assessment, verify:

- Scope approved
- Assets identified
- Threats documented
- Vulnerabilities assessed
- Existing controls reviewed
- Likelihood determined
- Business impact evaluated
- Risk ratings assigned
- Treatment recommendations documented
- Risk owners assigned
- Executive report completed

---

# Deliverables

The completed assessment should include:

- Scope Document
- Asset Inventory
- Threat Analysis
- Vulnerability Assessment
- Control Assessment
- Risk Matrix
- Risk Register
- Risk Treatment Plan
- Executive Summary
- Management Approval Record

---

# Common Findings

Typical enterprise findings include:

- Excessive IAM Permissions
- Public Cloud Resources
- Missing MFA
- Weak Vendor Controls
- Incomplete Asset Inventory
- Missing Backup Testing
- Unpatched Systems
- Policy Gaps
- Compliance Issues
- Legacy Infrastructure Risks

---

# Best Practices

Follow these recommendations:

- Align assessments with business objectives.
- Use standardized risk scoring.
- Validate evidence objectively.
- Involve technical and business stakeholders.
- Prioritize high-impact risks.
- Maintain an up-to-date Risk Register.
- Review residual risks regularly.
- Integrate assessments into project lifecycles.
- Automate data collection where possible.
- Continuously improve the methodology.

---

# Success Criteria

The assessment is considered successful when:

- ✔ Assessment scope is approved.
- ✔ Critical assets are identified.
- ✔ Risks are documented and prioritized.
- ✔ Business impact is clearly understood.
- ✔ Risk owners are assigned.
- ✔ Executive management approves treatment plans.
- ✔ Risk Register is updated.
- ✔ Continuous monitoring activities are established.

---

# Summary

This Enterprise Risk Assessment Methodology provides a repeatable, standardized process for identifying, analyzing, evaluating, and managing cybersecurity risks across enterprise environments. By following this methodology, organizations can make informed risk-based decisions, improve governance, strengthen compliance, and enhance overall cyber resilience.

This runbook reflects the methodology commonly used by enterprise security teams, consulting firms, and Fortune 500 organizations to support effective Governance, Risk & Compliance (GRC) programs.

---

# Next Runbook

➡️ **Runbook 03 — Enterprise Compliance & Audit Assessment**

In the final runbook of this module, you'll learn a structured methodology for planning and conducting enterprise compliance assessments and security audits aligned with frameworks such as ISO/IEC 27001, NIST CSF, PCI DSS, SOC 2, GDPR, HIPAA, and the Digital Personal Data Protection (DPDP) Act.