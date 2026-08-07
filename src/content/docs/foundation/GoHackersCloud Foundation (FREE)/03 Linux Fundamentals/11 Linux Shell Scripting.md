---
title: Lesson 11 — Linux Shell Scripting
description: Learn how to automate Linux administration using Bash shell scripting, understand variables, loops, conditions, and functions, and create scripts that simplify repetitive tasks in enterprise Linux environments.
---

## Lesson Overview

Imagine you're responsible for managing **500 Linux servers**.

Every morning you need to:

- Check disk usage
- Verify system uptime
- Restart failed services
- Create user accounts
- Backup important files
- Generate health reports

Doing this manually would take hours.

Instead, Linux administrators automate these tasks using **Shell Scripts**.

Shell scripting is one of the most valuable skills for Linux Administrators, Cloud Engineers, DevOps Engineers, Site Reliability Engineers (SREs), and Cybersecurity Professionals.

Whether you're deploying cloud infrastructure, configuring Kubernetes clusters, automating backups, or responding to security incidents, shell scripting saves time and reduces human error.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand what shell scripting is.
- Write and execute Bash scripts.
- Use variables.
- Accept user input.
- Work with conditional statements.
- Use loops and functions.
- Automate common Linux administration tasks.
- Apply shell scripting best practices.

---

# What is Shell Scripting?

A **Shell Script** is a text file containing a sequence of Linux commands that are executed automatically.

Instead of typing commands individually:

```bash
pwd

ls

date

whoami
```

You can place them inside a script:

```bash
#!/bin/bash

pwd
ls
date
whoami
```

Run once.

Everything executes automatically.

---

# Why Shell Scripting Matters

Shell scripting helps administrators:

- Automate repetitive tasks
- Reduce manual work
- Improve consistency
- Save time
- Reduce configuration errors
- Increase productivity

Automation is one of the core principles of modern IT operations.

---

# What is Bash?

**Bash (Bourne Again SHell)** is the default command-line shell for most Linux distributions.

It provides:

- Command execution
- Variables
- Loops
- Functions
- Conditional statements
- Input and output redirection

Most Linux automation starts with Bash.

---

# Creating Your First Script

Create a file.

```bash
nano hello.sh
```

Add the following:

```bash
#!/bin/bash

echo "Welcome to GoHackersCloud Academy!"
```

Save the file.

---

# Making a Script Executable

Grant execute permission.

```bash
chmod +x hello.sh
```

---

# Running a Script

Execute the script.

```bash
./hello.sh
```

Output:

```text
Welcome to GoHackersCloud Academy!
```

---

# The Shebang

Every Bash script begins with:

```bash
#!/bin/bash
```

This tells Linux which interpreter should execute the script.

---

# Comments

Comments explain your code.

Example:

```bash
# Display system information
```

Linux ignores comments during execution.

---

# Variables

Variables store information.

Example:

```bash
#!/bin/bash

name="Student"

echo $name
```

Output:

```text
Student
```

Variables make scripts reusable and dynamic.

---

# User Input

Accept input from the keyboard.

```bash
#!/bin/bash

echo "Enter your name:"

read name

echo "Welcome $name"
```

Output:

```text
Enter your name:

Rohit

Welcome Rohit
```

---

# Environment Variables

Linux provides built-in variables.

Examples:

```bash
echo $HOME

echo $USER

echo $PATH

echo $HOSTNAME
```

These variables provide information about the current environment.

---

# Conditional Statements

Use **if** statements to make decisions.

Example:

```bash
#!/bin/bash

if [ -f test.txt ]

then

echo "File Exists"

fi
```

The script executes only if the condition is true.

---

# If-Else Example

```bash
#!/bin/bash

read age

if [ $age -ge 18 ]

then

echo "Eligible"

else

echo "Not Eligible"

fi
```

---

# Comparison Operators

| Operator | Meaning |
|----------|---------|
| -eq | Equal |
| -ne | Not Equal |
| -gt | Greater Than |
| -lt | Less Than |
| -ge | Greater Than or Equal |
| -le | Less Than or Equal |

These operators are commonly used in conditions.

---

# For Loops

Repeat a task multiple times.

Example:

```bash
for i in {1..5}

do

echo $i

done
```

Output:

```text
1

2

3

4

5
```

---

# While Loops

Execute while a condition remains true.

```bash
count=1

while [ $count -le 5 ]

do

echo $count

count=$((count+1))

done
```

---

# Functions

