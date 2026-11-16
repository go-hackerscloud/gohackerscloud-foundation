---
title: "05 · Linux Administration and Troubleshooting"
description: "Explain commands through the question they answer, with read-only diagnosis before changing a service."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Explain commands through the question they answer, with read-only diagnosis before changing a service.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

Know process and user identity, path semantics, permission bits, service management and system logs.

### Practical distinctions

Commands such as ps, ss, df, free and journalctl reveal different aspects of host state.

### How teams use it

File permissions depend on owner, group and mode; blindly making files world-writable creates avoidable risk.

### How to show evidence

Preserve evidence and review change history before restarting services or changing firewall rules.

## Real interview scenario

A systemd service fails immediately after a release. The operator checks status, journal entries, unit dependencies, port conflicts and the last known good version.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. State what 'systemctl status' shows.
2. Differentiate df -h from memory checks.
3. Explain chmod versus chown.
4. Write a non-destructive service triage runbook.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **Why not immediately restart a failed service?**

   <details><summary>Show a model answer</summary>It may hide evidence or worsen impact; first determine criticality and collect relevant facts.</details>

2. **What does df -h report?**

   <details><summary>Show a model answer</summary>Filesystem space usage, not CPU or memory capacity.</details>


## Deliverable

A safe Linux triage runbook.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Networking DNS TCP and HTTPS](/learning-hub/it-interview/04-networking-dns-tcp-and-https/)
[All chapters](/learning-hub/it-interview/)
[Windows Active Directory and PowerShell →](/learning-hub/it-interview/06-windows-active-directory-and-powershell/)