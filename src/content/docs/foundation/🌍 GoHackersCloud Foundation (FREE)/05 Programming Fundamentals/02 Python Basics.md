---
title: Lesson 02 — Python Basics
description: Learn the fundamentals of Python programming, install Python, understand Python syntax, variables, comments, input/output, and write your first Python programs for Cloud Computing, DevOps, AI, and Cybersecurity.
---

# Lesson 02 — Python Basics

## Lesson Overview

Python is one of the most popular programming languages in the world.

It powers:

- Cloud Automation
- Artificial Intelligence
- Machine Learning
- Cybersecurity Tools
- DevOps Automation
- Data Science
- APIs
- Web Applications

Python is simple to learn, highly readable, and incredibly powerful, making it the ideal first programming language for IT professionals.

Throughout GoHackersCloud Academy, Python will be used to automate cloud infrastructure, analyze security logs, interact with APIs, build AI applications, and solve real-world problems.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Install Python.
- Understand the Python interpreter.
- Write your first Python program.
- Learn Python syntax.
- Use comments.
- Display output.
- Accept user input.
- Follow Python coding best practices.

---

# What is Python?

Python is a high-level, interpreted programming language created by **Guido van Rossum** and first released in 1991.

Python is known for:

- Simple syntax
- Readable code
- Large community
- Extensive libraries
- Cross-platform compatibility

It allows developers to solve complex problems using relatively simple code.

---

# Why Python?

Python is widely used because it is:

- Easy to learn
- Easy to read
- Open Source
- Cross-platform
- Highly productive
- Extremely versatile

It is often the first programming language taught to students entering Cloud Computing, DevOps, AI, and Cybersecurity.

---

# Python in Modern IT

Python is used in many technology domains.

| Domain | Example Use Cases |
|----------|------------------|
| Cloud Computing | AWS & Azure Automation |
| Cybersecurity | Security Tools & Automation |
| DevOps | CI/CD Pipelines |
| Artificial Intelligence | Machine Learning |
| Data Science | Data Analysis |
| Networking | Network Automation |
| Web Development | APIs & Applications |

Learning Python opens opportunities across multiple career paths.

---

# Installing Python

Download Python from the official website:

```text
https://python.org
```

During installation:

✔ Install Python

✔ Add Python to PATH

✔ Verify installation

---

# Verifying Installation

Open Command Prompt or PowerShell.

Run:

```bash
python --version
```

or

```bash
python3 --version
```

Example:

```text
Python 3.13.2
```

This confirms Python is installed successfully.

---

# Python Interpreter

The Python Interpreter reads and executes Python code line by line.

```text
Python Code

↓

Interpreter

↓

Program Output
```

Unlike compiled languages, Python executes code immediately.

---

# Starting Python

Open a terminal and run:

```bash
python
```

Example:

```text
>>>
```

The `>>>` prompt indicates the interactive Python shell.

Exit the interpreter:

```python
exit()
```

or

```bash
Ctrl + Z
```

---

# Your First Python Program

Create a file named:

```text
hello.py
```

Add the following code:

```python
print("Hello, GoHackersCloud!")
```

Run:

```bash
python hello.py
```

Output:

```text
Hello, GoHackersCloud!
```

Congratulations—you've written your first Python program!

---

# Understanding print()

The `print()` function displays information on the screen.

Example:

```python
print("Welcome")
```

Output:

```text
Welcome
```

Multiple examples:

```python
print("Cloud")

print("Cybersecurity")

print("AI")
```

Output:

```text
Cloud

Cybersecurity

AI
```

---

# Python Syntax

Python uses indentation instead of braces.

Correct:

```python
if True:
    print("Welcome")
```

Incorrect:

```python
if True:
print("Welcome")
```

Indentation is mandatory in Python.

---

# Python is Case Sensitive

Python treats uppercase and lowercase letters differently.

Correct:

```python
print("Hello")
```

Incorrect:

