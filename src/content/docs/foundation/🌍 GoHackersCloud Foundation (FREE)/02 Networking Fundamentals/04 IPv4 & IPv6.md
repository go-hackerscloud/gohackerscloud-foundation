---
title: Lesson 04 — IPv4 & IPv6 Addressing
description: Learn how IP addressing works, understand the differences between IPv4 and IPv6, explore subnetting concepts, and discover how devices communicate across local networks and the Internet.
---

# Lesson 04 — IPv4 & IPv6 Addressing

## Lesson Overview

Imagine trying to send a letter without knowing the recipient's address.

The postal service would have no idea where to deliver it.

Computer networks work in exactly the same way.

Every device connected to a network requires a unique address so that information can be sent to the correct destination.

This unique address is called an **Internet Protocol (IP) Address**.

Whether you're deploying AWS EC2 instances, configuring Kubernetes clusters, securing enterprise networks, or troubleshooting cloud applications, understanding IP addressing is one of the most important networking skills.

In this lesson, you'll learn how IPv4 and IPv6 work and why IP addressing forms the foundation of modern networking.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain what an IP address is.
- Understand the purpose of IPv4 and IPv6.
- Differentiate between public and private IP addresses.
- Understand subnet masks and CIDR notation.
- Explain basic subnetting concepts.
- Understand how IP addressing supports enterprise and cloud networking.

---

# What is an IP Address?

An **IP Address** is a unique logical address assigned to every device connected to a network.

It allows devices to:

- Identify one another.
- Send data.
- Receive data.
- Communicate across local networks.
- Access the Internet.

Without IP addresses, computers would not know where to send information.

Think of an IP address as the postal address of a computer.

---

# Why IP Addresses Matter

Every connected device requires an IP address.

Examples include:

- Laptops
- Mobile Phones
- Servers
- Printers
- Firewalls
- Routers
- Cloud Virtual Machines
- Kubernetes Nodes
- IoT Devices

Whenever two devices communicate, they exchange information using IP addresses.

---

# IPv4 Addressing

IPv4 (Internet Protocol Version 4) is the most widely used addressing system today.

An IPv4 address consists of **32 bits** divided into four sections called **octets**.

Example:

```text
192.168.1.10
```

Each octet ranges from **0 to 255**.

Examples:

```text
10.0.0.5

172.16.100.25

192.168.1.100
```

---

# IPv4 Structure

```text
192 . 168 . 1 . 10

|     |     |    |
Octet Octet Octet Octet
```

Each octet contains **8 bits**.

Total:

```text
8 + 8 + 8 + 8 = 32 Bits
```

---

# Why IPv6 Was Created

When IPv4 was designed, the Internet had very few connected devices.

Today we have:

- Smartphones
- Laptops
- Tablets
- Smart TVs
- Cloud Servers
- IoT Devices
- Autonomous Vehicles
- Industrial Equipment

IPv4 provides approximately:

```text
4.3 Billion Addresses
```

That seemed enormous decades ago.

Today it is no longer enough.

IPv6 was created to solve this problem.

---

# IPv6 Addressing

IPv6 uses **128-bit addresses**, providing an almost unlimited number of unique IP addresses.

Example:

```text
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

IPv6 addresses are written in hexadecimal and separated by colons.

Advantages include:

- Vast address space
- Improved efficiency
- Better scalability
- Simpler routing
- Built-in support for modern networking

As cloud adoption continues to grow, IPv6 usage is steadily increasing.

---

# IPv4 vs IPv6

| IPv4 | IPv6 |
|------|-------|
| 32-bit Address | 128-bit Address |
| Four Decimal Octets | Eight Hexadecimal Groups |
| ~4.3 Billion Addresses | 340 Undecillion Addresses |
| Widely Used Today | Increasing Adoption |
| NAT Commonly Used | NAT Often Not Required |

Both protocols are important for modern IT professionals.

---

# Public vs Private IP Addresses

IP addresses are divided into two categories.

## Public IP Addresses

Public IP addresses are reachable from the Internet.

Examples include:

- Company websites
- Cloud servers
- Public APIs
- Email servers

Public IP addresses are assigned by Internet Service Providers (ISPs) or cloud providers.

---

## Private IP Addresses

Private IP addresses are used inside internal networks.

They cannot be accessed directly from the Internet.

Common private address ranges include:

| Range | CIDR |
|--------|------|
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

These ranges are widely used in:

- Homes
- Offices
- Enterprise Networks
- Cloud Virtual Private Clouds (VPCs)

---

# Static vs Dynamic IP Addresses

## Static IP Address

A static IP address never changes.

Common uses:

- Web Servers
- Database Servers
- Firewalls
- DNS Servers

---

## Dynamic IP Address

A dynamic IP address is automatically assigned by a DHCP server.

Common uses:

- Employee laptops
- Mobile devices
- Guest Wi-Fi
- Home networks

Most end-user devices receive dynamic addresses.

---

# Subnet Mask

A subnet mask identifies which part of an IP address represents the network and which part represents the host.

Example:

```text
IP Address

