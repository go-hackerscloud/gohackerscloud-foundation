// Original, non-vendor exam practice questions based on seven published GoHackersCloud Foundation lessons.
// Data is intentionally public. Quiz answers are formative self-checks, not secure exams.
export const foundationChallengeDays = [
  {
    "id": "01",
    "title": "IT systems & hardware",
    "topic": "IT Fundamentals",
    "lesson": "/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/",
    "lessonLabel": "Computer Hardware",
    "optionalLesson": "/core-it-devops/module-01/",
    "objective": "Explain how a computer or VM uses CPU, RAM, storage and an operating system.",
    "assignment": "Draw an application stack with physical hardware, host or hypervisor, operating system and application. Label a symptom of CPU, RAM or storage pressure.",
    "evidence": "A labeled system diagram and a four-line observation-to-hypothesis note.",
    "questions": [
      {
        "prompt": "Which statement best describes RAM in a running computer?",
        "options": [
          "RAM is permanent file storage.",
          "RAM holds data and instructions for active work and is generally volatile.",
          "RAM is the same as the processor.",
          "RAM is a backup stored in the cloud."
        ],
        "correct": 1,
        "explanation": "RAM is working memory used while programs execute. Persistent storage and backups serve different purposes."
      },
      {
        "prompt": "Why does a virtual machine still depend on physical hardware?",
        "options": [
          "A VM creates its own physical CPU.",
          "VMs run without operating systems.",
          "The host supplies CPU, memory, storage and network capacity.",
          "Every VM is a fully managed cloud application."
        ],
        "correct": 2,
        "explanation": "A virtual machine uses virtualized resources backed by a physical host and its virtualization layer."
      },
      {
        "prompt": "A laptop slows down when several large applications run. What should you do first?",
        "options": [
          "Record CPU, memory and storage observations before changing settings.",
          "Disable all security controls.",
          "Assume a malware infection without evidence.",
          "Replace the disk without investigating."
        ],
        "correct": 0,
        "explanation": "Start with safe measurements and a specific hypothesis. Avoid unapproved or disruptive fixes."
      }
    ]
  },
  {
    "id": "02",
    "title": "Networking & web requests",
    "topic": "Networking Fundamentals",
    "lesson": "/foundation/gohackerscloud-foundation/02-networking-fundamentals/01-networking-basics/",
    "lessonLabel": "Networking Basics",
    "optionalLesson": "/core-it-devops/module-02/",
    "objective": "Describe how DNS, network connectivity, TLS and an application response fit together.",
    "assignment": "Sketch a browser-to-service flow showing DNS resolution, TCP/TLS, HTTPS entry, application and data store. Write one possible observation for a DNS failure and one for an HTTP error.",
    "evidence": "A labeled request path and a two-row fault-domain comparison.",
    "questions": [
      {
        "prompt": "What does DNS mainly help a browser do?",
        "options": [
          "Encrypt the web response.",
          "Translate a hostname to a network address or other DNS record.",
          "Authorize a user for a database.",
          "Guarantee a web application is healthy."
        ],
        "correct": 1,
        "explanation": "DNS resolves names to relevant records. HTTPS, application health and authorization are separate."
      },
      {
        "prompt": "A website's name resolves, but the HTTPS connection fails during certificate verification. Which layer should be inspected?",
        "options": [
          "The computer's monitor.",
          "The certification exam blueprint.",
          "TLS certificate and trust configuration.",
          "Only the cloud invoice."
        ],
        "correct": 2,
        "explanation": "Name resolution worked; a certificate validation failure points toward the TLS trust path."
      },
      {
        "prompt": "A server returns HTTP 503. Which conclusion is justified?",
        "options": [
          "DNS must have failed.",
          "No network connection was established.",
          "The user definitely has no account.",
          "An HTTP response was received, but the service was unavailable at that point."
        ],
        "correct": 3,
        "explanation": "An HTTP 503 is a service-side response. It is not equivalent to a DNS or TCP failure."
      }
    ]
  },
  {
    "id": "03",
    "title": "Linux & safe system observations",
    "topic": "Linux Fundamentals",
    "lesson": "/foundation/gohackerscloud-foundation/03-linux-fundamentals/01-linux-introduction/",
    "lessonLabel": "Linux Introduction",
    "optionalLesson": "/core-it-devops/module-03/",
    "objective": "Explain the relationship between a Linux process, user identity, kernel and files.",
    "assignment": "On an authorized Linux or WSL installation, identify your user with whoami or id and inspect a few running processes with ps. If no Linux installation is available, annotate a synthetic process listing instead.",
    "evidence": "A small table with process/user observations (or a clearly labeled synthetic example), plus a note about permissions.",
    "questions": [
      {
        "prompt": "What is the primary role of the Linux kernel in an operating system?",
        "options": [
          "Mediates core operating-system resources and hardware interactions.",
          "Only draws windows on the desktop.",
          "Stores all passwords in a public file.",
          "Replaces the need for process permissions."
        ],
        "correct": 0,
        "explanation": "The kernel manages core OS functionality such as processes, memory, file operations and device interactions."
      },
      {
        "prompt": "Which command is a safe, read-only way to identify your current Linux user?",
        "options": [
          "rm -rf /",
          "chmod -R 777 /",
          "whoami",
          "shutdown now"
        ],
        "correct": 2,
        "explanation": "whoami reports the effective current user. The other examples are destructive or unnecessarily broad."
      },
      {
        "prompt": "A minimal Linux container has no systemd. What is the most reasonable interpretation?",
        "options": [
          "The container cannot have any process.",
          "Some containers run an application directly without systemd as PID 1.",
          "The host hardware must be broken.",
          "All container services are insecure."
        ],
        "correct": 1,
        "explanation": "Containers do not necessarily include a full init system; a foreground application may be PID 1."
      }
    ]
  },
  {
    "id": "04",
    "title": "Windows & identity",
    "topic": "Windows Fundamentals and Identity",
    "lesson": "/foundation/gohackerscloud-foundation/04-windows-fundamentals/01-windows-architecture/",
    "lessonLabel": "Windows Architecture",
    "optionalLesson": "/foundation/gohackerscloud-foundation/09-identity--access-management/01-iam-fundamentals/",
    "objective": "Distinguish Windows processes and services from resource permissions; explain authentication versus authorization.",
    "assignment": "Draw a workstation → sign-in → shared resource decision path. Give a fictional example where a user successfully signs in but is denied access to one department's file.",
    "evidence": "A simple sign-in/permission decision tree with an expected-deny example.",
    "questions": [
      {
        "prompt": "A user signs in to Windows but cannot open a shared folder. What does this demonstrate?",
        "options": [
          "All cloud services must be unavailable.",
          "Windows has no authorization controls.",
          "The computer has no storage.",
          "Authentication can succeed while resource-specific authorization denies access."
        ],
        "correct": 3,
        "explanation": "Sign-in validates identity; file and share rights are evaluated separately."
      },
      {
        "prompt": "Which action is the safest first step in troubleshooting a shared-folder permission issue?",
        "options": [
          "Record the requested path, identity and observed error.",
          "Give everyone full control.",
          "Disable all audit logging.",
          "Reset every staff password."
        ],
        "correct": 0,
        "explanation": "Gather scope and evidence before changing permissions or accounts."
      },
      {
        "prompt": "Which is a typical role of Windows services?",
        "options": [
          "Replace all applications with hardware.",
          "Run background operating-system or application functions.",
          "Provide access to every user regardless of policy.",
          "Guarantee files are backed up without configuration."
        ],
        "correct": 1,
        "explanation": "Services host background functions. Access controls, logging and recovery still need appropriate configuration."
      }
    ]
  },
  {
    "id": "05",
    "title": "Cloud architecture & shared responsibility",
    "topic": "Cloud Computing Fundamentals",
    "lesson": "/foundation/gohackerscloud-foundation/07-cloud-computing-fundamentals/01-cloud-computing/",
    "lessonLabel": "Cloud Computing",
    "optionalLesson": "/foundation/gohackerscloud-foundation/07-cloud-computing-fundamentals/11-shared-responsibility/",
    "objective": "Compare cloud service models and identify which security tasks remain with a customer.",
    "assignment": "Sketch a small learning portal with a public application, private data store and identity provider. List one provider responsibility and two customer responsibilities for a regular IaaS VM.",
    "evidence": "One cloud architecture diagram and a short shared-responsibility matrix.",
    "questions": [
      {
        "prompt": "In a typical IaaS virtual machine deployment, who patches the guest operating system?",
        "options": [
          "The customer or designated VM operator, subject to the service's terms.",
          "Always the Internet provider.",
          "No one; VMs cannot be patched.",
          "Only the learner using the website."
        ],
        "correct": 0,
        "explanation": "In typical IaaS, the provider operates physical infrastructure while the customer manages the guest OS and application controls."
      },
      {
        "prompt": "What usually remains a customer responsibility when using a managed application platform?",
        "options": [
          "Replacing data-center power equipment.",
          "Maintaining physical cooling.",
          "Application logic, user authorization and data handling.",
          "Building the underlying physical network."
        ],
        "correct": 2,
        "explanation": "PaaS shifts some platform operations but does not remove the need to secure the customer's application or data."
      },
      {
        "prompt": "Why should a customer database generally not be directly exposed to everyone on the Internet?",
        "options": [
          "Databases never need any application connections.",
          "It reduces unintended exposure and supports restricted application access.",
          "It makes authentication unnecessary.",
          "It guarantees the system can never fail."
        ],
        "correct": 1,
        "explanation": "Restricting exposure is one layer. Authentication, authorization, encryption and monitoring remain important."
      }
    ]
  },
  {
    "id": "06",
    "title": "Security mindset & controls",
    "topic": "Cybersecurity Fundamentals",
    "lesson": "/foundation/gohackerscloud-foundation/08-cybersecurity-fundamentals/01-security-mindset/",
    "lessonLabel": "Security Mindset",
    "optionalLesson": "/foundation/gohackerscloud-foundation/08-cybersecurity-fundamentals/02-cia-triad/",
    "objective": "Connect business assets, risks and controls to confidentiality, integrity and availability.",
    "assignment": "Imagine a fictional student portal. Create a three-row table for confidentiality, integrity and availability: example failure, relevant control and evidence of a test.",
    "evidence": "An asset–risk–control matrix with one preventive and one detective control.",
    "questions": [
      {
        "prompt": "Which CIA-triad principle is most directly concerned with unauthorized disclosure?",
        "options": [
          "Availability.",
          "Confidentiality.",
          "Scalability.",
          "Usability."
        ],
        "correct": 1,
        "explanation": "Confidentiality concerns preventing unauthorized access to or disclosure of information."
      },
      {
        "prompt": "Why is a security alert not automatically proof of an incident?",
        "options": [
          "Alerts have no value.",
          "Only managers may read log records.",
          "All alerts are guaranteed false positives.",
          "It needs validation against context, evidence and authorized activity."
        ],
        "correct": 3,
        "explanation": "Detections are hypotheses. Analysts validate scope and evidence before making incident conclusions."
      },
      {
        "prompt": "Which is an example of a detective security control?",
        "options": [
          "Monitored audit logging and anomaly review.",
          "A lock on the office door only.",
          "Encrypting stored data without monitoring.",
          "A written promise of perfect security."
        ],
        "correct": 0,
        "explanation": "A detective control helps reveal or identify events; protection and recovery controls have other functions."
      }
    ]
  },
  {
    "id": "07",
    "title": "Git, practical evidence & next steps",
    "topic": "DevOps & Professional Reflection",
    "lesson": "/foundation/gohackerscloud-foundation/06-devops--version-control/01-git/",
    "lessonLabel": "Git Fundamentals",
    "optionalLesson": "/foundation/gohackerscloud-foundation/13-professional-skills/01-technical-documentation/",
    "objective": "Explain a reviewable Git change and write a concise learning summary grounded in evidence.",
    "assignment": "Create a harmless local README or paper-based project note. Describe the working-directory → stage → commit sequence, then write a five-sentence technical summary: objective, observation, reasoning, limitation and next step.",
    "evidence": "A small Git workflow diagram (or paper simulation), a five-sentence reflection and your next learning goal.",
    "questions": [
      {
        "prompt": "In a local repository, what does the Git command git add usually do?",
        "options": [
          "Deploy directly to production.",
          "Delete repository history.",
          "Stage chosen changes for the next local commit.",
          "Grant remote repository access."
        ],
        "correct": 2,
        "explanation": "git add places changes in the staging area. Committing and pushing are separate actions."
      },
      {
        "prompt": "Which sentence is most appropriate for an evidence-based technical report?",
        "options": [
          "The service must be hacked because it is slow.",
          "The cause is obvious and does not need testing.",
          "The issue is permanently solved without retesting.",
          "The synthetic request returned an HTTP 503; the underlying cause was not established."
        ],
        "correct": 3,
        "explanation": "A strong report separates observations from unconfirmed conclusions and states limitations."
      },
      {
        "prompt": "What is a realistic outcome of completing this free seven-day challenge?",
        "options": [
          "A self-reviewed learning plan and a small portfolio of practice evidence.",
          "An automatic vendor certification.",
          "Verified professional cybersecurity qualifications.",
          "Guaranteed access to every paid Academy lab."
        ],
        "correct": 0,
        "explanation": "These are independent learning exercises and self-reported quizzes, not accreditation or paid platform entitlements."
      }
    ]
  }
];
