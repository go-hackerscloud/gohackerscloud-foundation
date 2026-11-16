---
title: "Module 03 — Linux Systems, Processes and Permissions"
description: "Detailed Foundation study guide with concepts, enterprise cases, safe practice, expected results and review questions."
---

**Track:** Core IT & DevOps · **Level:** Beginner · **Suggested time:** 1–3 hours for this guide and practice; additional time for full lessons

Linux powers many servers, containers and cloud workloads. Begin with read-only commands and understand the security implication of identity, permissions, processes and services before modifying a system.

[Back to the Core IT & DevOps pathway](/core-it-devops/) · [Open the original Module 03 lesson](/foundation/gohackerscloud-foundation/03-linux-fundamentals/01-linux-introduction/)

## What you will be able to demonstrate

- Explain the key concepts in your own words, not only repeat definitions.
- Draw or describe where this capability is used in real IT systems.
- Collect basic, authorized evidence from a guided exercise.
- Explain at least one common failure and the safest next troubleshooting step.

## Core concepts and why they matter

### Filesystem and shell context

Linux presents files and devices through a directory hierarchy. The current working directory and effective identity determine where commands operate; paths such as `/etc`, `/var/log` and `/home` serve different roles.

### Users, groups and permission bits

Permissions combine owner, group and other access; modern systems can also use ACLs and policy mechanisms. A service's identity influences which files and ports it may access. Using `chmod 777` is rarely an appropriate remedy.

### Processes and services

Processes have PIDs and run with privileges. Services may be managed by systemd on full Linux systems; many containers do not run systemd as PID 1. Commands should be interpreted in the environment you're actually using.

### Observability and safe change

Resource readings, process lists and service logs help distinguish host, application and dependency failures. Collect evidence first, then make only authorized, reversible changes.

## Enterprise case study (hypothetical)

A containerized web service becomes unhealthy after an image update. The operator checks its process user, environment, filesystem permissions and port listener, while remembering that `systemctl` may be unavailable inside an isolated container.

### How the engineer should think

1. Confirm the scope and what you are authorized to access.
2. Separate facts, hypotheses and assumptions before recommending changes.
3. Choose one observation that can distinguish likely causes.
4. Record output, timestamps and the limitations of each test.
5. Escalate with evidence when a change requires production permission.

## Guided self-study exercise

Complete these tasks on your own system, in a classroom with permission, or using paper diagrams. Hosted Academy labs are not required for this free module.

1. Make a two-column table mapping each command to the question it answers.
2. Draw the relationship between kernel, shell, process and filesystem.
3. Explain how a non-root service account limits possible damage.
4. Write a read-only investigation plan for a stopped service.

### Copyable practice commands

Run on your own Linux VM, WSL or authorized lab:

```bash
whoami
id
pwd
ls -lah
uname -r
ps -eo pid,user,comm --sort=pid | head
ss -ltn
```

For a full Linux host with systemd:

```bash
systemctl --failed
journalctl --no-pager -n 20
```


### Expected observations and how to verify

You should identify your user/group IDs, current directory, kernel version, running processes and listening TCP sockets. A container may have a simplified process tree and no systemd; that is a useful observation, not a failure of the lesson.

### Troubleshooting if results differ

Do not treat an error as failure of the learning goal. Check whether the command exists on your operating system, whether it needs permissions and whether the environment (desktop, WSL, container or VM) behaves differently. Record the observation without making unnecessary system changes.

## Common mistakes and professional judgment

- Running unknown scripts with sudo
- Blindly restarting a process before checking logs
- Assuming permission errors should be solved with world-writable files

## Check your understanding

1. **What does `whoami` establish?**

   <details><summary>Show reasoning</summary>The current effective username for the command context.</details>

2. **Why might `systemctl` fail inside a container?**

   <details><summary>Show reasoning</summary>Many containers use an application as PID 1 and do not run systemd.</details>

3. **Why collect a process list before restarting?**

   <details><summary>Show reasoning</summary>It preserves context about current state, ownership and possible failure symptoms.</details>

## Portfolio-ready evidence

**Deliverable:** A Linux investigation note with safe command outputs and an explanation of one permission boundary.

Store the exercise as a self-study artifact. Include purpose, scope, assumptions, tools, observations, conclusions and limitations. Do not call a simulated lab a production incident.

## Continue with Foundation and then practise further

The original [Module 03 lesson sequence](/foundation/gohackerscloud-foundation/03-linux-fundamentals/01-linux-introduction/) contains the broader foundational syllabus; use the full [lesson directory](/curriculum/#module-03) to access other chapters.

For structured, authorized practical activities after the conceptual work, explore [Academy COMPTIA-related learning](https://academy.gohackerscloud.com/tracks/comptia/), review the [GHC Labs experience](/ghc-labs/) and check [current lab subscription terms](https://gohackerscloud.com/hands-on-cybersecurity-labs). Foundation content itself remains free.

[← Core learning path](/core-it-devops/) · [Next: Module 04 — Windows, PowerShell and Enterprise Identity](/core-it-devops/module-04/)
