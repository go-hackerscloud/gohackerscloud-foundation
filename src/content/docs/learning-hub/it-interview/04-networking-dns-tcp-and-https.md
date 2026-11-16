---
title: "04 · Networking DNS TCP and HTTPS"
description: "Use layered diagnosis to distinguish a name-resolution error, blocked transport and failed web response."
---

**Level:** Beginner–Intermediate · **Study time:** 35–60 minutes

Use layered diagnosis to distinguish a name-resolution error, blocked transport and failed web response.

[Handbook contents](/learning-hub/it-interview/)

## Core technical and professional concepts

### Fundamental principle

DNS maps names to records but does not guarantee that the remote application is reachable.

### Practical distinctions

TCP uses connection setup and ordered delivery; UDP is connectionless and suits different applications.

### How teams use it

TLS provides an authenticated encrypted channel when correctly validated, while HTTP status codes describe application results.

### How to show evidence

Routes, NAT, filters, proxies, load balancers and application ports all influence whether a request succeeds.

## Real interview scenario

A website resolves to an IP but times out on TCP 443. The interviewer expects a path and listener investigation, not a random DNS change.

**Answer structure:** restate the requirement; identify scope, constraints and risk; choose a test or decision; verify evidence; communicate the outcome.

## Guided preparation exercise

1. Run 'nslookup example.com' on a system you own.
2. Use 'curl -I https://example.com' to inspect response headers.
3. Sketch browser → DNS → network → TLS → application.
4. Contrast HTTP 404, HTTP 503 and TCP timeout.

Use only your own equipment, public documentation and authorized or synthetic environments. If you have only studied a technology, describe it accurately as study experience.

## Questions and suggested answers

1. **What does an HTTP 404 tell you?**

   <details><summary>Show a model answer</summary>A server answered that the requested resource was not found; the connection reached HTTP processing.</details>

2. **Can ping success prove HTTPS works?**

   <details><summary>Show a model answer</summary>No. ICMP and TCP/443 are different protocols and paths may be filtered.</details>


## Deliverable

A layered network fault-isolation decision tree.

In a short write-up, include what you know, what you tested, what you inferred and what you could not verify.

## Continue

[← Hardware Operating Systems and Virtualization](/learning-hub/it-interview/03-hardware-operating-systems-and-virtualization/)
[All chapters](/learning-hub/it-interview/)
[Linux Administration and Troubleshooting →](/learning-hub/it-interview/05-linux-administration-and-troubleshooting/)