---
title: Lesson 10 — Python Automation
description: Learn how to automate repetitive tasks using Python. Build automation scripts for files, operating systems, cloud platforms, APIs, scheduling, and enterprise workflows used in Cloud Computing, DevOps, AI, and Cybersecurity.
---

## Lesson Overview

One of the biggest advantages of learning Python is **Automation**.

Instead of manually performing repetitive tasks, Python allows you to write scripts that complete them automatically.

Imagine needing to:

- Create 500 user accounts
- Back up log files every night
- Launch AWS EC2 instances
- Monitor server health
- Scan thousands of IP addresses
- Generate security reports
- Rename hundreds of files
- Check website availability

Doing these tasks manually would take hours.

Python can complete them in seconds.

Automation is one of the most valuable skills for Cloud Engineers, DevOps Engineers, AI Engineers, and Cybersecurity Professionals.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand automation fundamentals.
- Automate file and folder operations.
- Execute operating system commands.
- Schedule Python scripts.
- Automate REST API interactions.
- Automate cloud operations.
- Build enterprise automation workflows.
- Apply automation best practices.

---

# What is Automation?

Automation is the process of performing repetitive tasks using software instead of manual effort.

Instead of:

```text
Person

↓

Perform Task

↓

Repeat Hundreds of Times
```

We use:

```text
Python Script

↓

Execute Task

↓

Repeat Automatically
```

Automation improves speed, accuracy, and consistency.

---

# Why Automation Matters

Automation helps organizations:

- Reduce manual work
- Minimize human errors
- Improve productivity
- Increase consistency
- Save time
- Scale operations

Modern IT teams automate nearly everything possible.

---

# Common Automation Tasks

Python can automate:

- File management
- Report generation
- Cloud deployments
- Log analysis
- Email notifications
- User provisioning
- System monitoring
- Backup operations

Automation is used daily across enterprise IT.

---

# Automation Workflow

```text
Identify Repetitive Task

↓

Write Python Script

↓

Test

↓

Schedule Execution

↓

Monitor Results

↓

Improve Script
```

Successful automation begins with understanding the workflow.

---

# Automating File Operations

Example:

```python
from pathlib import Path

for file in Path(".").glob("*.txt"):
    print(file)
```

Python can:

- Rename files
- Copy files
- Delete files
- Move files
- Archive files

---

# Automating Folder Creation

```python
from pathlib import Path

Path("Reports").mkdir(exist_ok=True)
```

Useful for:

- Daily reports
- Backup folders
- Project structures

---

# Running Operating System Commands

Use the `subprocess` module.

```python
import subprocess

subprocess.run(["ipconfig"])
```

Linux example:

```python
subprocess.run(["ls"])
```

Python can automate operating system commands safely.

---

# Automating API Requests

Example:

```python
import requests

response = requests.get("https://api.github.com")

print(response.status_code)
```

Automation frequently involves retrieving or updating data through APIs.

---

# Automating Email Notifications

Python can send email notifications after completing tasks.

Examples include:

- Backup completed
- Deployment finished
- Security alert detected
- Server unavailable
- Scan completed

Automation keeps administrators informed.

---

# Scheduling Automation

Automation becomes more powerful when executed automatically.

Common scheduling tools:

### Windows

- Task Scheduler

### Linux

- Cron

### Cloud

- AWS EventBridge
- Azure Automation
- GitHub Actions

Example:

```text
Run every day at 9:00 AM
```

Scheduled tasks eliminate repetitive manual execution.

---

# Logging Automation Results

Automation scripts should record their activities.

Example:

```python
import logging

logging.basicConfig(

    filename="automation.log",

    level=logging.INFO

)

logging.info("Automation Started")
```

Logs assist with troubleshooting and auditing.

---

# Automating Cloud Operations

Python is widely used to automate cloud environments.

Example tasks:

- Launch EC2 instances
- Stop unused virtual machines
- Create storage buckets
- Upload files
- Create IAM users
- Configure networking

AWS example:

```python
import boto3
```

Automation improves cloud efficiency and reduces operational costs.

---

# Automating DevOps Tasks

DevOps Engineers automate:

