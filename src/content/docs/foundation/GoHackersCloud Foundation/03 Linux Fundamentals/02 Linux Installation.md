---
title: Lesson 02 — Linux Installation
description: Learn how to install Linux using VirtualBox, VMware, cloud virtual machines, and Windows Subsystem for Linux (WSL). Prepare your Linux lab environment for hands-on learning throughout GoHackersCloud Academy.
---
## Lesson Overview

Before becoming a Linux administrator, Cloud Engineer, DevOps Engineer, or Cybersecurity Professional, you need your own Linux environment where you can safely learn and practice.

The good news is that installing Linux has never been easier.

You don't need expensive hardware or dedicated servers. You can install Linux on your existing Windows computer, run it inside a virtual machine, use Windows Subsystem for Linux (WSL), or launch a Linux virtual machine in AWS, Azure, or Google Cloud.

In this lesson, you'll learn the different installation methods, understand their advantages, and prepare your Linux lab for the rest of this course.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand different Linux installation methods.
- Choose the right Linux distribution.
- Install Linux using VirtualBox or VMware.
- Understand Windows Subsystem for Linux (WSL).
- Launch Linux virtual machines in the cloud.
- Verify a successful Linux installation.
- Prepare your Linux learning environment.

---

# Why Install Linux?

Throughout this Academy, you'll perform practical tasks such as:

- Creating users
- Managing files
- Configuring networking
- Installing applications
- Writing shell scripts
- Managing services
- Securing Linux servers

All of these require access to a Linux system.

---

# Linux Installation Options

There are several ways to run Linux.

| Method | Best For |
|---------|-----------|
| Virtual Machine | Beginners |
| Dual Boot | Personal Computers |
| Windows Subsystem for Linux (WSL) | Windows Users |
| Cloud Virtual Machine | Cloud Learning |
| Physical Server | Production |
| Raspberry Pi | Home Labs |

For this course, we recommend using a **Virtual Machine** because it is simple, safe, and easy to reset if something goes wrong.

---

# Recommended Linux Distribution

For beginners and cloud professionals, we recommend:

## Ubuntu Server LTS

Benefits:

- Beginner Friendly
- Large Community
- Excellent Documentation
- Cloud Native
- AWS Support
- Azure Support
- Google Cloud Support

Throughout this Academy, Ubuntu will be used for demonstrations unless stated otherwise.

---

# Installation Method 1 — VirtualBox

VirtualBox is a free virtualization platform that allows multiple operating systems to run on one computer.

Example:

```text
Windows

↓

VirtualBox

↓

Ubuntu Linux Virtual Machine
```

Advantages:

- Free
- Easy to use
- Snapshots
- Safe experimentation
- Ideal for beginners

---

# Installation Method 2 — VMware Workstation

VMware Workstation provides enterprise-grade virtualization.

Advantages:

- Better performance
- Enterprise features
- Professional environments
- Snapshot support

Many organizations use VMware in production environments.

---

# Installation Method 3 — Windows Subsystem for Linux (WSL)

WSL allows Linux to run directly inside Windows.

Example:

```text
Windows 11

↓

WSL

↓

Ubuntu
```

Advantages:

- No virtual machine required
- Fast startup
- Excellent developer experience
- Ideal for scripting and DevOps

Limitations:

- Some enterprise services behave differently than a full Linux installation.

---

# Installation Method 4 — Cloud Virtual Machine

Cloud providers allow you to launch Linux servers within minutes.

Examples:

AWS

- Amazon EC2

Azure

- Azure Virtual Machine

Google Cloud

- Compute Engine

Cloud virtual machines provide hands-on experience with production-like environments.

---

# Minimum System Requirements

Recommended configuration:

| Component | Recommended |
|-----------|-------------|
| CPU | Dual Core or Higher |
| RAM | 8 GB (16 GB Preferred) |
| Storage | 40 GB Free Space |
| Virtualization | Enabled in BIOS |
| Internet | Required |

---

# Download Ubuntu

Download the latest Ubuntu Server LTS ISO.

Recommended version:

```text
Ubuntu Server LTS
```

The ISO image contains everything required to install Linux.

---

# Installing Ubuntu in VirtualBox

## Step 1

Install VirtualBox.

---

## Step 2

Download the Ubuntu Server ISO.

---

## Step 3

Create a new Virtual Machine.

