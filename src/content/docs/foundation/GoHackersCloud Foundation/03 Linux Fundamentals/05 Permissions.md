---
title: Lesson 05 — Linux File Permissions
description: Learn how Linux secures files using ownership and permissions, understand read, write, and execute access, explore permission notation, and use commands like chmod, chown, chgrp, and umask to manage access in enterprise Linux systems.
---
## Lesson Overview

Imagine a company where every employee can read confidential HR records, modify financial reports, or delete production application files.

It would quickly become a security disaster.

Linux prevents this by using **File Permissions**.

Every file and directory in Linux has permissions that determine:

- Who can read it
- Who can modify it
- Who can execute it

File permissions are one of the most important security mechanisms in Linux and form the foundation of access control across cloud platforms, enterprise servers, Kubernetes clusters, and cybersecurity environments.

Understanding Linux permissions is essential for every Linux Administrator, Cloud Engineer, DevOps Engineer, and Cybersecurity Professional.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain Linux file ownership.
- Understand read, write, and execute permissions.
- Interpret symbolic and numeric permissions.
- Use `chmod`, `chown`, and `chgrp`.
- Understand special permissions.
- Apply Linux permission best practices.

---

# Why File Permissions Matter

Without permissions:

- Anyone could delete system files.
- Sensitive data could be stolen.
- Applications could be modified.
- Malware could spread easily.

Permissions protect Linux systems by ensuring users can only access what they are authorized to use.

---

# File Ownership

Every file in Linux has an owner.

Example:

```text
report.txt

Owner:

student
```

The owner usually has the greatest level of control over the file.

---

# Group Ownership

Files also belong to a group.

Example:

```text
report.txt

Owner:

student

Group:

developers
```

Group permissions allow multiple users to collaborate securely.

---

# Permission Categories

Linux permissions are divided into three categories.

| Category | Description |
|----------|-------------|
| User (u) | File owner |
| Group (g) | Members of the assigned group |
| Others (o) | Everyone else |

Together these determine who can access a file.

---

# Permission Types

Linux supports three basic permissions.

| Permission | Symbol | Value |
|------------|--------|------:|
| Read | r | 4 |
| Write | w | 2 |
| Execute | x | 1 |

These values are used when setting numeric permissions.

---

# Read Permission (r)

Read permission allows a user to view a file.

Example:

```text
report.txt

Permission:

r--
```

Users can:

- Open the file
- Read its contents
- Copy the file

---

# Write Permission (w)

Write permission allows modifications.

Example:

```text
rw-
```

Users can:

- Edit files
- Save changes
- Delete contents

---

# Execute Permission (x)

Execute permission allows a file to run as a program or script.

Example:

```text
rwx
```

Typical executable files include:

- Bash Scripts
- Python Programs
- Shell Utilities

Directories also use execute permission to allow users to enter them.

---

# Viewing Permissions

Display permissions.

```bash
ls -l
```

Example:

```text
-rwxr-xr--

student developers report.sh
```

---

# Understanding Permission Output

Example:

```text
-rwxr-xr--
```

Breakdown:

```text
-

Regular File

rwx

Owner

r-x

Group

r--

Others
```

This means:

Owner:

- Read
- Write
- Execute

Group:

- Read
- Execute

Others:

- Read Only

---

# Directory Permissions

Directories use permissions differently.

| Permission | Meaning |
|------------|---------|
| Read | View directory contents |
| Write | Create/Delete files |
| Execute | Enter the directory |

Without execute permission, users cannot access the directory even if they can read its contents.

---

# Numeric Permissions

Linux also supports numeric notation.

| Value | Permission |
|------:|------------|
| 7 | rwx |
| 6 | rw- |
| 5 | r-x |
| 4 | r-- |
| 3 | -wx |
| 2 | -w- |
| 1 | --x |
| 0 | --- |

---

# Common Permission Values

| Numeric | Symbolic | Meaning |
|---------:|----------|---------|
| 777 | rwxrwxrwx | Full access for everyone |
| 755 | rwxr-xr-x | Common for directories |
| 744 | rwxr--r-- | Owner full control |
| 700 | rwx------ | Private directory |
| 644 | rw-r--r-- | Common for files |
| 600 | rw------- | Sensitive files |

