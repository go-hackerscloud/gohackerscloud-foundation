---
title: Lesson 11 — Shared Responsibility Model
description: Learn the Shared Responsibility Model in cloud computing, understand how security responsibilities are divided between cloud providers and customers, and explore the differences across IaaS, PaaS, and SaaS environments.
---

# Lesson 11 — Shared Responsibility Model

## Lesson Overview

One of the biggest misconceptions about cloud computing is:

> **"Once my application is in the cloud, the cloud provider secures everything."**

This is **not true**.

Cloud providers secure the cloud infrastructure, but customers are still responsible for protecting many parts of their own environment.

For example, imagine you launch a virtual machine in AWS.

AWS secures:

- Physical data centers
- Networking hardware
- Storage devices
- Hypervisors

However, **you** are still responsible for:

- Operating system updates
- User accounts
- Firewall rules
- Installed software
- Application security
- Your data

Understanding who is responsible for what is one of the most important skills for every Cloud Engineer and Security Engineer.

This concept is known as the **Shared Responsibility Model**.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand the Shared Responsibility Model.
- Learn provider responsibilities.
- Learn customer responsibilities.
- Compare responsibilities across IaaS, PaaS, and SaaS.
- Understand security ownership.
- Explore real-world scenarios.
- Learn enterprise best practices.
- Apply the Shared Responsibility Model in cloud environments.

---

# What is the Shared Responsibility Model?

The **Shared Responsibility Model** defines how security responsibilities are divided between:

- Cloud Provider
- Customer

Both parties work together to maintain a secure cloud environment.

Simply moving workloads to the cloud does not transfer all security responsibilities to the cloud provider.

---

# Why the Shared Responsibility Model Matters

Without understanding this model, organizations may:

- Leave systems unpatched.
- Misconfigure storage buckets.
- Grant excessive permissions.
- Expose sensitive data.
- Fail compliance audits.
- Experience security incidents.

Understanding responsibilities reduces cloud security risks.

---

# Security of the Cloud vs Security in the Cloud

Cloud providers often describe responsibilities using two concepts.

## Security **of** the Cloud

The cloud provider protects the infrastructure that runs cloud services.

Examples:

- Physical Security
- Data Centers
- Networking Equipment
- Storage Hardware
- Hypervisors
- Power and Cooling

---

## Security **in** the Cloud

Customers secure everything they deploy inside the cloud.

Examples:

- Operating Systems
- Applications
- User Accounts
- IAM Policies
- Data
- Firewall Rules
- Encryption Configuration

---

# Shared Responsibility Overview

```text
Cloud Provider

↓

Physical Infrastructure

Networking

Storage Hardware

Virtualization

↓

Customer

↓

Operating Systems

Applications

Identities

Configurations

Data
```

Security is a shared effort.

---

# Cloud Provider Responsibilities

Cloud providers typically manage:

- Physical Data Centers
- Physical Security
- Servers
- Storage Hardware
- Networking Hardware
- Hypervisors
- Global Infrastructure
- Availability Zones

Customers do not manage these components.

---

# Customer Responsibilities

Customers commonly manage:

- Operating Systems
- Virtual Machines
- Applications
- Databases
- User Accounts
- IAM Policies
- Encryption Keys
- Firewall Rules
- Security Monitoring
- Backups
- Data

Customers remain responsible for securing their workloads.

---

# Shared Responsibility in IaaS

With **Infrastructure as a Service (IaaS)**, customers have the greatest responsibility.

## Cloud Provider

- Physical Infrastructure
- Networking Hardware
- Storage Hardware
- Hypervisor

## Customer

- Operating System
- Applications
- Data
- IAM
- Network Security
- Monitoring
- Backups

Example:

AWS EC2

Azure Virtual Machines

Google Compute Engine

---

# Shared Responsibility in PaaS

With **Platform as a Service (PaaS)**, the cloud provider manages more components.

## Cloud Provider

- Infrastructure
- Operating System
- Runtime
- Middleware

## Customer

- Application Code
- Data
- IAM
- Application Configuration

Example:

AWS Elastic Beanstalk

Azure App Service

Google App Engine

---

# Shared Responsibility in SaaS

With **Software as a Service (SaaS)**, the provider manages almost everything.

## Cloud Provider

- Infrastructure
- Operating Systems
- Applications
- Updates
- Backups

## Customer

- User Accounts
- Passwords
- Data
- Access Permissions
- Security Policies

