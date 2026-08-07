---
title: Lesson 10 — Identity Governance & Administration (IGA)
description: Learn the fundamentals of Identity Governance & Administration (IGA), understand identity lifecycle management, access reviews, segregation of duties, compliance, and enterprise identity governance across cloud and hybrid environments.
---
## Lesson Overview

Imagine a multinational organization with:

- 75,000 Employees
- 5,000 Contractors
- 2,000 Vendors
- Hundreds of Applications
- Multiple AWS Accounts
- Azure Subscriptions
- Google Cloud Projects
- Kubernetes Clusters

Every day:

- New employees join
- Employees change departments
- Contractors complete projects
- Vendors receive temporary access
- Employees leave the organization

If identities and permissions are not properly managed, organizations face risks such as:

- Orphaned Accounts
- Excessive Permissions
- Compliance Violations
- Insider Threats
- Unauthorized Access

Managing identities manually quickly becomes impossible.

Enterprise organizations solve this challenge using **Identity Governance & Administration (IGA).**

IGA provides the governance, automation, visibility, and compliance needed to manage digital identities throughout their entire lifecycle.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Identity Governance & Administration (IGA).
- Learn identity lifecycle management.
- Understand provisioning and deprovisioning.
- Explore access reviews and certifications.
- Learn Segregation of Duties (SoD).
- Understand IGA in cloud environments.
- Explore enterprise governance.
- Apply IGA best practices.

---

# What is Identity Governance & Administration?

**Identity Governance & Administration (IGA)** is the process of governing, managing, auditing, and automating digital identities and their access throughout the identity lifecycle.

IGA ensures that:

- The right people
- Receive the right access
- At the right time
- For the right business purpose
- While maintaining compliance

IGA combines governance with operational identity management.

---

# Why IGA Matters

Organizations implement IGA to:

- Improve security.
- Reduce insider threats.
- Automate identity management.
- Support compliance.
- Improve audit readiness.
- Reduce administrative effort.
- Enforce Least Privilege.

IGA provides visibility into who has access to what—and why.

---

# Identity Lifecycle

Identity Governance begins with managing the complete lifecycle of every identity.

```text
Join

↓

Provision

↓

Modify

↓

Review

↓

Suspend

↓

Deprovision

↓

Archive
```

Every identity follows this lifecycle.

---

# Joiner, Mover & Leaver (JML)

IGA automates identity changes.

### Joiner

A new employee joins the organization.

Examples:

- Create account
- Assign role
- Enable MFA
- Grant business access

---

### Mover

An employee changes departments.

Examples:

- Remove previous permissions
- Assign new role
- Update groups
- Modify cloud access

---

### Leaver

An employee leaves the organization.

Examples:

- Disable accounts
- Remove privileged access
- Revoke VPN access
- Delete cloud sessions
- Archive identity

Rapid deprovisioning reduces insider risk.

---

# Identity Provisioning

Provisioning is the automated creation of user accounts and permissions.

Typical provisioning includes:

- Email Account
- Active Directory
- AWS IAM
- Azure Entra ID
- Microsoft 365
- GitHub
- VPN
- HR Applications

Automation improves accuracy and consistency.

---

# Identity Deprovisioning

Deprovisioning removes access when it is no longer required.

Activities include:

- Disable user accounts
- Remove group memberships
- Delete privileged roles
- Terminate cloud sessions
- Revoke API tokens
- Archive audit records

Immediate deprovisioning prevents unauthorized access.

---

# Access Reviews

Organizations regularly verify that users still require their assigned permissions.

Typical review questions include:

- Does this user still need access?
- Is the assigned role correct?
- Are privileged permissions justified?
- Has the employee changed departments?

Access reviews help eliminate unnecessary permissions.

---

# Access Certification

Access Certification is a formal approval process where managers verify that users require continued access.

Typical workflow:

```text
Access Report

↓

Manager Review

↓

Approve or Revoke

↓

Update Permissions

↓

Audit Record
```

Access certification supports regulatory compliance.

---

# Segregation of Duties (SoD)

Segregation of Duties prevents a single individual from performing conflicting business activities.

Example:

❌ One employee should not:

- Create Vendor
- Approve Payment
- Release Funds

Instead:

```text
Finance Officer

↓

Manager Approval

↓

Accounts Payable

↓

Payment Released
```

SoD reduces fraud and operational risk.

---

# Role Mining

Role Mining analyzes existing permissions to identify common access patterns.

Benefits include:

- Create standardized roles
- Reduce duplicate permissions
- Simplify RBAC implementation
- Improve governance

Role mining improves long-term access management.

---

# Birthright Access

Birthright Access is automatically assigned based on a user's job function.

Example:

A new HR employee automatically receives access to:

