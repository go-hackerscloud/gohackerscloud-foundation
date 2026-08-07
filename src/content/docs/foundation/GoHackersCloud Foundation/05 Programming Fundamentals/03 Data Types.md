---
title: Lesson 03 — Python Data Types
description: Learn how Python stores different kinds of data using integers, floating-point numbers, strings, booleans, lists, tuples, dictionaries, and sets. Understand type conversion and choose the right data type for cloud automation, DevOps, AI, and cybersecurity applications.
---
## Lesson Overview

Imagine you're building a cloud automation script.

The script needs to store:

- A server name
- The number of virtual machines
- CPU utilization
- Whether a server is running
- A list of AWS regions
- A collection of IAM users
- Configuration settings

Each piece of information is different.

Some are numbers.

Some are text.

Some are either **True** or **False**.

Some are collections of values.

Python stores these different kinds of information using **Data Types**.

Choosing the correct data type makes programs easier to understand, more efficient, and less prone to errors.

---

# Learning Objectives

After completing this lesson, you will be able to:

- Understand Python data types.
- Work with numbers and strings.
- Use Boolean values.
- Learn Lists, Tuples, Dictionaries, and Sets.
- Convert between data types.
- Inspect variable types.
- Apply data types in real-world IT automation.

---

# What is a Data Type?

A **Data Type** defines the kind of value a variable can store.

Examples include:

- Numbers
- Text
- True or False values
- Collections of data

Python automatically determines the data type based on the value assigned.

---

# Why Data Types Matter

Choosing the correct data type helps you:

- Store information efficiently.
- Perform calculations.
- Compare values.
- Process collections of data.
- Write reliable automation scripts.

Almost every Python program uses multiple data types.

---

# Common Python Data Types

| Data Type | Example | Purpose |
|-----------|----------|---------|
| int | 100 | Whole Numbers |
| float | 95.5 | Decimal Numbers |
| str | "AWS" | Text |
| bool | True | True or False |
| list | ["EC2","S3"] | Ordered Collection |
| tuple | ("AWS","Azure") | Fixed Collection |
| dict | {"Region":"Mumbai"} | Key-Value Pairs |
| set | {"SSH","HTTPS"} | Unique Values |

---

# Integer (int)

Integers represent whole numbers.

Example:

```python
servers = 10

users = 250

ports = 443
```

Integers are commonly used for:

- Port Numbers
- User Counts
- CPU Cores
- Memory Size
- Number of Resources

---

# Floating Point Numbers (float)

Floats represent decimal values.

Example:

```python
cpu = 73.6

memory = 82.4
```

Common uses include:

- CPU Utilization
- Storage Usage
- Temperature
- Network Latency
- Pricing

---

# Strings (str)

Strings store text.

Example:

```python
cloud = "AWS"

name = "GoHackersCloud"
```

Strings are enclosed using:

```python
" "

' '
```

Strings are one of the most frequently used data types.

---

# Multi-Line Strings

Python supports multi-line strings.

Example:

```python
message = """
Welcome to
GoHackersCloud Academy
"""
```

Useful for documentation and long messages.

---

# Boolean (bool)

Booleans represent two possible values.

```python
True

False
```

Example:

```python
server_running = True

vpn_connected = False
```

Booleans are heavily used in decision-making.

---

# Boolean Example

```python
logged_in = True

print(logged_in)
```

Output:

```text
True
```

---

# Lists

Lists store multiple values in a specific order.

Example:

```python
clouds = ["AWS", "Azure", "GCP"]
```

Access an item:

```python
print(clouds[0])
```

Output:

```text
AWS
```

Lists are **mutable**, meaning they can be changed after creation.

---

# Adding Items to a List

```python
clouds.append("Oracle Cloud")
```

Updated list:

```text
AWS

Azure

GCP

Oracle Cloud
```

---

# Tuples

Tuples also store multiple values.

Example:

```python
regions = ("Mumbai", "London", "Tokyo")
```

Unlike lists, tuples are **immutable**.

Once created, they cannot be modified.

Tuples are useful for storing fixed configuration values.

---

# Dictionaries

A Dictionary stores data as **Key : Value** pairs.

