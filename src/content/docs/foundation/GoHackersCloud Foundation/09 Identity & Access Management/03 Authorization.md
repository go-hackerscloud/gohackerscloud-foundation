---
title: Lesson 03 — Authorization
description: Learn the fundamentals of authorization, understand access control models, permissions, least privilege, policy enforcement, and enterprise authorization used across cloud, Kubernetes, and modern applications.
---
## Lesson Overview

Imagine you've successfully logged into your organization's cloud environment.

Authentication has already verified your identity.

Now the system must answer another critical question:

> **"What are you allowed to do?"**

Although every employee can log into the corporate environment, not everyone should have the same level of access.

For example:

- A Developer should deploy applications.
- An HR employee should access payroll systems.
- A Finance Manager should approve payments.
- A Security Administrator should manage security policies.
- A Database Administrator should maintain databases.

Authentication proves **who you are**.

Authorization determines **what you can access and what actions you are allowed to perform.**

Authorization is one of the most important components of Identity & Access Management (IAM) and is essential for implementing **Least Privilege** and **Zero Trust**.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand authorization.
- Differentiate authentication from authorization.
- Learn enterprise authorization models.
- Understand permissions and access rights.
- Explore access control mechanisms.
- Learn policy-based authorization.
- Understand cloud authorization.
- Apply enterprise authorization best practices.

---

# What is Authorization?

**Authorization** is the process of determining what actions an authenticated identity is allowed to perform.

Authorization answers one question:

> **"What are you allowed to do?"**

Authorization happens **after successful authentication**.

---

# Why Authorization Matters

Organizations implement authorization to:

- Protect sensitive resources.
- Prevent unauthorized actions.
- Reduce insider threats.
- Enforce Least Privilege.
- Support Zero Trust.
- Meet regulatory compliance.
- Protect business-critical systems.

Authorization ensures users only perform approved actions.

---

# Authentication vs Authorization

Although closely related, they serve different purposes.

## Authentication

Verifies identity.

Question answered:

> **Who are you?**

Examples:

- Password
- MFA
- Biometrics

---

## Authorization

Determines permissions.

Question answered:

> **What can you do?**

Examples:

- Read files
- Create users
- Delete databases
- Deploy applications

Authentication always occurs before authorization.

---

# Authorization Process

A typical authorization workflow looks like this:

```text
User Login

↓

Authentication

↓

Identity Verified

↓

Authorization Policy

↓

Access Granted or Denied
```

Authorization evaluates permissions before allowing access.

---

# Permissions

Permissions define specific actions a user can perform.

Examples:

- Read
- Write
- Modify
- Delete
- Execute
- Create
- Manage

Permissions should be assigned based on business requirements.

---

# Access Rights

Access rights determine which resources users may access.

Examples:

- HR Database
- AWS Account
- Azure Subscription
- GitHub Repository
- Kubernetes Cluster
- Financial System

Different users receive different levels of access.

---

# Principle of Least Privilege

The **Principle of Least Privilege (PoLP)** states that users should receive only the minimum permissions necessary to perform their jobs.

Example:

```text
Developer

↓

Deploy Applications

×

Cannot Manage Payroll

×

Cannot Delete Production Database
```

Least Privilege significantly reduces organizational risk.

---

# Separation of Duties

Critical responsibilities should be divided among multiple individuals.

Example:

```text
Developer

↓

Code Review

↓

Security Approval

↓

Production Deployment
```

This reduces the likelihood of fraud, mistakes, and insider abuse.

---

# Access Control Models

Organizations implement several authorization models.

Examples include:

- Discretionary Access Control (DAC)
- Mandatory Access Control (MAC)
- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC)

Each model is designed for different business requirements.

---

# Discretionary Access Control (DAC)

The resource owner decides who receives access.

Example:

A document owner shares a file with specific coworkers.

DAC provides flexibility but requires careful management.

---

# Mandatory Access Control (MAC)

Access decisions are based on security classifications.

Example:

```text
Top Secret

↓

Secret

↓

Confidential

↓

Public
```

MAC is commonly used in military and government environments.

---

# Role-Based Access Control (RBAC)

Permissions are assigned to roles instead of individual users.

Example:

```text
Cloud Administrator

↓

Manage Cloud Resources

Developer

↓

Deploy Applications

HR Manager

↓

Access Employee Records
```

