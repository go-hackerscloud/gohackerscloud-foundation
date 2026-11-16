---
title: "03 · Hardware Operating Systems and Virtualization"
description: "Be able to explain CPU, memory, storage, processes, services and isolation."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Be able to explain CPU, memory, storage, processes, services and isolation.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

CPU executes work, RAM holds volatile working data and disk provides persistent storage; each can become a bottleneck.

### Practical distinctions

A process owns resources and has one or more threads; services run continuously under an operating system's control.

### How teams use it

Virtual machines run guest OSs with hardware abstraction; containers isolate processes while typically sharing the host kernel.

### How to show evidence

Troubleshooting requires checking actual workload signals rather than assuming more CPU or memory will fix everything.

## Real interview scenario

A slow application shows low CPU but high disk latency. A careful candidate explains the investigation instead of recommending an expensive VM size upgrade.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. Draw VM and container architectures.
2. Create a CPU/memory/disk bottleneck comparison.
3. Explain how logs differ from system metrics.
4. Prepare a safe service-status checklist.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **Is a container equivalent to a virtual machine?**

   <details><summary>Show a model answer</summary>No. Their kernel, abstraction and isolation boundaries differ.</details>

2. **Does free memory alone prove a system is healthy?**

   <details><summary>Show a model answer</summary>No. I/O, thread contention, network and application delays can still dominate.</details>


## Deliverable

A system troubleshooting comparison sheet.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Resume Portfolio and Evidence](/learning-hub/it-interview/02-resume-portfolio-and-evidence/)
[All chapters](/learning-hub/it-interview/)
[Networking DNS TCP and HTTPS →](/learning-hub/it-interview/04-networking-dns-tcp-and-https/)