- Software deployments
- Infrastructure provisioning
- Docker builds
- Kubernetes deployments
- CI/CD pipelines
- Infrastructure testing

Python integrates with many DevOps platforms.

---

# Automating Cybersecurity

Cybersecurity teams automate:

- Vulnerability scanning
- Threat intelligence collection
- IOC validation
- Log analysis
- Malware reporting
- Incident notifications
- Compliance reporting

Automation enables faster incident detection and response.

---

# Automating AI Workflows

AI Engineers automate:

- Data collection
- Model training
- Prediction pipelines
- Dataset preprocessing
- Report generation
- Performance monitoring

Automation supports continuous AI operations.

---

# Working with Time

The `time` module is useful for automation.

Example:

```python
import time

print("Starting...")

time.sleep(5)

print("Finished")
```

The script pauses for five seconds before continuing.

---

# Working with Dates

```python
from datetime import datetime

print(datetime.now())
```

Date and time information is commonly used in logs, reports, and scheduled jobs.

---

# Automating Reports

Example:

```python
with open("report.txt","w") as file:

    file.write("Daily System Report")
```

Reports can include:

- CPU usage
- Memory usage
- Security alerts
- Cloud inventory
- Compliance status

---

# Automating Log Analysis

Example:

```python
with open("security.log") as file:

    for line in file:

        if "ERROR" in line:

            print(line)
```

Automation quickly identifies important events from large log files.

---

# Automation Example

Imagine an organization needs to monitor server availability.

Workflow:

```text
Python Script

↓

Check Server Status

↓

If Offline

↓

Send Email Alert

↓

Log Incident

↓

Exit
```

No manual monitoring is required.

---

# Enterprise Automation Workflow

```text
Scheduled Job

↓

Collect Data

↓

Analyze Results

↓

Generate Report

↓

Send Notification

↓

Archive Logs
```

This workflow is common in enterprise operations.

---

# Common Automation Libraries

| Library | Purpose |
|----------|----------|
| os | Operating system interaction |
| pathlib | File management |
| shutil | Copy and move files |
| subprocess | Execute commands |
| requests | API communication |
| json | Process JSON data |
| schedule | Job scheduling |
| boto3 | AWS automation |
| paramiko | SSH automation |

These libraries are widely used in professional automation projects.

---

# Common Mistakes

Beginners often:

- Hardcode file paths.
- Ignore exception handling.
- Forget logging.
- Store passwords in source code.
- Skip testing.
- Assume APIs always respond successfully.

Automation scripts should be reliable and secure.

---

# Real-World Example

A Cloud Engineer automates the daily inventory of AWS resources.

```python
import boto3

ec2 = boto3.client("ec2")

response = ec2.describe_instances()

print(response)
```

Instead of manually reviewing the AWS Console, the engineer retrieves the information automatically.

---

# Best Practices

As an automation engineer:

- Automate repetitive tasks.
- Write reusable functions.
- Validate user input.
- Log important actions.
- Handle exceptions gracefully.
- Store secrets securely.
- Test scripts before scheduling.
- Document automation workflows.
- Monitor automated jobs regularly.

Reliable automation saves time while reducing operational risk.

---

# Key Takeaways

After completing this lesson, you should understand:

- Automation fundamentals.
- File automation.
- Operating system automation.
- API automation.
- Cloud automation.
- Scheduling.
- Logging.
- Enterprise automation workflows.
- Automation best practices.

---

# Summary

Python Automation enables organizations to replace repetitive manual tasks with reliable, repeatable scripts.

By automating file management, cloud operations, API interactions, reporting, and monitoring, IT professionals can improve efficiency, reduce errors, and focus on higher-value work.

Automation is a core skill for Cloud Computing, DevOps, Artificial Intelligence, and Cybersecurity careers.

---

# Next Lesson

➡️ **Lesson 11 — Python for Security Scripting**

In the next lesson, you'll learn how Python is used to build security tools, automate cybersecurity tasks, perform network reconnaissance, analyze logs, validate indicators of compromise (IOCs), and create practical security scripts used by SOC Analysts, Security Engineers, and Penetration Testers.