```python
Print("Hello")
```

`print()` and `Print()` are not the same.

---

# Comments

Comments help explain code.

Single-line comment:

```python
# Display welcome message

print("Welcome")
```

Comments are ignored by Python during execution.

---

# Multi-Line Comments

Developers often document code using triple quotes.

Example:

```python
"""
This program
prints a welcome message.
"""
```

Documentation improves code readability.

---

# Variables

Variables store information.

Example:

```python
name = "Rohit"

print(name)
```

Output:

```text
Rohit
```

Variables make programs dynamic and reusable.

---

# User Input

Programs often need information from users.

Example:

```python
name = input("Enter your name: ")

print("Welcome", name)
```

Output:

```text
Enter your name:

Rahul

Welcome Rahul
```

---

# Simple Calculator Example

```python
num1 = int(input("First Number: "))

num2 = int(input("Second Number: "))

print(num1 + num2)
```

Input:

```text
5

10
```

Output:

```text
15
```

---

# Saving Python Files

Python files use the extension:

```text
.py
```

Examples:

```text
hello.py

calculator.py

automation.py

aws_script.py
```

---

# Running Python Programs

Command Prompt:

```bash
python hello.py
```

PowerShell:

```powershell
python hello.py
```

VS Code Terminal:

```bash
python hello.py
```

The same script can run on Windows, Linux, and macOS.

---

# Python in VS Code

Visual Studio Code is one of the best editors for Python.

Typical workflow:

```text
Open VS Code

↓

Create Project Folder

↓

Create .py File

↓

Write Code

↓

Run Program

↓

Debug Errors
```

VS Code provides syntax highlighting, debugging, and extensions that improve productivity.

---

# Common Beginner Mistakes

Examples include:

- Forgetting quotation marks
- Incorrect indentation
- Misspelled function names
- Missing parentheses
- Incorrect capitalization
- Forgetting to save the file

These mistakes are normal and become less frequent with practice.

---

# Python in Cloud Computing

Cloud Engineers use Python to:

- Launch AWS resources
- Manage Azure resources
- Automate backups
- Deploy infrastructure
- Monitor cloud services

Python integrates with cloud SDKs such as:

- Boto3 (AWS)
- Azure SDK
- Google Cloud SDK

---

# Python in Cybersecurity

Security professionals use Python for:

- Log Analysis
- Vulnerability Scanning
- Malware Analysis
- Threat Hunting
- API Automation
- SIEM Integration
- Incident Response

Python is one of the most widely used languages in cybersecurity.

---

# Python in AI

Artificial Intelligence developers use Python with libraries such as:

- TensorFlow
- PyTorch
- Scikit-learn
- Pandas
- NumPy

Python dominates the AI ecosystem because of its simplicity and extensive library support.

---

# Best Practices

As a beginner Python developer:

- Use meaningful variable names.
- Keep programs simple.
- Practice daily.
- Comment complex logic.
- Read error messages carefully.
- Save files frequently.
- Follow consistent formatting.
- Test your code after every change.

Good habits developed early make programming easier as projects become more complex.

---

# Key Takeaways

After completing this lesson, you should understand:

- What Python is.
- How to install Python.
- How to run Python programs.
- Python syntax.
- Comments.
- Variables.
- User input.
- Basic Python programming workflow.

---

# Summary

Python is one of the most important programming languages for modern IT professionals.

Its simplicity, readability, and powerful ecosystem make it the preferred language for Cloud Computing, DevOps, Artificial Intelligence, Cybersecurity, and Automation.

By learning Python fundamentals, you've taken the first practical step toward building automation scripts, cloud applications, AI solutions, and security tools.

---

# Next Lesson

➡️ **Lesson 03 — Python Data Types**

In the next lesson, you'll learn how Python stores different kinds of data using integers, floating-point numbers, strings, booleans, lists, tuples, dictionaries, and sets—the building blocks of every Python application.