- HR Portal
- Payroll System
- Email
- Microsoft Teams

Additional permissions require approval.

---

# Identity Governance in Cloud Computing

Cloud IGA manages identities across:

### AWS

- IAM Identity Center
- IAM Roles
- AWS Organizations

### Microsoft Azure

- Microsoft Entra ID Governance
- Access Reviews
- Entitlement Management
- Lifecycle Workflows

### Google Cloud

- Cloud Identity
- IAM
- Workforce Identity

IGA ensures consistent governance across cloud environments.

---

# Identity Governance in Kubernetes

IGA supports Kubernetes through:

- RBAC Reviews
- Namespace Access Reviews
- Service Account Governance
- Cluster Role Audits
- Privileged Access Reviews

Governance reduces excessive cluster permissions.

---

# Identity Governance in DevSecOps

IGA secures development environments by governing:

- GitHub Teams
- GitLab Groups
- Jenkins Access
- CI/CD Pipelines
- Container Registries
- Infrastructure as Code Platforms

Identity governance extends throughout the software lifecycle.

---

# Identity Governance in Artificial Intelligence

AI environments require governance over:

- AI Developers
- Data Scientists
- Model Administrators
- GPU Resources
- Training Datasets
- AI APIs

IGA ensures sensitive AI resources remain properly controlled.

---

# Enterprise IGA Architecture

A simplified IGA architecture:

```text
HR System

↓

IGA Platform

↓

Identity Lifecycle

↓

Provisioning

↓

Access Reviews

↓

Applications

↓

Audit & Compliance
```

IGA integrates business processes with technical identity management.

---

# Enterprise IGA Solutions

Common enterprise IGA platforms include:

- Microsoft Entra ID Governance
- SailPoint Identity Security Cloud
- Saviynt Enterprise Identity Cloud
- One Identity Manager
- IBM Security Verify Governance
- Oracle Identity Governance

These platforms automate identity governance at enterprise scale.

---

# Benefits of IGA

Organizations implementing IGA gain:

- Centralized Identity Governance
- Automated Provisioning
- Improved Compliance
- Better Audit Readiness
- Reduced Insider Risk
- Stronger Access Control
- Reduced Administrative Effort
- Improved Visibility

IGA improves both security and operational efficiency.

---

# Common Beginner Mistakes

Avoid:

- Leaving employee accounts active after termination.
- Skipping access reviews.
- Ignoring Segregation of Duties conflicts.
- Assigning permanent privileged access.
- Managing identities manually.
- Failing to document approval processes.

Strong governance requires continuous oversight.

---

# Enterprise Best Practices

Professional organizations:

- Automate Joiner, Mover & Leaver processes.
- Conduct periodic access reviews.
- Implement Segregation of Duties policies.
- Automate provisioning and deprovisioning.
- Review privileged access frequently.
- Maintain complete audit trails.
- Integrate HR and IAM systems.
- Continuously improve identity governance processes.

These practices strengthen enterprise identity security and simplify compliance.

---

# Real-World Example

A new employee joins CloudNova Technologies.

```text
HR Creates Employee Record

↓

IGA Platform Detects New User

↓

Microsoft Entra ID Account Created

↓

Cloud Engineer Role Assigned

↓

AWS IAM Role Provisioned

↓

Microsoft 365 Access Granted

↓

MFA Enabled

↓

Manager Approval Logged

↓

Continuous Governance
```

The employee receives only the required access, while every action is recorded for auditing and compliance.

---

# Key Takeaways

After completing this lesson, you should understand:

- Identity Governance & Administration (IGA)
- Identity Lifecycle
- Joiner, Mover & Leaver (JML)
- Provisioning
- Deprovisioning
- Access Reviews
- Access Certification
- Segregation of Duties (SoD)
- Role Mining
- Enterprise Identity Governance

---

# Summary

Identity Governance & Administration (IGA) enables organizations to manage digital identities securely throughout their lifecycle while maintaining governance, compliance, and operational efficiency.

By automating provisioning, enforcing access reviews, implementing Segregation of Duties, and integrating with cloud and enterprise systems, organizations reduce security risks, improve audit readiness, and ensure users have the appropriate access at the right time.

IGA is a foundational capability for IAM Engineers, Cloud Security Engineers, Security Architects, GRC Professionals, DevSecOps Engineers, and Enterprise Identity teams responsible for securing modern organizations.

---

# Next Lesson

➡️ **Lesson 11 — Enterprise IAM Architecture**

In the next lesson, you'll learn how enterprise organizations design scalable **Identity & Access Management (IAM) Architectures**. You'll explore identity ecosystems, identity providers, directories, authentication services, federation, privileged access, governance integration, and Zero Trust identity architecture across cloud, hybrid, and on-premises environments.