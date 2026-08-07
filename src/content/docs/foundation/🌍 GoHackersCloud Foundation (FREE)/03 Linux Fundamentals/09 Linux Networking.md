---
title: Lesson 09 — Linux Networking
description: Learn how Linux communicates over networks, configure IP addresses, troubleshoot connectivity, understand network interfaces, DNS configuration, routing, and use essential Linux networking commands.
---

# Lesson 09 — Linux Networking

## Lesson Overview

Almost every Linux server communicates with other systems over a network.

Whether you're:

- Accessing a website
- Connecting to an AWS EC2 instance using SSH
- Deploying Kubernetes clusters
- Downloading software updates
- Accessing cloud storage
- Connecting to a database

Linux networking makes it all possible.

As a Cloud Engineer, DevOps Engineer, Linux Administrator, or Cybersecurity Professional, you'll spend a significant amount of your time troubleshooting network connectivity, configuring interfaces, verifying DNS resolution, and monitoring traffic.

In this lesson, you'll learn the Linux networking fundamentals that are used daily in enterprise environments.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Linux network interfaces.
- View and configure IP addresses.
- Understand routing and gateways.
- Configure DNS.
- Test network connectivity.
- Troubleshoot networking issues.
- Use common Linux networking commands.

---

# Linux Networking Overview

Every Linux server connects to a network using one or more **Network Interfaces**.

A network interface allows Linux to send and receive data.

Example:

```text
Linux Server

↓

Network Interface

↓

Switch

↓

Router

↓

Internet
```

Without a network interface, a server cannot communicate with other devices.

---

# Network Interfaces

Modern Linux systems use predictable interface names.

Common examples:

```text
eth0

ens33

ens160

enp0s3

wlan0
```

Cloud platforms often use names such as:

```text
ens5

eth0
```

---

# Viewing Network Interfaces

Display all interfaces.

```bash
ip link show
```

or

```bash
ip link
```

Example output:

```text
lo

ens33
```

---

# Viewing IP Addresses

Display IP configuration.

```bash
ip addr
```

or

```bash
ip a
```

Example:

```text
ens33

192.168.1.100/24
```

This command replaces the older `ifconfig` utility.

---

# Understanding IP Address Information

Example:

```text
192.168.1.100/24
```

Where:

- **192.168.1.100** = IP Address
- **/24** = Subnet Prefix

This identifies the host on the local network.

---

# Loopback Interface

Linux always includes the **Loopback Interface**.

```text
lo
```

Loopback IP:

```text
127.0.0.1
```

Purpose:

- Local communication
- Application testing
- Service verification

---

# Viewing Routing Information

Display routing table.

```bash
ip route
```

Example:

```text
default via 192.168.1.1
```

The default gateway sends traffic destined for external networks.

---

# Default Gateway

The default gateway forwards traffic outside the local network.

Example:

```text
Linux Server

↓

Gateway

192.168.1.1

↓

Internet
```

Without a default gateway, Internet connectivity is not possible.

---

# DNS Configuration

Linux stores DNS configuration in:

```text
/etc/resolv.conf
```

Example:

```text
nameserver 8.8.8.8
```

Display DNS settings.

```bash
cat /etc/resolv.conf
```

---

# Hostname Configuration

Display hostname.

```bash
hostname
```

Display detailed hostname information.

```bash
hostnamectl
```

Change hostname.

```bash
sudo hostnamectl set-hostname web-server
```

---

# Testing Connectivity

Ping another device.

```bash
ping google.com
```

Ping an IP address.

```bash
ping 8.8.8.8
```

Successful replies indicate network connectivity.

---

# Tracing Network Paths

View the path packets take.

Ubuntu:

```bash
traceroute google.com
```

If not installed:

```bash
sudo apt install traceroute
```

This command helps identify routing issues.

---

# Testing DNS Resolution

Use `nslookup`.

```bash
nslookup gohackerscloud.com
```

Or:

```bash
dig gohackerscloud.com
```

Install if required.

```bash
sudo apt install dnsutils
```

These tools verify DNS functionality.

---

# Viewing Open Ports

Display listening services.

```bash
ss -tuln
```

Example output:

```text
22

SSH

80

HTTP

443

HTTPS
```

The `ss` command replaces the older `netstat` utility.

---

# Using netstat

Some enterprise systems still use:

```bash
netstat -tuln
```

