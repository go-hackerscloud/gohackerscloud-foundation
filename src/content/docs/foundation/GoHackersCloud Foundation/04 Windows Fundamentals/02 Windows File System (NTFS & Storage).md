---
title: Lesson 02 — Windows File System (NTFS & Storage)
description: Learn how Windows stores and manages data using NTFS, understand drives, folders, partitions, permissions, storage management, and enterprise file systems used in modern Windows environments.
---
## Lesson Overview

Every application running on Windows stores data somewhere.

Whether you're:

- Saving a Microsoft Word document
- Installing software
- Running SQL Server
- Hosting IIS websites
- Managing Azure Virtual Machines
- Performing Digital Forensics
- Deploying enterprise applications

...Windows stores everything using its **File System**.

The Windows File System organizes data, controls access through permissions, protects files from corruption, and enables enterprise features like encryption, compression, auditing, and quotas.

Understanding NTFS is essential for Windows Administrators, Cloud Engineers, Cybersecurity Professionals, SOC Analysts, and DevOps Engineers.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows storage architecture.
- Learn how NTFS works.
- Understand drives, folders, and files.
- Explore partitions and volumes.
- Learn Windows file permissions.
- Understand NTFS enterprise features.
- Apply enterprise storage management best practices.

---

# What is a File System?

A **File System** defines how an operating system stores, organizes, retrieves, and protects data.

Without a file system:

- Files could not be stored.
- Applications could not save data.
- Windows would not know where files exist.

The file system acts like a filing cabinet for the operating system.

---

# Windows Storage Architecture

Windows organizes storage in several layers.

```text
Applications

↓

Files & Folders

↓

NTFS File System

↓

Partition / Volume

↓

Physical Disk (SSD/HDD)

↓

Hardware
```

Each layer performs a specific role in storing and retrieving data.

---

# Storage Devices

Windows supports various storage devices.

Examples include:

- Hard Disk Drives (HDD)
- Solid State Drives (SSD)
- NVMe SSD
- USB Drives
- External Hard Drives
- SAN Storage
- NAS Storage
- Azure Managed Disks

Modern enterprise environments primarily use SSD and NVMe storage.

---

# Drives in Windows

Windows identifies storage using **Drive Letters**.

Examples:

```text
C:

D:

E:

F:
```

Common drive assignments:

| Drive | Purpose |
|--------|---------|
| C: | Operating System |
| D: | Data |
| E: | DVD/ISO |
| F: | USB Storage |

Unlike Linux, Windows uses drive letters instead of a single root file system.

---

# Understanding the C: Drive

The **C:** drive is typically where Windows is installed.

Common folders include:

```text
C:\Windows

C:\Program Files

C:\Program Files (x86)

C:\Users

C:\Temp
```

Most operating system files are stored here.

---

# Windows Folder Structure

Important directories include:

| Folder | Purpose |
|---------|----------|
| C:\Windows | Operating system files |
| C:\Users | User profiles |
| C:\Program Files | 64-bit applications |
| C:\Program Files (x86) | 32-bit applications |
| C:\Temp | Temporary files |

Understanding these folders helps administrators troubleshoot Windows systems.

---

# Files and Folders

Windows organizes data into:

- Files
- Folders (Directories)

Example:

```text
C:\Users\Administrator\Documents

↓

Resume.docx

↓

Budget.xlsx

↓

Presentation.pptx
```

Folders help organize related files logically.

---

# File Extensions

Windows identifies file types using extensions.

Examples:

| Extension | Type |
|-----------|------|
| .txt | Text File |
| .docx | Microsoft Word |
| .xlsx | Microsoft Excel |
| .pptx | PowerPoint |
| .exe | Executable Program |
| .pdf | PDF Document |
| .zip | Compressed Archive |

File extensions determine which application opens the file.

---

# Windows File Systems

Microsoft supports multiple file systems.

| File System | Purpose |
|--------------|----------|
| NTFS | Enterprise Windows |
| FAT32 | USB drives |
| exFAT | Large removable media |
| ReFS | Enterprise Server Storage |

The default file system for Windows is **NTFS**.

---

# What is NTFS?

**NTFS (New Technology File System)** is Microsoft's primary enterprise file system.

It supports:

- Large files
- Security permissions
- Encryption
- Compression
- Disk quotas
- Auditing
- Reliability

NTFS is designed for modern enterprise workloads.

---

# Why NTFS is Important

NTFS provides capabilities that FAT32 cannot.

Examples:

- File permissions
- Access Control Lists (ACLs)
- Encryption
- Journaling
- Large disk support
- Large file support

These features make NTFS suitable for business environments.

---

# NTFS Permissions

NTFS allows administrators to control access to files and folders.

