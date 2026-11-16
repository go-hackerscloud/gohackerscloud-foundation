---
title: "06 · Windows Active Directory and PowerShell"
description: "Learn how Windows services, domain identities and authorization interact."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Learn how Windows services, domain identities and authorization interact.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

Windows Event Viewer, services, processes and NTFS permissions support operational diagnosis.

### Practical distinctions

Active Directory Domain Services organizes domain users, groups, computers and policies.

### How teams use it

Kerberos is widely used for domain authentication; clocks, connectivity and policies can affect authentication.

### How to show evidence

PowerShell works with structured objects; understand a command's effects before executing change operations.

## Real interview scenario

A user can sign in but cannot open a shared folder. The response checks group membership, network access, share permissions and NTFS authorization.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. Draw the domain sign-in and file-access flow.
2. Distinguish authentication from authorization.
3. Describe three read-only PowerShell observations.
4. Explain why changing a password may not fix file authorization.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **What is a GPO?**

   <details><summary>Show a model answer</summary>A Group Policy Object provides centrally managed settings for targeted domain identities and computers.</details>

2. **Why can sign-in succeed while file access fails?**

   <details><summary>Show a model answer</summary>Authentication and resource authorization are different decisions.</details>


## Deliverable

A file access troubleshooting flowchart.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Linux Administration and Troubleshooting](/learning-hub/it-interview/05-linux-administration-and-troubleshooting/)
[All chapters](/learning-hub/it-interview/)
[Python Scripting and Automation →](/learning-hub/it-interview/07-python-scripting-and-automation/)