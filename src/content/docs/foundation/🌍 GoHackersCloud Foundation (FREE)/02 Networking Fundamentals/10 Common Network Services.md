---
title: Lesson 10 — Common Network Services
description: Learn about the most commonly used network services in enterprise environments, understand their purpose, associated ports, and discover how they enable communication across modern networks and cloud platforms.
---

# Lesson 10 — Common Network Services

## Lesson Overview

Modern enterprise networks are much more than routers, switches, and cables.

Behind every business application, cloud platform, email service, authentication system, file server, and remote connection are **network services** working together to keep organizations running.

For example:

- Logging into Windows uses authentication services.
- Browsing the Internet uses HTTP or HTTPS.
- Accessing Linux servers uses SSH.
- Sending emails uses SMTP.
- Receiving emails uses IMAP.
- Sharing files uses SMB.
- Synchronizing system clocks uses NTP.

Whether you're working in Cloud Computing, Cybersecurity, DevOps, or Enterprise IT, you'll interact with these services every day.

Understanding how they work will make troubleshooting, securing, and managing enterprise environments much easier.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain what network services are.
- Identify common enterprise network services.
- Understand commonly used port numbers.
- Learn how applications communicate using these services.
- Understand the importance of secure network services.
- Explore network services used in cloud environments.

---

# What are Network Services?

A **Network Service** is a software service that enables communication between devices across a network.

These services allow users and applications to:

- Browse websites
- Send emails
- Transfer files
- Authenticate users
- Synchronize time
- Share files
- Access remote systems

Without network services, enterprise IT environments would not function.

---

# Common Enterprise Network Services

Modern organizations commonly use the following services.

| Service | Purpose | Default Port |
|----------|---------|-------------:|
| HTTP | Web Communication | 80 |
| HTTPS | Secure Web Communication | 443 |
| DNS | Name Resolution | 53 |
| DHCP | Automatic IP Assignment | 67 / 68 |
| FTP | File Transfer | 21 |
| SFTP | Secure File Transfer | 22 |
| SSH | Secure Remote Access | 22 |
| Telnet | Legacy Remote Access | 23 |
| SMTP | Send Email | 25 |
| POP3 | Receive Email | 110 |
| IMAP | Email Synchronization | 143 |
| LDAP | Directory Services | 389 |
| LDAPS | Secure Directory Services | 636 |
| NTP | Time Synchronization | 123 |
| SMB | Windows File Sharing | 445 |
| RDP | Remote Desktop | 3389 |

These are among the most frequently used services in enterprise environments.

---

# HTTP & HTTPS

HTTP and HTTPS provide communication between web browsers and web servers.

Common uses include:

- Websites
- APIs
- Cloud Portals
- SaaS Applications
- Internal Business Applications

HTTPS encrypts communication using TLS and should always be used for production systems.

---

# DNS

The Domain Name System (DNS) converts human-readable names into IP addresses.

Example:

```text
www.gohackerscloud.com

↓

203.0.113.10
```

DNS allows users to access services using names instead of numerical IP addresses.

---

# DHCP

Dynamic Host Configuration Protocol (DHCP) automatically provides network configuration.

A DHCP server assigns:

- IP Address
- Subnet Mask
- Default Gateway
- DNS Server

This eliminates the need for manual network configuration.

---

# FTP

File Transfer Protocol (FTP) transfers files between systems.

Characteristics:

- Port 21
- No encryption
- Legacy protocol

FTP is rarely used in production because it sends data in plain text.

---

# SFTP

Secure File Transfer Protocol (SFTP) provides encrypted file transfers.

Characteristics:

- Uses SSH
- Port 22
- Strong encryption
- Secure authentication

SFTP is the preferred file transfer protocol in modern enterprise environments.

---

# SSH

Secure Shell (SSH) enables secure remote administration.

Common uses include:

- Managing Linux Servers
- Cloud Virtual Machines
- Network Devices
- Automation Scripts
- Secure Command Execution

Cloud Engineers use SSH daily to administer Linux systems.

---

# Telnet

Telnet also provides remote access but does **not** encrypt communication.

Characteristics:

- Port 23
- Plain-text communication
- Insecure
- Rarely used today

Most organizations have replaced Telnet with SSH.

---

# Email Services

Email communication relies on multiple protocols.

## SMTP

Simple Mail Transfer Protocol

Purpose:

- Send email

Default Port:

- 25

---

## POP3

Post Office Protocol Version 3

Purpose:

- Download email to a local device

Default Port:

- 110

POP3 is suitable for single-device access.

---

## IMAP

Internet Message Access Protocol

Purpose:

- Synchronize email across multiple devices

Default Port:

- 143

