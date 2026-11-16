---
title: Lesson 01 — Windows Architecture
description: Learn the architecture of Microsoft Windows, understand how Windows boots, explore the Windows kernel, user mode, system processes, and enterprise architecture used across modern Windows environments.
---

> **Foundation workshop:** [View the full Module 04 learning guide](/core-it-devops/module-04/) for prerequisite skills, a professional scenario, expected observations and exercises.

## Lesson Overview

Microsoft Windows is one of the most widely used operating systems in the world.

It powers:

- Enterprise Workstations
- Corporate Laptops
- Domain Controllers
- File Servers
- Microsoft Azure Virtual Machines
- Enterprise Applications
- Active Directory Infrastructure

Although Linux dominates cloud infrastructure, Windows remains the standard operating system in many enterprise environments.

Every Cloud Engineer, Cybersecurity Professional, DevOps Engineer, System Administrator, and SOC Analyst should understand how Windows works internally.

In this lesson, you'll learn how Windows is designed, how it starts during boot, and how its major components work together.

---

## Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows architecture.
- Explain User Mode and Kernel Mode.
- Learn the Windows boot process.
- Identify core Windows components.
- Understand Windows services and processes.
- Explore enterprise Windows architecture.
- Apply Windows architecture knowledge in enterprise environments.

---

## What is Windows?

Windows is a graphical operating system developed by Microsoft.

It provides:

- Hardware Management
- Memory Management
- Process Scheduling
- Security
- Networking
- Storage Management
- User Interface

Windows allows users and applications to interact safely with computer hardware.

---

## Windows Editions

Microsoft provides different editions for different use cases.

Examples include:

- Windows 11 Home
- Windows 11 Pro
- Windows Enterprise
- Windows Server 2025
- Windows Server Datacenter
- Azure Edition

Enterprise environments commonly use Windows Pro, Enterprise, and Windows Server.

---

## Windows Architecture Overview

Windows is built using a layered architecture.

```text
Applications

↓

User Mode

↓

Windows API

↓

Kernel Mode

↓

Hardware Abstraction Layer (HAL)

↓

Hardware
```

Each layer performs a specific function while protecting the operating system.

---

## User Mode

Applications run in **User Mode**.

Examples:

- Microsoft Word
- Google Chrome
- Visual Studio Code
- PowerShell
- Microsoft Teams

Characteristics:

- Limited privileges
- Cannot directly access hardware
- Isolated from the Windows kernel
- Application crashes usually do not crash the operating system

---

## Kernel Mode

Kernel Mode has unrestricted access to system resources.

Responsibilities include:

- CPU Scheduling
- Memory Management
- Device Drivers
- Process Management
- File System Management
- Hardware Communication

Only trusted operating system components execute in Kernel Mode.

---

## Why User Mode and Kernel Mode Matter

Separating applications from the kernel improves:

- Stability
- Security
- Reliability
- Performance

If a browser crashes, Windows continues running because the browser operates in User Mode.

---

## Windows Kernel

The Windows Kernel is the core of the operating system.

It manages:

- Processes
- Threads
- Virtual Memory
- Scheduling
- Synchronization
- Interrupt Handling

The kernel ensures all applications share system resources efficiently.

---

## Hardware Abstraction Layer (HAL)

The Hardware Abstraction Layer (HAL) sits between Windows and the physical hardware.

Its purpose is to:

- Hide hardware differences
- Improve compatibility
- Simplify driver development

Applications never communicate directly with hardware.

---

## Windows Boot Process

The Windows startup process follows several stages.

```text
Power On

↓

UEFI / BIOS

↓

Windows Boot Manager

↓

Windows Loader

↓

Kernel

↓

Drivers

↓

Services

↓

Logon Screen

↓

Desktop
```

If any stage fails, Windows may not boot correctly.

---

## Windows Boot Manager

The Windows Boot Manager is responsible for:

- Starting Windows
- Selecting the operating system
- Loading boot configuration

Configuration is stored in the **Boot Configuration Data (BCD)** store.

---

## Windows Loader

The Windows Loader performs several tasks:

- Loads the Windows kernel
- Loads hardware drivers
- Initializes memory
- Starts system services

Once complete, Windows continues the startup process.

---

## Windows Processes

Every running application becomes a process.

Examples:

- explorer.exe
- winlogon.exe
- svchost.exe
- powershell.exe
- chrome.exe

Windows schedules these processes using the kernel.

---

## Windows Threads

A process can contain multiple threads.

Example:

```text
Microsoft Edge

↓

Thread 1

↓

Thread 2

↓

Thread 3
```

Threads allow applications to perform multiple tasks simultaneously.

---

## Windows Memory Management

Windows uses:

- Physical Memory (RAM)
- Virtual Memory
- Paging Files

If RAM becomes full, Windows temporarily stores inactive data in the page file on disk.

---

## Windows File Systems

Windows primarily uses:

- NTFS
- FAT32
- exFAT
- ReFS (Server)

NTFS is the enterprise standard because it supports:

- Permissions
- Encryption
- Compression
- Auditing
- Large file support

You'll explore NTFS in the next lesson.

---

## Windows Services

Background applications are called **Windows Services**.

Examples:

- Windows Update
- Print Spooler
- Windows Defender
- DNS Client
- DHCP Client

Services start automatically during boot and run without user interaction.

