---
title: Lesson 08 — Linux Services & Systemd
description: Learn how Linux manages background services using systemd, understand service units and targets, and use systemctl to start, stop, restart, enable, and troubleshoot enterprise Linux services.
---

## Lesson Overview

Imagine you've deployed an Ubuntu server in AWS to host a company website.

The web server must:

- Start automatically after every reboot.
- Continue running even if no user is logged in.
- Restart if it crashes.
- Be monitored by the operating system.

Linux accomplishes this using **Services** managed by **systemd**.

Services run quietly in the background and power almost every part of a Linux system—from networking and SSH to databases, web servers, Docker, and Kubernetes.

Whether you're a Linux Administrator, Cloud Engineer, DevOps Engineer, or Cybersecurity Professional, understanding Linux services is essential because nearly every enterprise application depends on them.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain what Linux services are.
- Understand systemd and systemctl.
- Manage services.
- Configure services to start automatically.
- Understand service units and targets.
- Troubleshoot failed services.
- Apply enterprise service management best practices.

---

# What is a Linux Service?

A **Linux Service** is a background process that performs a specific function without requiring user interaction.

Examples include:

- SSH Server
- NGINX
- Apache
- Docker
- MySQL
- PostgreSQL
- Cron
- Network Manager

Services continue running even after users log out.

---

# Why Services Matter

Without services:

- Websites would stop.
- Databases would become unavailable.
- SSH access would fail.
- Containers would stop.
- Enterprise applications would become inaccessible.

Services keep Linux systems available and reliable.

---

# What is systemd?

**systemd** is the default service manager used by most modern Linux distributions.

It is responsible for:

- Starting the operating system.
- Managing services.
- Tracking running processes.
- Handling system startup.
- Managing dependencies.
- Recording service logs.

The first process started during boot is:

```text
systemd

PID 1
```

---

# What is systemctl?

`systemctl` is the command-line tool used to manage services controlled by systemd.

Using `systemctl`, administrators can:

- Start services
- Stop services
- Restart services
- Enable services
- Disable services
- Check service status

---

# Viewing Service Status

Check whether a service is running.

```bash
systemctl status ssh
```

Example output:

```text
Active: active (running)
```

This command displays:

- Service state
- Process ID
- Startup time
- Recent log entries

---

# Starting a Service

Start a stopped service.

```bash
sudo systemctl start nginx
```

The service begins running immediately.

---

# Stopping a Service

Stop a running service.

```bash
sudo systemctl stop nginx
```

This gracefully shuts down the service.

---

# Restarting a Service

Restart a service after configuration changes.

```bash
sudo systemctl restart nginx
```

Restarting applies new settings without rebooting the server.

---

# Reloading a Service

Some services can reload configuration without restarting.

```bash
sudo systemctl reload nginx
```

This minimizes downtime.

---

# Enabling a Service

Enable automatic startup during boot.

```bash
sudo systemctl enable nginx
```

Now the service starts every time Linux boots.

---

# Disabling a Service

Prevent automatic startup.

```bash
sudo systemctl disable nginx
```

The service remains installed but no longer starts automatically.

---

# Checking if a Service is Enabled

Verify startup configuration.

```bash
systemctl is-enabled nginx
```

Example:

```text
enabled
```

or

```text
disabled
```

---

# Listing Running Services

Display active services.

```bash
systemctl list-units --type=service
```

This shows all running services managed by systemd.

---

# Listing Failed Services

Identify services that failed to start.

```bash
systemctl --failed
```

This is useful during troubleshooting.

---

# Service Unit Files

Every service has a unit file.

Typical location:

```text
/etc/systemd/system/

/usr/lib/systemd/system/
```

Example:

```text
nginx.service
```

A unit file defines:

- Service name
- Startup command
- Dependencies
- Restart behavior

---

# Understanding Unit Types

systemd manages different unit types.