Common permissions include:

- Full Control
- Modify
- Read & Execute
- Read
- Write

Permissions help enforce the Principle of Least Privilege.

---

# Access Control Lists (ACLs)

Windows stores permissions using **Access Control Lists (ACLs).**

Example:

```text
Project Folder

↓

Managers

Full Control

↓

Developers

Modify

↓

Interns

Read
```

ACLs provide granular control over file access.

---

# Windows Ownership

Every file has an owner.

The owner can:

- Modify permissions
- Transfer ownership
- Delete files
- Manage security settings

Ownership is a fundamental security concept.

---

# File Compression

NTFS supports transparent compression.

Benefits:

- Saves disk space
- No additional software required
- Files remain accessible

Compression is useful for documents and logs but should be used carefully for databases and performance-sensitive workloads.

---

# Encrypting File System (EFS)

NTFS supports built-in encryption.

Features:

- Protects sensitive files
- Uses user certificates
- Encrypts data at rest

EFS helps protect confidential information on Windows systems.

---

# Disk Quotas

Administrators can limit storage usage.

Example:

```text
User

↓

Maximum Storage

↓

20 GB
```

Disk quotas help prevent users from consuming excessive disk space.

---

# Partitions and Volumes

A physical disk can contain multiple partitions.

Example:

```text
Disk

↓

System Partition

↓

Recovery Partition

↓

C: Drive

↓

D: Drive
```

Each partition can be formatted independently.

---

# Dynamic Disks

Windows supports:

- Basic Disks
- Dynamic Disks

Dynamic disks allow:

- Volume expansion
- Spanned volumes
- Mirrored volumes
- RAID configurations

They are commonly used in enterprise environments.

---

# Disk Management

Windows provides the **Disk Management** console.

Open:

```text
diskmgmt.msc
```

Using Disk Management, administrators can:

- Create partitions
- Extend volumes
- Shrink partitions
- Format disks
- Assign drive letters

---

# File Sharing

Windows supports secure file sharing using SMB.

Example:

```text
File Server

↓

Shared Folder

↓

Employees

↓

Access Files
```

SMB is the standard file-sharing protocol in Windows environments.

---

# Storage in Cloud Computing

Cloud platforms provide managed storage.

### Microsoft Azure

- Managed Disks
- Azure Files
- Azure NetApp Files

### AWS

- Amazon EBS
- Amazon FSx for Windows
- Amazon EFS

### Google Cloud

- Persistent Disk
- Filestore

Windows administrators frequently manage cloud-based storage services.

---

# Windows File System in Cybersecurity

Security teams investigate:

- Unauthorized file access
- Permission changes
- Deleted files
- Encrypted files
- Sensitive data locations
- Malware hiding in directories

Understanding NTFS is critical for forensic investigations and incident response.

---

# Useful Windows Commands

Display drives:

```powershell
Get-Volume
```

Display disks:

```powershell
Get-Disk
```

Display partitions:

```powershell
Get-Partition
```

Display file system information:

```powershell
Get-PSDrive
```

Display free space:

```powershell
Get-Volume
```

---

# Real-World Example

A company deploys a Windows File Server.

```text
Windows Server

↓

NTFS

↓

Department Folders

↓

NTFS Permissions

↓

SMB Shares

↓

Employees Access Files
```

Each department receives access only to its own files, protecting confidential business information.

---

# Best Practices

As a Windows administrator:

- Use NTFS for enterprise systems.
- Apply the Principle of Least Privilege.
- Regularly review NTFS permissions.
- Enable BitLocker for full-disk encryption where appropriate.
- Use EFS only when it aligns with organizational policy.
- Monitor disk usage and quotas.
- Organize data using logical folder structures.
- Back up critical files regularly.

Proper file system management improves security, reliability, and operational efficiency.

---

# Key Takeaways

After completing this lesson, you should understand:

- Windows storage architecture.
- Drives and folders.
- NTFS fundamentals.
- NTFS permissions.
- Access Control Lists (ACLs).
- Disk Management.
- Enterprise storage management.
- Windows file system best practices.

---

# Summary

The Windows File System is responsible for storing, organizing, and protecting all data on a Windows computer.

NTFS provides enterprise-grade capabilities such as permissions, encryption, compression, quotas, and auditing, making it the standard file system for modern Windows environments.

Understanding NTFS is essential for Windows administration, cloud engineering, cybersecurity, digital forensics, and enterprise IT operations.

---

# Next Lesson

➡️ **Lesson 03 — Windows Users & Groups**

In the next lesson, you'll learn how Windows manages local users and groups, understand security principals, user profiles, group memberships, built-in accounts, and role-based access control used in enterprise Windows environments.