Example:

Microsoft 365

Google Workspace

Salesforce

---

# Comparing Responsibilities

| Component | IaaS | PaaS | SaaS |
|-----------|------|------|------|
| Physical Infrastructure | Provider | Provider | Provider |
| Operating System | Customer | Provider | Provider |
| Runtime | Customer | Provider | Provider |
| Applications | Customer | Customer | Provider |
| Data | Customer | Customer | Customer |
| Identity & Access | Customer | Customer | Customer |

As cloud services become more managed, customers manage less infrastructure—but they always remain responsible for their identities and data.

---

# Identity Responsibilities

Customers should:

- Create users.
- Assign permissions.
- Enable MFA.
- Implement SSO.
- Apply Least Privilege.
- Rotate credentials.

Identity security is always the customer's responsibility.

---

# Data Protection

Customers must protect:

- Customer Information
- Business Data
- Intellectual Property
- Backups
- Encryption Keys

Cloud providers store the data, but customers decide how it is protected.

---

# Patch Management

Responsibility depends on the service model.

### IaaS

Customer installs operating system patches.

### PaaS

Provider patches the operating system.

Customer updates application code.

### SaaS

Provider manages software updates.

---

# Network Security

Customers are responsible for:

- Security Groups
- Network ACLs
- Firewall Rules
- VPN Configuration
- Private Connectivity

Cloud providers supply networking services, but customers configure them.

---

# Compliance Responsibilities

Compliance is also shared.

Providers offer compliant infrastructure.

Customers must:

- Configure security correctly.
- Protect sensitive data.
- Enable logging.
- Meet regulatory requirements.

Cloud adoption does not eliminate compliance responsibilities.

---

# Real-World Example

A company deploys an application on Amazon EC2.

AWS secures:

- Data Center
- Servers
- Storage Hardware
- Hypervisor

The company secures:

- Linux Operating System
- Application
- Database
- IAM
- Security Groups
- Customer Data

Both parties contribute to overall security.

---

# Common Misunderstandings

Many beginners incorrectly believe:

- AWS patches my Linux server.
- Azure manages my IAM permissions.
- Google Cloud protects my application automatically.
- SaaS providers manage my user accounts.

These assumptions are incorrect.

Understanding ownership prevents security gaps.

---

# Enterprise Best Practices

Professional organizations:

- Understand service-specific responsibilities.
- Apply Least Privilege.
- Enable Multi-Factor Authentication.
- Encrypt sensitive data.
- Monitor workloads continuously.
- Patch operating systems promptly.
- Enable logging and auditing.
- Regularly review security configurations.

These practices strengthen cloud security and compliance.

---

# Common Beginner Mistakes

Avoid:

- Assuming the cloud provider secures your applications.
- Leaving virtual machines unpatched.
- Misconfiguring storage permissions.
- Ignoring IAM reviews.
- Failing to enable MFA.
- Assuming backups happen automatically.

Security responsibilities should always be clearly understood.

---

# Cloud Provider Examples

### AWS

Shared Responsibility Model applies to all AWS services.

### Microsoft Azure

Responsibilities vary based on IaaS, PaaS, and SaaS offerings.

### Google Cloud Platform

Google secures cloud infrastructure while customers secure workloads and data.

Although implementations differ slightly, the shared responsibility principle is consistent across major cloud providers.

---

# Key Takeaways

After completing this lesson, you should understand:

- Shared Responsibility Model
- Security of the Cloud
- Security in the Cloud
- Provider Responsibilities
- Customer Responsibilities
- IaaS Responsibilities
- PaaS Responsibilities
- SaaS Responsibilities
- Compliance
- Identity Security
- Enterprise Best Practices

---

# Summary

The Shared Responsibility Model is one of the most fundamental concepts in cloud computing and cloud security.

Cloud providers secure the underlying infrastructure, while customers remain responsible for securing their operating systems, applications, identities, configurations, and data.

Understanding these responsibilities helps organizations deploy secure cloud environments, reduce security risks, and maintain regulatory compliance across AWS, Microsoft Azure, and Google Cloud Platform.

---

# Next Lesson

➡️ **Lesson 12 — Cloud Governance**

In the next lesson, you'll learn about **Cloud Governance** and explore cloud policies, governance frameworks, resource management, tagging strategies, cost control, compliance, and enterprise governance best practices used to manage cloud environments at scale.