Example:

```python
server = {

    "Name": "WebServer01",

    "OS": "Windows",

    "Status": "Running"

}
```

Retrieve a value:

```python
print(server["OS"])
```

Output:

```text
Windows
```

Dictionaries are widely used in APIs and cloud automation.

---

# Sets

Sets store unique values.

Example:

```python
ports = {80, 443, 22}
```

Duplicate values are automatically removed.

Example:

```python
{22,22,80,443}
```

Becomes:

```text
{22,80,443}
```

Sets are useful for removing duplicates.

---

# None Type

Python has a special value:

```python
None
```

Example:

```python
response = None
```

This means:

> No value has been assigned yet.

---

# Checking Data Types

Use the `type()` function.

Example:

```python
name = "Python"

print(type(name))
```

Output:

```text
<class 'str'>
```

Another example:

```python
age = 25

print(type(age))
```

Output:

```text
<class 'int'>
```

---

# Type Conversion

Python allows conversion between data types.

Convert String to Integer:

```python
age = int("25")
```

Convert Integer to String:

```python
age = str(25)
```

Convert Integer to Float:

```python
price = float(100)
```

Type conversion is common when processing user input.

---

# User Input Example

```python
age = int(input("Enter Age: "))

print(age + 5)
```

Without `int()`, Python treats input as text.

---

# String Concatenation

Join strings together.

Example:

```python
first = "Cloud"

second = "Engineer"

print(first + " " + second)
```

Output:

```text
Cloud Engineer
```

---

# Numeric Operations

```python
a = 20

b = 5

print(a + b)

print(a - b)

print(a * b)

print(a / b)
```

Output:

```text
25

15

100

4.0
```

---

# Data Types in Cloud Computing

Cloud Engineers commonly store:

```python
instance_name = "WebServer01"

cpu = 45.8

running = True

regions = ["Mumbai","London"]

config = {

    "Region":"Mumbai",

    "Instance":"t3.micro"

}
```

Automation scripts rely heavily on dictionaries and lists.

---

# Data Types in Cybersecurity

Security professionals work with:

- IP Addresses
- Usernames
- Event IDs
- Log Entries
- Port Numbers
- Alerts
- JSON Responses

Example:

```python
event = {

    "EventID":4625,

    "Status":"Failed Login"

}
```

---

# Data Types in AI

Machine Learning applications use:

- Numbers
- Lists
- Dictionaries
- Matrices
- DataFrames

Every AI model begins with structured data.

---

# Common Mistakes

Beginners often:

- Forget quotation marks around strings.
- Try adding numbers to strings.
- Use the wrong data type.
- Modify tuples.
- Misspell dictionary keys.

Understanding data types helps prevent these errors.

---

# Real-World Example

A cloud inventory script stores information about virtual machines.

```python
server = {

    "Name":"WebServer01",

    "CPU":45.5,

    "Running":True,

    "Services":["HTTP","HTTPS"],

    "Region":"Mumbai"

}
```

Each value uses a different data type to represent the appropriate kind of information.

---

# Best Practices

As a Python developer:

- Choose the correct data type for each variable.
- Use dictionaries for structured data.
- Use lists for collections that change.
- Use tuples for fixed values.
- Use meaningful variable names.
- Verify data types with `type()`.
- Convert user input before calculations.
- Keep data structures simple and readable.

Choosing the right data type improves code quality and maintainability.

---

# Key Takeaways

After completing this lesson, you should understand:

- Integer
- Float
- String
- Boolean
- List
- Tuple
- Dictionary
- Set
- None
- Type Conversion
- `type()` Function

---

# Summary

Python Data Types are the foundation of every Python program.

By understanding how to store numbers, text, logical values, and collections of data, you'll be able to build reliable automation scripts, cloud applications, cybersecurity tools, and AI solutions.

Mastering data types is one of the most important steps toward becoming an effective Python developer.

---

# Next Lesson

➡️ **Lesson 04 — Python Functions**

In the next lesson, you'll learn how to create reusable blocks of code using functions, understand parameters, arguments, return values, variable scope, and build modular Python programs that are easier to maintain and scale.