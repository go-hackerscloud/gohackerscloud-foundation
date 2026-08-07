---
title: Module Assessment — Identity & Access Management (IAM)
description: Validate your understanding of Identity & Access Management (IAM), including authentication, authorization, federation, Single Sign-On, RBAC, ABAC, Privileged Access Management, Identity Governance, and Enterprise IAM Architecture.
---

## Assessment Overview

Congratulations!

You have successfully completed **Module 09 — Identity & Access Management (IAM).**

Throughout this module, you learned how modern organizations secure digital identities, authenticate users, authorize access, govern permissions, and implement enterprise identity architectures across cloud, hybrid, and on-premises environments.

This assessment validates your understanding of IAM concepts before progressing to more advanced enterprise security topics.

---

# Assessment Information

| Item | Details |
|------|----------|
| Module | Module 09 — Identity & Access Management |
| Assessment Type | Module Assessment |
| Questions | 40 |
| Question Types | Multiple Choice & Scenario-Based |
| Passing Score | 70% |
| Time Limit | 60 Minutes |
| Difficulty | Beginner to Intermediate |

---

# Skills Being Assessed

This assessment covers:

- IAM Fundamentals
- Authentication
- Authorization
- Multi-Factor Authentication (MFA)
- Identity Federation
- Single Sign-On (SSO)
- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC)
- Privileged Access Management (PAM)
- Identity Governance & Administration (IGA)
- Enterprise IAM Architecture

---

# Assessment Objectives

By completing this assessment, you should be able to:

- Explain core IAM concepts.
- Differentiate authentication and authorization.
- Identify secure authentication methods.
- Understand identity federation and SSO.
- Apply RBAC and ABAC principles.
- Explain privileged access management.
- Understand identity governance processes.
- Describe enterprise IAM architecture and best practices.

---

# Enterprise Scenario

You have recently joined **CloudNova Technologies** as a **Cloud Identity & Security Engineer**.

Your organization is migrating thousands of employees to a centralized Identity & Access Management platform integrated with AWS, Microsoft Azure, Google Cloud, Kubernetes, Microsoft 365, GitHub Enterprise, and ServiceNow.

Before participating in the migration project, your manager asks you to complete this IAM assessment to validate your knowledge of enterprise identity security.

---

# Instructions

Before you begin:

- Read every question carefully.
- Choose the **best** answer.
- Think from an enterprise security perspective.
- Apply Zero Trust and Least Privilege principles.
- Review your answers before submitting.

---

# Section 1 — IAM Fundamentals

## Question 1

What is the primary purpose of Identity & Access Management (IAM)?

- A. Increase network bandwidth
- B. Manage digital identities and control access to resources
- C. Improve database performance
- D. Replace operating systems

> **Answer:** B

---

## Question 2

Which statement best describes a digital identity?

- A. A physical access card
- B. A representation of a user, device, application, or service within a system
- C. A firewall rule
- D. A network cable

> **Answer:** B

---

## Question 3

Which IAM principle ensures users receive only the permissions required to perform their jobs?

- A. Shared Responsibility
- B. Defense in Depth
- C. Least Privilege
- D. Availability

> **Answer:** C

---

## Question 4

Which lifecycle event occurs when an employee changes departments?

- A. Joiner
- B. Leaver
- C. Mover
- D. Reviewer

> **Answer:** C

---

## Question 5

Which component is responsible for verifying user identity?

- A. Authorization
- B. Authentication
- C. Encryption
- D. Logging

> **Answer:** B

---

# Section 2 — Authentication

## Question 6

Authentication answers which question?

- A. What resources exist?
- B. Who are you?
- C. Where is the data stored?
- D. Which network is used?

> **Answer:** B

---

## Question 7

Which authentication factor represents "Something You Have"?

- A. Password
- B. Fingerprint
- C. Hardware Security Key
- D. PIN

> **Answer:** C

---

## Question 8

Which authentication method is considered phishing-resistant?

- A. SMS OTP
- B. Email OTP
- C. FIDO2 Security Key
- D. Shared Password

> **Answer:** C

---

## Question 9

