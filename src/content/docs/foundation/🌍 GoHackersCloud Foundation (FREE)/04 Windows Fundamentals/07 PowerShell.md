---
title: Lesson 07 — Windows PowerShell Fundamentals
description: Learn how to automate Windows administration using PowerShell, understand cmdlets, objects, variables, pipelines, scripting, and enterprise automation techniques used by modern IT professionals.
---

# Lesson 07 — Windows PowerShell Fundamentals

## Lesson Overview

Imagine you're responsible for managing:

- 2,000 Windows laptops
- 500 Windows Servers
- Multiple Azure Virtual Machines
- Active Directory users
- Microsoft 365 services

Would you manually configure each system using the graphical interface?

Absolutely not.

Enterprise administrators automate repetitive tasks using **Windows PowerShell**.

PowerShell is Microsoft's powerful command-line shell and scripting language designed specifically for system administration and automation.

Whether you're creating users, restarting services, collecting logs, deploying software, or managing Azure resources, PowerShell helps you perform tasks faster, more consistently, and at enterprise scale.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows PowerShell.
- Learn PowerShell architecture.
- Execute PowerShell commands.
- Understand cmdlets and objects.
- Work with variables and pipelines.
- Create simple PowerShell scripts.
- Apply PowerShell automation in enterprise environments.

---

# What is PowerShell?

**PowerShell** is Microsoft's command-line shell, scripting language, and automation framework.

It is built on the .NET platform and is designed to automate system administration tasks.

PowerShell can manage:

- Windows
- Active Directory
- Microsoft Azure
- Microsoft 365
- Hyper-V
- SQL Server
- Exchange Server
- Windows Services
- File Systems
- Registry

---

# Why PowerShell Matters

PowerShell helps administrators:

- Automate repetitive tasks
- Reduce manual errors
- Manage thousands of systems
- Perform remote administration
- Build deployment scripts
- Generate reports
- Configure enterprise infrastructure

PowerShell is one of the most valuable skills for Windows Administrators and Cloud Engineers.

---

# PowerShell vs Command Prompt

| Command Prompt | PowerShell |
|---------------|------------|
| Text-based output | Object-based output |
| Limited scripting | Advanced scripting |
| Basic administration | Enterprise automation |
| Older Windows tool | Modern administration platform |

PowerShell is the preferred management tool in modern Windows environments.

---

# Opening PowerShell

Open PowerShell by:

- Start Menu → Windows PowerShell
- Windows Terminal
- Search for **PowerShell**

Or press:

```text
Win + X

↓

Windows PowerShell
```

For administrative tasks, launch **PowerShell as Administrator**.

---

# Understanding Cmdlets

PowerShell commands are called **Cmdlets**.

They follow a standard naming convention:

```text
Verb-Noun
```

Examples:

```powershell
Get-Service

Get-Process

Get-ChildItem

Start-Service

Stop-Service

Restart-Service
```

This naming convention makes commands easier to discover and remember.

---

# Getting Help

Display help for a cmdlet.

```powershell
Get-Help Get-Service
```

Update help files.

```powershell
Update-Help
```

Display examples.

```powershell
Get-Help Get-Service -Examples
```

Learning to use the built-in help system is an essential PowerShell skill.

---

# Discovering Commands

List available cmdlets.

```powershell
Get-Command
```

Search for service-related commands.

```powershell
Get-Command *service*
```

Search for process commands.

```powershell
Get-Command *process*
```

---

# PowerShell Objects

Unlike traditional command-line tools, PowerShell works with **Objects** instead of plain text.

Example:

```powershell
Get-Service
```

Returns service objects containing properties such as:

- Name
- Status
- DisplayName
- StartupType

Objects make automation far more powerful than text parsing.

---

# Viewing Object Properties

Inspect object details.

```powershell
Get-Service | Get-Member
```

Display selected properties.

```powershell
Get-Service | Select-Object Name, Status
```

---

# Variables

Variables store information.

Example:

```powershell
$name = "GoHackersCloud"

Write-Host $name
```

Output:

```text
GoHackersCloud
```

Variables simplify scripting and automation.

---

# Built-in Variables

PowerShell includes predefined variables.

Examples:

```powershell
$HOME

$PROFILE

$PSVersionTable
```

Display PowerShell version.

```powershell
$PSVersionTable
```

---

# Working with the Pipeline

The pipeline (`|`) passes objects from one command to another.

Example:

```powershell
Get-Service | Sort-Object Status
```

Another example:

```powershell
Get-Process | Select-Object Name, CPU
```

Pipelines are one of PowerShell's most powerful features.

---

