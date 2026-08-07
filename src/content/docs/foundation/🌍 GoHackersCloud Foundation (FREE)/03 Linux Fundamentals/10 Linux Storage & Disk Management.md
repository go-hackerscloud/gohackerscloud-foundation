---
title: Lesson 10 — Linux Storage & Disk Management
description: Learn how Linux manages storage devices, partitions, file systems, mounting, and Logical Volume Management (LVM). Understand enterprise storage concepts used in cloud and on-premises environments.
---

# Lesson 10 — Linux Storage & Disk Management

## Lesson Overview

Imagine you've launched a new Linux server in AWS.

Initially, it has a **20 GB disk**.

A few months later, your application grows, log files increase, and the database requires more storage.

How do you safely add more disk space without reinstalling Linux?

This is where **Linux Storage & Disk Management** becomes essential.

Linux provides powerful tools for managing disks, partitions, file systems, and storage volumes. Whether you're working with cloud virtual machines, enterprise servers, Kubernetes nodes, or databases, understanding Linux storage is a critical administrative skill.

Throughout this lesson, you'll learn how Linux detects storage devices, creates partitions, formats file systems, mounts disks, and manages enterprise storage using **Logical Volume Manager (LVM)**.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Linux storage architecture.
- Identify disks and partitions.
- Create and manage file systems.
- Mount and unmount storage devices.
- Understand the Linux `/etc/fstab` file.
- Learn Logical Volume Management (LVM).
- Apply enterprise storage management best practices.

---

# Linux Storage Overview

Every Linux server stores data on one or more storage devices.

Examples include:

- Hard Disk Drives (HDD)
- Solid State Drives (SSD)
- NVMe Drives
- USB Storage
- SAN Storage
- NAS Storage
- Cloud Block Storage

Linux treats each storage device as a file under the **/dev** directory.

---

# Storage Architecture

A simplified storage architecture looks like this:

```text
Application

↓

File System

↓

Partition

↓

Disk

↓

Storage Hardware
```

Each layer performs a specific function before data is written to disk.

---

# Storage Devices

Linux identifies disks using device names.

Examples:

```text
/dev/sda

/dev/sdb

/dev/sdc

/dev/nvme0n1
```

Where:

- **sda** = First SATA/SCSI disk
- **sdb** = Second disk
- **nvme0n1** = NVMe SSD

---

# Viewing Storage Devices

Display all block devices.

```bash
lsblk
```

Example output:

```text
NAME

sda

├── sda1

├── sda2

└── sda3
```

This command provides an overview of disks, partitions, and mount points.

---

# Viewing Disk Information

Display partition details.

```bash
sudo fdisk -l
```

Example output:

```text
Disk

/dev/sda

100 GB
```

Administrators use this command before partitioning disks.

---

# Understanding Partitions

A **Partition** divides a physical disk into logical sections.

Example:

```text
Disk

100 GB

↓

Partition 1

50 GB

↓

Partition 2

50 GB
```

Each partition can have its own file system.

---

# Common Partition Types

Linux commonly uses:

- Primary Partition
- Extended Partition
- Logical Partition
- GPT Partitions

Modern systems typically use the **GUID Partition Table (GPT)** because it supports larger disks and more partitions.

---

# File Systems

Before a partition can store files, it must be formatted with a file system.

Common Linux file systems include:

| File System | Purpose |
|--------------|----------|
| ext4 | Default Linux file system |
| XFS | Enterprise workloads |
| Btrfs | Advanced features |
| FAT32 | USB compatibility |
| NTFS | Windows compatibility |

The most common Linux file system is **ext4**.

---

# Creating a File System

Format a partition with ext4.

```bash
sudo mkfs.ext4 /dev/sdb1
```

For XFS:

```bash
sudo mkfs.xfs /dev/sdb1
```

Formatting prepares the partition for storing files.

---

# Mounting File Systems

Linux makes storage available by mounting it to a directory.

Example:

```text
Disk

↓

Partition

↓

Mounted

↓

/data
```

Mount a partition.

```bash
sudo mount /dev/sdb1 /data
```

Users can now access files through `/data`.

---

# Viewing Mounted File Systems

Display mounted storage.

```bash
mount
```

Or use:

```bash
df -h
```

Example:

```text
Filesystem

Size

Used

Available
```

This command is commonly used to monitor disk utilization.

---

# Unmounting Storage

Safely detach a mounted file system.

```bash
sudo umount /data
```

Always unmount storage before removing physical devices.

---

# Persistent Mounting

Mounts created manually disappear after reboot.

Permanent mounts are configured in:

```text
/etc/fstab
```

Example:

```text
UUID=xxxxxxxx

/data

ext4

defaults

0

2
```

