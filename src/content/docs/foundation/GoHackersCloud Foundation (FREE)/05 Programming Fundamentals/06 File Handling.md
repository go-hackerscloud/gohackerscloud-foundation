---
title: Lesson 06 — Python File Handling
description: Learn how to create, read, write, update, and manage files using Python. Work with text files, CSV, JSON, and log files commonly used in Cloud Computing, DevOps, AI, and Cybersecurity.
---

## Lesson Overview

Almost every Python application interacts with files.

Whether you're:

- Reading application logs
- Parsing AWS CloudTrail events
- Updating configuration files
- Processing CSV reports
- Reading JSON API responses
- Writing automation reports
- Storing scan results
- Creating backups

...you're working with files.

File handling is one of the most practical Python skills because nearly every automation script reads data from a file or writes data to one.

Throughout your Cloud, DevOps, AI, and Cybersecurity journey, you'll regularly process log files, configuration files, reports, and datasets using Python.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand file handling in Python.
- Open, read, write, and append files.
- Work safely with files using context managers.
- Process text, CSV, and JSON files.
- Handle file-related exceptions.
- Work with directories using `pathlib`.
- Apply file handling in real-world IT automation.

---

# What is File Handling?

**File Handling** is the process of creating, reading, updating, and deleting files using Python.

Files allow programs to:

- Store information permanently
- Exchange data
- Generate reports
- Read configuration files
- Process logs
- Import and export data

Without file handling, information would be lost when a program exits.

---

# Why File Handling Matters

File handling enables automation scripts to:

- Read server inventories
- Analyze security logs
- Save scan results
- Store application settings
- Generate audit reports
- Process datasets

Nearly every enterprise automation script interacts with files.

---

# File Handling Workflow

```text
Open File

↓

Read or Write Data

↓

Process Information

↓

Save Changes

↓

Close File
```

Python simplifies this process using built-in functions.

---

# Opening a File

Use the `open()` function.

```python
file = open("notes.txt")
```

This opens the file using the default **read mode**.

---

# File Modes

| Mode | Purpose |
|------|----------|
| `r` | Read |
| `w` | Write (overwrite) |
| `a` | Append |
| `x` | Create new file |
| `rb` | Read Binary |
| `wb` | Write Binary |

Choosing the correct mode is important to avoid accidental data loss.

---

# Reading a File

Example:

```python
file = open("notes.txt", "r")

print(file.read())

file.close()
```

Output:

```text
Welcome to GoHackersCloud Academy
```

---

# Reading Line by Line

```python
file = open("notes.txt")

for line in file:
    print(line)

file.close()
```

Reading line by line is useful for large files.

---

# Reading All Lines

```python
file = open("notes.txt")

lines = file.readlines()

print(lines)

file.close()
```

This returns a list containing each line.

---

# Writing to a File

```python
file = open("notes.txt", "w")

file.write("Python File Handling")

file.close()
```

**Warning:** Write mode replaces the existing file contents.

---

# Appending to a File

Append adds data without removing existing content.

```python
file = open("notes.txt", "a")

file.write("\nCloud Computing")

file.close()
```

---

# Creating a New File

```python
file = open("report.txt", "x")

file.close()
```

Python creates the file only if it does not already exist.

---

# Closing Files

Always close files after use.

```python
file.close()
```

Closing a file releases system resources.

---

# Using Context Managers (Recommended)

The safest way to work with files is using `with`.

```python
with open("notes.txt", "r") as file:
    print(file.read())
```

Advantages:

- Automatically closes the file
- Cleaner code
- Safer resource management
- Recommended for all new programs

---

# Working with Text Files

Example:

```python
with open("message.txt", "w") as file:
    file.write("Welcome Student")
```

Text files are commonly used for:

- Notes
- Reports
- Configuration
- Documentation

---

# Working with CSV Files

CSV files store tabular data.

Example:

```csv
Name,Department

Rahul,Cloud

Anita,Cybersecurity
```

Python example:

```python
import csv

with open("employees.csv") as file:
    reader = csv.reader(file)

    for row in reader:
        print(row)
```

CSV files are widely used in reporting and data exchange.

---

# Writing CSV Files

```python
import csv

with open("students.csv", "w", newline="") as file:

    writer = csv.writer(file)

    writer.writerow(["Name","Course"])

    writer.writerow(["Rohit","Cloud Security"])
```