Understanding these values is essential for Linux administration.

---

# Changing Permissions

Use `chmod`.

Example:

```bash
chmod 755 script.sh
```

Or use symbolic notation.

```bash
chmod u+x script.sh
```

Remove write permission.

```bash
chmod g-w report.txt
```

---

# Changing Ownership

Use `chown`.

Example:

```bash
sudo chown student report.txt
```

Change owner and group.

```bash
sudo chown student:developers report.txt
```

---

# Changing Groups

Use `chgrp`.

Example:

```bash
sudo chgrp developers report.txt
```

---

# Default Permissions (umask)

Linux automatically assigns default permissions to new files and directories.

Display the current umask.

```bash
umask
```

Typical output:

```text
0022
```

The umask removes permissions from the default values.

Example defaults:

Files:

```text
666
```

Directories:

```text
777
```

The umask determines the final permissions.

---

# Special Permissions

Linux supports three special permissions.

---

## SUID (Set User ID)

Programs run using the owner's privileges.

Example:

```bash
chmod u+s filename
```

---

## SGID (Set Group ID)

Files inherit the directory's group ownership.

Example:

```bash
chmod g+s directory
```

Useful for collaborative projects.

---

## Sticky Bit

Only the file owner can delete files in the directory.

Common example:

```text
/tmp
```

Set Sticky Bit:

```bash
chmod +t directory
```

---

# Permission Examples

Example 1

Private SSH key:

```text
600
```

Only the owner can read and write.

---

Example 2

Shell script:

```text
755
```

Owner can modify it, everyone can execute it.

---

Example 3

Website file:

```text
644
```

Owner can edit.

Others can read.

---

# Permissions in Cloud Computing

Linux permissions protect cloud resources.

Examples:

- SSH keys
- Application files
- Configuration files
- Kubernetes manifests
- Terraform files

Cloud Engineers frequently use `chmod` to secure sensitive credentials.

---

# Permissions in Cybersecurity

Security teams investigate:

- World-writable files
- Incorrect ownership
- Privilege escalation risks
- SUID binaries
- Sensitive configuration files

Misconfigured permissions are a common security weakness.

---

# Common Commands

Display permissions:

```bash
ls -l
```

Display hidden files:

```bash
ls -la
```

Change permissions:

```bash
chmod
```

Change ownership:

```bash
chown
```

Change group:

```bash
chgrp
```

Display current umask:

```bash
umask
```

---

# Real-World Example

A DevOps Engineer deploys a web application.

```text
Application Files

↓

Owner

www-data

↓

Permissions

644

↓

Configuration Files

600

↓

Deployment Script

755
```

Correct permissions help protect the application while allowing it to function properly.

---

# Best Practices

As a Linux administrator:

- Follow the Principle of Least Privilege.
- Avoid using `777` permissions.
- Secure sensitive files with `600`.
- Use groups for shared access.
- Review file ownership regularly.
- Protect SSH keys.
- Audit SUID and SGID files.
- Monitor permission changes.

Proper permission management significantly improves Linux security.

---

# Key Takeaways

After completing this lesson, you should understand:

- Linux file ownership.
- User, Group, and Others permissions.
- Read, Write, and Execute permissions.
- Symbolic and numeric permission notation.
- `chmod`, `chown`, `chgrp`, and `umask`.
- Special permissions (SUID, SGID, Sticky Bit).
- Linux permission best practices.

---

# Summary

Linux File Permissions are one of the most important security mechanisms in the operating system.

By controlling who can read, modify, and execute files, Linux protects users, applications, and critical system resources from unauthorized access.

Throughout your career, you'll use these concepts to secure cloud servers, deploy applications, protect sensitive data, and troubleshoot permission-related issues in enterprise environments.

Mastering Linux permissions is a foundational skill for Cloud Computing, Cybersecurity, DevOps, and Linux Administration.

---

# Next Lesson

➡️ **Lesson 06 — Linux Processes**

In the next lesson, you'll learn how Linux manages running processes, understand process states and priorities, monitor system activity, and use commands like `ps`, `top`, `htop`, `kill`, and `nice` to manage applications and troubleshoot performance issues.