Which protocol is commonly used for modern authentication in web and mobile applications?

- A. FTP
- B. OpenID Connect (OIDC)
- C. SMTP
- D. ICMP

> **Answer:** B

---

## Question 10

Multi-Factor Authentication requires:

- A. One authentication factor
- B. Two or more independent authentication factors
- C. Multiple usernames
- D. Multiple email accounts

> **Answer:** B

---

# Section 3 — Authorization

## Question 11

Authorization determines:

- A. Who the user is
- B. What actions the user is allowed to perform
- C. How passwords are stored
- D. Whether encryption is enabled

> **Answer:** B

---

## Question 12

Which authorization model assigns permissions to roles?

- A. DAC
- B. MAC
- C. RBAC
- D. ACL

> **Answer:** C

---

## Question 13

ABAC evaluates access based on:

- A. Password strength only
- B. User, resource, action, and environment attributes
- C. IP address only
- D. Username length

> **Answer:** B

---

## Question 14

Which principle limits permissions to the minimum required?

- A. Shared Responsibility
- B. Least Privilege
- C. Fail Open
- D. Availability

> **Answer:** B

---

## Question 15

Which authorization model is generally more dynamic?

- A. RBAC
- B. ABAC
- C. DAC
- D. MAC

> **Answer:** B

---

# Section 4 — Identity Federation & SSO

## Question 16

Identity Federation allows:

- A. Multiple firewalls
- B. Users to access multiple systems using a trusted identity
- C. Multiple databases
- D. Multiple operating systems

> **Answer:** B

---

## Question 17

An Identity Provider (IdP) is responsible for:

- A. Managing storage
- B. Authenticating users
- C. Routing traffic
- D. Monitoring databases

> **Answer:** B

---

## Question 18

Which protocol commonly supports enterprise Single Sign-On?

- A. DNS
- B. SAML
- C. SSH
- D. SNMP

> **Answer:** B

---

## Question 19

Single Sign-On enables users to:

- A. Authenticate once and access multiple trusted applications
- B. Create multiple passwords
- C. Disable MFA
- D. Access only one application

> **Answer:** A

---

## Question 20

Which organization component typically provides SSO?

- A. Firewall
- B. Identity Provider
- C. Database Server
- D. Load Balancer

> **Answer:** B

---

# Section 5 — RBAC & ABAC

## Question 21

In RBAC, permissions are assigned to:

- A. Devices
- B. Roles
- C. IP Addresses
- D. Applications

> **Answer:** B

---

## Question 22

Which ABAC attribute represents the context of the request?

- A. Resource
- B. Subject
- C. Environment
- D. Action

> **Answer:** C

---

## Question 23

Which cloud service commonly uses RBAC?

- A. Azure RBAC
- B. DNS Resolver
- C. DHCP Server
- D. FTP Server

> **Answer:** A

---

## Question 24

What is the primary advantage of ABAC?

- A. Dynamic, policy-based access decisions
- B. Faster internet connectivity
- C. Lower storage costs
- D. Simplified networking

> **Answer:** A

---

## Question 25

RBAC simplifies administration by assigning permissions to:

- A. Servers
- B. Applications
- C. Roles
- D. Passwords

> **Answer:** C

---

# Section 6 — Privileged Access Management (PAM)

## Question 26

PAM primarily protects:

- A. Public websites
- B. Privileged accounts and identities
- C. DNS records
- D. Printers

> **Answer:** B

---

## Question 27

Just-in-Time (JIT) access provides:

- A. Permanent administrator privileges
- B. Temporary privileged access when required
- C. Guest access
- D. Anonymous access

> **Answer:** B

---

## Question 28

A Credential Vault is used to:

- A. Store backups
- B. Secure privileged credentials
- C. Store application logs
- D. Host websites

> **Answer:** B

---

## Question 29

Which PAM capability records administrator sessions?

- A. Session Recording
- B. Password Sharing
- C. Network Routing
- D. Data Compression

> **Answer:** A

---

## Question 30

Which Microsoft service provides privileged role management?

- A. Microsoft Teams
- B. Microsoft Entra Privileged Identity Management (PIM)
- C. Microsoft Word
- D. Microsoft Defender Antivirus

