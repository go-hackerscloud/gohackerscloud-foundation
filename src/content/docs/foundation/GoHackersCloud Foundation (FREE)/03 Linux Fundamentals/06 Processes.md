---
title: Lesson 06 — Linux Processes
description: Learn how Linux manages running processes, understand process states and priorities, monitor system activity, and use commands like ps, top, htop, kill, and nice to manage applications and troubleshoot Linux servers.
---

## Lesson Overview

Imagine your Linux server is running:

- A web server
- A database
- Docker containers
- Kubernetes services
- SSH sessions
- Background system services

How does Linux keep all of these running simultaneously?

The answer is **Processes**.

Every program running on Linux becomes a process. Whether you're browsing the web, editing a file, running a Docker container, or hosting an application in AWS, Linux manages every task as a process.

Understanding processes is one of the most important skills for Linux administrators, Cloud Engineers, DevOps Engineers, and Cybersecurity Professionals.

In this lesson, you'll learn how Linux creates, manages, prioritizes, monitors, and terminates processes in enterprise environments.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain what a Linux process is.
- Understand the Linux process lifecycle.
- Differentiate between foreground and background processes.
- Monitor running processes.
- Manage process priorities.
- Terminate processes safely.
- Troubleshoot process-related issues.

---

# What is a Process?

A **Process** is a program that is currently running.

Examples include:

- NGINX Web Server
- MySQL Database
- SSH Session
- Docker Container
- Firefox Browser
- Python Script

Every active application running on Linux is represented as a process.

---

# Program vs Process

A program is stored on disk.

A process is the running instance of that program.

Example:

```text
Program

↓

python3

↓

Executed

↓

Running Process

↓

Python Script
```

---

# Process Lifecycle

A Linux process goes through several stages.

```text
Program

↓

Created

↓

Ready

↓

Running

↓

Waiting

↓

Completed
```

Linux constantly manages thousands of processes simultaneously.

---

# Process ID (PID)

Every process has a unique **Process ID (PID)**.

Example:

| Process | PID |
|----------|----:|
| systemd | 1 |
| sshd | 832 |
| nginx | 1205 |
| mysql | 2103 |

PIDs help administrators identify and manage running processes.

---

# Parent and Child Processes

Processes can create other processes.

Example:

```text
systemd (PID 1)

↓

sshd

↓

bash

↓

python
```

The original process is called the **Parent Process**.

The newly created process is the **Child Process**.

---

# The init / systemd Process

The first process started during boot is:

```text
systemd
```

PID:

```text
1
```

It starts and manages nearly every other process on the system.

---

# Foreground Processes

Foreground processes run interactively.

Example:

```bash
nano notes.txt
```

The terminal waits until the program exits.

---

# Background Processes

Background processes continue running while you use the terminal.

Example:

```bash
python app.py &
```

The ampersand (`&`) starts the process in the background.

---

# Viewing Running Processes

Display running processes.

```bash
ps
```

Detailed output:

```bash
ps -ef
```

or

```bash
ps aux
```

Example:

```text
UID   PID   CMD

root    1   systemd

root  350   sshd

user 1200   bash
```

---

# Monitoring Processes

Display live system activity.

```bash
top
```

The `top` command displays:

- CPU Usage
- Memory Usage
- Running Processes
- Process IDs
- System Load

It updates continuously.

---

# Using htop

A more user-friendly process monitor.

```bash
htop
```

Features include:

- Interactive interface
- Colorized output
- Process tree
- Search
- Sorting

Install if necessary:

```bash
sudo apt install htop
```

---

# Process States

Processes can exist in several states.

| State | Description |
|--------|-------------|
| R | Running |
| S | Sleeping |
| D | Waiting for I/O |
| T | Stopped |
| Z | Zombie |

Understanding process states helps troubleshoot system issues.

---

# Finding Processes

Search for a running process.

```bash
ps -ef | grep nginx
```

Example:

```bash
ps -ef | grep ssh
```

---

