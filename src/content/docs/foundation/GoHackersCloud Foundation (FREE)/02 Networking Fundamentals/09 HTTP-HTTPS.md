---
title: Lesson 09 — HTTP & HTTPS
description: Learn how web browsers communicate with web servers, understand the differences between HTTP and HTTPS, explore SSL/TLS encryption, and discover how secure web communication protects modern web applications.
---

## Lesson Overview

Every time you browse the Internet, open your online banking portal, access AWS, watch YouTube, use Microsoft Teams, or log in to GoHackersCloud Academy, your browser communicates with a web server.

This communication happens using two important protocols:

- **HTTP (Hypertext Transfer Protocol)**
- **HTTPS (Hypertext Transfer Protocol Secure)**

HTTP made the World Wide Web possible.

HTTPS made the World Wide Web secure.

Today, nearly every enterprise application, cloud platform, API, SaaS application, and mobile application relies on HTTPS to protect sensitive information.

Understanding these protocols is essential for Cloud Engineers, Cybersecurity Professionals, DevOps Engineers, Software Developers, and Network Engineers.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Explain HTTP and HTTPS.
- Understand how browsers communicate with servers.
- Learn how SSL/TLS encrypts web traffic.
- Differentiate between HTTP and HTTPS.
- Understand common HTTP methods.
- Identify common HTTP status codes.
- Explain why HTTPS is critical for enterprise security.

---

# What is HTTP?

**HTTP (Hypertext Transfer Protocol)** is an application-layer protocol used to transfer web content between clients and servers.

Whenever you open a website, your browser sends an HTTP request to the web server.

The server processes the request and returns an HTTP response.

Example:

```text
Browser

↓

HTTP Request

↓

Web Server

↓

HTTP Response

↓

Website Displayed
```

HTTP is the foundation of the World Wide Web.

---

# What is HTTPS?

**HTTPS (Hypertext Transfer Protocol Secure)** is the secure version of HTTP.

HTTPS encrypts communication using **TLS (Transport Layer Security)**, ensuring that data exchanged between the browser and the server cannot be easily intercepted or modified.

Example:

```text
Browser

↓

Encrypted HTTPS Connection

↓

Web Server

↓

Encrypted Response

↓

Website Displayed
```

Today, HTTPS is the standard protocol for secure web communication.

---

# Why HTTPS Matters

Imagine logging into your bank account.

Without HTTPS:

- Usernames can be intercepted.
- Passwords can be stolen.
- Credit card details can be exposed.
- Sessions can be hijacked.

With HTTPS:

- Data is encrypted.
- Server identity is verified.
- Communication remains confidential.
- Data integrity is maintained.

HTTPS protects users and businesses from many common cyber attacks.

---

# How HTTP Works

When a user enters:

```text
https://www.gohackerscloud.com
```

the browser performs the following steps:

```text
Browser

↓

DNS Lookup

↓

TCP Connection

↓

HTTP/HTTPS Request

↓

Web Server

↓

Application

↓

Database

↓

HTTP Response

↓

Browser Displays Page
```

This entire process typically takes only a few milliseconds.

---

# HTTP Request

A browser sends an HTTP request containing information such as:

- Request Method
- URL
- Headers
- Cookies
- Request Body (if applicable)

Example:

```http
GET /courses HTTP/1.1

Host: www.gohackerscloud.com
```

The server processes the request and generates a response.

---

# HTTP Response

Example:

```http
HTTP/1.1 200 OK
```

The response typically contains:

- Status Code
- Headers
- HTML
- Images
- CSS
- JavaScript
- JSON Data

The browser then renders the webpage.

---

# Common HTTP Methods

| Method | Purpose |
|---------|----------|
| GET | Retrieve information |
| POST | Submit new information |
| PUT | Replace existing information |
| PATCH | Update existing information |
| DELETE | Remove information |
| HEAD | Retrieve headers only |
| OPTIONS | Display supported methods |

REST APIs rely heavily on these methods.

---

# Common HTTP Status Codes

## Success (2xx)

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |

---

## Redirection (3xx)

| Code | Meaning |
|------|---------|
| 301 | Permanent Redirect |
| 302 | Temporary Redirect |

---

## Client Errors (4xx)

| Code | Meaning |
|------|---------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |

---

## Server Errors (5xx)

| Code | Meaning |
|------|---------|
| 500 | Internal Server Error |
| 502 | Bad Gateway |
| 503 | Service Unavailable |
| 504 | Gateway Timeout |

