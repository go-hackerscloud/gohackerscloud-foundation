---
title: Lesson 07 — Security Controls
description: Learn the fundamentals of Security Controls, including administrative, technical, and physical controls, defense strategies, layered security, and enterprise best practices used to protect modern organizations.
---
## Lesson Overview

Cybersecurity is not achieved through a single technology.

Installing a firewall alone does not make an organization secure.

Similarly:

- Antivirus alone is not enough.
- MFA alone is not enough.
- Encryption alone is not enough.

Modern organizations rely on **multiple security controls** working together.

For example, an employee logs into a cloud application.

Before access is granted, several controls protect the environment:

- Identity verification
- Multi-Factor Authentication (MFA)
- Firewall rules
- Endpoint protection
- Network monitoring
- Encryption
- Security logging

Each control provides another layer of protection.

These protections are collectively known as **Security Controls**.

Security Controls are the building blocks of every cybersecurity program and are implemented across cloud, on-premises, Kubernetes, DevOps, and enterprise environments.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Security Controls.
- Differentiate control categories.
- Learn preventive, detective, corrective, deterrent, recovery, and compensating controls.
- Understand administrative, technical, and physical controls.
- Explore layered security.
- Learn enterprise control frameworks.
- Apply security controls in cloud environments.

---

# What are Security Controls?

Security Controls are safeguards implemented to reduce risks and protect organizational assets.

Their objectives are to:

- Prevent attacks.
- Detect malicious activity.
- Respond to incidents.
- Recover systems.
- Protect confidentiality.
- Maintain integrity.
- Ensure availability.

Security Controls support every aspect of the CIA Triad.

---

# Why Security Controls Matter

Organizations implement controls to:

- Reduce cyber risk.
- Protect sensitive information.
- Meet compliance requirements.
- Improve business continuity.
- Prevent financial losses.
- Strengthen overall security posture.

No single control is sufficient on its own.

---

# Categories of Security Controls

Security Controls are commonly grouped into three categories:

- Administrative Controls
- Technical Controls
- Physical Controls

Together, they provide comprehensive protection.

---

# Administrative Controls

Administrative controls are policies, procedures, and governance practices.

Examples include:

- Security Policies
- Acceptable Use Policies
- Security Awareness Training
- Risk Assessments
- Incident Response Plans
- Change Management
- Background Verification

Administrative controls guide how people work securely.

---

# Technical Controls

Technical controls use technology to protect systems.

Examples include:

- Firewalls
- Antivirus
- Endpoint Detection & Response (EDR)
- Encryption
- Identity & Access Management (IAM)
- Multi-Factor Authentication (MFA)
- Security Information & Event Management (SIEM)

These controls automatically enforce security.

---

# Physical Controls

Physical controls protect buildings and hardware.

Examples include:

- Security Guards
- CCTV
- Biometric Access
- Smart Cards
- Locked Server Rooms
- Fencing
- Visitor Management

Physical security protects the infrastructure that supports digital systems.

---

# Functional Types of Security Controls

Security controls can also be classified by their purpose.

## Preventive Controls

Prevent attacks before they occur.

Examples:

- Firewalls
- MFA
- Encryption
- Access Control Lists (ACLs)

---

## Detective Controls

Identify suspicious or malicious activity.

Examples:

- SIEM
- IDS
- Audit Logs
- Security Monitoring
- File Integrity Monitoring

---

## Corrective Controls

Reduce the impact of an incident after it occurs.

Examples:

- Patching
- Malware Removal
- Account Lockout
- Configuration Fixes

---

## Deterrent Controls

Discourage attackers from attempting an attack.

Examples:

- Warning Banners
- CCTV
- Security Policies
- Visible Security Personnel

---

## Recovery Controls

Restore operations after an incident.

Examples:

- Backups
- Disaster Recovery
- Business Continuity Plans
- System Restoration

---

## Compensating Controls

Alternative controls used when the primary control cannot be implemented.

Example:

If MFA is temporarily unavailable, additional monitoring and restricted access may reduce the associated risk.

---

# Defense in Layers

Enterprise organizations implement multiple overlapping controls.

```text
Users

↓

Identity

↓

MFA

↓

Firewall

↓

Endpoint Protection

↓

Network Monitoring

↓

Encryption

↓

Backups
```

Multiple layers reduce the likelihood of successful attacks.

---

# Security Controls in Cloud Computing

Cloud environments commonly use:

- IAM
- Security Groups
- Network ACLs
- Cloud Logging
- Encryption
- WAF
- Cloud Monitoring
- Cloud Security Posture Management (CSPM)

---

# Security Controls in DevOps

DevSecOps teams implement:

- Code Scanning
- Secret Scanning
- Dependency Scanning
- Container Security
- CI/CD Security
- Infrastructure as Code Validation

Security becomes part of software delivery.

---

# Security Controls in Artificial Intelligence

AI environments require controls such as:

- Dataset Protection
- API Authentication
- Encryption
- Model Access Control
- Audit Logging
- Responsible AI Governance

---

# Enterprise Security Frameworks

Security Controls are organized using frameworks including:

- NIST Cybersecurity Framework (CSF)
- ISO/IEC 27001
- CIS Controls
- COBIT
- PCI DSS
- HIPAA Security Rule

These frameworks help organizations implement consistent and measurable security.

---

# Common Beginner Mistakes

Avoid:

- Relying on a single security solution.
- Ignoring physical security.
- Not reviewing user permissions.
- Disabling security monitoring.
- Treating security as a one-time task.
- Assuming cloud providers secure everything.

---

# Enterprise Best Practices

Professional organizations:

- Apply Defense in Depth.
- Implement Least Privilege.
- Enable MFA everywhere possible.
- Encrypt sensitive data.
- Continuously monitor systems.
- Test security controls regularly.
- Perform periodic security assessments.
- Review controls after major changes.

---

# Real-World Example

A multinational company protects its cloud environment using multiple security controls.

```text
Employee Login

↓

MFA

↓

IAM Policy Validation

↓

Firewall Inspection

↓

Endpoint Verification

↓

SIEM Monitoring

↓

Encrypted Database Access
```

Each control works together to reduce risk and improve resilience.

---

# Key Takeaways

After completing this lesson, you should understand:

- Security Controls
- Administrative Controls
- Technical Controls
- Physical Controls
- Preventive Controls
- Detective Controls
- Corrective Controls
- Recovery Controls
- Defense in Depth
- Enterprise Security Frameworks

---

# Summary

Security Controls are the foundation of every cybersecurity program.

Rather than relying on a single technology, organizations combine administrative, technical, and physical controls to create multiple layers of defense.

By implementing preventive, detective, corrective, recovery, and compensating controls, organizations improve resilience against cyber threats and protect critical business assets.

Understanding Security Controls prepares you for advanced topics in Cloud Security, DevSecOps, Security Operations, Governance, Risk Management, and Enterprise Security Architecture.

---

# Next Lesson

➡️ **Lesson 08 — Defense in Depth**

In the next lesson, you'll learn about **Defense in Depth**, a layered security strategy that combines multiple security controls across people, processes, networks, applications, cloud platforms, and infrastructure to protect organizations against sophisticated cyber attacks.