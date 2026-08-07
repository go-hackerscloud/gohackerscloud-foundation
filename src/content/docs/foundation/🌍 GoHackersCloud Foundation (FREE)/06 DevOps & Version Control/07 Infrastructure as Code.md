---
title: Lesson 07 — Infrastructure as Code (IaC)
description: Learn the fundamentals of Infrastructure as Code (IaC), understand declarative and imperative approaches, explore Terraform and AWS CloudFormation, and discover how modern organizations automate cloud infrastructure deployment.
---

# Lesson 07 — Infrastructure as Code (IaC)

## Lesson Overview

Imagine you're a Cloud Engineer responsible for deploying infrastructure.

Your application requires:

- 10 EC2 instances
- 3 Load Balancers
- 5 VPCs
- Multiple Security Groups
- IAM Roles
- Amazon RDS
- Amazon S3
- CloudWatch Monitoring

You could create everything manually using the AWS Console.

But what happens when you need to:

- Deploy the same infrastructure again?
- Recover after a disaster?
- Create identical environments?
- Deploy infrastructure in another region?
- Scale to hundreds of servers?

Manual deployment becomes slow, inconsistent, and error-prone.

Modern organizations solve this problem using **Infrastructure as Code (IaC)**.

Instead of manually creating infrastructure, engineers define it using code.

That code can then be version-controlled, reviewed, tested, and deployed automatically.

Infrastructure as Code is one of the most important skills for Cloud Engineers, DevOps Engineers, Platform Engineers, and Security Engineers.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Infrastructure as Code (IaC).
- Learn declarative and imperative infrastructure.
- Understand Terraform.
- Understand AWS CloudFormation.
- Learn infrastructure automation.
- Manage infrastructure using Git.
- Understand state management.
- Apply Infrastructure as Code in enterprise environments.

---

# What is Infrastructure as Code?

Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure using configuration files instead of manual processes.

Instead of clicking buttons in a cloud console, engineers write code that describes the desired infrastructure.

Example:

```text
Developer

↓

Terraform Code

↓

Cloud Provider

↓

Infrastructure Created
```

Infrastructure becomes repeatable, consistent, and version controlled.

---

# Why Infrastructure as Code Matters

Infrastructure as Code enables organizations to:

- Eliminate manual configuration
- Improve consistency
- Reduce deployment errors
- Speed up provisioning
- Enable disaster recovery
- Scale infrastructure rapidly

Modern cloud environments rely heavily on IaC.

---

# Traditional Infrastructure Deployment

Without IaC:

```text
Engineer

↓

AWS Console

↓

Manual Configuration

↓

Infrastructure
```

Challenges:

- Human error
- Slow deployments
- Difficult auditing
- Configuration drift

---

# Infrastructure as Code Workflow

```text
Write Code

↓

Store in Git

↓

Review Changes

↓

Run Pipeline

↓

Provision Infrastructure

↓

Monitor Resources
```

This approach makes infrastructure deployment repeatable and auditable.

---

# Declarative vs Imperative Infrastructure

There are two common approaches to Infrastructure as Code.

### Declarative

You define the desired final state.

Example:

```text
Create:

3 EC2 Instances

1 Load Balancer

2 Security Groups
```

The tool determines how to achieve the desired state.

Examples:

- Terraform
- AWS CloudFormation
- Kubernetes YAML

---

### Imperative

You specify each step required.

Example:

```text
Create VPC

↓

Create Subnet

↓

Create EC2

↓

Configure Security Group

↓

Attach Volume
```

Examples:

- Bash Scripts
- Python Automation
- AWS CLI Scripts

---

# Benefits of Declarative Infrastructure

Declarative infrastructure offers:

- Simpler code
- Easier maintenance
- Automatic dependency handling
- Desired state management
- Better scalability

Most modern Infrastructure as Code tools are declarative.

---

# Popular Infrastructure as Code Tools

| Tool | Cloud |
|------|--------|
| Terraform | Multi-Cloud |
| AWS CloudFormation | AWS |
| Azure Bicep | Azure |
| ARM Templates | Azure |
| Google Deployment Manager | Google Cloud |
| Pulumi | Multi-Cloud |
| Ansible | Configuration Management |

Each tool automates infrastructure provisioning.

---

# Terraform

Terraform is one of the world's most popular Infrastructure as Code tools.

Developed by HashiCorp, Terraform supports:

- AWS
- Azure
- Google Cloud
- Kubernetes
- VMware
- Oracle Cloud
- GitHub
- Thousands of providers

Terraform uses the **HashiCorp Configuration Language (HCL)**.

---

# Example Terraform Configuration

```hcl
resource "aws_instance" "web" {

  ami           = "ami-xxxxxxxx"

  instance_type = "t3.micro"

}
```

This configuration defines an EC2 instance.

---

# Terraform Workflow

```text
Write Configuration

↓

terraform init

↓

terraform plan

↓

terraform apply

↓

Infrastructure Created
```

