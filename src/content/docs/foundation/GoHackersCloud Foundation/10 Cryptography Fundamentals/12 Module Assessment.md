---
title: Module Assessment — Cryptography Fundamentals
description: Validate your understanding of cryptography, encryption, hashing, digital signatures, PKI, TLS, certificates, key management, cloud cryptography, and enterprise cryptographic best practices.
---
## Assessment Overview

Congratulations!

You have successfully completed **Module 10 — Cryptography Fundamentals**.

Throughout this module, you learned how cryptography protects sensitive information, secures communications, verifies identities, safeguards cloud workloads, and establishes trust across modern enterprise environments.

This assessment validates your understanding of cryptographic concepts before progressing to the next module.

---

# Assessment Information

| Item | Details |
|------|----------|
| Module | Module 10 — Cryptography Fundamentals |
| Assessment Type | Module Assessment |
| Questions | 40 |
| Question Types | Multiple Choice & Scenario-Based |
| Passing Score | 70% |
| Time Limit | 60 Minutes |
| Difficulty | Beginner to Intermediate |

---

# Skills Being Assessed

This assessment covers:

- Cryptography Fundamentals
- Symmetric Encryption
- Asymmetric Encryption
- Hashing Algorithms
- Digital Signatures
- Public Key Infrastructure (PKI)
- TLS & SSL
- Digital Certificates
- Key Management
- Hardware Security Modules (HSMs)
- Cloud Cryptography
- Enterprise Cryptography Best Practices

---

# Assessment Objectives

By completing this assessment, you should be able to:

- Explain core cryptographic concepts.
- Differentiate encryption and hashing.
- Select appropriate cryptographic algorithms.
- Understand PKI and certificate management.
- Explain TLS communication.
- Apply key management principles.
- Secure cloud workloads using cryptography.
- Follow enterprise cryptographic best practices.

---

# Enterprise Scenario

You have recently joined **CloudNova Technologies** as a **Cloud Security Engineer**.

The organization is deploying a new enterprise platform hosted across AWS, Microsoft Azure, Kubernetes, and hybrid data centers.

Before working on production environments, your manager asks you to complete this Cryptography assessment to validate your understanding of secure communications, encryption, certificates, and enterprise cryptographic controls.

---

# Instructions

Before you begin:

- Read each question carefully.
- Choose the **best** answer.
- Think from an enterprise security perspective.
- Apply security and compliance best practices.
- Review your answers before submitting.

---

# Section 1 — Cryptography Fundamentals

## Question 1

What is the primary goal of cryptography?

- A. Increase network speed
- B. Protect information using mathematical techniques
- C. Compress files
- D. Improve storage performance

> **Answer:** B

---

## Question 2

Readable information before encryption is called:

- A. Ciphertext
- B. Plaintext
- C. Hash
- D. Digest

> **Answer:** B

---

## Question 3

Unreadable encrypted information is called:

- A. Plaintext
- B. Ciphertext
- C. Signature
- D. Certificate

> **Answer:** B

---

## Question 4

Which cryptographic goal ensures data is not disclosed to unauthorized users?

- A. Integrity
- B. Confidentiality
- C. Availability
- D. Authentication

> **Answer:** B

---

## Question 5

Which cryptographic goal ensures data has not been modified?

- A. Integrity
- B. Confidentiality
- C. Encryption
- D. Compression

> **Answer:** A

---

# Section 2 — Symmetric & Asymmetric Encryption

## Question 6

Symmetric encryption uses:

- A. Public and private keys
- B. One shared secret key
- C. No encryption key
- D. Two private keys

> **Answer:** B

---

## Question 7

Which algorithm is considered the enterprise standard for symmetric encryption?

- A. DES
- B. AES
- C. RC4
- D. MD5

> **Answer:** B

---

## Question 8

Which asymmetric algorithm is widely used for digital certificates?

- A. AES
- B. RSA
- C. SHA-256
- D. DES

> **Answer:** B

---

## Question 9

Which cryptographic approach combines asymmetric and symmetric encryption?

- A. Block Cipher
- B. Hybrid Encryption
- C. Stream Cipher
- D. Tokenization