RBAC simplifies access management and improves consistency.

---

# Attribute-Based Access Control (ABAC)

Access decisions are based on attributes.

Examples include:

- User Role
- Department
- Device Type
- Location
- Time of Day
- Security Clearance

ABAC provides highly dynamic and context-aware authorization.

---

# Policy-Based Authorization

Enterprise environments use policies to define access rules.

Example:

```text
If:

User Department = Finance

AND

MFA Successful

AND

Corporate Device

↓

Grant Access
```

Policies enable automated authorization decisions.

---

# Authorization in Cloud Computing

Cloud providers implement authorization using policies and roles.

### AWS

- IAM Policies
- IAM Roles
- Resource Policies

### Microsoft Azure

- Azure RBAC
- Conditional Access

### Google Cloud

- Cloud IAM Roles
- IAM Policies

Cloud authorization follows the Principle of Least Privilege.

---

# Authorization in Kubernetes

Kubernetes authorization commonly uses:

- RBAC
- ABAC
- Admission Controllers
- Namespace Isolation

Authorization protects Kubernetes resources from unauthorized access.

---

# Authorization in DevSecOps

DevSecOps teams enforce authorization by:

- Limiting pipeline permissions.
- Protecting production environments.
- Restricting secret access.
- Using temporary credentials.
- Automating policy enforcement.

Secure authorization protects software delivery pipelines.

---

# Authorization in Artificial Intelligence

AI systems authorize access to:

- AI Models
- Training Datasets
- APIs
- GPU Resources
- Administrative Functions

Proper authorization protects AI platforms from misuse.

---

# Enterprise Authorization Architecture

A simplified authorization flow looks like this:

```text
User

↓

Authentication

↓

Identity Verified

↓

Authorization Engine

↓

Policy Evaluation

↓

Access Granted

↓

Activity Logged
```

Every access request is evaluated before permissions are granted.

---

# Common Authorization Attacks

Attackers attempt to bypass authorization using:

- Privilege Escalation
- Broken Access Control
- Insecure Direct Object References (IDOR)
- Excessive Permissions
- Session Manipulation
- Token Theft

Proper authorization controls help prevent these attacks.

---

# Common Beginner Mistakes

Avoid:

- Granting administrator access unnecessarily.
- Sharing privileged accounts.
- Forgetting to remove unused permissions.
- Assigning permissions directly to users instead of roles.
- Ignoring periodic access reviews.
- Giving permanent elevated privileges.

Authorization should always follow Least Privilege.

---

# Enterprise Best Practices

Professional organizations:

- Apply Least Privilege.
- Use Role-Based Access Control.
- Perform regular access reviews.
- Remove unused permissions.
- Automate authorization policies.
- Monitor privileged activity.
- Separate administrative duties.
- Log all authorization decisions.

These practices strengthen enterprise identity security.

---

# Real-World Example

A Cloud Engineer requests access to an AWS production account.

```text
User Login

↓

Authentication

↓

Role Evaluation

↓

IAM Policy Check

↓

Authorization Granted

↓

Cloud Resource Access

↓

Activity Logged
```

Only users with the appropriate role and permissions are allowed to perform administrative actions.

---

# Key Takeaways

After completing this lesson, you should understand:

- Authorization
- Permissions
- Access Rights
- Least Privilege
- Separation of Duties
- DAC
- MAC
- RBAC
- ABAC
- Policy-Based Authorization
- Enterprise Authorization

---

# Summary

Authorization determines what authenticated users are permitted to access and what actions they may perform.

By implementing strong authorization models such as RBAC and ABAC, enforcing Least Privilege, and continuously reviewing permissions, organizations reduce security risks while enabling employees to work efficiently.

Authorization is a critical component of Identity and Access Management and is essential for securing cloud platforms, enterprise applications, Kubernetes environments, APIs, and modern Zero Trust architectures.

---

# Next Lesson

➡️ **Lesson 04 — Multi-Factor Authentication (MFA)**

In the next lesson, you'll learn how Multi-Factor Authentication strengthens identity security by requiring multiple verification factors. You'll explore MFA methods, authentication apps, hardware security keys, adaptive authentication, phishing-resistant MFA, and enterprise best practices for protecting user accounts.