---
title: Lesson 03 — Windows Users & Groups
description: Learn how Windows manages local users and groups, understand security principals, user profiles, group memberships, built-in accounts, and role-based access control used in enterprise Windows environments.
---

# Lesson 03 — Windows Users & Groups

## Lesson Overview

Imagine joining a new company on your first day.

Your IT administrator creates:

- Your Windows account
- Your email account
- Your Active Directory account
- Your department access
- Your shared drive permissions
- Your VPN access

Within minutes, you're able to access only the resources you need.

How?

Through **Windows Users & Groups**.

Windows uses user accounts and security groups to control authentication, authorization, and resource access across workstations, servers, and enterprise environments.

Whether you're a Windows Administrator, Cloud Engineer, SOC Analyst, or Cybersecurity Professional, understanding users and groups is one of the most important Windows administration skills.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows user accounts.
- Differentiate between local and domain users.
- Learn Windows security principals.
- Manage local users and groups.
- Understand built-in accounts.
- Explore group memberships.
- Apply enterprise identity management best practices.

---

# What is a Windows User?

A **Windows User** is a digital identity that allows a person or service to log in to a Windows system.

A user account contains:

- Username
- Password
- Security Identifier (SID)
- User Profile
- Group Memberships
- Permissions

Windows uses this identity to determine what a user can access.

---

# Why User Accounts Matter

User accounts provide:

- Authentication
- Authorization
- Accountability
- Auditing
- Access Control

Without user accounts, Windows cannot secure resources or track user activity.

---

# Types of Windows User Accounts

Windows supports multiple types of user accounts.

### Local User

Stored on a single computer.

Example:

```text
PC-01

↓

Administrator

↓

Student

↓

Support
```

Local users can only access that specific computer.

---

### Domain User

Stored in **Active Directory**.

Example:

```text
Active Directory

↓

rohit@gohackerscloud.com

↓

Login to Any Company Computer
```

Domain users are common in enterprise environments.

---

### Microsoft Account

Used for personal Windows devices.

Examples:

- Outlook.com
- Hotmail.com
- Live.com

Enterprise organizations typically use Active Directory instead.

---

# Local vs Domain Users

| Local User | Domain User |
|------------|-------------|
| Stored on one computer | Stored in Active Directory |
| Limited to one system | Can log in across the organization |
| Managed locally | Centrally managed |
| Suitable for standalone PCs | Used in enterprise environments |

---

# Windows Security Identifier (SID)

Every Windows user receives a unique **Security Identifier (SID).**

Example:

```text
S-1-5-21-3623811015-3361044348-30300820-1013
```

Windows internally uses the SID—not the username—to identify users.

Even if a username changes, the SID remains the same.

---

# User Profiles

Each Windows user has a profile.

Default location:

```text
C:\Users\
```

Example:

```text
C:\Users\Administrator

C:\Users\John

C:\Users\Student
```

The profile stores:

- Desktop
- Documents
- Downloads
- Pictures
- User settings
- Application preferences

---

# Built-in Windows Accounts

Windows includes several built-in accounts.

### Administrator

The highest privileged local account.

Capabilities include:

- Install software
- Manage users
- Change system settings
- Manage security
- Configure networking

---

### Guest

Provides temporary access with very limited permissions.

Most enterprise organizations disable the Guest account.

---

### SYSTEM Account

An internal Windows account used by the operating system.

Characteristics:

- Highest system privileges
- Cannot be used for interactive logon
- Runs many Windows services

---

# Windows Groups

A **Group** is a collection of user accounts that share permissions.

Instead of assigning permissions to each individual user, administrators assign permissions to groups.

Example:

```text
IT Department

↓

Administrators Group

↓

Helpdesk Group

↓

Developers Group
```

Groups simplify administration and improve consistency.

---

# Built-in Windows Groups

Common built-in groups include:

| Group | Purpose |
|--------|----------|
| Administrators | Full system control |
| Users | Standard users |
| Backup Operators | Backup and restore |
| Remote Desktop Users | Remote access |
| Power Users | Legacy administrative tasks |
| Guests | Limited access |

---

# Group Membership

A user can belong to multiple groups.

Example:

```text
John

↓

Users

↓

Remote Desktop Users

↓

Developers
```

Windows combines permissions from all assigned groups.

---

# Authentication

Authentication answers:

