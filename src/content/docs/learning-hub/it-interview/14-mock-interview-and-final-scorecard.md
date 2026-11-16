---
title: "14 · Mock Interview and Final Scorecard"
description: "Use repeated mock interviews to strengthen reasoning, communication and evidence."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Use repeated mock interviews to strengthen reasoning, communication and evidence.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

Include fundamentals, troubleshooting, a design prompt, a behavioral question and professional judgment.

### Practical distinctions

Score separately for accuracy, decomposition, safety, clarity and honesty.

### How teams use it

After each mock, identify two mistakes you can fix before the next one.

### How to show evidence

Practise with time constraints, but do not rush or overstate experience.

## Real interview scenario

A candidate answers a DNS outage, role-permission issue and stakeholder conflict. The reviewer notes premature assumptions and helps the candidate improve next-step tests.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. Record a 45-minute mock session.
2. Grade each dimension from one to five.
3. Rewrite answers that jumped to changes too early.
4. Make a seven-day gap-closing plan.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **Should you memorize exact wording?**

   <details><summary>Show a model answer</summary>No. You need to reason aloud and adapt to new details.</details>

2. **What is a strong end-of-interview question?**

   <details><summary>Show a model answer</summary>Ask how the team handles incidents, reviews changes and helps new engineers learn.</details>


## Deliverable

A mock interview scorecard and action plan.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Behavioral STAR and Communication](/learning-hub/it-interview/13-behavioral-star-and-communication/)
[All chapters](/learning-hub/it-interview/)

## Additional original interview questions

Practice answering each before opening the suggested reasoning. These are original study questions, not proprietary employer interview material.

1. **What happens when you enter a URL?**

   <details><summary>Show example answer</summary>DNS, network connection, TLS where applicable, HTTP request, response and browser rendering. Intermediate caches/proxies may modify the path.</details>

2. **Ping works but HTTPS fails: what next?**

   <details><summary>Show example answer</summary>Ping is not proof TCP 443 succeeds. Investigate listener, routes, network filters and proxy or TLS diagnostics.</details>

3. **What does 502 mean?**

   <details><summary>Show example answer</summary>The gateway or reverse proxy received an invalid upstream response; inspect upstream health and proxy logs.</details>

4. **Why avoid chmod 777?**

   <details><summary>Show example answer</summary>It unnecessarily broadens file permissions; identify the required identity and permissions.</details>

5. **What does df -h show?**

   <details><summary>Show example answer</summary>Filesystem capacity and space usage; it does not measure CPU or memory utilization.</details>

6. **How do VMs and containers differ?**

   <details><summary>Show example answer</summary>VMs run guest operating systems on virtualized hardware; containers typically share a kernel.</details>

7. **User signs in but cannot view a shared file: why?**

   <details><summary>Show example answer</summary>Authentication succeeded while share or filesystem authorization may deny access.</details>

8. **What is least privilege?**

   <details><summary>Show example answer</summary>Limit actions, resources, duration and conditions to what the role requires.</details>

9. **What does an IAM role do?**

   <details><summary>Show example answer</summary>Defines permissions that trusted principals can assume, commonly with temporary credentials.</details>

10. **CloudWatch versus CloudTrail?**

   <details><summary>Show example answer</summary>CloudWatch supports monitoring/logs/alarms; CloudTrail records AWS API activity.</details>

11. **What is a false positive?**

   <details><summary>Show example answer</summary>A detection that flags behavior that is not actually the target security event.</details>

12. **What is a vulnerability versus a risk?**

   <details><summary>Show example answer</summary>A vulnerability is a weakness; risk considers likelihood and impact in context.</details>

13. **How do you identify a production outage scope?**

   <details><summary>Show example answer</summary>Determine when it started, business impact, affected users, affected regions and common dependencies.</details>

14. **Why verify a backup restore?**

   <details><summary>Show example answer</summary>A backup is useful only if it can be restored correctly within recovery requirements.</details>

15. **What is CI?**

   <details><summary>Show example answer</summary>Automated validation and integration of changes through builds, tests and policy checks.</details>

16. **Is a passing security scan sufficient proof?**

   <details><summary>Show example answer</summary>No. Coverage, context, configuration and runtime threats can be missed.</details>

17. **Can you call a tutorial a client engagement?**

   <details><summary>Show example answer</summary>No. Identify it as self-study or a personal practice project.</details>

18. **What is a good escalation?**

   <details><summary>Show example answer</summary>Impact, scope, timeframe, observations, tests, change history, risk and exact help needed.</details>

19. **How to answer when you do not know?**

   <details><summary>Show example answer</summary>State what you know, uncertainty and safe next verification steps.</details>

20. **How do you describe a professional mistake?**

   <details><summary>Show example answer</summary>State your role, correction, lessons and prevention without exposing sensitive details.</details>


## Scoring rubric

| Competency | Score (1–5) | Evidence |
|---|---:|---|
| Technical correctness | ___ | Accurate vocabulary and facts |
| Diagnostic reasoning | ___ | Good questions and discriminating tests |
| Safety | ___ | Permissions and reversibility |
| Clarity | ___ | Structured, concise answer |
| Honesty | ___ | Transparent limitations and ownership |