Learning these codes makes troubleshooting much easier.

---

# HTTP vs HTTPS

| HTTP | HTTPS |
|------|--------|
| Port 80 | Port 443 |
| No encryption | TLS encryption |
| Vulnerable to interception | Secure communication |
| Not recommended for sensitive data | Recommended for all public websites |
| Faster setup | Secure authentication and encryption |

Today, nearly every public-facing application uses HTTPS.

---

# SSL vs TLS

Historically, websites used **SSL (Secure Sockets Layer)**.

Modern systems now use **TLS (Transport Layer Security)**.

Although people often say "SSL Certificate," modern certificates actually use TLS.

TLS provides:

- Encryption
- Authentication
- Data Integrity

---

# TLS Handshake

Before encrypted communication begins, the browser and server establish trust.

Simplified process:

```text
Browser

↓

Client Hello

↓

Server Hello

↓

Certificate Exchange

↓

Certificate Validation

↓

Encryption Keys Generated

↓

Secure HTTPS Session
```

After the handshake, all communication is encrypted.

---

# Digital Certificates

HTTPS relies on digital certificates to verify the identity of websites.

Certificates contain:

- Domain Name
- Organization Name
- Public Key
- Expiration Date
- Certificate Authority

Browsers verify these certificates automatically before establishing a secure connection.

---

# Certificate Authorities (CA)

Certificates are issued by trusted Certificate Authorities.

Examples include:

- Let's Encrypt
- DigiCert
- GlobalSign
- Sectigo

These organizations validate website ownership and issue trusted certificates.

---

# HTTP & HTTPS in Cloud Computing

Cloud platforms provide managed HTTPS services.

### AWS

- AWS Certificate Manager (ACM)
- Elastic Load Balancer
- CloudFront

---

### Microsoft Azure

- Azure Application Gateway
- Azure Front Door
- Azure Key Vault Certificates

---

### Google Cloud

- Certificate Manager
- Cloud Load Balancer

Cloud Engineers frequently configure HTTPS for production applications.

---

# HTTP & HTTPS in Cybersecurity

Security teams monitor HTTPS traffic to:

- Detect attacks
- Validate certificates
- Identify phishing websites
- Protect APIs
- Secure authentication
- Prevent Man-in-the-Middle (MITM) attacks

HTTPS is one of the most important security controls for Internet-facing applications.

---

# Common Troubleshooting Commands

### Windows

```powershell
curl https://www.gohackerscloud.com
```

```powershell
Test-NetConnection www.gohackerscloud.com -Port 443
```

---

### Linux

```bash
curl -I https://www.gohackerscloud.com
```

```bash
openssl s_client -connect www.gohackerscloud.com:443
```

These commands help verify connectivity, TLS configuration, and certificates.

---

# Real-World Example

A student logs into GoHackersCloud Academy.

```text
Student Browser

↓

HTTPS

↓

Cloud Load Balancer

↓

Application Server

↓

Authentication Service

↓

Dashboard
```

Throughout the session:

- Credentials are encrypted.
- Session cookies are protected.
- User data remains confidential.
- Certificates verify the server's identity.

Without HTTPS, sensitive information could be intercepted.

---

# Best Practices

As an IT professional:

- Always use HTTPS for public applications.
- Redirect HTTP traffic to HTTPS.
- Use modern TLS versions.
- Renew certificates before they expire.
- Disable weak encryption algorithms.
- Monitor certificate validity.
- Enable HTTP Strict Transport Security (HSTS).
- Regularly test web application security.

---

# Key Takeaways

After completing this lesson, you should understand:

- What HTTP and HTTPS are.
- How browsers communicate with web servers.
- The differences between HTTP and HTTPS.
- Common HTTP methods and status codes.
- How TLS secures web communication.
- Why HTTPS is essential in enterprise and cloud environments.

---

# Summary

HTTP and HTTPS are among the most widely used protocols on the Internet.

While HTTP enables communication between browsers and web servers, HTTPS protects that communication through encryption, authentication, and integrity checks.

Whether you're deploying applications in AWS, securing APIs, configuring Kubernetes Ingress, or troubleshooting enterprise web applications, understanding HTTP and HTTPS is a fundamental networking skill that you'll use throughout your IT career.

---

# Next Lesson

➡️ **Lesson 10 — Common Network Services**

In the next lesson, you'll explore the essential network services used in enterprise environments, including FTP, SSH, SMTP, IMAP, LDAP, NTP, SMB, and RDP, and understand how they support business operations.