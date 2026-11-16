---
title: "Module 01 — IT Fundamentals and Enterprise Hardware"
description: "Detailed Foundation study guide with concepts, enterprise cases, safe practice, expected results and review questions."
---

**Track:** Core IT & DevOps · **Level:** Beginner · **Suggested time:** 1–3 hours for this guide and practice; additional time for full lessons

Professional troubleshooting starts with understanding where software runs and which physical or virtual resources it relies upon. This module connects a student laptop to cloud servers, storage and enterprise service delivery.

[Back to the Core IT & DevOps pathway](/core-it-devops/) · [Open the original Module 01 lesson](/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/)

## What you will be able to demonstrate

- Explain the key concepts in your own words, not only repeat definitions.
- Draw or describe where this capability is used in real IT systems.
- Collect basic, authorized evidence from a guided exercise.
- Explain at least one common failure and the safest next troubleshooting step.

## Core concepts and why they matter

### CPU, memory and storage

CPU performs work; RAM holds actively used data; storage retains data. High CPU, memory pressure and slow disks cause different symptoms. Running more virtual machines requires enough physical RAM and CPU capacity, not merely a faster network.

### Operating system and services

A program requires an OS or managed runtime to provide processes, memory, storage access and networking. A background service has a startup method, permissions, configuration and logs; it may be stopped even when the host is reachable.

### Virtualization and containers

A hypervisor runs separate guest operating systems; containers typically share a host kernel and isolate application processes. This distinction shapes patching responsibilities, resource constraints and security isolation.

### Enterprise reliability

Redundant power, disks, high availability, backups and monitoring address different failure risks. A second disk is not the same as an independent backup; two servers are not enough if they depend on the same single database.

## Enterprise case study (hypothetical)

A training platform runs 20 small virtual machines. Some students see slow desktops although the Internet connection is fine. The engineer compares host CPU scheduling, available memory, disk latency and guest processes. They record evidence before requesting more capacity or restarting workloads.

### How the engineer should think

1. Confirm the scope and what you are authorized to access.
2. Separate facts, hypotheses and assumptions before recommending changes.
3. Choose one observation that can distinguish likely causes.
4. Record output, timestamps and the limitations of each test.
5. Escalate with evidence when a change requires production permission.

## Guided self-study exercise

Complete these tasks on your own system, in a classroom with permission, or using paper diagrams. Hosted Academy labs are not required for this free module.

1. Draw a simple computer with CPU, memory, persistent storage, NIC and OS.
2. Record three read-only observations from a device you control.
3. Describe which resource you would check first for a slow file copy and why.
4. Write one example of how a cloud-managed service changes responsibilities.

### Copyable practice commands

Windows PowerShell (read-only):

```powershell
Get-CimInstance Win32_ComputerSystem | Select-Object Manufacturer,Model,TotalPhysicalMemory
Get-CimInstance Win32_Processor | Select-Object Name,NumberOfCores,NumberOfLogicalProcessors
Get-PSDrive -PSProvider FileSystem
```

Linux (read-only; use whichever platform you own):

```bash
lscpu
free -h
df -h
```


### Expected observations and how to verify

Identify CPU cores or logical processors, available RAM and mounted filesystem space. Exact output differs by device and OS; a virtual machine may report virtual CPU cores rather than the host's total capacity.

### Troubleshooting if results differ

Do not treat an error as failure of the learning goal. Check whether the command exists on your operating system, whether it needs permissions and whether the environment (desktop, WSL, container or VM) behaves differently. Record the observation without making unnecessary system changes.

## Common mistakes and professional judgment

- Assuming slow applications always need more CPU
- Equating SSD capacity with RAM capacity
- Calling a single local copy a disaster recovery strategy

## Check your understanding

1. **Why might a server with low CPU still be slow?**

   <details><summary>Show reasoning</summary>Disk I/O, memory pressure, network latency, locks or an application dependency can dominate response time.</details>

2. **Are containers equivalent to virtual machines?**

   <details><summary>Show reasoning</summary>Not generally: containers share a host kernel, while VMs run guest operating systems.</details>

3. **Why should you record capacity before troubleshooting?**

   <details><summary>Show reasoning</summary>A baseline helps distinguish a capacity problem from a service, configuration or application issue.</details>

## Portfolio-ready evidence

**Deliverable:** A labeled system architecture diagram, three observations and a resource-troubleshooting table.

Store the exercise as a self-study artifact. Include purpose, scope, assumptions, tools, observations, conclusions and limitations. Do not call a simulated lab a production incident.

## Continue with Foundation and then practise further

The original [Module 01 lesson sequence](/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/) contains the broader foundational syllabus; use the full [lesson directory](/curriculum/#module-01) to access other chapters.

For structured, authorized practical activities after the conceptual work, explore [Academy COMPTIA-related learning](https://academy.gohackerscloud.com/tracks/comptia/), review the [GHC Labs experience](/ghc-labs/) and check [current lab subscription terms](https://gohackerscloud.com/hands-on-cybersecurity-labs). Foundation content itself remains free.

[← Core learning path](/core-it-devops/) · [Next: Module 02 — Networking, DNS and Secure Web Requests](/core-it-devops/module-02/)
