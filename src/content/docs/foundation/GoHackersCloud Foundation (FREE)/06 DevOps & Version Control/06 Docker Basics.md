---
title: Lesson 06 — Docker Basics
description: Learn the fundamentals of Docker and containerization. Understand containers, images, Dockerfiles, Docker Hub, volumes, networking, and how Docker is used in Cloud Computing, DevOps, AI, and Cybersecurity.
---

## Lesson Overview

Imagine you're developing a Python application.

It works perfectly on your laptop.

You send it to another developer.

Suddenly, it doesn't work.

Why?

Because their computer has:

- Different Python version
- Different operating system
- Missing libraries
- Different configurations

This is known as the classic:

> **"It works on my machine."**

Docker solves this problem.

Docker packages an application together with everything it needs to run:

- Application code
- Libraries
- Dependencies
- Runtime
- Configuration

This package is called a **Container**.

Containers ensure that applications run the same way everywhere.

Today, Docker is one of the most important technologies in Cloud Computing, DevOps, Platform Engineering, AI, and Cybersecurity.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand containerization.
- Learn Docker architecture.
- Install Docker.
- Work with Docker images.
- Run Docker containers.
- Create Dockerfiles.
- Build Docker images.
- Use Docker Hub.
- Manage Docker volumes and networking.
- Apply Docker in enterprise environments.

---

# What is Docker?

Docker is an open-source platform used to build, package, ship, and run applications inside lightweight containers.

Instead of installing software directly on an operating system, applications run inside isolated containers.

Docker provides:

- Consistency
- Portability
- Isolation
- Scalability
- Fast deployment

---

# Why Docker Matters

Docker helps organizations:

- Eliminate environment issues
- Simplify deployments
- Improve scalability
- Speed up development
- Standardize environments
- Support microservices

Docker has become a standard technology in modern software development.

---

# What is a Container?

A container is an isolated environment that contains everything an application needs to run.

A container includes:

- Application
- Runtime
- Libraries
- Dependencies
- Configuration Files

Unlike virtual machines, containers share the host operating system kernel, making them lightweight and fast.

---

# Containers vs Virtual Machines

| Virtual Machine | Docker Container |
|-----------------|------------------|
| Includes Guest OS | Shares Host OS |
| Larger Size | Lightweight |
| Slower Startup | Starts in Seconds |
| Higher Resource Usage | Lower Resource Usage |
| Full Virtualization | Operating System-Level Virtualization |

Containers are more efficient for most modern applications.

---

# Docker Architecture

Docker consists of several components.

```text
Developer

↓

Docker CLI

↓

Docker Engine

↓

Docker Images

↓

Docker Containers
```

Each component plays a specific role in managing containers.

---

# Docker Components

Docker includes:

- Docker Client
- Docker Engine
- Docker Daemon
- Docker Images
- Docker Containers
- Docker Registry

Together they provide a complete container platform.

---

# Docker Images

A Docker Image is a read-only template used to create containers.

Think of an image as a blueprint.

Example:

```text
Python Image

↓

Run Container

↓

Python Application
```

Images can be reused to create multiple containers.

---

# Docker Containers

Containers are running instances of Docker images.

Example:

```text
Docker Image

↓

Container 1

↓

Container 2

↓

Container 3
```

Each container runs independently.

---

# Docker Hub

Docker Hub is the public repository for Docker images.

Popular images include:

- Ubuntu
- Alpine
- Python
- Nginx
- MySQL
- PostgreSQL
- Redis
- Jenkins

Developers download images instead of creating everything from scratch.

---

# Installing Docker

Download Docker Desktop from:

```text
https://www.docker.com/products/docker-desktop
```

Verify installation:

```bash
docker --version
```

Example:

```text
Docker version 28.x.x
```

---

# Running Your First Container

Run the Hello World container.

```bash
docker run hello-world
```

Docker automatically:

- Downloads the image
- Creates a container
- Executes it
- Displays the output

This confirms Docker is working correctly.

---

# Pulling Images

Download an image.

```bash
docker pull ubuntu
```

Download Python:

```bash
docker pull python
```

Images are stored locally after downloading.

---

# Viewing Images

Display downloaded images.

```bash
docker images
```

Example output:

```text
python

ubuntu

nginx
```

---

# Running Containers

Start an Ubuntu container.

```bash
docker run ubuntu
```

Interactive mode:

```bash
docker run -it ubuntu bash
```

The `-it` option provides an interactive terminal.

---

# Listing Running Containers

View active containers.

```bash
docker ps
```

View all containers:

```bash
docker ps -a
```

These commands help monitor container status.

---