Functions organize reusable code.

```bash
#!/bin/bash

greet()

{

echo "Welcome!"

}

greet
```

Functions make scripts easier to maintain.

---

# Command-Line Arguments

Scripts can accept parameters.

Example:

```bash
#!/bin/bash

echo "Hello $1"
```

Run:

```bash
./hello.sh Rohit
```

Output:

```text
Hello Rohit
```

---

# Exit Codes

Every Linux command returns an exit status.

View the previous command's exit code.

```bash
echo $?
```

Common values:

| Code | Meaning |
|------|---------|
| 0 | Success |
| Non-Zero | Error |

Exit codes are important when automating workflows.

---

# Redirecting Output

Save command output.

```bash
ls > files.txt
```

Append output.

```bash
date >> logfile.txt
```

Redirect errors.

```bash
command 2> error.log
```

---

# Scheduling Scripts

Linux uses **cron** to execute scripts automatically.

Example:

```text
Every day

↓

2:00 AM

↓

Backup Script
```

Cron automation is widely used in enterprise environments.

---

# Practical Example 1 — System Information

```bash
#!/bin/bash

echo "Hostname:"

hostname

echo "Current User:"

whoami

echo "Kernel:"

uname -r

echo "Disk Usage:"

df -h
```

---

# Practical Example 2 — Backup Script

```bash
#!/bin/bash

cp -r /home/student/Documents /backup
```

Automates file backups.

---

# Practical Example 3 — Health Check

```bash
#!/bin/bash

echo "CPU"

top -bn1 | head

echo "Memory"

free -h

echo "Disk"

df -h
```

Useful for server monitoring.

---

# Shell Scripting in Cloud Computing

Cloud Engineers automate:

- EC2 provisioning
- Software installation
- User creation
- Server configuration
- Application deployment
- Monitoring
- Backups

Cloud-init scripts also use Bash during server startup.

---

# Shell Scripting in DevOps

DevOps Engineers use shell scripts for:

- CI/CD Pipelines
- Docker Builds
- Kubernetes Deployments
- Git Automation
- Infrastructure Provisioning
- Server Configuration

Bash remains a fundamental automation language.

---

# Shell Scripting in Cybersecurity

Security professionals automate:

- Log Analysis
- File Integrity Checks
- User Auditing
- Vulnerability Scanning
- Malware Detection
- Incident Response

Automation significantly improves investigation speed.

---

# Common Commands

Create script:

```bash
nano script.sh
```

Make executable:

```bash
chmod +x script.sh
```

Run script:

```bash
./script.sh
```

Check syntax:

```bash
bash -n script.sh
```

Display exit status:

```bash
echo $?
```

---

# Real-World Example

A Linux administrator manages 200 cloud servers.

Instead of manually checking each server, a Bash script:

```text
Connect to Server

↓

Check Disk Usage

↓

Verify Running Services

↓

Collect Logs

↓

Generate Report

↓

Email Results
```

This automation reduces hours of manual work to just a few minutes.

---

# Best Practices

As a Linux administrator:

- Write clear and readable scripts.
- Use meaningful variable names.
- Add comments to explain complex logic.
- Test scripts in a lab before production.
- Handle errors using exit codes.
- Avoid hardcoding passwords or secrets.
- Store scripts in version control systems like Git.
- Follow consistent coding standards.

Well-written scripts improve reliability, maintainability, and security.

---

# Key Takeaways

After completing this lesson, you should understand:

- What shell scripting is.
- How to create and execute Bash scripts.
- Variables and user input.
- Conditional statements.
- Loops and functions.
- Command-line arguments.
- Exit codes and output redirection.
- Enterprise scripting best practices.

---

# Summary

Shell scripting is one of the most powerful skills in Linux administration.

By automating repetitive tasks, Bash scripts improve efficiency, consistency, and reliability across cloud, DevOps, cybersecurity, and enterprise environments.

Throughout your career, you'll use shell scripting to deploy infrastructure, configure servers, automate monitoring, manage users, perform backups, and respond to incidents.

Mastering Bash scripting is a major step toward becoming an efficient Linux Administrator, Cloud Engineer, DevOps Engineer, or Cybersecurity Professional.

---

# Next Lesson

➡️ **Lesson 12 — Linux Security Best Practices**

In the next lesson, you'll learn how to secure Linux systems by implementing user hardening, SSH security, firewall configuration, log monitoring, software updates, auditing, and enterprise security best practices.