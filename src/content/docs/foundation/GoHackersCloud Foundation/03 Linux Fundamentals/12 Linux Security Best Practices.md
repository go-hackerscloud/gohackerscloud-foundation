---
title: Lesson 12 — Linux Security Best Practices
description: Learn how to secure Linux systems by implementing user hardening, SSH security, firewall configuration, software updates, log monitoring, auditing, and enterprise security best practices.
---
## Lesson Overview

Linux powers the majority of today's cloud infrastructure, enterprise servers, Kubernetes clusters, and DevOps platforms.

Because Linux systems often host critical business applications and sensitive data, they are common targets for cyber attacks.

A secure Linux server isn't achieved by installing an operating system alone—it requires proper configuration, regular maintenance, monitoring, and adherence to security best practices.

Whether you're deploying an EC2 instance in AWS, managing a Kubernetes worker node, or administering enterprise Linux servers, security must be integrated into every stage of the system lifecycle.

In this lesson, you'll learn practical techniques used by Linux administrators and security engineers to harden Linux systems and reduce security risks.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Linux system hardening.
- Secure user accounts and authentication.
- Configure SSH securely.
- Manage Linux firewalls.
- Keep Linux systems updated.
- Monitor logs and system activity.
- Apply enterprise Linux security best practices.

---

# What is Linux Hardening?

**Linux Hardening** is the process of reducing the attack surface of a Linux system by implementing security controls and following best practices.

Hardening helps:

- Prevent unauthorized access.
- Reduce vulnerabilities.
- Improve system resilience.
- Meet compliance requirements.
- Protect sensitive data.

---

# Why Linux Security Matters

An insecure Linux server may lead to:

- Unauthorized access
- Data theft
- Malware infections
- Ransomware
- Privilege escalation
- Service disruption
- Regulatory violations

Strong security practices significantly reduce these risks.

---

# Principle of Least Privilege

Every user should have **only the permissions required** to perform their job.

Example:

```text
Developer

↓

Application Directory

✓ Access

↓

System Configuration

✗ No Access
```

Never grant administrator privileges unless absolutely necessary.

---

# Secure User Accounts

Best practices include:

- Create individual user accounts.
- Disable unused accounts.
- Enforce strong passwords.
- Use Multi-Factor Authentication (MFA) where supported.
- Regularly review user permissions.
- Avoid shared accounts.

User management is the foundation of Linux security.

---

# Avoid Direct Root Login

The **root** account has unrestricted access.

Instead of logging in directly as root:

```bash
sudo
```

Example:

```bash
sudo apt update
```

Using `sudo` provides better accountability and auditing.

---

# Secure SSH Access

SSH is one of the most commonly targeted services.

Recommended practices:

- Disable root login.
- Use SSH key authentication.
- Disable password authentication when possible.
- Change the default SSH configuration only when required by organizational policy.
- Restrict access to trusted IP addresses.
- Enable MFA if supported.
- Use modern cryptographic algorithms.

Example configuration:

```text
/etc/ssh/sshd_config
```

Recommended settings:

```text
PermitRootLogin no

PasswordAuthentication no
```

Restart SSH after making changes.

```bash
sudo systemctl restart ssh
```

---

# Keep Linux Updated

Regular updates help protect systems from known vulnerabilities.

Ubuntu:

```bash
sudo apt update

sudo apt upgrade
```

Red Hat:

```bash
sudo dnf upgrade
```

Always test updates in non-production environments before deploying to production.

---

# Configure the Firewall

Limit unnecessary network access.

Ubuntu (UFW):

Enable firewall:

```bash
sudo ufw enable
```

Allow SSH:

```bash
sudo ufw allow 22
```

Allow HTTPS:

```bash
sudo ufw allow 443
```

View firewall status:

```bash
sudo ufw status
```

Enterprise systems may use `firewalld`, `nftables`, or cloud-native firewall services.

---

# Disable Unnecessary Services

Every running service increases the attack surface.

List active services:

```bash
systemctl list-units --type=service
```

Disable unused services:

```bash
sudo systemctl disable service-name
```

Only run services that are required.

---

# Secure File Permissions

Protect sensitive files.

Examples:

SSH Private Key:

```text
600
```

User Home Directory:

```text
700
```

Review permissions regularly.

Commands:

```bash
ls -la

chmod

chown
```

---

# Enable Logging

Logs provide valuable information during troubleshooting and security investigations.

View system logs:

```bash
journalctl
```

Authentication logs:

Ubuntu:

```text
/var/log/auth.log
```

Red Hat:

```text
/var/log/secure
```

Monitor logs regularly for suspicious activity.

---

# Monitor Failed Login Attempts

