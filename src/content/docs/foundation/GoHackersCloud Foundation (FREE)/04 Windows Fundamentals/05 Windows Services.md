---
title: Lesson 05 — Windows Services
description: Learn how Windows manages background services, explore the Service Control Manager (SCM), understand startup types, manage services using PowerShell and the Services console, and troubleshoot enterprise Windows services.
---

## Lesson Overview

Imagine a Windows Server hosting an enterprise application.

Even before any user logs in, the server is already running:

- Active Directory
- DNS
- DHCP
- Windows Update
- Print Services
- IIS Web Server
- SQL Server
- Microsoft Defender

How?

These applications run as **Windows Services**.

A Windows Service is a background application that starts automatically (or manually) and performs specific tasks without requiring a user to log in.

Whether you're managing Windows Servers, Azure Virtual Machines, or enterprise workstations, understanding Windows Services is an essential skill for every Windows Administrator, Cloud Engineer, DevOps Engineer, and Cybersecurity Professional.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows Services.
- Learn the Service Control Manager (SCM).
- Manage Windows Services.
- Understand service startup types.
- Use the Services Console.
- Manage services using PowerShell.
- Troubleshoot Windows Services.
- Apply enterprise service management best practices.

---

# What is a Windows Service?

A **Windows Service** is a background process that performs system or application tasks without user interaction.

Examples include:

- Windows Update
- DHCP Client
- DNS Client
- Print Spooler
- Windows Defender
- IIS
- SQL Server
- Hyper-V Services

Services usually start automatically during system boot.

---

# Why Services Matter

Without services:

- Users couldn't log in.
- DNS wouldn't resolve names.
- Active Directory wouldn't authenticate users.
- Websites wouldn't load.
- Databases wouldn't start.
- Security software wouldn't protect the system.

Services keep Windows running.

---

# Windows Service Architecture

```text
Windows

↓

Service Control Manager (SCM)

↓

Windows Services

↓

Applications

↓

Users
```

The Service Control Manager is responsible for starting, stopping, and monitoring services.

---

# Service Control Manager (SCM)

The **Service Control Manager (SCM)** is a core Windows component.

Responsibilities include:

- Start services
- Stop services
- Restart services
- Monitor service health
- Handle service dependencies
- Configure startup behavior

Almost every Windows service is managed through SCM.

---

# Windows Service Lifecycle

A service typically follows this lifecycle:

```text
Installed

↓

Configured

↓

Started

↓

Running

↓

Stopped

↓

Removed
```

Enterprise administrators frequently manage this lifecycle during application deployments.

---

# Viewing Windows Services

Open the Services Console.

```text
services.msc
```

The console displays:

- Service Name
- Description
- Status
- Startup Type
- Log On Account

This is the primary graphical interface for service management.

---

# Service Status

Every service has a status.

Common states include:

| Status | Description |
|----------|-------------|
| Running | Service is active |
| Stopped | Service is not running |
| Starting | Service is starting |
| Stopping | Service is shutting down |
| Paused | Service is temporarily suspended |

---

# Startup Types

Windows services can start in different ways.

| Startup Type | Description |
|---------------|-------------|
| Automatic | Starts during boot |
| Automatic (Delayed Start) | Starts shortly after boot |
| Manual | Starts only when required |
| Disabled | Cannot start |

Enterprise systems use different startup types depending on operational requirements.

---

# Automatic Startup

Example:

```text
Windows Boot

↓

Network Service

↓

DNS

↓

DHCP

↓

Windows Defender

↓

User Login
```

Critical services are typically configured for Automatic startup.

---

# Starting a Service

Using PowerShell:

```powershell
Start-Service Spooler
```

Or Command Prompt:

```cmd
net start Spooler
```

---

# Stopping a Service

PowerShell:

```powershell
Stop-Service Spooler
```

Command Prompt:

```cmd
net stop Spooler
```

Stopping a critical service may affect applications or users.

---

# Restarting a Service