Each command has a specific purpose in the deployment lifecycle.

---

# Terraform State

Terraform stores infrastructure information in a **State File**.

Example:

```text
terraform.tfstate
```

The state file tracks:

- Resources
- Dependencies
- Current configuration

Proper state management is critical for reliable infrastructure automation.

---

# AWS CloudFormation

AWS CloudFormation is Amazon's native Infrastructure as Code service.

Templates are written in:

- YAML
- JSON

Example:

```yaml
Resources:

  EC2Instance:

    Type: AWS::EC2::Instance
```

CloudFormation integrates directly with AWS services.

---

# CloudFormation Workflow

```text
Template

↓

CloudFormation Stack

↓

AWS Resources

↓

Updates

↓

Stack Management
```

Stacks simplify deployment and lifecycle management.

---

# Version Control for Infrastructure

Infrastructure code should always be stored in Git.

Example repository:

```text
terraform/

cloudformation/

modules/

environments/

README.md
```

Version control provides:

- History
- Collaboration
- Rollback
- Code Reviews

---

# CI/CD and Infrastructure

Infrastructure deployments can be automated.

Workflow:

```text
Git Commit

↓

GitHub Actions

↓

Terraform Plan

↓

Approval

↓

Terraform Apply

↓

Infrastructure Updated
```

Automation improves consistency and reduces manual effort.

---

# Infrastructure Modules

Large infrastructure projects reuse components through modules.

Examples:

- VPC Module
- EC2 Module
- IAM Module
- Networking Module

Modules improve maintainability and reduce code duplication.

---

# Environment Management

Organizations typically maintain multiple environments.

```text
Development

↓

Testing

↓

Staging

↓

Production
```

Each environment can use the same Infrastructure as Code with different configuration values.

---

# Infrastructure Drift

Infrastructure drift occurs when manual changes are made outside the Infrastructure as Code process.

Example:

```text
Terraform

↓

Engineer manually changes AWS Console

↓

Configuration Drift
```

Infrastructure should always be updated through code to avoid inconsistencies.

---

# Infrastructure in Cloud Computing

Cloud Engineers automate:

- VPCs
- EC2
- RDS
- IAM
- S3
- Lambda
- EKS
- Networking

Infrastructure becomes repeatable and scalable.

---

# Infrastructure in DevOps

DevOps Engineers automate:

- Servers
- Kubernetes Clusters
- CI/CD Infrastructure
- Networking
- Monitoring
- Secrets Management

Infrastructure automation is a core DevOps practice.

---

# Infrastructure in Cybersecurity

Security Engineers automate:

- IAM Policies
- Security Groups
- Firewalls
- Compliance Controls
- Encryption
- Logging

Infrastructure as Code enables security by design.

---

# Infrastructure in AI

AI Engineers automate:

- GPU Clusters
- Storage
- Training Environments
- ML Pipelines
- Inference Servers

Automation accelerates AI deployments.

---

# Common Beginner Mistakes

Avoid:

- Editing cloud resources manually.
- Storing secrets in code.
- Ignoring state management.
- Deploying directly to production.
- Not reviewing infrastructure changes.
- Creating large monolithic templates.

Good Infrastructure as Code practices improve reliability.

---

# Enterprise Best Practices

Professional organizations:

- Store infrastructure in Git.
- Review changes through Pull Requests.
- Separate environments.
- Use reusable modules.
- Protect state files.
- Automate deployments.
- Enable logging and auditing.
- Continuously validate infrastructure.

Infrastructure should be treated like application code.

---

# Real-World Example

A Cloud Engineer deploys a complete AWS environment.

Workflow:

```text
Write Terraform Code

↓

Commit to GitHub

↓

GitHub Actions

↓

Terraform Plan

↓

Peer Review

↓

Terraform Apply

↓

AWS Infrastructure Created
```

Within minutes, an entire cloud environment is deployed consistently and automatically.

---

# Key Takeaways

After completing this lesson, you should understand:

- Infrastructure as Code
- Declarative Infrastructure
- Imperative Infrastructure
- Terraform
- AWS CloudFormation
- Terraform State
- Infrastructure Modules
- Configuration Drift
- Infrastructure Automation
- Infrastructure Best Practices

---

# Summary

Infrastructure as Code transforms infrastructure management from a manual process into an automated, repeatable, and version-controlled workflow.

By using tools like Terraform and AWS CloudFormation, organizations can provision infrastructure consistently, reduce errors, improve collaboration, and accelerate cloud adoption.

Infrastructure as Code is now a foundational skill for Cloud Engineers, DevOps Engineers, Platform Engineers, Security Engineers, and AI Infrastructure teams.

---

# Next Lesson

➡️ **Lesson 08 — Enterprise DevOps**

In the next lesson, you'll learn how enterprise organizations implement DevOps at scale. You'll explore DevOps culture, collaboration, Agile practices, release management, platform engineering, monitoring, observability, and the operational models used by modern technology companies.