---

# Working with JSON

JSON is commonly used by cloud APIs.

Example JSON:

```json
{
    "Cloud":"AWS",
    "Region":"Mumbai"
}
```

Read JSON:

```python
import json

with open("config.json") as file:

    data = json.load(file)

print(data["Cloud"])
```

Output:

```text
AWS
```

---

# Writing JSON

```python
import json

config = {

    "Cloud":"AWS",

    "Region":"Mumbai"

}

with open("config.json","w") as file:

    json.dump(config, file, indent=4)
```

---

# File Paths

Relative path:

```text
notes.txt
```

Absolute path:

```text
C:\Projects\Python\notes.txt
```

Relative paths improve portability across systems.

---

# Using pathlib

Python's modern file library:

```python
from pathlib import Path

file = Path("notes.txt")

print(file.exists())
```

Useful methods:

- exists()
- is_file()
- is_dir()
- mkdir()
- unlink()

---

# Listing Files

```python
from pathlib import Path

for file in Path(".").iterdir():
    print(file)
```

Useful for automation and inventory scripts.

---

# File Exceptions

Sometimes files do not exist.

Example:

```python
try:

    with open("missing.txt") as file:
        print(file.read())

except FileNotFoundError:

    print("File not found.")
```

Exception handling prevents programs from crashing unexpectedly.

---

# Binary Files

Binary mode is used for:

- Images
- PDFs
- Executables
- ZIP Files

Example:

```python
with open("photo.jpg","rb") as file:

    data = file.read()
```

---

# File Handling in Cloud Computing

Cloud Engineers commonly work with:

- JSON configuration files
- Terraform state files
- YAML templates
- CloudTrail logs
- CSV inventories

Example:

```python
import json

with open("cloud_config.json") as file:

    config = json.load(file)
```

---

# File Handling in DevOps

DevOps Engineers process:

- Deployment logs
- Configuration files
- CI/CD reports
- Docker Compose files
- Kubernetes YAML manifests

Automation depends heavily on reading and updating files.

---

# File Handling in Cybersecurity

Security professionals analyze:

- Windows Event Logs (exported)
- Linux log files
- Firewall logs
- IDS alerts
- Threat intelligence feeds
- IOC lists

Example:

```python
with open("security.log") as file:

    for line in file:
        print(line)
```

---

# File Handling in AI

AI developers work with:

- CSV datasets
- JSON annotations
- Images
- Text corpora
- Model outputs

Python simplifies loading and processing these files.

---

# Common Mistakes

Beginners often:

- Forget to close files.
- Use the wrong file mode.
- Overwrite important data with `"w"`.
- Forget exception handling.
- Use incorrect file paths.
- Ignore encoding issues.

Using `with` statements helps avoid many of these problems.

---

# Real-World Example

A SOC Analyst needs to review failed login attempts.

```python
with open("security.log") as file:

    for line in file:

        if "Failed Login" in line:

            print(line)
```

This simple script quickly identifies relevant events from a large log file.

---

# Best Practices

As a Python developer:

- Use `with open()` whenever possible.
- Handle exceptions gracefully.
- Use relative paths when practical.
- Store configuration separately from code.
- Avoid hardcoding file paths.
- Validate file contents before processing.
- Use JSON for structured configuration.
- Use CSV for tabular reports.

Well-designed file handling improves reliability and maintainability.

---

# Key Takeaways

After completing this lesson, you should understand:

- File handling.
- File modes.
- Reading files.
- Writing files.
- Appending data.
- CSV processing.
- JSON processing.
- Context managers.
- `pathlib`.
- Exception handling.

---

# Summary

Python File Handling enables applications to store, retrieve, and process information from files.

Whether you're reading log files, processing cloud configuration, generating reports, or building automation tools, file handling is a core programming skill used across Cloud Computing, DevOps, AI, and Cybersecurity.

Mastering file operations prepares you to build practical automation scripts and enterprise applications.

---
# Next Lesson

➡️ **Lesson 07 — Working with APIs**

In the next lesson, you'll learn how Python communicates with web services and cloud platforms using **Application Programming Interfaces (APIs)**. You'll explore REST APIs, HTTP methods, request and response formats, authentication, status codes, and use the **requests** library to interact with real-world services.