# Stopping Containers

Stop a running container.

```bash
docker stop container_id
```

Replace `container_id` with the actual container identifier.

---

# Removing Containers

Delete a container.

```bash
docker rm container_id
```

Removing unused containers keeps your environment clean.

---

# Removing Images

Delete an image.

```bash
docker rmi image_name
```

Example:

```bash
docker rmi ubuntu
```

---

# Dockerfile

A Dockerfile defines how to build a Docker image.

Example:

```dockerfile
FROM python:3.12

WORKDIR /app

COPY . .

RUN pip install -r requirements.txt

CMD ["python","app.py"]
```

Docker reads the instructions from top to bottom.

---

# Building an Image

Build an image from a Dockerfile.

```bash
docker build -t myapp .
```

The `-t` flag assigns a name (tag) to the image.

---

# Running Your Image

```bash
docker run myapp
```

Docker creates a container from the image.

---

# Docker Volumes

Containers are temporary.

Volumes provide persistent storage.

Example:

```bash
docker volume create app-data
```

Volumes allow data to survive container restarts and replacements.

---

# Docker Networking

Containers communicate using Docker networks.

Create a network:

```bash
docker network create app-network
```

Networking enables communication between multiple containers.

---

# Docker Compose (Introduction)

Docker Compose manages multi-container applications.

Example:

```yaml
services:

  web:

    image: nginx

  database:

    image: mysql
```

Compose allows multiple services to start together using a single command.

---

# Common Docker Commands

| Command | Purpose |
|----------|----------|
| docker pull | Download image |
| docker images | List images |
| docker run | Create container |
| docker ps | List running containers |
| docker stop | Stop container |
| docker rm | Remove container |
| docker rmi | Remove image |
| docker build | Build image |
| docker logs | View logs |
| docker exec | Execute command inside container |

---

# Docker in Cloud Computing

Cloud Engineers use Docker for:

- Microservices
- Application Packaging
- Serverless Development
- Kubernetes Deployments
- Cloud Migration

Containers simplify application portability across cloud providers.

---

# Docker in DevOps

DevOps Engineers use Docker to:

- Build CI/CD pipelines
- Standardize development environments
- Deploy applications
- Create reproducible builds
- Run automated tests

Docker is a core DevOps technology.

---

# Docker in Cybersecurity

Security teams use Docker for:

- Security testing labs
- Malware analysis
- Sandboxed environments
- Vulnerability scanning
- Container security assessments

Containers provide isolated environments for testing and analysis.

---

# Docker in AI

AI Engineers use Docker to package:

- Machine Learning Models
- Jupyter Notebooks
- TensorFlow Applications
- PyTorch Projects
- AI APIs

Containers ensure AI workloads run consistently across environments.

---

# Common Beginner Mistakes

Avoid these mistakes:

- Running containers as root unnecessarily.
- Storing secrets inside Docker images.
- Creating oversized images.
- Ignoring image updates.
- Leaving unused containers running.
- Forgetting to persist important data with volumes.

Following best practices improves security and efficiency.

---

# Enterprise Best Practices

Professional teams:

- Use official base images.
- Keep images lightweight.
- Scan images for vulnerabilities.
- Use version tags.
- Store secrets securely.
- Use multi-stage builds.
- Remove unused images regularly.
- Monitor container health.

These practices improve reliability and security.

---

# Real-World Example

A DevOps Engineer deploys a web application.

Workflow:

```text
Write Application

↓

Create Dockerfile

↓

Build Docker Image

↓

Push Image to Registry

↓

Deploy Container

↓

Application Running
```

The same Docker image can run on a developer's laptop, a test environment, or a production Kubernetes cluster without modification.

---

# Key Takeaways

After completing this lesson, you should understand:

- Docker.
- Containers.
- Images.
- Docker Hub.
- Dockerfile.
- Docker Build.
- Docker Run.
- Docker Volumes.
- Docker Networking.
- Docker Best Practices.

---

# Summary

Docker revolutionized software development by making applications portable, consistent, and easy to deploy.

By packaging applications and their dependencies into lightweight containers, Docker enables developers and operations teams to build, test, ship, and run software reliably across different environments.

Docker is now a foundational technology for Cloud Computing, DevOps, Artificial Intelligence, Cybersecurity, and modern application development.

---

# Next Lesson

➡️ **Lesson 07 — Infrastructure as Code (IaC)**

In the next lesson, you'll learn how to automate infrastructure provisioning using **Infrastructure as Code (IaC)**. You'll explore Terraform, AWS CloudFormation, declarative infrastructure, version-controlled deployments, and enterprise infrastructure automation practices.