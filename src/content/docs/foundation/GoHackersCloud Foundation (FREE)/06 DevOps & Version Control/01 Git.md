---
title: Lesson 01 — Git Fundamentals
description: Learn the fundamentals of Git, the world's most popular distributed version control system. Understand repositories, commits, branches, staging, version history, and how Git is used by Cloud Engineers, DevOps Engineers, AI Engineers, and Cybersecurity Professionals.
---

## Lesson Overview

Imagine you're working on an enterprise cloud automation project.

Today you write a Python script.

Tomorrow you accidentally delete half the code.

Next week another engineer modifies the same file.

A month later, your manager asks:

> "Can you restore the version from last Friday?"

Without version control, recovering previous versions becomes extremely difficult.

This is exactly why **Git** exists.

Git allows developers to:

- Track every change
- Restore previous versions
- Collaborate with teams
- Merge code safely
- Build software faster
- Maintain complete project history

Today, Git is one of the most important skills for every IT professional—not just software developers.

Cloud Engineers, DevOps Engineers, Platform Engineers, Security Engineers, AI Engineers, and Site Reliability Engineers use Git every day.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Version Control Systems.
- Learn why Git was created.
- Understand Git architecture.
- Install Git.
- Configure Git.
- Create repositories.
- Track file changes.
- Create commits.
- View project history.
- Understand Git workflows.
- Apply Git in Cloud, DevOps, AI, and Cybersecurity.

---

# What is Version Control?

A **Version Control System (VCS)** tracks changes made to files over time.

Instead of saving multiple copies like:

```text
project-final

project-final-new

project-final-final

project-final-latest

project-final-v2

project-final-v2-final
```

Git stores every version automatically.

You can return to any previous version whenever needed.

---

# Why Version Control Matters

Version Control helps teams:

- Track changes
- Restore previous versions
- Collaborate safely
- Prevent accidental data loss
- Audit modifications
- Improve productivity

Modern software development depends on version control.

---

# What is Git?

Git is a **Distributed Version Control System (DVCS)** created by **Linus Torvalds** in 2005.

Git records every change made to a project and allows multiple developers to work together without overwriting each other's work.

Git is:

- Fast
- Reliable
- Open Source
- Distributed
- Widely adopted

Today it is the industry standard for version control.

---

# Why Was Git Created?

Before Git, developers struggled with:

- Slow version control systems
- Merge conflicts
- Limited collaboration
- Central server dependency

Git solved these challenges by introducing a distributed model where every developer has a complete copy of the repository.

---

# Centralized vs Distributed Version Control

## Centralized Version Control

```text
Developer

↓

Central Server

↓

Project Files
```

Examples:

- SVN
- CVS

Disadvantages:

- Single point of failure
- Internet dependency
- Limited offline work

---

## Distributed Version Control

```text
Developer A

↓

Local Repository

↔

Developer B

↓

Local Repository

↓

Remote Repository
```

Examples:

- Git

Advantages:

- Offline work
- Faster operations
- Complete history
- Better collaboration

---

# Git Architecture

Git consists of three main areas:

```text
Working Directory

↓

Staging Area

↓

Local Repository
```

Later, changes can be pushed to a remote repository such as GitHub.

---

# Working Directory

The **Working Directory** contains the files you're currently editing.

Example:

```text
project/

|

|-- app.py

|-- README.md

|-- requirements.txt
```

Any modifications begin here.

---

# Staging Area

The **Staging Area** acts as a preparation zone.

Only selected changes move into the next commit.

Example:

```bash
git add app.py
```

Git now knows this file should be included in the next commit.

---

# Repository

A **Repository (Repo)** stores:

- Files
- Commit history
- Branches
- Tags
- Configuration

Repositories are the heart of every Git project.

---

# Installing Git

Download Git from:

```text
https://git-scm.com
```

Install it using the default settings.

Verify installation:

```bash
git --version
```

Example output:

```text
git version 2.49.0
```

---

# Configuring Git

Before using Git, configure your identity.

```bash
git config --global user.name "John Doe"

git config --global user.email "john@example.com"
```

Verify configuration:

```bash
git config --list
```

---

# Creating a Repository

Navigate to your project folder.

```bash
mkdir my-project

cd my-project
```

Initialize Git:

```bash
git init
```

Output:

```text
Initialized empty Git repository
```

Git creates a hidden folder:

```text
.git
```

This folder stores all repository metadata.

---

# Git Status

Check the current repository status.

```bash
git status
```

Example:

```text
On branch main

No commits yet
```

`git status` is one of the most frequently used Git commands.

---

# Adding Files

