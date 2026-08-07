---
title: Lesson 03 — Linux File System
description: Learn how the Linux File System is organized, understand the File System Hierarchy Standard (FHS), navigate directories using the command line, and discover where Linux stores system files, applications, logs, and user data.
---

# Lesson 03 — Linux File System

## Lesson Overview

Unlike Windows, Linux doesn't use drive letters such as **C:\**, **D:\**, or **E:\**.

Instead, Linux organizes everything into a **single hierarchical directory structure** that begins at the **Root Directory (/)**.

In Linux:

- Files
- Directories
- Hard disks
- USB drives
- Network storage
- Running processes
- Devices

are all represented as files within this hierarchy.

Understanding the Linux File System is one of the most important skills for Linux administrators, Cloud Engineers, DevOps Engineers, and Cybersecurity Professionals.

Throughout your Linux career, you'll constantly work with directories, configuration files, logs, applications, and storage—all of which are organized within the Linux File System.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand the Linux File System Hierarchy.
- Navigate Linux directories.
- Identify important system directories.
- Understand absolute and relative paths.
- Explore common file management commands.
- Understand where Linux stores configuration files, logs, applications, and user data.

---

# What is a File System?

A **File System** defines how an operating system stores, organizes, and retrieves files.

It provides a structured way to organize:

- Files
- Directories
- Storage Devices
- Permissions
- Metadata

Without a file system, the operating system would not know where files are stored.

---

# Linux File System Hierarchy

Linux follows the **Filesystem Hierarchy Standard (FHS)**.

Everything begins from a single directory:

```text
/
```

This is called the **Root Directory**.

Every other directory exists underneath it.

---

# Linux Directory Structure

```text
/

├── bin

├── boot

├── dev

├── etc

├── home

├── lib

├── media

├── mnt

├── opt

├── proc

├── root

├── run

├── sbin

├── srv

├── sys

├── tmp

├── usr

└── var
```

Understanding these directories is essential for Linux administration.

---

# Root Directory (/)

The **Root Directory** is the top-level directory in Linux.

Everything starts here.

Example:

```text
/
```

Think of it as the parent of every directory in the operating system.

---

# /home

The **/home** directory stores user files.

Example:

```text
/home

├── student

├── alice

└── bob
```

Each user has their own personal directory.

Typical contents include:

- Documents
- Downloads
- Desktop
- Pictures
- Configuration Files

---

# /root

The **/root** directory is the home directory of the **root** (administrator) user.

Example:

```text
/root
```

Do not confuse **/** with **/root**.

They are completely different.

---

# /etc

The **/etc** directory stores system configuration files.

Examples:

```text
/etc/passwd

/etc/hosts

/etc/fstab

/etc/ssh/

```

Most Linux administration tasks involve modifying files in **/etc**.

---

# /bin

Contains essential user commands.

Examples:

```text
ls

cp

mv

cat

pwd
```

These commands are available even during system recovery.

---

# /sbin

Contains essential administrative commands.

Examples:

```text
reboot

shutdown

mount

fdisk
```

Primarily used by system administrators.

---

# /usr

Stores applications and user programs.

Example:

```text
/usr/bin

/usr/lib

/usr/share
```

Most installed software resides here.

---

# /var

Stores data that changes frequently.

Examples:

```text
Logs

Mail

Cache

Databases

Print Queues
```

One of the most important directories is:

```text
/var/log
```

System logs are stored here.

---

# /tmp

Temporary files.

Applications use this directory while running.

Files may be automatically removed after reboot.

---

# /boot

Contains files required to start Linux.

Examples:

- Linux Kernel
- Boot Loader
- Initial RAM Disk

Without **/boot**, Linux cannot start.

---

# /dev

Linux treats hardware devices as files.

Examples:

```text
/dev/sda

/dev/sdb

/dev/null

/dev/random
```

Hard disks, USB devices, and other hardware appear here.

---

# /proc

A virtual file system containing information about running processes and the Linux kernel.

Examples:

```text
/proc/cpuinfo

/proc/meminfo

/proc/version
```

Useful for troubleshooting and system monitoring.

---

# /sys

Provides information about hardware devices and kernel settings.

System administrators use this directory for advanced hardware management.

---

# /opt

Stores optional third-party applications.

Examples:

```text
/opt/google

/opt/docker

/opt/customapp
```