Recommended settings:

| Setting | Value |
|----------|-------|
| Name | Ubuntu-Lab |
| Type | Linux |
| Version | Ubuntu (64-bit) |
| RAM | 4096 MB |
| CPU | 2 Cores |
| Disk | 30 GB (Dynamic) |

---

## Step 4

Attach the Ubuntu ISO image.

```text
Virtual Machine

↓

Settings

↓

Storage

↓

Ubuntu ISO
```

---

## Step 5

Start the virtual machine.

Ubuntu Setup launches automatically.

---

## Step 6

Choose:

- Language
- Keyboard Layout
- Installation Type

Proceed with the default options unless your environment requires customization.

---

## Step 7

Configure networking.

For learning purposes:

- DHCP
- Default Settings

These settings can be modified later.

---

## Step 8

Configure storage.

Recommended:

```text
Use Entire Virtual Disk
```

This simplifies installation for beginners.

---

## Step 9

Create your administrator account.

Example:

Username:

```text
student
```

Hostname:

```text
ubuntu-lab
```

Choose a strong password.

---

## Step 10

Complete the installation.

Restart the virtual machine when prompted.

Congratulations!

Linux is now installed.

---

# First Login

After installation:

```text
Login:

student

Password:

********
```

You are now logged into Linux.

---

# Verify Installation

Run the following commands.

Display Linux version:

```bash
cat /etc/os-release
```

Display kernel version:

```bash
uname -r
```

Display hostname:

```bash
hostname
```

Display current user:

```bash
whoami
```

If these commands execute successfully, your Linux installation is ready.

---

# Directory Structure

After installation, you'll begin working with directories such as:

```text
/

├── home

├── etc

├── var

├── usr

├── opt

├── tmp
```

You'll explore these directories in the next lessons.

---

# Installing Linux in AWS

Cloud Engineers frequently launch Linux servers in AWS.

Example:

```text
AWS Console

↓

EC2

↓

Launch Instance

↓

Ubuntu

↓

SSH Connection

↓

Linux Server
```

You'll perform this activity later in the AWS Cloud modules.

---

# Installing Linux in Azure

Azure allows quick deployment of Ubuntu virtual machines.

Example:

```text
Azure Portal

↓

Virtual Machine

↓

Ubuntu

↓

SSH

↓

Linux
```

---

# Installing Linux in Google Cloud

Google Cloud Compute Engine supports several Linux distributions.

Example:

```text
Google Cloud

↓

Compute Engine

↓

Ubuntu

↓

SSH

↓

Linux Server
```

---

# Common Installation Issues

Some common issues include:

- Virtualization disabled in BIOS
- Insufficient RAM
- Corrupted ISO download
- Network configuration problems
- Boot order issues
- Incorrect virtual disk configuration

These are usually easy to resolve with proper troubleshooting.

---

# Best Practices

As you build your Linux lab:

- Allocate sufficient RAM.
- Keep snapshots before major changes.
- Update the operating system regularly.
- Use strong passwords.
- Practice commands daily.
- Avoid using the root account unnecessarily.
- Document your configuration.
- Build multiple virtual machines as your skills grow.

---

# Real-World Example

A Cloud Engineer creates a Linux server.

```text
AWS EC2

↓

Ubuntu Server

↓

SSH

↓

Install NGINX

↓

Deploy Website

↓

Monitor Logs
```

This workflow is common in production cloud environments.

---

# Key Takeaways

After completing this lesson, you should understand:

- Different Linux installation methods.
- Why VirtualBox is recommended for beginners.
- How to install Ubuntu Linux.
- How to verify a successful installation.
- Linux installation options in cloud environments.
- Best practices for building a Linux lab.

---

# Summary

Installing Linux is the first practical step toward becoming a Cloud Engineer, Linux Administrator, DevOps Engineer, or Cybersecurity Professional.

Throughout this Academy, your Linux lab will serve as the foundation for hands-on exercises covering file systems, user management, networking, services, shell scripting, security, and system administration.

By building and maintaining your own Linux environment, you'll gain the practical experience needed to confidently work with enterprise servers and cloud infrastructure.

---

# Next Lesson

➡️ **Lesson 03 — Linux File System**

In the next lesson, you'll explore the Linux file system hierarchy, understand important directories, learn how Linux organizes files and storage, and begin navigating the operating system using the command line.