---
title: Lesson 13 — Linux Administration & Troubleshooting
description: Learn how to troubleshoot Linux systems, diagnose performance issues, analyze logs, monitor CPU, memory, storage, networking, and follow structured troubleshooting methodologies used by enterprise Linux administrators.
---

# Lesson 13 — Linux Administration & Troubleshooting

## Lesson Overview

In a production environment, Linux administrators rarely spend all day installing software or creating users.

Instead, much of their time is spent solving problems.

Imagine receiving alerts like these:

- Website is down
- Server is running slowly
- Users cannot log in
- Disk space is full
- Application won't start
- Database connection failed
- SSH is unreachable

Every organization expects its Linux administrators to quickly identify the root cause and restore services.

Troubleshooting is one of the most valuable skills in Cloud Engineering, DevOps, Site Reliability Engineering (SRE), and Cybersecurity.

This lesson teaches a structured methodology for diagnosing and resolving Linux issues in enterprise environments.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Follow a structured troubleshooting methodology.
- Monitor CPU, memory, storage, and networking.
- Analyze Linux logs.
- Troubleshoot services.
- Diagnose performance issues.
- Investigate common Linux problems.
- Apply enterprise troubleshooting best practices.

---

# What is Troubleshooting?

Troubleshooting is the process of:

- Identifying problems
- Finding the root cause
- Resolving the issue
- Verifying the solution
- Preventing recurrence

A structured approach reduces downtime and improves system reliability.

---

# Enterprise Troubleshooting Workflow

Successful administrators follow a consistent process.

```text
Problem Report

↓

Collect Information

↓

Identify Symptoms

↓

Analyze Logs

↓

Determine Root Cause

↓

Implement Fix

↓

Verify Resolution

↓

Document Findings
```

Never jump directly to conclusions without gathering evidence.

---

# Step 1 — Gather Information

Before making changes, collect information.

Questions to ask:

- What changed?
- When did the issue begin?
- Is the issue affecting everyone?
- Which application is impacted?
- Are there any recent deployments?
- Are there recent configuration changes?

Understanding the scope helps narrow the investigation.

---

# Step 2 — Check System Health

View system uptime.

```bash
uptime
```

Example:

```text
15:42:21 up 42 days

load average: 0.25, 0.30, 0.35
```

This provides:

- Uptime
- Logged-in users
- System load

---

# Check CPU Usage

Monitor running processes.

```bash
top
```

or

```bash
htop
```

Look for:

- High CPU usage
- Stuck processes
- Zombie processes
- Excessive load

---

# Check Memory Usage

Display memory statistics.

```bash
free -h
```

Example:

```text
Total

Used

Free

Available
```

Low available memory may cause slow performance or swapping.

---

# Check Disk Usage

Display storage usage.

```bash
df -h
```

Example:

```text
Filesystem

Use%

95%
```

If a partition reaches 100%, applications may fail.

---

# Identify Large Directories

Find directories consuming space.

```bash
du -sh /*
```

Example:

```bash
du -sh /var/log
```

Useful for locating oversized log files or backups.

---

# Check Running Services

Verify service status.

```bash
systemctl status nginx
```

Example:

```text
Active:

running
```

If inactive, investigate why the service stopped.

---

# Restart a Failed Service

Restart the service.

```bash
sudo systemctl restart nginx
```

Then verify its status.

```bash
systemctl status nginx
```

---

# Analyze Logs

Most Linux problems leave evidence in log files.

System logs:

```bash
journalctl
```

Authentication logs:

Ubuntu

```text
/var/log/auth.log
```

Red Hat

```text
/var/log/secure
```

Application logs:

```text
/var/log/nginx/

/var/log/apache2/

/var/log/mysql/
```

Logs are often the fastest way to identify the root cause.

---

# View Recent Log Entries

Display recent logs.

```bash
journalctl -xe
```

View logs for a service.

```bash
journalctl -u nginx
```

---

# Check Network Connectivity

Verify IP configuration.

```bash
ip addr
```

Check routing.

```bash
ip route
```

Test connectivity.

```bash
ping google.com
```

Verify DNS.

```bash
dig google.com
```

Many application issues are caused by network or DNS problems.

---

# Check Open Ports

Display listening services.

```bash
ss -tuln
```

Example:

```text
22

SSH

443

HTTPS
```

If the expected port is missing, the service may not be running.

---

# Verify Process Health

Locate a process.

```bash
ps -ef | grep nginx
```

Display process tree.

```bash
pstree
```

Terminate a hung process if necessary.

```bash
kill PID
```

---

# Investigating User Issues

Check logged-in users.

```bash
who
```

View login history.

```bash
last
```

Check failed logins.

```bash
lastb
```

These commands help identify authentication problems.

