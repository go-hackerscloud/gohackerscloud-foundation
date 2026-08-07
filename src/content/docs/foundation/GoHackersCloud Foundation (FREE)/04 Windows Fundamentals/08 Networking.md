---
title: Lesson 08 — Windows Networking
description: Learn how Windows communicates over networks, understand IP addressing, DNS, DHCP, routing, Windows Firewall, remote connectivity, and enterprise network troubleshooting.
---

## Lesson Overview

Every Windows computer in an organization communicates across a network.

Whether you're:

- Browsing the Internet
- Logging into Active Directory
- Accessing a shared folder
- Connecting through Remote Desktop (RDP)
- Accessing Microsoft 365
- Managing Azure Virtual Machines
- Connecting to SQL Server

Windows networking makes it all possible.

Network connectivity is one of the most critical components of enterprise IT. Windows Administrators, Cloud Engineers, DevOps Engineers, and Cybersecurity Professionals spend a significant amount of time configuring, monitoring, and troubleshooting Windows networks.

In this lesson, you'll learn the networking concepts and Windows tools used daily in enterprise environments.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Windows networking fundamentals.
- Learn IP addressing and subnetting basics.
- Understand DNS and DHCP.
- Configure Windows network settings.
- Use Windows networking tools.
- Troubleshoot network issues.
- Apply enterprise networking best practices.

---

# Windows Networking Overview

Every Windows device communicates through a network interface.

```text
Windows Computer

↓

Network Adapter

↓

Switch

↓

Router

↓

Internet

↓

Cloud Services
```

The operating system uses networking services to communicate with other computers and applications.

---

# Network Adapters

A **Network Adapter** (NIC) connects a computer to a network.

Examples include:

- Ethernet Adapter
- Wi-Fi Adapter
- Virtual Network Adapter
- VPN Adapter

Modern Windows systems may have multiple network adapters.

---

# Viewing Network Adapters

Open:

```text
ncpa.cpl
```

Or use PowerShell:

```powershell
Get-NetAdapter
```

Example output:

```text
Ethernet

Wi-Fi

Bluetooth Network Connection
```

---

# IP Address

Every device on a network requires an IP address.

Example:

```text
192.168.1.100
```

The IP address uniquely identifies the device on the network.

---

# Private IP Address Ranges

Common private IPv4 ranges include:

| Range | Purpose |
|--------|---------|
| 10.0.0.0/8 | Large enterprise networks |
| 172.16.0.0/12 | Medium-sized private networks |
| 192.168.0.0/16 | Home and small business networks |

These addresses are not directly accessible from the Internet.

---

# IPv4 vs IPv6

Windows supports both Internet Protocol versions.

| IPv4 | IPv6 |
|------|------|
| 32-bit | 128-bit |
| Example: 192.168.1.10 | Example: 2001:db8::10 |
| Widely deployed | Increasing adoption |

Modern enterprise networks often use both.

---

# Viewing IP Configuration

Display network configuration.

Command Prompt:

```cmd
ipconfig
```

Detailed output:

```cmd
ipconfig /all
```

PowerShell:

```powershell
Get-NetIPAddress
```

These commands display:

- IP Address
- Subnet Mask
- Default Gateway
- DNS Servers
- MAC Address

---

# Hostname

Display the computer name.

Command Prompt:

```cmd
hostname
```

PowerShell:

```powershell
hostname
```

Administrators often assign meaningful hostnames to enterprise systems.

---

# Default Gateway

The **Default Gateway** forwards traffic to external networks.

Example:

```text
Windows PC

↓

Gateway

↓

Internet

↓

Cloud Services
```

Without a default gateway, external communication is not possible.

---

# DNS (Domain Name System)

DNS translates domain names into IP addresses.

Example:

```text
www.gohackerscloud.com

↓

DNS

↓

203.x.x.x
```

Without DNS, users would need to remember IP addresses instead of names.

---

# Viewing DNS Configuration

Command Prompt:

```cmd
ipconfig /all
```

PowerShell:

```powershell
Get-DnsClientServerAddress
```

---

# Testing DNS Resolution

Using Command Prompt:

```cmd
nslookup gohackerscloud.com
```

Using PowerShell:

```powershell
Resolve-DnsName gohackerscloud.com
```

These tools verify whether DNS is functioning correctly.

---

# DHCP (Dynamic Host Configuration Protocol)

DHCP automatically assigns:

- IP Address
- Subnet Mask
- Default Gateway
- DNS Servers

Without DHCP, administrators would need to configure every computer manually.

---

# Renewing DHCP Lease

Release the current IP address.

```cmd
ipconfig /release
```

Request a new IP address.

```cmd
ipconfig /renew
```

Useful when troubleshooting connectivity issues.

---

# Testing Network Connectivity

Ping another device.

```cmd
ping google.com
```

Ping an IP address.

```cmd
ping 8.8.8.8
```

Successful replies indicate basic network connectivity.

---

# Tracing the Network Path

Display the route packets take.

```cmd
tracert google.com
```

This helps identify routing problems.

---

# Viewing Active Connections

Display network connections.

```cmd
netstat -ano
```

PowerShell:

