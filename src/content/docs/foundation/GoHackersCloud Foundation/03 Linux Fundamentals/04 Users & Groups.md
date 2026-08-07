---
title: Lesson 04 — Linux Users & Groups
description: Learn how Linux manages users and groups, understand authentication and authorization, create and manage user accounts, and implement best practices for identity management in enterprise Linux environments.
---
## Lesson Overview

Imagine a company with 2,000 employees.

Not everyone should have access to every system or file.

- HR employees should only access HR systems.
- Finance staff should access financial applications.
- Developers should deploy applications.
- System administrators should manage servers.

Linux follows the same principle.

Every person who logs into a Linux system has a **User Account**, and every user belongs to one or more **Groups**.

Users and Groups are the foundation of Linux security because they determine **who can log in, what they can access, and what actions they are allowed to perform.**

Whether you're managing AWS EC2 instances, Kubernetes nodes, enterprise Linux servers, or cybersecurity labs, you'll work with Linux users and groups every day.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain Linux users and groups.
- Understand authentication and authorization.
- Differentiate between root and regular users.
- Create, modify, and delete users.
- Manage Linux groups.
- Understand user-related configuration files.
- Apply enterprise identity management best practices.

---

# What is a Linux User?

A **Linux User** represents a person, application, or service that can log in to the operating system.

Every user has:

- Username
- User ID (UID)
- Home Directory
- Default Shell
- Password
- Group Membership

Example:

```text
Username:

student
```

---

# Why Users are Important

Users help Linux:

- Authenticate identities
- Protect files
- Separate workloads
- Apply permissions
- Audit system activity

Without user accounts, Linux would not be able to securely manage access.

---

# Types of Linux Users

Linux generally has three types of users.

## Root User

The **root** user is the system administrator.

Capabilities include:

- Install software
- Create users
- Delete users
- Modify any file
- Configure networking
- Manage services

Root has unrestricted access.

---

## Regular Users

Regular users perform everyday tasks.

Examples:

```text
student

developer

john

alice
```

Regular users have limited privileges.

---

## System Users

System users run applications and services.

Examples:

```text
nginx

mysql

postgres

docker
```

These users usually cannot log in interactively.

---

# User IDs (UID)

Every user has a unique **User ID (UID).**

Example:

| User | UID |
|------|----:|
| root | 0 |
| student | 1000 |
| developer | 1001 |

Linux identifies users internally by UID rather than username.

---

# Root User

The root account has:

UID:

```text
0
```

Root can:

- Read every file
- Modify every file
- Delete any file
- Manage all users
- Shut down the system

Because of its power, administrators should use the root account only when necessary.

---

# Home Directory

Each user receives a home directory.

Example:

```text
/home/student

/home/alice

/home/john
```

The root user has:

```text
/root
```

Users typically store personal files in their home directory.

---

# User Shell

A user's shell is the program that interprets commands.

Common shells include:

- Bash
- Zsh
- Fish
- Dash

View your current shell:

```bash
echo $SHELL
```

---

# Linux Groups

A **Group** is a collection of users who share permissions.

Example:

```text
Developers

├── Alice

├── John

└── Bob
```

Instead of assigning permissions to every individual user, administrators assign permissions to groups.

---

# Primary and Secondary Groups

Each user belongs to:

## Primary Group

The user's default group.

Example:

```text
student
```

↓

```text
student
```

---

## Secondary Groups

Additional groups providing extra permissions.

Example:

```text
student

↓

docker

↓

sudo

↓

developers
```

---

# Viewing Current User

Display the logged-in user.

```bash
whoami
```

Example output:

```text
student
```

---

# Viewing User Information

Display user identity.

```bash
id
```

Example:

```text
uid=1000(student)

gid=1000(student)

groups=1000(student),27(sudo)
```

---

# View Logged-in Users

Display active users.

```bash
who
```

or

```bash
w
```

These commands are useful on multi-user servers.

---

# User Configuration Files

Linux stores user information in several important files.

## /etc/passwd

Contains:

- Username
- UID
- GID
- Home Directory
- Login Shell

View:

```bash
cat /etc/passwd
```

---

## /etc/shadow

Stores encrypted passwords.

Example:

```bash
sudo cat /etc/shadow
```

