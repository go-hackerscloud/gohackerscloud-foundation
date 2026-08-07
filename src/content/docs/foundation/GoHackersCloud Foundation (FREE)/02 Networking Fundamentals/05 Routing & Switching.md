---
title: Lesson 05 — Routing & Switching
description: Learn how routers and switches enable communication across local and wide area networks, understand how routing decisions are made, and explore the technologies that power enterprise and cloud networking.
---

## Lesson Overview

Imagine working in a large office building with hundreds of employees.

Some employees work on the same floor, while others are located in different buildings around the world.

Messages sent within the same floor are delivered quickly, but messages destined for another building require a delivery service that knows the correct route.

Computer networks work in exactly the same way.

- **Switches** communicate within the same network.
- **Routers** connect different networks together.

Together, routing and switching form the backbone of every modern network, from home Wi-Fi to global cloud providers such as AWS, Microsoft Azure, and Google Cloud.

Understanding these concepts is essential for Cloud Engineers, Network Engineers, Cybersecurity Professionals, DevOps Engineers, and Solutions Architects.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain the purpose of switches and routers.
- Understand Layer 2 and Layer 3 communication.
- Differentiate between switching and routing.
- Understand MAC addresses and IP addresses.
- Learn how routing decisions are made.
- Explore enterprise and cloud networking concepts.

---

# What is Switching?

Switching is the process of forwarding data between devices on the **same Local Area Network (LAN).**

A switch receives a frame and forwards it only to the correct destination device.

Example:

```text
Laptop

↓

Switch

↓

Printer
```

The communication remains inside the same network.

---

# What is Routing?

Routing is the process of forwarding data between **different networks**.

A router determines the best path for data to travel from one network to another.

Example:

```text
Laptop

↓

Office Router

↓

Internet

↓

AWS Cloud

↓

EC2 Server
```

Without routing, devices outside your local network could never communicate.

---

# Switching vs Routing

| Switching | Routing |
|-----------|----------|
| Operates within the same network | Connects different networks |
| Uses MAC Addresses | Uses IP Addresses |
| Layer 2 Device | Layer 3 Device |
| Faster local communication | Determines best network path |
| Performed by Switches | Performed by Routers |

Both technologies work together to provide seamless communication.

---

# Understanding MAC Addresses

Every network interface has a unique physical address called a **MAC (Media Access Control) Address.**

Example:

```text
00:1A:2B:3C:4D:5E
```

Characteristics:

- Assigned by the manufacturer.
- Unique to the device.
- Used within the local network.
- Operates at Layer 2 of the OSI Model.

Switches use MAC addresses to forward frames.

---

# Understanding IP Addresses

An IP address identifies a device across networks.

Example:

```text
192.168.1.25
```

Characteristics:

- Logical address.
- Assigned manually or via DHCP.
- Used for communication between networks.
- Operates at Layer 3.

Routers use IP addresses to determine where data should go.

---

# How a Switch Works

Imagine four computers connected to a switch.

```text
Computer A

        │

Computer B ── Switch ── Computer C

        │

Computer D
```

When Computer A sends data to Computer C:

1. The switch checks the destination MAC address.
2. It looks in its MAC Address Table.
3. It forwards the frame only to Computer C.

This makes local communication fast and efficient.

---

# MAC Address Table

Every switch maintains a table of connected devices.

Example:

| MAC Address | Port |
|-------------|------|
| AA:AA:AA:AA | Port 1 |
| BB:BB:BB:BB | Port 2 |
| CC:CC:CC:CC | Port 3 |
| DD:DD:DD:DD | Port 4 |

The switch learns these addresses automatically.

This process is called **MAC Learning**.

---

# How a Router Works

Imagine your laptop wants to access a website hosted in AWS.

```text
Laptop

↓

Home Router

↓

ISP

↓

Internet

↓

AWS Router

↓

EC2 Instance
```

The router examines the destination IP address and decides the best route to reach the destination.

---

# Routing Table

Routers maintain a **Routing Table** that contains known network paths.

Example:

| Destination Network | Next Hop |
|---------------------|----------|
| 192.168.1.0/24 | Local |
| 10.0.0.0/16 | Router A |
| Default Route | Internet Gateway |

The router selects the best matching route before forwarding traffic.

---

# Default Gateway

A **Default Gateway** is the router that devices use when communicating outside their local network.