Many enterprise applications install files here.

---

# /media

Used when removable media is automatically mounted.

Examples:

- USB Drives
- DVDs
- External Hard Drives

---

# /mnt

Temporary mount point used by administrators.

Example:

```text
/mnt/backup

/mnt/storage
```

Commonly used during maintenance.

---

# Absolute Paths

An **Absolute Path** begins from the Root Directory.

Example:

```text
/home/student/Documents/file.txt
```

Absolute paths always begin with:

```text
/
```

---

# Relative Paths

A **Relative Path** begins from the current directory.

Example:

```text
Documents/file.txt
```

Relative paths do not begin with **/**.

---

# Current Working Directory

Display your current location.

Command:

```bash
pwd
```

Example:

```text
/home/student
```

---

# Listing Files

Display files and directories.

Command:

```bash
ls
```

Display detailed information.

```bash
ls -l
```

Display hidden files.

```bash
ls -la
```

---

# Changing Directories

Move into another directory.

```bash
cd /home
```

Return to your home directory.

```bash
cd
```

Move up one directory.

```bash
cd ..
```

Move to the previous directory.

```bash
cd -
```

---

# Viewing Directory Contents

Display the contents of a directory.

Example:

```bash
ls /etc
```

Example output:

```text
passwd

hosts

ssh

fstab
```

---

# Hidden Files

Linux hides files beginning with a period.

Examples:

```text
.bashrc

.profile

.gitconfig
```

Display hidden files:

```bash
ls -la
```

---

# Linux File Types

Linux supports several file types.

| Type | Description |
|------|-------------|
| Regular File | Standard file |
| Directory | Folder |
| Symbolic Link | Shortcut |
| Character Device | Keyboard, Terminal |
| Block Device | Hard Disk |
| Socket | Network Communication |
| Named Pipe | Process Communication |

---

# File System in Cloud Computing

Cloud virtual machines also use the Linux File System.

Example:

```text
AWS EC2

↓

Ubuntu

↓

/etc

↓

Configuration Files

↓

Application Starts
```

Cloud administrators regularly manage these directories.

---

# File System in Cybersecurity

Security professionals investigate:

- Log Files
- User Directories
- SSH Configuration
- Authentication Logs
- Malware Files

Common investigation locations:

```text
/var/log

/etc

/home

/tmp
```

Understanding the Linux File System is critical during incident response.

---

# Common Commands

Display current directory:

```bash
pwd
```

List files:

```bash
ls
```

Change directory:

```bash
cd
```

Display directory tree (if installed):

```bash
tree
```

Display disk usage:

```bash
df -h
```

Display mounted file systems:

```bash
mount
```

These commands are used daily by Linux administrators.

---

# Real-World Example

A Cloud Engineer deploys a web server.

```text
Ubuntu Server

↓

/etc/nginx

(Configuration)

/var/log/nginx

(Log Files)

/usr/sbin/nginx

(Application Binary)

/var/www/html

(Website Files)
```

Knowing the Linux File System makes troubleshooting much easier.

---

# Best Practices

As a Linux administrator:

- Learn the purpose of each major directory.
- Keep user data under **/home**.
- Avoid modifying system files unnecessarily.
- Store logs under **/var/log**.
- Back up configuration files before making changes.
- Use absolute paths in automation scripts.
- Keep temporary files in **/tmp**.
- Organize applications consistently.

A well-organized file system simplifies administration and troubleshooting.

---

# Key Takeaways

After completing this lesson, you should understand:

- The Linux File System Hierarchy Standard (FHS).
- The purpose of major Linux directories.
- Absolute vs relative paths.
- Basic navigation commands.
- Common file types.
- How Linux organizes applications, configuration files, logs, and user data.

---

# Summary

The Linux File System provides a standardized and organized way to store and manage files across the operating system.

Unlike Windows, Linux organizes everything beneath a single Root Directory, making navigation consistent across distributions.

Whether you're managing cloud servers, troubleshooting applications, analyzing security incidents, or automating infrastructure, a solid understanding of the Linux File System is essential.

Mastering the Linux directory structure will make every future administration task easier.

---

# Next Lesson

➡️ **Lesson 04 — Linux Users & Groups**

In the next lesson, you'll learn how Linux manages users and groups, understand authentication and authorization, create user accounts, assign permissions, and explore best practices for identity management in Linux systems.