> **Answer:** B

---

# Section 7 — Identity Governance & Enterprise IAM

## Question 31

IGA stands for:

- A. Identity Governance & Administration
- B. Integrated Global Authentication
- C. Internet Gateway Access
- D. Identity Group Assignment

> **Answer:** A

---

## Question 32

Which process removes user access after employment ends?

- A. Provisioning
- B. Federation
- C. Deprovisioning
- D. Authentication

> **Answer:** C

---

## Question 33

Access Reviews help organizations:

- A. Increase storage capacity
- B. Verify users still require assigned permissions
- C. Improve internet speed
- D. Configure routers

> **Answer:** B

---

## Question 34

Segregation of Duties (SoD) helps prevent:

- A. Data compression
- B. Fraud and conflicting responsibilities
- C. Hardware failures
- D. Network congestion

> **Answer:** B

---

## Question 35

Which IAM architecture component stores identity information?

- A. Directory Service
- B. Firewall
- C. VPN
- D. Proxy Server

> **Answer:** A

---

# Section 8 — Enterprise IAM Architecture

## Question 36

Which component typically performs user authentication?

- A. Identity Provider
- B. Router
- C. Database
- D. Switch

> **Answer:** A

---

## Question 37

Zero Trust identity architecture follows which principle?

- A. Trust Internal Users Automatically
- B. Never Trust, Always Verify
- C. Authenticate Only Once
- D. Disable MFA

> **Answer:** B

---

## Question 38

Which enterprise IAM capability simplifies access to multiple applications?

- A. DHCP
- B. Single Sign-On
- C. VLAN
- D. NAT

> **Answer:** B

---

## Question 39

Which enterprise practice improves identity security?

- A. Shared Administrator Accounts
- B. Periodic Access Reviews
- C. Permanent Privileged Access
- D. Disabled Logging

> **Answer:** B

---

## Question 40

Which statement best describes Enterprise IAM Architecture?

- A. It focuses only on passwords.
- B. It provides a centralized framework for managing identities, authentication, authorization, governance, and secure access across enterprise systems.
- C. It replaces cybersecurity.
- D. It manages only cloud storage.

> **Answer:** B

---

# Assessment Summary

Congratulations on completing the **Identity & Access Management (IAM) Module Assessment**.

If you achieved a score of **70% or higher**, you have demonstrated a solid understanding of:

- IAM Fundamentals
- Authentication
- Authorization
- Multi-Factor Authentication (MFA)
- Identity Federation
- Single Sign-On (SSO)
- Role-Based Access Control (RBAC)
- Attribute-Based Access Control (ABAC)
- Privileged Access Management (PAM)
- Identity Governance & Administration (IGA)
- Enterprise IAM Architecture

These concepts form the identity security foundation required for securing enterprise, cloud, and hybrid environments.

---

# Congratulations!

🎉 You have successfully completed **Module 09 — Identity & Access Management (IAM).**

You now understand how enterprise organizations securely manage identities, authenticate users, authorize access, govern permissions, and protect privileged accounts across modern IT environments.

This knowledge is essential for Cloud Security Engineers, IAM Engineers, DevSecOps Engineers, Security Architects, SOC Analysts, and GRC professionals.

---

# What's Next?

➡️ **Module 10 — Cryptography Fundamentals**

In the next module, you'll explore the foundations of cryptography and learn how modern organizations protect sensitive information, communications, and digital identities through encryption and cryptographic technologies.

You'll learn about:

- Cryptography Fundamentals
- Symmetric Encryption
- Asymmetric Encryption
- Hashing Algorithms
- Digital Signatures
- Public Key Infrastructure (PKI)
- TLS & SSL
- Certificates & Certificate Authorities
- Key Management
- Cryptography in Cloud Computing
- Enterprise Cryptography Best Practices

Cryptography is one of the most important pillars of cybersecurity. It protects data at rest, data in transit, digital identities, cloud workloads, financial transactions, and secure communications across enterprise environments.

Welcome to **Module 10 — Cryptography Fundamentals!** 🔐