Example:

```text
Laptop

IP Address

192.168.1.50

↓

Default Gateway

192.168.1.1

↓

Internet
```

Every device on a network typically has one default gateway configured.

---

# Broadcast Domain

A broadcast domain is a group of devices that receive broadcast traffic.

Switches forward broadcast traffic to all devices within the same VLAN.

Routers separate broadcast domains, reducing unnecessary network traffic.

This improves performance and scalability.

---

# Collision Domain

A collision domain is an area where data transmissions could interfere with one another.

Modern switches create a separate collision domain for each port, greatly improving network efficiency.

---

# Layer 2 vs Layer 3 Communication

```text
Same Network

Laptop

↓

Switch

↓

Server

=========================

Different Networks

Laptop

↓

Switch

↓

Router

↓

Internet

↓

Cloud Server
```

Remember:

- Switches handle local communication.
- Routers connect different networks.

---

# Static Routing

In static routing, administrators manually configure routes.

Advantages:

- Simple
- Predictable
- Easy to understand

Disadvantages:

- Doesn't scale well.
- Requires manual updates.

Used in:

- Small networks
- Labs
- Simple enterprise environments

---

# Dynamic Routing

Large organizations use dynamic routing protocols.

These protocols automatically learn network paths.

Examples:

- OSPF
- BGP
- EIGRP
- RIP

Advantages:

- Automatic updates
- Better scalability
- Faster recovery
- Improved redundancy

Cloud providers rely heavily on dynamic routing.

---

# Routing in Cloud Computing

Cloud platforms provide virtual routing services.

Examples:

AWS

- VPC Route Tables
- Internet Gateway
- NAT Gateway
- Transit Gateway

Azure

- Route Tables
- Virtual Network Gateway

Google Cloud

- Cloud Router
- VPC Routes

Although these are virtual devices, they perform the same routing functions as physical routers.

---

# Switching in Cloud Computing

Traditional physical switches are replaced by software-defined networking (SDN).

Examples:

- AWS Elastic Network Interface (ENI)
- Azure Virtual Network
- Google Cloud VPC

Cloud networking abstracts the physical infrastructure while maintaining the same networking principles.

---

# Routing in Cybersecurity

Security teams rely on routing to:

- Segment networks.
- Protect sensitive systems.
- Configure firewalls.
- Build secure VPNs.
- Investigate network paths.
- Control traffic flow.

Proper routing improves both security and performance.

---

# Real-World Example

Imagine an employee opens:

**https://portal.company.com**

The request travels like this:

```text
Employee Laptop

↓

Office Switch

↓

Office Router

↓

ISP

↓

Internet

↓

Cloud Load Balancer

↓

Application Server

↓

Database

↓

Response Returned
```

Throughout this process:

- Switches handle communication inside the office.
- Routers move traffic between networks.
- Cloud routers direct traffic inside the cloud environment.

---

# Common Commands

Windows

```powershell
route print
```

```powershell
tracert google.com
```

Linux

```bash
ip route
```

```bash
traceroute google.com
```

Cisco IOS

```text
show ip route
```

```text
show mac address-table
```

You'll use these commands in future networking and cloud labs.

---

# Best Practices

As an IT professional:

- Design networks with scalability in mind.
- Separate networks using routers and VLANs.
- Keep routing tables organized.
- Document network topology.
- Monitor routing changes.
- Secure routing infrastructure.
- Use dynamic routing where appropriate.
- Regularly review network performance.

---

# Key Takeaways

After completing this lesson, you should understand:

- The difference between routing and switching.
- The purpose of routers and switches.
- MAC addresses vs IP addresses.
- Routing tables and default gateways.
- Static and dynamic routing.
- How routing supports cloud and enterprise networking.

---

# Summary

Routing and switching are two of the most fundamental concepts in networking.

Switches efficiently connect devices within a local network, while routers enable communication across different networks and the Internet.

Whether you're building cloud infrastructure, configuring enterprise networks, deploying Kubernetes clusters, or securing cloud environments, routing and switching knowledge will be used every day throughout your IT career.

---

# Next Lesson

➡️ **Lesson 06 — Domain Name System (DNS)**

In the next lesson, you'll learn how DNS translates human-friendly domain names into IP addresses, discover how Internet name resolution works, and understand why DNS is one of the most critical services in modern networking and cloud computing.