> **Answer:** B

---

## Question 10

Which key should never be shared?

- A. Public Key
- B. Private Key
- C. Session ID
- D. Certificate

> **Answer:** B

---

# Section 3 — Hashing & Digital Signatures

## Question 11

Hashing is primarily used for:

- A. Confidentiality
- B. Integrity Verification
- C. Compression
- D. Network Routing

> **Answer:** B

---

## Question 12

Which algorithm should generally not be used for modern password storage?

- A. Argon2
- B. bcrypt
- C. MD5
- D. PBKDF2

> **Answer:** C

---

## Question 13

What is the purpose of a salt?

- A. Compress passwords
- B. Strengthen password hashing against precomputed attacks
- C. Encrypt databases
- D. Replace MFA

> **Answer:** B

---

## Question 14

Digital Signatures provide:

- A. Compression
- B. Authentication, Integrity, and Non-Repudiation
- C. File Backup
- D. High Availability

> **Answer:** B

---

## Question 15

Digital signatures are created using:

- A. Public Key
- B. Private Key
- C. Shared Secret
- D. Hash Only

> **Answer:** B

---

# Section 4 — PKI & Certificates

## Question 16

PKI stands for:

- A. Public Key Infrastructure
- B. Private Key Integration
- C. Protected Key Interface
- D. Public Knowledge Internet

> **Answer:** A

---

## Question 17

A Certificate Authority (CA) is responsible for:

- A. Encrypting databases
- B. Issuing trusted digital certificates
- C. Creating passwords
- D. Hosting websites

> **Answer:** B

---

## Question 18

Which certificate standard is commonly used on the Internet?

- A. X.509
- B. IPv6
- C. TLS 1.3
- D. AES-256

> **Answer:** A

---

## Question 19

Which certificate is normally at the top of the trust chain?

- A. Server Certificate
- B. Root CA Certificate
- C. User Certificate
- D. API Certificate

> **Answer:** B

---

## Question 20

What should happen if a private key is compromised?

- A. Ignore it
- B. Revoke and replace the certificate
- C. Increase storage
- D. Disable TLS

> **Answer:** B

---

# Section 5 — TLS & SSL

## Question 21

TLS primarily protects:

- A. Data at Rest
- B. Data in Transit
- C. Archived Backups
- D. Storage Capacity

> **Answer:** B

---

## Question 22

HTTPS is created by combining:

- A. FTP + TLS
- B. HTTP + TLS
- C. SSH + SSL
- D. DNS + TLS

> **Answer:** B

---

## Question 23

Which TLS version is currently recommended?

- A. SSL 2.0
- B. TLS 1.0
- C. TLS 1.3
- D. SSL 3.0

> **Answer:** C

---

## Question 24

During the TLS handshake, the client verifies the server using:

- A. Firewall Rules
- B. Digital Certificate
- C. VPN Tunnel
- D. Routing Table

> **Answer:** B

---

## Question 25

Mutual TLS (mTLS) means:

- A. Only the client is authenticated.
- B. Only the server is authenticated.
- C. Both client and server authenticate each other.
- D. No authentication occurs.

> **Answer:** C

---

# Section 6 — Key Management

## Question 26

A Key Management System (KMS) is used to:

- A. Compress files
- B. Securely manage cryptographic keys
- C. Improve network speed
- D. Replace certificates

> **Answer:** B

---

## Question 27

Which device provides the highest protection for cryptographic keys?

- A. USB Drive
- B. Hardware Security Module (HSM)
- C. Shared Folder
- D. Email Attachment

> **Answer:** B

---

## Question 28

What is the purpose of key rotation?

- A. Increase storage
- B. Reduce key exposure over time
- C. Improve CPU performance
- D. Replace TLS

> **Answer:** B

---

## Question 29

Envelope Encryption protects:

- A. Passwords
- B. Data Encryption Keys using Master Keys
- C. Firewalls
- D. VPN Connections

> **Answer:** B

---

## Question 30

Where should encryption keys generally NOT be stored?

- A. HSM
- B. KMS
- C. Source Code
- D. Key Vault