Create a file:

```text
README.md
```

Stage it:

```bash
git add README.md
```

Stage all files:

```bash
git add .
```

The files are now ready to be committed.

---

# Creating a Commit

A commit records a snapshot of your project.

```bash
git commit -m "Initial project setup"
```

Each commit has:

- Unique ID
- Author
- Timestamp
- Commit message

---

# Viewing Commit History

Display previous commits.

```bash
git log
```

Example:

```text
commit a4b8e...

Author

Date

Initial project setup
```

A project's complete history is always available.

---

# Git Commit Workflow

```text
Modify File

↓

git add

↓

git commit

↓

Repository Updated
```

This is the core Git workflow used by developers worldwide.

---

# Viewing Differences

See what has changed.

```bash
git diff
```

Git highlights additions and deletions before committing.

---

# Removing Files

Delete a tracked file.

```bash
git rm file.txt
```

Commit the change afterward.

---

# Renaming Files

Rename a file.

```bash
git mv old.txt new.txt
```

Git tracks the rename operation.

---

# Ignoring Files

Create:

```text
.gitignore
```

Example:

```text
*.log

*.tmp

venv/

__pycache__/
```

Ignored files are not tracked by Git.

---

# Git Tags

Tags identify important milestones.

Example:

```bash
git tag v1.0
```

Common uses:

- Software releases
- Production versions
- Milestones

---

# Git History Example

```text
Commit 1

↓

Commit 2

↓

Commit 3

↓

Commit 4
```

Git allows you to inspect or restore any previous version.

---

# Git in Cloud Computing

Cloud Engineers use Git to manage:

- Terraform
- CloudFormation
- Kubernetes YAML
- Infrastructure scripts
- AWS Lambda code
- Configuration files

Infrastructure becomes version controlled and reproducible.

---

# Git in DevOps

DevOps Engineers use Git for:

- Source code
- Infrastructure as Code
- CI/CD pipelines
- Dockerfiles
- Kubernetes manifests
- Deployment automation

Git is the foundation of DevOps workflows.

---

# Git in Cybersecurity

Security teams manage:

- Detection rules
- SIEM configurations
- Incident response playbooks
- Threat hunting scripts
- Compliance documentation
- Security automation

Git provides change tracking and auditability.

---

# Git in AI

AI Engineers store:

- Training code
- Machine learning models
- Datasets (metadata)
- Experiment configurations
- Jupyter notebooks

Git supports reproducible AI workflows.

---

# Common Git Commands

| Command | Purpose |
|----------|----------|
| git init | Create repository |
| git status | Check repository status |
| git add | Stage files |
| git commit | Save changes |
| git log | View history |
| git diff | Compare changes |
| git rm | Remove file |
| git mv | Rename file |
| git tag | Create version tag |
| git config | Configure Git |

---

# Common Beginner Mistakes

Avoid these mistakes:

- Forgetting to commit changes.
- Writing unclear commit messages.
- Committing temporary files.
- Ignoring `.gitignore`.
- Editing files without checking status.
- Making very large commits.

Small, meaningful commits make projects easier to maintain.

---

# Enterprise Best Practices

Professional development teams:

- Commit frequently.
- Write meaningful commit messages.
- Use `.gitignore`.
- Review changes before committing.
- Keep commits focused on one task.
- Maintain a clean repository history.

These practices improve collaboration and code quality.

---

# Real-World Example

A Cloud Engineer updates a Terraform configuration.

Workflow:

```text
Modify terraform.tf

↓

git status

↓

git add .

↓

git commit

↓

Push to GitHub

↓

CI/CD Pipeline Executes

↓

Infrastructure Updated
```

Every change is recorded, reviewed, and can be restored if necessary.

---

# Key Takeaways

After completing this lesson, you should understand:

- Version Control
- Git
- Distributed repositories
- Working Directory
- Staging Area
- Repository
- Commits
- Git Status
- Git Log
- Git Tags
- Git Best Practices

---

# Summary

Git is the foundation of modern software development and infrastructure management.

By tracking changes, maintaining version history, and enabling collaboration, Git helps individuals and teams build reliable, maintainable, and scalable projects.

Whether you're working in Cloud Computing, DevOps, Artificial Intelligence, or Cybersecurity, Git is an essential tool that you'll use throughout your career.

---

# Next Lesson

➡️ **Lesson 02 — GitHub**

In the next lesson, you'll learn how to use **GitHub**, the world's most popular Git hosting platform. You'll create repositories, push local projects to GitHub, collaborate with teams, manage pull requests, and explore how GitHub powers enterprise software development and DevOps workflows.