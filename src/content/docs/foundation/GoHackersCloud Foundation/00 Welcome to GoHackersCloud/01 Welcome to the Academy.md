---
title: "Lesson 01 — Welcome to GoHackersCloud Foundation"
description: "Start free IT and cybersecurity foundations with a guided study method, real-world scenarios, independent practice and a clear path toward advanced GHC Labs."
---

**Module 00 · Lesson 01 · Level: New to IT · Recommended study time: 30–45 minutes**

Welcome to **GoHackersCloud Foundation**, a free starting point for people who want to understand the technologies behind real businesses, cloud platforms, modern applications and cybersecurity.

This is not a competition to memorize the largest number of commands. A working professional succeeds by asking the right question, understanding where a technology fits, validating an observation, respecting access boundaries and communicating decisions.

## Your first learning objective

By the end of this lesson, you should be able to:

- Describe the difference between Foundation and the separate GoHackersCloud Academy.
- Explain why IT, networking, operating systems, programming and DevOps form a useful learning sequence.
- Create a personal learning plan with one measurable outcome.
- Draw a simple application architecture and identify its main components.
- Distinguish free independent practice from a subscription-based hosted lab.

## What Foundation is — and what it is not

| Foundation gives you | Not automatically included |
|---|---|
| Free published lessons and subject explanations | A paid Academy membership |
| Study paths, concepts and practice suggestions | Live instructor support for every page |
| Independent exercises on your own computer or diagrams | A hosted GHC Lab for each Foundation lesson |
| Review material and knowledge checks | An industry certification or guaranteed job |
| Links to advanced Academy pathways | Automatic Academy dashboard progress for these free pages |

Some older lessons may still mention Academy activities. The free Foundation curriculum stands on its own; hosted lab access has separate terms.

**Where to begin:** [Start Here](/start-here/) · [See the full Core IT & DevOps roadmap](/core-it-devops/) · [Explore all 16 modules](/curriculum/).

For the detailed orientation case study and practice assignment, see [Module 00 — Foundation Orientation](/core-it-devops/module-00/).

## Why we teach the foundations in this order

Imagine a student running a command that reports a website cannot be reached. Without the fundamentals, they may immediately blame a firewall. A more capable learner knows the failure could involve DNS, routing, a TCP port, TLS, server processes, a database dependency or a misconfigured deployment.

Each module helps identify one part of the story:

| Module | Question it helps answer |
|---|---|
| 01 IT Fundamentals | What resources and operating systems run the software? |
| 02 Networking | How does information travel to the service? |
| 03 Linux | How do Unix-like systems organize processes, files and permissions? |
| 04 Windows | How do business systems manage services, events and enterprise identities? |
| 05 Programming | How can we turn observations into safe, repeatable checks? |
| 06 DevOps & Version Control | How can teams review, test and trace changes? |

After these, cloud, cybersecurity, identity, cryptography, APIs, operations, AI and GRC will make more sense.

## A real-world case: the slow customer portal

A fictional company has a small ecommerce portal. Users report intermittent slowness. A new IT graduate joins an investigation.

### What the beginner might do

Restart the server immediately or increase its size. Either may disrupt customer orders, fail to solve the issue, or remove diagnostic evidence.

### What an engineer should ask first

1. **Who is affected?** All customers, one office, mobile users or a single region?
2. **Since when?** Was there a deployment or certificate change?
3. **What is slow?** DNS lookup, connection, first response or page rendering?
4. **What does the evidence show?** Application logs, network timeouts, storage or memory pressure?
5. **Who can approve a change?** Which team owns the service, firewall or database?

The professional approach is to test a hypothesis within your permissions, preserve facts, then escalate with a clear explanation.

### The architecture behind the problem

```text
    User browser
         |
       DNS
         |
   TCP + TLS (HTTPS)
         |
      Web server
         |
    Application/API
         |
       Database

   Linux / Windows / Cloud
         |
      Logs + Monitoring
         |
      Git + DevOps
```

This one diagram connects much of the Foundation curriculum. Later lessons explain each component in detail.

## Your first free practical assignment

**Goal:** show that you can explain a basic system before running a security tool.

1. Draw the diagram above in your notebook, Obsidian, paper or a diagram application.
2. Put a question mark beside three components you do not yet understand.
3. Choose one: DNS, a server process, or Git. Write your best one-sentence explanation.
4. Write a likely failure and one observation that would help investigate it.
5. Label the work **Foundation self-study — hypothetical system**, not a production incident.

**Expected output:** one diagram, three learning questions and a five-line investigation note. There is no paid environment, required account or submission portal for this assignment.

### Example evidence note

| Field | Example |
|---|---|
| Scenario | The portal does not load |
| Hypothesis | DNS may be returning an old address |
| Safe next check | Compare DNS resolution from two authorized client machines |
| Evidence needed | Resolved addresses, timestamps, and client network context |
| What remains unknown | Whether TCP and the application are available |

## How to learn efficiently

Use a simple cycle for every lesson:

1. **Understand** why a technology exists.
2. **Observe** a diagram, example, command or system behavior.
3. **Practise** on your own machine or within an authorized learning environment.
4. **Explain** the result without copying the lesson.
5. **Review** what was confusing and revisit it later.

Read the commands before running them. A good learner is comfortable saying “I do not know yet; here is how I would verify it.”

## Common beginner mistakes

- Installing complex tools before learning networks and operating systems.
- Treating a written example as proof that you personally tested a system.
- Copying sensitive information into online tools or public repositories.
- Mistaking a career roadmap for a promise of employment or certification.
- Assuming a Foundation lesson automatically grants a hosted Academy lab.

## Knowledge check

1. **What is the difference between Foundation and GHC Labs?**

   <details><summary>Suggested reasoning</summary>Foundation provides free conceptual and self-directed study. Hosted GHC Labs are separate Academy offerings with their own lesson scope, availability and access terms.</details>

2. **What should you record before changing a failed service?**

   <details><summary>Suggested reasoning</summary>Business impact, symptoms, timing, affected users or systems, last known good state, initial observations and the owner who can authorize changes.</details>

3. **How does a diagram help troubleshoot an application?**

   <details><summary>Suggested reasoning</summary>It shows components, dependencies and trust boundaries so that tests can isolate a suspected failure rather than changing settings at random.</details>

## Where hands-on GHC Labs becomes useful

Once you understand the basics, deliberately vulnerable web applications, cloud simulators and security-focused workbenches let you practise in controlled environments. **You do not need to subscribe to finish this free lesson.** When ready, explore the [GHC Labs demonstration and track overview](/ghc-labs/), or [check the official subscription and access page](https://gohackerscloud.com/hands-on-cybersecurity-labs).

## Continue learning

**Your next lesson:** [How to Use GoHackersCloud Foundation](/foundation/gohackerscloud-foundation/00-welcome-to-gohackerscloud/02-how-to-use-the-academy/). Then begin [Module 01 — IT Fundamentals](/core-it-devops/module-01/) and return to the [seven-module Core IT pathway](/core-it-devops/) whenever you need direction.