```powershell
Get-NetTCPConnection
```

Useful information includes:

- Local Port
- Remote Address
- Connection State
- Process ID

---

# Testing Ports

PowerShell provides a built-in command.

```powershell
Test-NetConnection google.com -Port 443
```

This verifies whether a specific port is reachable.

---

# Windows Firewall

Windows Defender Firewall protects systems by controlling inbound and outbound traffic.

Capabilities include:

- Allow Rules
- Block Rules
- Port Filtering
- Application Rules
- Network Profiles

Every enterprise Windows system should have the firewall enabled unless organizational requirements dictate otherwise.

---

# Managing Windows Firewall

Open:

```text
wf.msc
```

PowerShell:

```powershell
Get-NetFirewallProfile
```

Enable firewall:

```powershell
Set-NetFirewallProfile `
-Profile Domain,Private,Public `
-Enabled True
```

---

# Remote Desktop (RDP)

Remote Desktop allows administrators to manage Windows systems remotely.

Open:

```text
mstsc
```

Default port:

```text
3389
```

Secure RDP using:

- Network Level Authentication (NLA)
- VPN
- MFA
- Firewall restrictions

---

# SMB File Sharing

Windows shares files using **Server Message Block (SMB)**.

Example:

```text
File Server

↓

SMB Share

↓

Employees

↓

Shared Files
```

SMB is the standard protocol for Windows file sharing.

---

# Network Profiles

Windows supports three network profiles.

| Profile | Purpose |
|----------|---------|
| Domain | Corporate networks |
| Private | Trusted home or office networks |
| Public | Airports, cafés, hotels |

Different firewall rules apply to each profile.

---

# Network Troubleshooting Workflow

A structured troubleshooting approach helps identify issues quickly.

```text
Check Physical Connection

↓

Verify IP Address

↓

Check Default Gateway

↓

Verify DNS

↓

Ping Gateway

↓

Ping Internet

↓

Check Firewall

↓

Review Event Logs

↓

Resolve Issue
```

---

# Windows Networking in Cloud Computing

Cloud Engineers regularly manage:

### Microsoft Azure

- Virtual Networks (VNets)
- Network Security Groups (NSGs)
- Azure Firewall
- Load Balancers

### AWS

- VPC
- Security Groups
- Route Tables
- Elastic Network Interfaces (ENIs)

### Google Cloud

- VPC Networks
- Firewall Rules
- Cloud NAT

Understanding Windows networking is essential when deploying cloud workloads.

---

# Windows Networking in Cybersecurity

Security teams investigate:

- Unauthorized connections
- Open ports
- DNS anomalies
- Firewall changes
- Remote Desktop activity
- Suspicious network traffic
- SMB exploitation
- Lateral movement

Network visibility is a key part of incident response.

---

# Common Windows Networking Commands

Display IP configuration:

```cmd
ipconfig
```

Detailed configuration:

```cmd
ipconfig /all
```

Ping a host:

```cmd
ping
```

Trace route:

```cmd
tracert
```

Display active connections:

```cmd
netstat -ano
```

Display adapters:

```powershell
Get-NetAdapter
```

Display IP addresses:

```powershell
Get-NetIPAddress
```

Test DNS:

```cmd
nslookup
```

Test a TCP port:

```powershell
Test-NetConnection
```

---

# Real-World Example

Employees report that they cannot access an internal web application.

The Windows Administrator follows this workflow:

```text
Verify Network Adapter

↓

Check IP Address

↓

Verify Gateway

↓

Test DNS Resolution

↓

Ping Application Server

↓

Check Firewall Rules

↓

Verify IIS Service

↓

Restore Connectivity
```

Following a structured process minimizes downtime and simplifies troubleshooting.

---

# Best Practices

As a Windows administrator:

- Use DHCP for client systems unless static addressing is required.
- Configure reliable DNS servers.
- Enable Windows Defender Firewall.
- Secure Remote Desktop with MFA and VPN where possible.
- Monitor open ports regularly.
- Assign meaningful hostnames.
- Document IP addressing schemes.
- Test network connectivity after configuration changes.

Strong networking practices improve performance, reliability, and security.

---

# Key Takeaways

After completing this lesson, you should understand:

- Windows networking fundamentals.
- IP addressing.
- DNS and DHCP.
- Network adapters.
- Windows Firewall.
- Remote Desktop.
- SMB file sharing.
- Enterprise networking best practices.

---

# Summary

Windows Networking enables enterprise systems to communicate securely and efficiently across local networks, data centers, and cloud environments.

By understanding IP addressing, DNS, DHCP, Windows Firewall, Remote Desktop, SMB, and network troubleshooting tools, you'll be prepared to manage Windows infrastructure in enterprise IT, cloud platforms, and cybersecurity operations.

These networking concepts form the foundation for advanced topics such as Active Directory, Azure networking, hybrid cloud connectivity, and Windows security.

---

# Next Lesson

➡️ **Lesson 09 — Windows Event Logs**

Learn how Windows Event Logs record system activity, understand Event Viewer, Windows log categories, event IDs, auditing, troubleshooting, and security investigations used in enterprise environments.