IMAP is widely used because users often access email from laptops, phones, and tablets.

---

# LDAP

Lightweight Directory Access Protocol (LDAP) provides centralized authentication and directory services.

Examples include:

- Microsoft Active Directory
- OpenLDAP

Common functions:

- User Authentication
- Group Membership
- Directory Searches
- Access Control

LDAP plays a major role in enterprise identity management.

---

# LDAPS

LDAPS is the secure version of LDAP.

Characteristics:

- Port 636
- TLS Encryption
- Secure Authentication

Organizations should use LDAPS whenever possible.

---

# Network Time Protocol (NTP)

NTP synchronizes system clocks across a network.

Accurate time is essential for:

- Authentication
- Security Logs
- Digital Certificates
- Kerberos
- Incident Investigations
- Compliance

Incorrect system time can cause authentication failures and inconsistent logs.

---

# SMB

Server Message Block (SMB) enables Windows file and printer sharing.

Common uses:

- Shared Network Drives
- Department File Servers
- Printer Sharing
- Windows File Access

SMB is heavily used in Microsoft environments.

---

# RDP

Remote Desktop Protocol (RDP) allows administrators to remotely control Windows systems.

Common uses:

- Windows Server Administration
- Remote IT Support
- Virtual Desktop Infrastructure (VDI)

Because RDP provides administrative access, it should always be secured with:

- Multi-Factor Authentication
- VPN
- Network Restrictions

---

# Ports and Services

Applications communicate using ports.

Example:

```text
Browser

↓

HTTPS

Port 443

↓

Web Server
```

Understanding ports is essential for:

- Firewall Configuration
- Security Monitoring
- Troubleshooting
- Vulnerability Assessments
- Network Design

---

# Frequently Used Ports

| Port | Service |
|------:|---------|
| 20/21 | FTP |
| 22 | SSH / SFTP |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 67 / 68 | DHCP |
| 80 | HTTP |
| 110 | POP3 |
| 123 | NTP |
| 143 | IMAP |
| 389 | LDAP |
| 443 | HTTPS |
| 445 | SMB |
| 636 | LDAPS |
| 3389 | RDP |

These ports are commonly referenced in networking, cloud administration, and cybersecurity.

---

# Network Services in Cloud Computing

Cloud providers rely heavily on these services.

Examples include:

### AWS

- SSH for EC2 administration
- HTTPS for web applications
- Route 53 for DNS
- DHCP inside VPCs
- NTP for time synchronization

---

### Microsoft Azure

- Azure DNS
- Azure Bastion (SSH/RDP)
- Azure Active Directory

---

### Google Cloud

- Cloud DNS
- Compute Engine SSH
- Identity Services

Cloud Engineers configure and troubleshoot these services regularly.

---

# Network Services in Cybersecurity

Security professionals monitor network services to:

- Detect attacks
- Identify exposed services
- Review firewall rules
- Investigate suspicious activity
- Protect authentication systems
- Secure remote access

Many security assessments begin by identifying open ports and running services.

---

# Real-World Example

Imagine an employee starts their workday.

```text
Laptop

↓

DHCP

(IP Address Assigned)

↓

DNS

(Find Company Portal)

↓

HTTPS

(Open Web Application)

↓

LDAP / Active Directory

(User Authentication)

↓

SMB

(Open Shared Files)

↓

NTP

(Synchronize System Time)
```

Although the employee only sees a login screen, multiple network services work together behind the scenes.

---

# Best Practices

As an IT professional:

- Use encrypted protocols whenever possible.
- Disable unused services.
- Restrict unnecessary ports.
- Monitor service availability.
- Document required ports.
- Patch services regularly.
- Secure administrative protocols.
- Follow the Principle of Least Privilege.

Properly managed network services improve both security and reliability.

---

# Key Takeaways

After completing this lesson, you should understand:

- What network services are.
- The purpose of common enterprise services.
- Frequently used network ports.
- How applications rely on these services.
- Why secure protocols should always be preferred.
- The role of network services in cloud and enterprise environments.

---

# Summary

Network services are the backbone of enterprise IT.

Every website, cloud application, email system, authentication service, and file-sharing platform depends on network services to function correctly.

Whether you're administering Linux servers with SSH, securing web applications with HTTPS, managing Active Directory with LDAP, or troubleshooting DNS issues, these services will become part of your daily work as an IT professional.

A strong understanding of network services will prepare you for advanced cloud networking, cybersecurity, DevOps, and enterprise infrastructure management.

---

# Next Lesson

➡️ **Lesson 11 — Firewalls**

In the next lesson, you'll learn how firewalls inspect and filter network traffic, explore different firewall technologies, understand access control policies, and discover how organizations protect their networks from unauthorized access.