| Unit | Purpose |
|------|---------|
| .service | Background services |
| .target | Boot targets |
| .socket | Socket activation |
| .mount | Mounted file systems |
| .timer | Scheduled tasks |
| .device | Hardware devices |

The most common unit is the **.service** file.

---

# Targets

Targets define system startup states.

Examples:

| Target | Purpose |
|---------|----------|
| multi-user.target | Multi-user server mode |
| graphical.target | Desktop environment |
| rescue.target | Recovery mode |
| emergency.target | Emergency maintenance |

Targets replace the older Linux runlevel system.

---

# Viewing Boot Time

Display system startup performance.

```bash
systemd-analyze
```

Example:

```text
Startup finished in

4.5 seconds
```

This helps administrators identify slow boot processes.

---

# Viewing Service Logs

systemd integrates with **journalctl**.

View logs for a service.

```bash
journalctl -u nginx
```

View recent logs.

```bash
journalctl -xe
```

Logs are essential for troubleshooting production systems.

---

# Service Dependencies

Many services depend on other services.

Example:

```text
Application

↓

Database

↓

Network

↓

Storage
```

systemd automatically starts services in the correct order.

---

# Services in Cloud Computing

Cloud Engineers commonly manage services such as:

- SSH
- Docker
- Kubernetes Kubelet
- NGINX
- Apache
- MySQL
- PostgreSQL
- Cloud Monitoring Agents

Managing services is a daily task in cloud environments.

---

# Services in DevOps

DevOps Engineers frequently:

- Deploy services
- Restart applications
- Monitor services
- Configure automatic startup
- Troubleshoot failed deployments

Automation tools like Ansible often use systemd to manage services.

---

# Services in Cybersecurity

Security teams investigate:

- Unexpected services
- Disabled security services
- Malware running as services
- Unauthorized startup services
- Failed authentication services

Monitoring services helps detect security incidents.

---

# Common Commands

Check service status:

```bash
systemctl status service-name
```

Start service:

```bash
systemctl start service-name
```

Stop service:

```bash
systemctl stop service-name
```

Restart service:

```bash
systemctl restart service-name
```

Reload configuration:

```bash
systemctl reload service-name
```

Enable at boot:

```bash
systemctl enable service-name
```

Disable at boot:

```bash
systemctl disable service-name
```

View logs:

```bash
journalctl -u service-name
```

---

# Real-World Example

A company deploys an internal web application.

```text
Ubuntu Server

↓

systemd

↓

NGINX Service

↓

Application Service

↓

MySQL Service

↓

Users Access Website
```

If the server reboots, systemd automatically starts all required services in the correct sequence, ensuring the application becomes available without manual intervention.

---

# Best Practices

As a Linux administrator:

- Enable only required services.
- Disable unused services.
- Monitor service health regularly.
- Restart services after configuration changes.
- Review logs before troubleshooting.
- Keep service configurations documented.
- Use descriptive custom service names.
- Test startup behavior after system updates.

Proper service management improves system reliability, security, and availability.

---

# Key Takeaways

After completing this lesson, you should understand:

- What Linux services are.
- The role of systemd.
- How to use systemctl.
- Service unit files.
- Startup targets.
- Viewing service logs.
- Enterprise service management best practices.

---

# Summary

Linux services are the foundation of every modern Linux server.

From SSH and web servers to databases, containers, and monitoring agents, nearly every enterprise application runs as a managed service.

By mastering systemd and systemctl, you'll be able to deploy, manage, monitor, and troubleshoot Linux servers confidently in cloud, DevOps, and enterprise environments.

These skills are used daily by Linux Administrators, Cloud Engineers, DevOps Engineers, Site Reliability Engineers (SREs), and Cybersecurity Professionals.

---

# Next Lesson

➡️ **Lesson 09 — Linux Networking**

In the next lesson, you'll learn how Linux communicates over networks, configure IP addresses, troubleshoot connectivity, understand network interfaces, DNS configuration, routing, and use essential networking commands like `ip`, `ping`, `ss`, `netstat`, `traceroute`, and `curl`.