192.168.1.100

Subnet Mask

255.255.255.0
```

This tells the device which computers belong to the same local network.

Subnet masks are essential for routing traffic correctly.

---

# CIDR Notation

Modern networks use **CIDR (Classless Inter-Domain Routing)** notation.

Instead of writing:

```text
255.255.255.0
```

We write:

```text
/24
```

Examples:

| CIDR | Subnet Mask |
|------|-------------|
| /8 | 255.0.0.0 |
| /16 | 255.255.0.0 |
| /24 | 255.255.255.0 |
| /32 | Single Host |

CIDR notation is used throughout cloud platforms such as AWS, Azure, and Google Cloud.

---

# Basic Subnetting

Subnetting divides a large network into smaller networks.

Instead of one large network:

```text
192.168.1.0/24
```

An organization might create:

```text
Finance

192.168.1.0/26

HR

192.168.1.64/26

IT

192.168.1.128/26

Servers

192.168.1.192/26
```

Benefits include:

- Better performance
- Improved security
- Easier management
- Reduced broadcast traffic

Subnetting is a core skill for Cloud Engineers and Network Engineers.

---

# IP Address Assignment

When a device connects to a network, it typically follows this process:

```text
Device Starts

↓

DHCP Request

↓

IP Address Assigned

↓

Default Gateway Assigned

↓

DNS Server Assigned

↓

Network Communication Begins
```

You'll learn about DHCP in a later lesson.

---

# IP Addressing in Cloud Computing

Every cloud platform relies on IP addressing.

Examples include:

- AWS EC2 Instances
- Azure Virtual Machines
- Google Compute Engine
- Kubernetes Pods
- Load Balancers
- Virtual Private Clouds (VPCs)

As a Cloud Engineer, you'll configure IP addresses regularly.

---

# IP Addressing in Cybersecurity

Security professionals use IP addresses to:

- Investigate incidents.
- Identify attackers.
- Review firewall logs.
- Analyze network traffic.
- Detect suspicious activity.
- Configure security controls.

Understanding IP addressing is fundamental to network security.

---

# Common IP Commands

Throughout your IT career, you'll frequently use commands to view and troubleshoot IP configurations.

### Windows

```powershell
ipconfig
```

```powershell
ipconfig /all
```

---

### Linux

```bash
ip addr
```

```bash
hostname -I
```

```bash
ip route
```

These commands help verify network configuration and diagnose connectivity issues.

---

# Real-World Example

Imagine an employee opens:

**https://www.gohackerscloud.com**

Behind the scenes:

```text
Laptop

192.168.1.25

↓

Router

↓

Public IP

↓

Internet

↓

Cloud Load Balancer

↓

Web Server

↓

Response Returned
```

Every device along the path uses IP addresses to ensure the request reaches the correct destination.

---

# Best Practices

As an IT professional:

- Understand IPv4 and IPv6.
- Learn private IP address ranges.
- Use CIDR notation confidently.
- Plan IP address allocation carefully.
- Avoid overlapping networks.
- Document IP addressing schemes.
- Use static IPs only when required.
- Monitor IP utilization in enterprise environments.

A well-designed IP addressing plan improves scalability, security, and troubleshooting.

---

# Key Takeaways

After completing this lesson, you should understand:

- What an IP address is.
- The differences between IPv4 and IPv6.
- Public and private IP addressing.
- Static and dynamic IP addresses.
- Subnet masks and CIDR notation.
- Basic subnetting concepts.
- Why IP addressing is essential in Cloud Computing and Cybersecurity.

---

# Summary

IP addressing is the foundation of all network communication.

Every website, cloud service, enterprise application, and mobile device depends on IP addresses to send and receive information accurately.

As you progress through GoHackersCloud Academy, you'll configure IP addressing in AWS VPCs, Azure VNets, Kubernetes clusters, VPNs, firewalls, and enterprise networks.

Mastering these fundamentals will make advanced networking, cloud architecture, and cybersecurity concepts much easier to understand.

---

# Next Lesson

➡️ **Lesson 05 — Routing & Switching**

In the next lesson, you'll learn how routers and switches forward traffic across networks, discover how routing decisions are made, and understand the technologies that enable communication across enterprise networks and the Internet.