PowerShell:

```powershell
Restart-Service Spooler
```

Restarting is commonly performed after configuration changes.

---

# Viewing Service Information

PowerShell:

```powershell
Get-Service
```

Display a specific service.

```powershell
Get-Service WinRM
```

Example output:

```text
Status

Running

Name

WinRM
```

---

# Changing Startup Type

PowerShell:

```powershell
Set-Service `
-Name Spooler `
-StartupType Automatic
```

Startup types can also be modified through **services.msc**.

---

# Service Dependencies

Some services rely on others.

Example:

```text
SQL Server

↓

TCP/IP

↓

Network Services

↓

Windows Kernel
```

Stopping a dependent service may affect multiple applications.

---

# Windows Service Accounts

Services run using different security contexts.

Common accounts include:

- Local System
- Local Service
- Network Service
- Domain Service Account
- Group Managed Service Account (gMSA)

Choosing the correct account is an important security decision.

---

# Windows Event Viewer

Service events are recorded in:

```text
eventvwr.msc
```

Common logs include:

- System
- Application
- Security

These logs help administrators investigate service failures.

---

# Troubleshooting Services

When a service fails:

1. Verify service status.
2. Check Event Viewer.
3. Review dependencies.
4. Confirm startup type.
5. Verify permissions.
6. Restart the service.
7. Review application logs.

Following a structured approach speeds up troubleshooting.

---

# Windows Services in Cloud Computing

Cloud Engineers frequently manage services such as:

- IIS
- Remote Desktop Services
- Windows Update
- Azure Monitor Agent
- SQL Server
- Active Directory Domain Services

These services support cloud-hosted workloads.

---

# Windows Services in Cybersecurity

Security teams investigate:

- Unexpected services
- Disabled security services
- Malware installed as services
- Unauthorized service creation
- Service privilege escalation

Many attackers attempt to achieve persistence by creating malicious services.

---

# Common Administrative Commands

Display all services:

```powershell
Get-Service
```

Start a service:

```powershell
Start-Service ServiceName
```

Stop a service:

```powershell
Stop-Service ServiceName
```

Restart a service:

```powershell
Restart-Service ServiceName
```

Display service details:

```powershell
Get-Service WinRM
```

Display service configuration:

```cmd
sc qc ServiceName
```

---

# Real-World Example

An IIS website suddenly becomes unavailable.

The Windows Administrator performs the following steps:

```text
User Reports Website Down

↓

Check IIS Service

↓

Review Event Viewer

↓

Identify Configuration Error

↓

Restart IIS

↓

Verify Website

↓

Document Resolution
```

This structured troubleshooting process minimizes downtime and ensures reliable service restoration.

---

# Best Practices

As a Windows administrator:

- Disable unnecessary services.
- Keep critical services configured for Automatic startup.
- Use dedicated service accounts where appropriate.
- Monitor service health continuously.
- Review Event Viewer regularly.
- Document service configurations.
- Test service changes before production deployment.
- Apply the Principle of Least Privilege to service accounts.

Well-managed services improve system reliability, security, and performance.

---

# Key Takeaways

After completing this lesson, you should understand:

- Windows Services.
- Service Control Manager (SCM).
- Startup types.
- Service management.
- PowerShell service commands.
- Service dependencies.
- Service accounts.
- Enterprise service management.

---

# Summary

Windows Services are the foundation of every enterprise Windows environment.

From Active Directory and IIS to SQL Server and Microsoft Defender, nearly every business application relies on background services to operate continuously.

Understanding how to configure, manage, monitor, and troubleshoot Windows Services is a critical skill for Windows Administrators, Cloud Engineers, DevOps Engineers, and Cybersecurity Professionals.

---

# Next Lesson

➡️ **Lesson 06 — Windows Registry**

In the next lesson, you'll learn how the Windows Registry stores system and application configuration, explore registry hives and keys, understand registry security, and safely manage registry settings in enterprise Windows environments.