> **Who are you?**

Windows verifies:

- Username
- Password
- Smart Card
- Windows Hello
- Multi-Factor Authentication (MFA)

Only authenticated users are allowed to continue.

---

# Authorization

Authorization answers:

> **What are you allowed to do?**

Windows evaluates:

- Group Membership
- NTFS Permissions
- Security Policies
- User Rights

This determines what resources a user can access.

---

# Managing Local Users

Open Local Users and Groups.

```text
lusrmgr.msc
```

Administrators can:

- Create users
- Delete users
- Disable accounts
- Reset passwords
- Manage group memberships

---

# Computer Management

Another management console is:

```text
compmgmt.msc
```

Navigate to:

```text
Computer Management

↓

Local Users and Groups
```

This interface is commonly used by Windows administrators.

---

# Creating a Local User (PowerShell)

Create a new user.

```powershell
New-LocalUser -Name "Student01"
```

Set a password.

```powershell
Set-LocalUser
```

PowerShell simplifies user administration and automation.

---

# Viewing Local Users

Display local users.

```powershell
Get-LocalUser
```

Example output:

```text
Administrator

Guest

Student01
```

---

# Viewing Local Groups

Display local groups.

```powershell
Get-LocalGroup
```

---

# Adding a User to a Group

Example:

```powershell
Add-LocalGroupMember `
-Group "Administrators" `
-Member "Student01"
```

Administrators should grant elevated privileges only when required.

---

# Account Security Best Practices

Good account management includes:

- Use unique user accounts.
- Disable unused accounts.
- Remove temporary accounts.
- Enforce strong passwords.
- Enable MFA where possible.
- Review privileged accounts regularly.
- Avoid shared accounts.

Identity management is one of the most important aspects of Windows security.

---

# Windows Users in Cloud Computing

Cloud platforms use Windows identities extensively.

Examples:

### Microsoft Azure

- Microsoft Entra ID
- Azure Virtual Machines
- Azure RBAC

### AWS

- Windows EC2
- AWS Managed Microsoft AD
- IAM Identity Center integration

Cloud administrators frequently manage Windows identities across hybrid environments.

---

# Windows Users in Cybersecurity

Security teams investigate:

- Failed logins
- Privileged accounts
- Disabled accounts
- Suspicious account creation
- Password changes
- Group membership modifications

Compromised user accounts are one of the most common attack vectors.

---

# Useful Windows Commands

Display current user:

```powershell
whoami
```

Display current user's groups:

```powershell
whoami /groups
```

Display local users:

```powershell
Get-LocalUser
```

Display local groups:

```powershell
Get-LocalGroup
```

Display logged-in user information:

```powershell
whoami /all
```

---

# Real-World Example

A new employee joins the organization.

The IT team performs the following tasks:

```text
Create Active Directory Account

↓

Assign Department Groups

↓

Create Windows Profile

↓

Assign File Permissions

↓

Enable VPN Access

↓

Issue Laptop

↓

Employee Logs In Successfully
```

This onboarding workflow is common across enterprise environments.

---

# Best Practices

As a Windows administrator:

- Follow the Principle of Least Privilege.
- Use groups instead of assigning permissions to individuals.
- Disable unused accounts.
- Review privileged users regularly.
- Require strong passwords and MFA.
- Avoid using the built-in Administrator account for daily work.
- Audit group memberships.
- Document account changes.

Strong identity management improves both security and operational efficiency.

---

# Key Takeaways

After completing this lesson, you should understand:

- Windows user accounts.
- Local vs Domain users.
- Security Identifiers (SIDs).
- User profiles.
- Built-in accounts.
- Windows groups.
- Authentication and authorization.
- Enterprise identity management.

---

# Summary

Windows Users & Groups form the foundation of identity and access management in Microsoft environments.

By understanding user accounts, group memberships, authentication, and authorization, you'll be able to securely administer Windows workstations, servers, Active Directory environments, and cloud infrastructure.

These concepts prepare you for enterprise Windows administration, Active Directory, Azure, cloud security, and cybersecurity operations.

---

# Next Lesson

➡️ **Lesson 04 — Active Directory Fundamentals**

In the next lesson, you'll learn the fundamentals of Microsoft Active Directory, including domains, domain controllers, Organizational Units (OUs), Group Policy, authentication, and centralized identity management used by enterprise organizations.