Install if required.

```bash
sudo apt install net-tools
```

---

# Testing HTTP Connectivity

Retrieve a webpage.

```bash
curl https://www.gohackerscloud.com
```

View only headers.

```bash
curl -I https://www.gohackerscloud.com
```

`curl` is widely used for testing APIs and web services.

---

# Downloading Files

Use `wget`.

```bash
wget https://example.com/file.txt
```

This downloads files directly from the command line.

---

# Checking Active Connections

Display active network connections.

```bash
ss -tunap
```

This command helps identify active clients and services.

---

# Viewing Network Statistics

Display interface statistics.

```bash
ip -s link
```

Useful information includes:

- Packets Sent
- Packets Received
- Errors
- Dropped Packets

---

# Restarting Network Services

Ubuntu (NetworkManager):

```bash
sudo systemctl restart NetworkManager
```

Ubuntu Server (systemd-networkd):

```bash
sudo systemctl restart systemd-networkd
```

Restart networking after configuration changes if required.

---

# Linux Networking in Cloud Computing

Cloud Engineers regularly configure networking on Linux virtual machines.

Examples:

AWS EC2

- Private IP
- Elastic IP
- Security Groups
- Route Tables

Azure Virtual Machine

- Virtual Network
- Network Security Groups

Google Compute Engine

- VPC Network
- Firewall Rules

Linux networking knowledge is essential for cloud administration.

---

# Linux Networking in Kubernetes

Every Kubernetes node relies on Linux networking.

Examples include:

- Pod Communication
- Cluster Networking
- CNI Plugins
- DNS Resolution
- Service Discovery

Networking issues are among the most common Kubernetes troubleshooting scenarios.

---

# Linux Networking in Cybersecurity

Security professionals investigate:

- Open ports
- Unauthorized connections
- DNS anomalies
- Packet loss
- Suspicious outbound traffic
- Remote access sessions

Many security investigations begin with Linux networking commands.

---

# Common Networking Commands

Display interfaces:

```bash
ip link
```

Display IP addresses:

```bash
ip addr
```

Display routing table:

```bash
ip route
```

Display hostname:

```bash
hostnamectl
```

Ping host:

```bash
ping google.com
```

DNS lookup:

```bash
dig gohackerscloud.com
```

Display listening ports:

```bash
ss -tuln
```

Download webpage:

```bash
curl https://www.gohackerscloud.com
```

Download file:

```bash
wget URL
```

---

# Real-World Example

A Cloud Engineer deploys an application to an Ubuntu server.

After deployment, users cannot access the website.

The engineer investigates using the following workflow:

```text
Check IP Address

↓

ip addr

↓

Verify Default Gateway

↓

ip route

↓

Test DNS

↓

dig gohackerscloud.com

↓

Check Web Server

↓

systemctl status nginx

↓

Verify Port 443

↓

ss -tuln

↓

Website Restored
```

This structured troubleshooting process is commonly used in enterprise environments.

---

# Best Practices

As a Linux administrator:

- Use `ip` instead of deprecated networking tools where possible.
- Assign meaningful hostnames.
- Verify DNS configuration after deployment.
- Monitor open ports regularly.
- Remove unused network services.
- Document IP addressing schemes.
- Restrict unnecessary inbound ports using firewalls.
- Test connectivity after every network change.

Good networking practices improve reliability, security, and maintainability.

---

# Key Takeaways

After completing this lesson, you should understand:

- Linux network interfaces.
- IP address configuration.
- Routing and default gateways.
- DNS configuration.
- Network troubleshooting commands.
- Open ports and active connections.
- Linux networking in cloud and enterprise environments.

---

# Summary

Linux Networking is a core skill for every IT professional.

Whether you're deploying cloud infrastructure, managing enterprise servers, troubleshooting applications, or investigating cybersecurity incidents, you'll rely on Linux networking commands every day.

By mastering interfaces, IP addressing, DNS, routing, and troubleshooting tools, you'll be well prepared to administer Linux systems in AWS, Azure, Google Cloud, Kubernetes, and enterprise data centers.

---

# Next Lesson

➡️ **Lesson 10 — Linux Storage & Disk Management**

In the next lesson, you'll learn how Linux manages disks, partitions, file systems, mounting, storage devices, and logical volume management (LVM), and discover how enterprise Linux servers handle persistent storage.