The operating system automatically mounts these file systems during startup.

---

# Viewing UUIDs

Display storage UUIDs.

```bash
blkid
```

Using UUIDs is recommended because device names can change after reboots.

---

# Disk Usage

Display available storage.

```bash
df -h
```

Example:

```text
Filesystem

Used

Available

Use%
```

This helps identify low disk space conditions.

---

# Directory Size

Display directory size.

```bash
du -sh /var/log
```

Administrators commonly use this command to locate large directories.

---

# Logical Volume Manager (LVM)

LVM provides flexible storage management.

Instead of using fixed partitions, storage is managed through logical volumes.

Benefits:

- Resize storage online
- Combine multiple disks
- Easier administration
- Enterprise scalability

---

# LVM Architecture

```text
Physical Disk

↓

Physical Volume (PV)

↓

Volume Group (VG)

↓

Logical Volume (LV)

↓

File System

↓

Mount Point
```

This design allows administrators to expand storage without rebuilding the server.

---

# LVM Components

## Physical Volume (PV)

Represents the actual storage device.

Example:

```text
/dev/sdb
```

---

## Volume Group (VG)

A pool of available storage created from one or more physical volumes.

Example:

```text
vg_data
```

---

## Logical Volume (LV)

A virtual partition created from a volume group.

Example:

```text
lv_database
```

Applications use logical volumes instead of physical disks.

---

# Expanding Storage

Suppose an application requires more disk space.

Traditional partitioning:

```text
Difficult
```

LVM:

```text
Add New Disk

↓

Extend Volume Group

↓

Extend Logical Volume

↓

Grow File System

↓

Application Continues Running
```

This flexibility makes LVM the preferred choice for enterprise Linux systems.

---

# Storage in Cloud Computing

Cloud providers offer managed block storage.

### AWS

- Amazon EBS
- Instance Store
- Amazon EFS
- Amazon FSx

---

### Microsoft Azure

- Managed Disks
- Azure Files
- Azure NetApp Files

---

### Google Cloud

- Persistent Disk
- Filestore
- Hyperdisk

Cloud Engineers regularly attach, resize, and manage these storage services.

---

# Storage in Kubernetes

Containers require persistent storage.

Examples include:

- Persistent Volumes (PV)
- Persistent Volume Claims (PVC)
- Storage Classes
- CSI Drivers

Linux storage concepts directly apply to Kubernetes environments.

---

# Storage in Cybersecurity

Security teams investigate:

- Disk utilization
- Unauthorized storage devices
- Sensitive data locations
- Log storage
- File system integrity
- Mounted network shares

Proper storage management supports system reliability and forensic investigations.

---

# Common Commands

Display block devices:

```bash
lsblk
```

Display disk usage:

```bash
df -h
```

Display directory size:

```bash
du -sh
```

Display partition information:

```bash
sudo fdisk -l
```

Display UUIDs:

```bash
blkid
```

Mount storage:

```bash
mount
```

Unmount storage:

```bash
umount
```

---

# Real-World Example

A production database server is running out of storage.

The Linux administrator performs the following steps:

```text
Attach New Disk

↓

Verify with lsblk

↓

Create Physical Volume

↓

Extend Volume Group

↓

Extend Logical Volume

↓

Resize File System

↓

Database Continues Running
```

This operation can often be completed without downtime when using LVM.

---

# Best Practices

As a Linux administrator:

- Monitor disk utilization regularly.
- Use UUIDs in `/etc/fstab`.
- Prefer GPT partitioning for modern systems.
- Use LVM for enterprise workloads.
- Separate application and log storage.
- Regularly back up important data.
- Test storage recovery procedures.
- Monitor file system health and capacity.

Proper storage management improves availability, scalability, and reliability.

---

# Key Takeaways

After completing this lesson, you should understand:

- Linux storage architecture.
- Disks and partitions.
- File systems.
- Mounting and unmounting.
- `/etc/fstab`.
- Disk usage monitoring.
- Logical Volume Management (LVM).
- Enterprise storage best practices.

---

# Summary

Linux Storage & Disk Management is a fundamental skill for every Linux Administrator, Cloud Engineer, and DevOps Engineer.

By understanding disks, partitions, file systems, mounting, and LVM, you'll be able to build scalable and reliable Linux systems for enterprise applications and cloud infrastructure.

These concepts are used daily when managing AWS EC2 instances, Azure Virtual Machines, Kubernetes clusters, databases, and production Linux servers.

---

# Next Lesson

➡️ **Lesson 11 — Linux Shell Scripting**

In the next lesson, you'll learn how to automate Linux administration using Bash shell scripting, understand variables, loops, conditions, and functions, and create scripts that simplify repetitive tasks in enterprise environments.