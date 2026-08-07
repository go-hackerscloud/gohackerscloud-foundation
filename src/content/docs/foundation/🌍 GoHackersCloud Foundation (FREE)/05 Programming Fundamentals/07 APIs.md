---
title: Lesson 07 — Working with APIs
description: Learn how Python communicates with web services using APIs. Understand REST APIs, HTTP methods, authentication, status codes, JSON responses, and use the requests library to interact with Cloud, DevOps, AI, and Cybersecurity platforms.
---

# Lesson 07 — Working with APIs

## Lesson Overview

Modern software rarely works in isolation.

When you:

- Launch an Amazon EC2 instance
- Retrieve Azure resources
- Create a GitHub repository
- Send a Slack notification
- Query ChatGPT
- Read weather information
- Access Microsoft 365
- Scan a vulnerability management platform

...your application is communicating with another application through an **API**.

APIs are one of the most important concepts in modern software development because they allow different systems to exchange information securely and automatically.

Whether you're becoming a Cloud Engineer, DevOps Engineer, AI Engineer, or Cybersecurity Professional, you'll interact with APIs almost every day.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand APIs and their purpose.
- Learn REST API architecture.
- Understand HTTP requests and responses.
- Use HTTP methods.
- Learn status codes.
- Work with request headers.
- Authenticate API requests.
- Consume APIs using Python's `requests` library.
- Parse JSON responses.
- Apply APIs in Cloud Computing, DevOps, AI, and Cybersecurity.

---

# What is an API?

API stands for **Application Programming Interface**.

An API allows two software applications to communicate with each other.

Example:

```text
Your Python Script

↓

API Request

↓

Cloud Service

↓

API Response

↓

Python Program
```

Instead of interacting with applications manually, programs communicate using APIs.

---

# Why APIs Matter

Almost every modern platform provides APIs.

Examples include:

- AWS
- Microsoft Azure
- Google Cloud
- GitHub
- Docker Hub
- Kubernetes
- OpenAI
- Microsoft 365
- Slack
- Jira

APIs enable automation, integration, and scalability.

---

# Real-World Example

Imagine launching an EC2 instance manually.

Steps include:

```text
Open AWS Console

↓

Login

↓

Navigate to EC2

↓

Launch Instance

↓

Configure Settings

↓

Review

↓

Launch
```

Using an API:

```text
Python Script

↓

AWS API

↓

EC2 Instance Created
```

Automation saves significant time and reduces manual effort.

---

# API Architecture

A typical API communication looks like this:

```text
Client

↓

HTTP Request

↓

API Server

↓

Database

↓

HTTP Response

↓

Client
```

The client requests information, and the server responds.

---

# REST APIs

The most common API style is **REST (Representational State Transfer).**

REST APIs use standard HTTP methods to perform operations.

REST APIs are:

- Lightweight
- Scalable
- Platform Independent
- Easy to Integrate

Most cloud providers expose REST APIs.

---

# API Endpoint

An endpoint is a specific URL representing a resource.

Example:

```text
https://api.github.com/users
```

Another example:

```text
https://api.openweathermap.org/data
```

Every endpoint performs a specific operation.

---

# HTTP Methods

REST APIs use HTTP methods.

| Method | Purpose |
|---------|----------|
| GET | Retrieve data |
| POST | Create new data |
| PUT | Update existing data |
| PATCH | Partially update data |
| DELETE | Remove data |

These methods define the requested operation.

---

# GET Request

Retrieve information.

Example:

```http
GET /users
```

Python:

```python
import requests

response = requests.get("https://api.github.com/users")
```

GET requests never modify data.

---

# POST Request

Create new information.

Example:

```http
POST /users
```

Used for:

- Creating accounts
- Uploading data
- Creating cloud resources

---

# PUT Request

Replace an existing resource.

Example:

```http
PUT /users/101
```

Typically used for updating complete records.

---

# PATCH Request

Update only part of a resource.

Example:

```http
PATCH /users/101
```

Useful when changing only a few fields.

---

# DELETE Request

Remove information.

Example:

```http
DELETE /users/101
```

Cloud automation frequently deletes unused resources through APIs.

---

# HTTP Status Codes

Every API response includes a status code.

| Status Code | Meaning |
|-------------|---------|
| 200 | Success |
| 201 | Resource Created |
| 204 | Success (No Content) |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

Status codes help determine whether a request succeeded.

---

# Request Headers

Headers provide additional information.

Example:

```http
Content-Type: application/json

Authorization: Bearer Token
```

Headers commonly include:

- Authentication
- Content Type
- User Agent
- Accept
- API Version

---

# API Authentication

Many APIs require authentication.

Common methods include:

- API Keys
- Bearer Tokens
- OAuth 2.0
- JWT Tokens
- Basic Authentication

Authentication verifies the identity of the client.

---

# JSON Request and Response

Most REST APIs exchange information using JSON.

Example response:

```json
{
    "name":"GoHackersCloud",

    "course":"Cloud Security",

    "students":10000
}
```

Python converts JSON into dictionaries for easy processing.

---

# Installing requests

Python communicates with REST APIs using the **requests** package.

Install:

```bash
pip install requests
```

Verify:

```python
import requests
```

---

# Sending Your First API Request

```python
import requests

response = requests.get("https://api.github.com")

print(response.status_code)
```

Output:

```text
200
```

This indicates a successful request.

---

# Reading API Responses

Display the response body.

```python
print(response.text)
```

For JSON responses:

```python
print(response.json())
```

Python automatically converts JSON into a dictionary.

---

# Accessing JSON Data

Example:

```python
data = response.json()

print(data["current_user_url"])
```

JSON values are accessed using dictionary keys.

---

# Sending Data with POST

Example:

```python
import requests

data = {

    "name":"Rahul",

    "role":"Cloud Engineer"

}

response = requests.post(

    "https://example.com/api",

    json=data

)
```

The `json=` parameter automatically converts the dictionary into JSON.

---

# Handling API Errors

Always verify the status code.

Example:

```python
if response.status_code == 200:

    print("Success")

else:

    print("Request Failed")
```

Applications should never assume every request succeeds.

---

# APIs in Cloud Computing

Cloud Engineers frequently use APIs for:

- Launching EC2 Instances
- Creating Storage Buckets
- Managing IAM Users
- Monitoring Resources
- Deploying Infrastructure

Popular SDKs:

- boto3
- Azure SDK
- Google Cloud SDK

---

# APIs in DevOps

DevOps Engineers interact with APIs for:

- GitHub
- GitLab
- Jenkins
- Docker Hub
- Kubernetes
- Terraform Cloud

Automation platforms rely heavily on APIs.

---

# APIs in Cybersecurity

Security professionals use APIs to:

- Retrieve vulnerability reports
- Query SIEM platforms
- Manage firewalls
- Integrate threat intelligence
- Automate investigations

Examples:

- VirusTotal API
- Shodan API
- AbuseIPDB API
- Microsoft Defender API

---

# APIs in AI

AI platforms expose APIs for:

- ChatGPT
- Image Generation
- Speech Recognition
- Text Translation
- Machine Learning Models

Developers build intelligent applications by integrating these APIs.

---

# Common Mistakes

Beginners often:

- Forget authentication.
- Ignore HTTP status codes.
- Send incorrect JSON.
- Use the wrong HTTP method.
- Exceed API rate limits.
- Hardcode API keys into source code.

Always store secrets securely using environment variables or secret management services.

---

# Real-World Example

A Cloud Engineer needs to retrieve information about GitHub repositories.

```python
import requests

response = requests.get(

    "https://api.github.com/users/octocat"

)

data = response.json()

print(data["login"])
```

Output:

```text
octocat
```

The application retrieves live data directly from GitHub using its public API.

---

# Best Practices

As a Python developer:

- Use HTTPS for API communication.
- Never hardcode API keys.
- Validate HTTP status codes.
- Handle exceptions gracefully.
- Respect API rate limits.
- Store secrets securely.
- Read API documentation before integration.
- Log failed API requests for troubleshooting.

Well-designed API integrations improve reliability, security, and maintainability.

---

# Key Takeaways

After completing this lesson, you should understand:

- APIs.
- REST architecture.
- HTTP methods.
- API endpoints.
- Status codes.
- Authentication.
- Headers.
- JSON.
- Python `requests`.
- API integration best practices.

---

# Summary

APIs are the foundation of modern software integration.

They enable applications to communicate, exchange data, and automate complex tasks across cloud platforms, enterprise systems, AI services, and cybersecurity tools.

By learning how to interact with REST APIs using Python, you've developed a critical skill that will be used throughout your Cloud Computing, DevOps, AI, and Cybersecurity career.

---

# Next Lesson

➡️ **Lesson 08 — Working with JSON**

In the next lesson, you'll learn how to read, write, parse, and manipulate JSON data using Python. Since JSON is the standard format used by cloud platforms, REST APIs, AI services, and modern applications, mastering it is essential for building automation and integrating with enterprise systems.