---

## Windows Registry

Windows stores configuration settings in a central database called the **Registry**.

It contains:

- Hardware configuration
- User preferences
- Installed software
- System settings

You'll study the Registry in a later lesson.

---

## Windows Security Architecture

Windows security includes:

- User Accounts
- Groups
- Active Directory
- Windows Defender
- BitLocker
- Firewall
- User Account Control (UAC)

These features protect enterprise systems from unauthorized access.

---

## Windows Architecture in Cloud Computing

Cloud Engineers commonly deploy:

- Azure Virtual Machines
- Amazon EC2 Windows Instances
- Remote Desktop Servers
- IIS Web Servers
- Active Directory Servers

Understanding Windows architecture helps administrators troubleshoot and manage cloud workloads.

---

## Windows Architecture in Cybersecurity

Security professionals analyze:

- Windows Processes
- Services
- Registry Changes
- Authentication Events
- Event Logs
- Memory
- System Boot

Understanding the operating system's architecture is essential for incident response and threat hunting.

---

## Common Windows Commands

Display system information:

```powershell
systeminfo
```

Display Windows version:

```powershell
winver
```

Display computer name:

```powershell
hostname
```

Display running processes:

```powershell
tasklist
```

Display memory information:

```powershell
Get-ComputerInfo
```

---

## Real-World Example

A company deploys Windows Server in Azure.

```text
Azure Virtual Machine

↓

Windows Server

↓

Active Directory

↓

DNS

↓

Group Policy

↓

Enterprise Applications

↓

Employees
```

Understanding Windows architecture enables administrators to deploy, manage, and troubleshoot enterprise services effectively.

---

## Best Practices

As a Windows administrator:

- Keep Windows updated.
- Install only trusted drivers.
- Monitor critical services.
- Understand the Windows boot process.
- Document system configurations.
- Follow the Principle of Least Privilege.
- Use enterprise editions for business workloads.
- Monitor system health regularly.

These practices improve reliability, security, and operational efficiency.

---

### Extended Foundation Workshop — Windows administration without risky changes

Windows is common in enterprise environments, where technicians need to understand endpoint behavior, background services, access controls and diagnostic evidence.

#### Workplace scenario

A business application starts on some employees' Windows machines but not others. IT needs to distinguish a missing service, a policy restriction, a user-specific configuration and an external dependency before changing the deployment.

#### Read-only PowerShell exercises

Run on a Windows computer you own or are authorized to inspect:

```powershell
Get-CimInstance Win32_OperatingSystem | Select-Object Caption,Version
Get-Process | Select-Object -First 10 Name,Id,CPU
Get-Service | Select-Object -First 10 Name,Status
Get-WinEvent -LogName System -MaxEvents 5 | Select-Object TimeCreated,Id,LevelDisplayName
```

**Expected observations:** operating system details, active processes, service status and recent system event metadata. Some event queries may be restricted by rights or log policies; do not elevate privileges merely to reproduce a screenshot.

#### Professional distinctions to understand

| Concept | What it means | Common confusion |
|---|---|---|
| Authentication | Proving an identity | Does not automatically grant file access |
| Authorization | Deciding permitted actions | Depends on roles, groups and resource permissions |
| Service | Background functionality with startup and account context | May fail while the desktop still runs |
| Event | Recorded system or application observation | Warning events are not always root causes |
| NTFS permissions | File-system access controls | May combine with network share permissions |

#### Worked diagnostic case

An employee can sign in successfully but cannot open an approved shared folder. The support team checks **share reachability, DNS/SMB path, effective group membership, share permissions, NTFS access and any related policy**. Blindly resetting the password may not address authorization.

#### Knowledge check

1. **If Windows sign-in succeeds, does that prove permission to a network share?**

   <details><summary>Suggested answer</summary>No. Authentication and authorization are separate. Share and file-system permissions can still deny access.</details>

2. **Why should an event log be interpreted with a timeline?**

   <details><summary>Suggested answer</summary>Events may be normal background noise. Correlating severity, source, timestamp, user impact and recent changes improves diagnostic confidence.</details>

#### Portfolio deliverable

Write an illustrative **Windows service troubleshooting procedure** with symptoms, safe observations, next test, permissions and escalation. Continue with [Module 04 professional guide](/core-it-devops/module-04/) and [CompTIA Practice](https://academy.gohackerscloud.com/tracks/comptia/) if you later want structured exercises.

---

## Key Takeaways

After completing this lesson, you should understand:

- Windows architecture.
- User Mode and Kernel Mode.
- Windows boot process.
- Windows kernel.
- Hardware Abstraction Layer (HAL).
- Windows processes and threads.
- Windows services.
- Enterprise Windows architecture.

---

## Summary

Windows Architecture provides the foundation for every enterprise Windows system.

Understanding how Windows boots, manages memory, schedules processes, and communicates with hardware will help you troubleshoot problems, administer enterprise systems, and secure Windows environments.

These concepts will support everything you learn throughout the Windows Fundamentals module, including Active Directory, PowerShell, Windows Security, and Enterprise Administration.

---

## Next Lesson

➡️ **Lesson 02 — Windows File System (NTFS & Storage)**

In the next lesson, you'll explore the Windows file system, learn how NTFS stores and secures data, understand drives, folders, partitions, permissions, and enterprise storage management.