# Process Priority

Linux schedules processes based on priority.

Priority is controlled using:

- Nice Value
- Scheduler

Lower nice values receive higher CPU priority.

---

# Nice Values

Range:

```text
-20

Highest Priority

↓

19

Lowest Priority
```

Default:

```text
0
```

---

# Running a Process with Nice

Example:

```bash
nice -n 10 python backup.py
```

The process runs with lower CPU priority.

---

# Changing Process Priority

Use:

```bash
renice
```

Example:

```bash
sudo renice -5 1200
```

This changes the priority of PID 1200.

---

# Stopping Processes

Terminate a process.

```bash
kill PID
```

Example:

```bash
kill 1200
```

Linux first asks the process to exit gracefully.

---

# Forcefully Killing a Process

If a process refuses to stop:

```bash
kill -9 PID
```

Example:

```bash
kill -9 1200
```

Signal **9 (SIGKILL)** immediately terminates the process.

Use only when necessary.

---

# Killing by Name

Terminate processes by name.

```bash
pkill nginx
```

Or

```bash
killall nginx
```

---

# Background Jobs

View jobs running in the current shell.

```bash
jobs
```

Move a background process to the foreground.

```bash
fg
```

Move a stopped process to the background.

```bash
bg
```

---

# System Load

Display system uptime and load.

```bash
uptime
```

Example:

```text
Load Average:

0.45

0.60

0.55
```

High load may indicate CPU-intensive processes.

---

# Process Management in Cloud Computing

Cloud Engineers frequently monitor:

- EC2 Instances
- Docker Containers
- Kubernetes Pods
- Background Services
- Web Servers
- Databases

Understanding Linux processes is essential for troubleshooting cloud workloads.

---

# Process Management in Cybersecurity

Security teams investigate:

- Suspicious processes
- Malware
- Crypto miners
- Reverse shells
- Unauthorized applications
- High CPU utilization

Many cyber attacks are detected by identifying unusual running processes.

---

# Common Commands

Display processes:

```bash
ps
```

Detailed processes:

```bash
ps -ef
```

Live monitoring:

```bash
top
```

Interactive monitoring:

```bash
htop
```

Search process:

```bash
pgrep nginx
```

Kill process:

```bash
kill PID
```

Kill by name:

```bash
pkill process_name
```

Display system load:

```bash
uptime
```

---

# Real-World Example

A production web server becomes slow.

The Linux administrator investigates:

```text
High CPU Alert

↓

top

↓

MySQL Process Using 98% CPU

↓

Identify PID

↓

Restart Service

↓

CPU Returns to Normal
```

Understanding Linux processes enables administrators to diagnose and resolve performance issues quickly.

---

# Best Practices

As a Linux administrator:

- Monitor CPU and memory usage regularly.
- Avoid using `kill -9` unless necessary.
- Investigate high-resource processes.
- Use `htop` for interactive monitoring.
- Assign appropriate process priorities.
- Monitor long-running background services.
- Review startup services periodically.
- Document critical application processes.

Good process management improves system performance and stability.

---

# Key Takeaways

After completing this lesson, you should understand:

- What a Linux process is.
- Process lifecycle.
- Foreground vs background processes.
- Process IDs (PIDs).
- Process monitoring commands.
- Process priorities.
- Safe process termination.
- Enterprise process management best practices.

---

# Summary

Linux Processes are the heart of the operating system.

Every application, service, container, and system task runs as a process managed by the Linux kernel.

Whether you're administering cloud servers, troubleshooting Kubernetes nodes, monitoring Docker containers, or responding to cybersecurity incidents, understanding Linux process management is an essential skill.

Mastering process management will help you build reliable, secure, and high-performing Linux systems.

---

# Next Lesson

➡️ **Lesson 07 — Linux Package Management**

In the next lesson, you'll learn how to install, update, remove, and manage software packages using package managers such as **APT**, **DNF**, **YUM**, and **Snap**, and understand how enterprise Linux systems maintain software securely.