Only privileged users can read this file.

---

## /etc/group

Stores group information.

View:

```bash
cat /etc/group
```

---

# Creating Users

Create a new user.

```bash
sudo useradd student1
```

Create a home directory automatically.

```bash
sudo useradd -m student1
```

Set a password.

```bash
sudo passwd student1
```

---

# Modifying Users

Change a username.

```bash
sudo usermod -l newuser olduser
```

Change the home directory.

```bash
sudo usermod -d /home/newuser newuser
```

Add a user to a group.

```bash
sudo usermod -aG docker student1
```

---

# Deleting Users

Delete a user.

```bash
sudo userdel student1
```

Delete a user and their home directory.

```bash
sudo userdel -r student1
```

---

# Creating Groups

Create a new group.

```bash
sudo groupadd developers
```

Display groups.

```bash
getent group
```

---

# Adding Users to Groups

Add a user.

```bash
sudo usermod -aG developers student1
```

Verify:

```bash
groups student1
```

---

# Removing Users from Groups

Remove a user.

```bash
sudo gpasswd -d student1 developers
```

---

# Sudo Privileges

Linux administrators rarely log in directly as root.

Instead, they use:

```bash
sudo
```

Example:

```bash
sudo apt update
```

This executes a command with elevated privileges.

---

# Authentication vs Authorization

Authentication answers:

> **Who are you?**

Authorization answers:

> **What are you allowed to do?**

Linux uses both together to secure systems.

---

# Enterprise Identity Management

Large organizations integrate Linux with centralized identity systems.

Examples include:

- Microsoft Active Directory
- LDAP
- FreeIPA
- Red Hat Identity Management (IdM)
- Microsoft Entra ID

Benefits:

- Centralized authentication
- Single Sign-On (SSO)
- Easier user management
- Improved security

---

# Linux Users in Cloud Computing

Cloud virtual machines often use Linux users for administration.

Example:

AWS EC2

```text
ubuntu
```

Amazon Linux

```text
ec2-user
```

Red Hat

```text
ec2-user
```

Azure

```text
azureuser
```

Understanding default cloud users is essential for managing virtual machines.

---

# Linux Users in Cybersecurity

Security teams investigate:

- User logins
- Failed authentication attempts
- Privileged accounts
- Unauthorized users
- Suspicious group memberships

Compromised user accounts are a common attack vector.

---

# Common Commands

Current user:

```bash
whoami
```

Display identity:

```bash
id
```

Display logged-in users:

```bash
who
```

Display user groups:

```bash
groups
```

Display account information:

```bash
finger student
```

*(if the `finger` package is installed)*

---

# Real-World Example

A new Cloud Engineer joins an organization.

The Linux administrator performs the following tasks:

```text
Create User

↓

Assign Password

↓

Add to Developers Group

↓

Grant Sudo Access

↓

Configure SSH Keys

↓

Verify Login
```

Within minutes, the engineer can securely manage Linux servers while following organizational security policies.

---

# Best Practices

As a Linux administrator:

- Create individual user accounts.
- Avoid sharing accounts.
- Use groups instead of assigning permissions individually.
- Grant only the permissions users need.
- Use `sudo` instead of logging in as root.
- Disable unused accounts.
- Review privileged users regularly.
- Enforce strong password and MFA policies where supported.

These practices improve security, accountability, and compliance.

---

# Key Takeaways

After completing this lesson, you should understand:

- Linux user types.
- Root vs regular users.
- User IDs (UIDs) and Group IDs (GIDs).
- Primary and secondary groups.
- User management commands.
- Important user configuration files.
- Authentication and authorization.
- Enterprise identity management.

---

# Summary

Linux Users and Groups form the foundation of system security and access control.

By understanding how Linux authenticates users, assigns permissions, and manages group memberships, you'll be able to securely administer Linux servers in enterprise and cloud environments.

Throughout the rest of this module, you'll build on these concepts by learning Linux permissions, process management, services, networking, and system administration.

---

# Next Lesson

➡️ **Lesson 05 — Linux File Permissions**

In the next lesson, you'll learn how Linux protects files using ownership and permissions, understand read, write, and execute access, explore permission notation, and use commands like `chmod`, `chown`, and `umask` to secure Linux systems.