Failed authentication attempts may indicate brute-force attacks.

Example:

```bash
sudo journalctl -u ssh
```

Or review authentication logs using:

```bash
grep "Failed" /var/log/auth.log
```

Investigate repeated failures promptly.

---

# Install Fail2Ban

**Fail2Ban** helps protect against brute-force attacks.

Install:

```bash
sudo apt install fail2ban
```

Enable:

```bash
sudo systemctl enable fail2ban
```

Start:

```bash
sudo systemctl start fail2ban
```

Fail2Ban automatically blocks IP addresses that repeatedly fail authentication.

---

# Secure Password Policies

Strong passwords should include:

- Uppercase letters
- Lowercase letters
- Numbers
- Special characters
- Minimum recommended length of 12–16 characters

Avoid:

- Dictionary words
- Personal information
- Reused passwords

---

# Use SSH Keys

Generate an SSH key pair:

```bash
ssh-keygen
```

Copy the public key:

```bash
ssh-copy-id user@server
```

SSH keys provide stronger security than passwords and are commonly used in cloud environments.

---

# Monitor Running Processes

Display running processes:

```bash
ps -ef
```

Interactive monitoring:

```bash
top
```

or

```bash
htop
```

Unexpected processes should be investigated.

---

# Monitor Open Network Ports

Display listening ports:

```bash
ss -tuln
```

Review services listening on the network and close unnecessary ports.

---

# Secure Software Installation

Install software only from trusted repositories.

Ubuntu:

```bash
sudo apt install package-name
```

Avoid downloading random installation scripts from untrusted websites.

---

# Regular Backups

Security also includes recoverability.

Backup:

- Configuration files
- Databases
- Application data
- User data

Regularly test restoration procedures.

---

# Linux Security in Cloud Computing

Cloud providers provide additional security controls.

AWS:

- Security Groups
- IAM Roles
- Systems Manager
- AWS Inspector
- AWS GuardDuty

Azure:

- Network Security Groups
- Microsoft Defender for Cloud
- Azure Policy

Google Cloud:

- Cloud Armor
- Security Command Center
- Identity and Access Management (IAM)

Linux hardening should complement cloud-native security controls.

---

# Linux Security in Cybersecurity

Security teams perform activities such as:

- Vulnerability assessments
- Log analysis
- File integrity monitoring
- User auditing
- Malware detection
- Incident response
- Compliance assessments

Linux security is a core skill for SOC Analysts, Incident Responders, and Penetration Testers.

---

# Common Security Commands

Current user:

```bash
whoami
```

Display login history:

```bash
last
```

Display failed logins:

```bash
lastb
```

View running processes:

```bash
ps -ef
```

View listening ports:

```bash
ss -tuln
```

View firewall status:

```bash
sudo ufw status
```

View service status:

```bash
systemctl status ssh
```

Display authentication logs:

```bash
journalctl -u ssh
```

---

# Real-World Example

A new Linux web server is deployed in AWS.

The administrator performs the following hardening steps:

```text
Create Administrator Account

↓

Disable Root Login

↓

Configure SSH Keys

↓

Enable Firewall

↓

Install Security Updates

↓

Install Fail2Ban

↓

Review File Permissions

↓

Enable Logging

↓

Monitor System
```

This baseline hardening significantly improves the server's security posture.

---

# Best Practices

As a Linux administrator:

- Apply security updates regularly.
- Follow the Principle of Least Privilege.
- Use SSH keys instead of passwords whenever possible.
- Disable unnecessary services.
- Restrict network access using firewalls.
- Monitor authentication logs.
- Audit privileged accounts.
- Perform regular security reviews and backups.

Security should be treated as an ongoing process rather than a one-time task.

---

# Key Takeaways

After completing this lesson, you should understand:

- Linux system hardening.
- Secure user management.
- SSH security best practices.
- Firewall configuration.
- Software update management.
- Log monitoring and auditing.
- Enterprise Linux security best practices.

---

# Summary

Linux security is one of the most important responsibilities of every system administrator, cloud engineer, and cybersecurity professional.

By implementing strong authentication, securing remote access, managing permissions, applying updates, monitoring logs, and reducing the attack surface, you can significantly improve the security and reliability of Linux systems.

These practices form the foundation of enterprise Linux administration and will be used throughout your cloud, DevOps, Kubernetes, and cybersecurity career.

---

# Next Lesson

➡️ **Lesson 13 — Linux Administration & Troubleshooting**

In the next lesson, you'll learn how to troubleshoot Linux systems, diagnose performance issues, analyze logs, monitor CPU, memory, storage, and networking, and follow structured troubleshooting methodologies used by enterprise Linux administrators.