> **Answer:** C

---

# Section 7 — Cloud Cryptography

## Question 31

Encryption at Rest protects:

- A. Stored Data
- B. Network Packets
- C. DNS Queries
- D. Routing Tables

> **Answer:** A

---

## Question 32

Encryption in Transit commonly uses:

- A. TLS
- B. ZIP
- C. RAID
- D. DHCP

> **Answer:** A

---

## Question 33

Which AWS service centrally manages encryption keys?

- A. Amazon EC2
- B. AWS KMS
- C. Amazon VPC
- D. Amazon Route 53

> **Answer:** B

---

## Question 34

Which Azure service stores cryptographic keys and secrets?

- A. Azure Monitor
- B. Azure Key Vault
- C. Azure Firewall
- D. Azure DNS

> **Answer:** B

---

## Question 35

What is a Customer-Managed Key (CMK)?

- A. A key managed entirely by the cloud provider
- B. An encryption key controlled by the customer
- C. A Wi-Fi password
- D. A VPN certificate

> **Answer:** B

---

# Section 8 — Enterprise Cryptography

## Question 36

Crypto Agility is the ability to:

- A. Increase CPU speed
- B. Quickly replace cryptographic algorithms when needed
- C. Compress encrypted data
- D. Disable encryption

> **Answer:** B

---

## Question 37

Why is Post-Quantum Cryptography important?

- A. It improves Wi-Fi performance.
- B. It prepares organizations for future quantum computing threats.
- C. It replaces TLS.
- D. It compresses certificates.

> **Answer:** B

---

## Question 38

Which enterprise practice strengthens cryptographic security?

- A. Hardcoding encryption keys
- B. Regular key rotation
- C. Using MD5 for passwords
- D. Sharing private keys

> **Answer:** B

---

## Question 39

Which cryptographic principle is most important when protecting encryption keys?

- A. Public Access
- B. Least Privilege
- C. Anonymous Access
- D. Open Sharing

> **Answer:** B

---

## Question 40

Which statement best describes Enterprise Cryptography?

- A. It only encrypts databases.
- B. It is the governance and management of cryptographic technologies across the enterprise.
- C. It replaces IAM.
- D. It only secures websites.

> **Answer:** B

---

# Assessment Summary

Congratulations on completing the **Cryptography Fundamentals Module Assessment**.

If you achieved a score of **70% or higher**, you have demonstrated a strong understanding of:

- Cryptography Fundamentals
- Symmetric Encryption
- Asymmetric Encryption
- Hashing Algorithms
- Digital Signatures
- Public Key Infrastructure (PKI)
- TLS & SSL
- Digital Certificates
- Key Management
- Hardware Security Modules (HSMs)
- Cloud Cryptography
- Enterprise Cryptography Best Practices

These concepts form the foundation of secure communications, identity protection, cloud security, and enterprise data protection.

---

# Congratulations!

🎉 You have successfully completed **Module 10 — Cryptography Fundamentals**.

You now understand how modern organizations use cryptography to protect data, identities, communications, applications, cloud workloads, Kubernetes clusters, and enterprise infrastructure.

These skills are essential for Cloud Security Engineers, Security Architects, DevSecOps Engineers, Platform Engineers, IAM Engineers, SOC Analysts, and cybersecurity professionals.

---

# What's Next?

➡️ **Module 11 — Web & API Fundamentals**

In the next module, you'll learn how modern web applications and APIs work, how they communicate over the Internet, and the common security risks associated with web technologies. This knowledge forms the foundation for web security, API security, penetration testing, cloud application security, and secure software development.

You'll learn about:

- Web Fundamentals
- HTTP & HTTPS
- DNS Fundamentals
- Cookies & Sessions
- Web Servers
- REST APIs
- API Authentication
- API Security
- OWASP Top 10
- Enterprise Web Architecture
- Secure API Development

Understanding how web applications and APIs operate is essential before learning advanced topics such as Web Application Security, API Penetration Testing, Cloud Security, DevSecOps, and Zero Trust architectures.

Welcome to **Module 11 — Web & API Fundamentals!** 🌐