# Filtering Results

Display only running services.

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"}
```

Filter processes using more complex conditions as needed.

---

# Sorting Results

Sort processes by CPU usage.

```powershell
Get-Process | Sort-Object CPU -Descending
```

---

# Working with Files

Display files.

```powershell
Get-ChildItem
```

Equivalent to:

```cmd
dir
```

Change directory.

```powershell
Set-Location C:\Users
```

Display current directory.

```powershell
Get-Location
```

---

# Managing Processes

Display processes.

```powershell
Get-Process
```

Stop a process.

```powershell
Stop-Process -Name notepad
```

---

# Managing Services

Display services.

```powershell
Get-Service
```

Restart a service.

```powershell
Restart-Service Spooler
```

---

# Managing Event Logs

Display recent system events.

```powershell
Get-EventLog -LogName System -Newest 20
```

For newer Windows versions, administrators often use:

```powershell
Get-WinEvent
```

---

# Creating Your First Script

Create a file.

```text
hello.ps1
```

Example:

```powershell
Write-Host "Welcome to GoHackersCloud Academy!"
```

Run:

```powershell
.\hello.ps1
```

---

# Execution Policy

Windows controls script execution using an execution policy.

View the current policy.

```powershell
Get-ExecutionPolicy
```

Common values include:

- Restricted
- RemoteSigned
- AllSigned
- Unrestricted

Organizations should choose an execution policy that aligns with their security requirements.

---

# Remote Administration

PowerShell supports remote management.

Example:

```powershell
Enter-PSSession Server01
```

Or:

```powershell
Invoke-Command
```

Remote administration allows administrators to manage servers without logging in interactively.

---

# PowerShell in Active Directory

Examples include:

Create users:

```powershell
New-ADUser
```

Display users:

```powershell
Get-ADUser
```

Display groups:

```powershell
Get-ADGroup
```

These cmdlets require the Active Directory PowerShell module.

---

# PowerShell in Azure

Cloud Engineers use PowerShell to:

- Create Virtual Machines
- Manage Storage Accounts
- Configure Virtual Networks
- Deploy Resources
- Manage Microsoft Entra ID

PowerShell is widely used alongside Azure CLI and infrastructure-as-code tools.

---

# PowerShell in Cybersecurity

Security professionals use PowerShell for:

- Log Analysis
- User Auditing
- Incident Response
- Malware Investigation
- Security Automation
- Threat Hunting

PowerShell is also frequently targeted by attackers, making logging and monitoring especially important.

---

# Common PowerShell Commands

Display help:

```powershell
Get-Help
```

List commands:

```powershell
Get-Command
```

Display processes:

```powershell
Get-Process
```

Display services:

```powershell
Get-Service
```

Display files:

```powershell
Get-ChildItem
```

Display current directory:

```powershell
Get-Location
```

Display computer information:

```powershell
Get-ComputerInfo
```

---

# Real-World Example

An administrator needs to check the status of the Print Spooler service on 100 Windows servers.

Instead of manually logging into each server:

```text
PowerShell Script

↓

Connect to Servers

↓

Check Service Status

↓

Generate Report

↓

Email Results

↓

Complete in Minutes
```

Automation significantly reduces administrative effort and improves consistency.

---

# Best Practices

As a Windows administrator:

- Learn the Verb-Noun cmdlet naming convention.
- Use `Get-Help` before running unfamiliar commands.
- Test scripts in a lab before production.
- Use meaningful variable names.
- Store scripts in version control systems like Git.
- Apply the Principle of Least Privilege.
- Digitally sign scripts where required.
- Enable PowerShell logging and auditing in enterprise environments.

Automation should improve efficiency without compromising security.

---

# Key Takeaways

After completing this lesson, you should understand:

- PowerShell fundamentals.
- Cmdlets.
- Objects.
- Variables.
- Pipelines.
- Basic scripting.
- Remote administration.
- Enterprise PowerShell automation.

---

# Summary

PowerShell is the primary automation and administration platform for modern Windows environments.

Its object-based architecture, extensive cmdlet library, and scripting capabilities enable administrators to automate repetitive tasks, manage enterprise infrastructure, and integrate with cloud platforms.

Mastering PowerShell is an essential step toward becoming an effective Windows Administrator, Cloud Engineer, DevOps Engineer, or Cybersecurity Professional.

---

# Next Lesson

➡️ **Lesson 08 — Windows Networking**

In the next lesson, you'll learn how Windows communicates over networks, understand IP addressing, DNS, DHCP, routing, Windows Firewall, network troubleshooting, and enterprise networking concepts used in corporate environments.