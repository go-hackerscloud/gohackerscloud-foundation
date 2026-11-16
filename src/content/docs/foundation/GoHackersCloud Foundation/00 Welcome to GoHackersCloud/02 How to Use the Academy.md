---
title: "Lesson 02 — How to Use GoHackersCloud Foundation"
description: "Navigate the free Foundation curriculum, lessons, modules, study plans and safe exercises; learn when and how Academy/GHC Labs are appropriate."
---

**Module 00 · Lesson 02 · Level: Beginner · Recommended study time: 35–50 minutes**

GoHackersCloud Foundation is designed for **self-directed, practical learning**. You can read published Foundation lessons without an Academy subscription. The key is knowing where to find the next lesson, how to practice safely and how to judge your own understanding.

## The Foundation map

The website has three main entry points:

| Destination | What you can accomplish |
|---|---|
| [Start Here](/start-here/) | Choose your starting level and learn the study routine |
| [Explore 16 Modules](/curriculum/) | Browse modules, expand the complete syllabus, jump to lessons |
| [Core IT & DevOps Deep Dive](/core-it-devops/) | Follow seven technical foundation modules with exercises and cases |

You can also use the site's search to find a concept such as DNS, IAM or Git. The collapsed **All Foundation Lessons** sidebar retains the full original learning hierarchy.

## Learn using stages, not random pages

```text
Start Here
    |
Core IT & DevOps (00–06)
    |
Cloud & Cybersecurity (07–11)
    |
Enterprise & Professional Foundations (12–15)
    |
Career Roadmaps / Exam Guides / Interview Preparation
    |
Optional: Academy & GHC Labs (separate access)
```

This is a recommended sequence, not a compulsory course registration. An experienced professional can begin with a relevant topic, while a complete beginner may benefit from starting at Module 00.

## Reading a lesson effectively

### Step 1 — Understand the outcome

Before reading, ask: “What should I be able to explain or demonstrate afterward?” A good outcome is specific, such as describing the difference between DNS resolution and HTTP response.

### Step 2 — Build a miniature glossary

Write at most five new terms for each session. Avoid copying long definitions. For example, instead of “TCP is a transport protocol,” write “TCP helps two applications exchange an ordered stream of bytes after establishing a connection.”

### Step 3 — Examine the architecture

A table or diagram often reveals how concepts relate to each other. Recreate a diagram from memory and identify one dependency that could fail.

### Step 4 — Practise only within a safe scope

Run introductory commands on **your own laptop, an authorized classroom system or a clearly approved lab**. Do not scan, modify or exploit third-party services because a lesson discusses them.

### Step 5 — Compare expected and observed results

A command may give different output across operating systems, permissions, service versions and network conditions. Explain the difference instead of forcing a match.

### Step 6 — Record an evidence note

Capture the command or question, expected behavior, actual behavior, your explanation, unresolved questions and next safe step. Remove secrets, customer data and private identifiers before sharing.

## Example: how a learner studies networking

A lesson introduces DNS. An unhelpful learning pattern is to memorize “DNS converts names to IP addresses” and stop.

A better routine:

1. Draw the path from your browser to a resolver and onward to the intended application.
2. On your own computer run a standard DNS lookup.
3. Note the returned address records and the resolver context.
4. Explain why a DNS response alone does not prove that HTTPS works.
5. Write the next test that would distinguish a routing issue from an application error.

**Expected result:** a diagram, a harmless observation and a short explanation. This is already meaningful independent practice.

## Your progress tracker — a simple personal template

Foundation's public pages do not automatically record Academy dashboard achievements. For free self-study, keep an Obsidian or Markdown table:

| Date | Module | What I can explain | Evidence saved | Next step |
|---|---|---|---|---|
| Example | Networking | DNS vs HTTPS | Diagram and lookup notes | Study TCP and TLS |

You can also create a local Git repository when you reach Module 06. Never commit credentials or sensitive workplace information.

## Study schedules for different learners

| Learner | Suitable pacing | First milestone |
|---|---|---|
| Complete beginner | Two or three short sessions weekly | Label a computer diagram and one network flow |
| College student | Four focused sessions weekly | Explain OS and networking concepts with evidence |
| Working professional | Pick modules relevant to a real skill gap | Complete a safe case study and share a concise report |
| Certification learner | Mix the study guide with basic examples | Explain service-choice decisions rather than only definitions |

The [12-week study plan](/study-plan/) is optional. Progress is measured by what you can explain or demonstrate, not simply how many pages you opened.

## When you get stuck

1. Re-read the learning objective.
2. Identify exactly which term or command is unclear.
3. Return to the prerequisite lesson using the syllabus directory.
4. Check the operating system and permissions for the exercise.
5. Try a simpler, read-only variation on a system you control.
6. Record the question and consult reliable documentation.
7. Ask a mentor or community member without exposing passwords, tokens or private data.

Avoid blindly restarting services or elevating privileges to “make the exercise work.”

## Foundation, Academy and GHC Labs

**Foundation:** Free reading, diagrams, review questions and self-directed practice.

**GoHackersCloud Academy:** Separate advanced technical tracks and membership features.

**GHC Labs:** Browser-based, preconfigured environments for supported Academy lessons, with access eligibility, session lifecycle and targets defined by each exercise. Some Academy tracks are learning resources rather than guaranteed hosted laboratories.

Explore the [GHC Labs walkthrough](/ghc-labs/how-it-works/) and [13-track selection guide](/ghc-labs/track-selection/). The official [Hands-On Cybersecurity Labs page](https://gohackerscloud.com/hands-on-cybersecurity-labs) lists the current commercial options.

## Mini assignment: plan your first two modules

- [ ] Choose one starting point and explain why it fits your experience.
- [ ] List three topics you find confusing.
- [ ] Write a realistic weekly study commitment.
- [ ] Select one safe independent exercise for each week.
- [ ] Create a simple progress table with expected and actual results.
- [ ] Decide what evidence you will save after each session.

**Deliverable:** one page of personal learning objectives, practice scope and weekly milestones.

## Check your understanding

1. **Does Foundation require an Academy subscription?**

   <details><summary>Suggested reasoning</summary>No. Public Foundation pages are free. Hosted Academy lab access is separate and depends on lesson and membership terms.</details>

2. **Why record observed output rather than copying a sample?**

   <details><summary>Suggested reasoning</summary>Real results differ by environment; your observation and interpretation are evidence of actual understanding.</details>

3. **What should you do before using an unfamiliar technical command?**

   <details><summary>Suggested reasoning</summary>Understand what it changes or reads, confirm scope/permissions, and choose a harmless variation when learning.</details>

## Continue learning

[Next lesson — Learning Methodology](/foundation/gohackerscloud-foundation/00-welcome-to-gohackerscloud/03-learning-methodology/) · [Start Core IT & DevOps](/core-it-devops/) · [View all Foundation lessons](/curriculum/)