---

# Verify File Permissions

Display permissions.

```bash
ls -l
```

Incorrect permissions frequently cause:

- Application failures
- Access denied errors
- Service startup failures

---

# Check Scheduled Jobs

View cron jobs.

```bash
crontab -l
```

System-wide cron configuration.

```bash
cat /etc/crontab
```

Automation failures often originate from scheduled tasks.

---

# Troubleshooting Boot Issues

View boot performance.

```bash
systemd-analyze
```

View failed services.

```bash
systemctl --failed
```

Review boot logs.

```bash
journalctl -b
```

These commands help diagnose startup failures.

---

# Common Linux Problems

## High CPU Usage

Possible causes:

- Infinite loops
- Heavy applications
- Malware
- Resource-intensive processes

Commands:

```bash
top

htop
```

---

## High Memory Usage

Possible causes:

- Memory leaks
- Large applications
- Insufficient RAM

Commands:

```bash
free -h

top
```

---

## Disk Full

Symptoms:

- Unable to save files
- Database failures
- Log write failures

Commands:

```bash
df -h

du -sh
```

---

## Service Won't Start

Check:

- Logs
- Configuration
- Port conflicts
- Permissions

Commands:

```bash
systemctl status

journalctl
```

---

## Network Problems

Check:

- Interface
- Gateway
- DNS
- Firewall
- Routing

Commands:

```bash
ip

ping

dig

ss
```

---

## SSH Connection Failed

Verify:

- SSH service
- Firewall
- Network connectivity
- Port 22

Commands:

```bash
systemctl status ssh

ss -tuln
```

---

# Troubleshooting in Cloud Computing

Cloud Engineers frequently investigate:

- EC2 startup failures
- High CPU utilization
- Full EBS volumes
- Security Group issues
- Route table problems
- DNS resolution failures
- Load balancer health checks

Linux troubleshooting skills directly translate to cloud environments.

---

# Troubleshooting in Kubernetes

Common investigations include:

- Pods stuck in Pending
- CrashLoopBackOff
- Node Not Ready
- Image Pull Errors
- DNS failures
- Storage mount issues

Linux logs and networking knowledge are essential when troubleshooting Kubernetes clusters.

---

# Troubleshooting in Cybersecurity

Security teams investigate:

- Failed logins
- Unauthorized processes
- Suspicious network connections
- Privilege escalation attempts
- Malware activity
- Log anomalies

Many incident response investigations begin with Linux system analysis.

---

# Essential Troubleshooting Commands

Display system uptime:

```bash
uptime
```

Monitor processes:

```bash
top
```

Memory usage:

```bash
free -h
```

Disk usage:

```bash
df -h
```

Directory size:

```bash
du -sh
```

View logs:

```bash
journalctl
```

Service status:

```bash
systemctl status
```

Running processes:

```bash
ps -ef
```

Open ports:

```bash
ss -tuln
```

Network configuration:

```bash
ip addr
```

---

# Real-World Example

A company's website becomes unavailable.

The Linux administrator follows this workflow:

```text
Website Down

↓

Ping Server

↓

SSH Login

↓

Check CPU & Memory

↓

Verify Disk Space

↓

Check NGINX Status

↓

Review NGINX Logs

↓

Restart Service

↓

Verify Website

↓

Document Root Cause
```

Following a structured methodology reduces downtime and improves incident response.

---

# Best Practices

As a Linux administrator:

- Follow a structured troubleshooting process.
- Never assume the root cause.
- Collect evidence before making changes.
- Review logs before restarting services.
- Monitor CPU, memory, storage, and networking regularly.
- Document incidents and resolutions.
- Test changes in a lab before production.
- Automate health checks where possible.

A disciplined troubleshooting approach leads to faster resolution and more stable systems.

---

# Key Takeaways

After completing this lesson, you should understand:

- Enterprise troubleshooting methodology.
- CPU, memory, and storage diagnostics.
- Service troubleshooting.
- Log analysis.
- Network troubleshooting.
- Common Linux issues.
- Enterprise troubleshooting best practices.

---

# Summary

Linux Administration & Troubleshooting is one of the most important operational skills in IT.

Whether you're managing cloud infrastructure, supporting production applications, administering Kubernetes clusters, or responding to cybersecurity incidents, your ability to quickly identify and resolve issues directly impacts business operations.

By following a structured troubleshooting methodology and mastering Linux diagnostic tools, you'll be prepared to manage enterprise Linux systems with confidence.

---

# Next Lesson

➡️ **Lesson 14 — Enterprise Linux Administration**

In the next lesson, you'll learn how Linux is managed in large organizations, explore enterprise administration practices, automation, monitoring, patch management, compliance, documentation, and operational excellence used by professional Linux and cloud teams.