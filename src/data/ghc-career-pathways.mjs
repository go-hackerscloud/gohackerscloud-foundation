/* Single source of truth for Foundation career, certifications and interviews.
   Certification suggestions are independent third-party credentials, never
   guarantees, bundled exam vouchers or statements of Academy availability. */
export const ghcCareerPathways = [
  {
    "id": "cloud-security-engineer",
    "title": "Cloud Security Engineer",
    "stage": "Intermediate · Cloud defense",
    "intro": "Design and evaluate cloud identity, network, data-protection and detection controls with evidence.",
    "focus": [
      "Cloud shared responsibility and architecture",
      "IAM, encryption and network segmentation",
      "Cloud audit trails, detection and response",
      "Secure infrastructure as code"
    ],
    "sequence": [
      "Refresh Linux, networking and cloud fundamentals",
      "Draw a cloud trust-boundary and identity diagram",
      "Review least-privilege and data-handling controls",
      "Document a synthetic incident and explain remediation"
    ],
    "portfolio": [
      "Cloud IAM least-privilege review and expected-denial tests",
      "Cloud security architecture and synthetic alert triage"
    ],
    "tracks": [
      "cloud",
      "aws"
    ],
    "certs": [
      [
        "AWS Certified Cloud Practitioner",
        "Foundation",
        "Optional cloud vocabulary before a security specialty.",
        "https://aws.amazon.com/certification/certified-cloud-practitioner/"
      ],
      [
        "AWS Certified Security – Specialty",
        "Role focus",
        "AWS security architecture, data protection, incident response and governance.",
        "https://aws.amazon.com/certification/certified-security-specialty/"
      ],
      [
        "ISC2 CCSP",
        "Advanced",
        "Broader cloud security architecture and governance; review experience requirements.",
        "https://www.isc2.org/Certifications/CCSP"
      ],
      [
        "Google Professional Cloud Security Engineer",
        "Role focus",
        "Google Cloud identity, secure workloads and security operations.",
        "https://cloud.google.com/learn/certification/cloud-security-engineer"
      ]
    ],
    "qa": [
      [
        "What does the shared responsibility model change?",
        "The provider manages defined infrastructure controls; customers still own configuration, identities, data and workload choices according to the service."
      ],
      [
        "How do you investigate an overly broad cloud IAM role?",
        "Record scope and trust assumptions, inspect effective permissions and usage, propose least privilege and verify both allowed and denied actions."
      ],
      [
        "How do security groups differ from identity controls?",
        "Security groups restrict network reachability, while IAM governs what identities may do through cloud APIs; both should be reviewed."
      ],
      [
        "What signals are useful in a cloud credential incident?",
        "Correlate control-plane activity, identity changes, unusual source context and resource access; preserve time-ordered evidence before containment."
      ],
      [
        "How would you assess a public storage bucket?",
        "Inspect public access settings, bucket policy, access points and intended users, then safely validate access without exposing actual customer data."
      ],
      [
        "How do you present cloud security risk to a nontechnical owner?",
        "Describe affected assets, the plausible path, verified exposure, business impact, remediation owner and repeatable retest."
      ]
    ]
  },
  {
    "id": "penetration-tester",
    "title": "Penetration Tester",
    "stage": "Intermediate · Authorized assessment",
    "intro": "Learn scoped reconnaissance, network and web testing, impact verification and professional reporting in authorized environments.",
    "focus": [
      "Rules of engagement and evidence handling",
      "Network and service enumeration",
      "Web and API attack-surface review",
      "Finding validation, remediation and retesting"
    ],
    "sequence": [
      "Master Linux, TCP/IP and HTTP basics",
      "Define authorization, scope and excluded targets",
      "Enumerate lab services and validate one safe finding",
      "Write a reproducible report with remediation and retest"
    ],
    "portfolio": [
      "Network service inventory and risk-ranked assessment report",
      "Web application access-control retest with sanitized evidence"
    ],
    "tracks": [
      "network",
      "webapp",
      "api"
    ],
    "certs": [
      [
        "CompTIA Security+",
        "Foundation",
        "Useful security and risk vocabulary, not a penetration test credential.",
        "https://www.comptia.org/certifications/security"
      ],
      [
        "INE eJPT",
        "Practical entry",
        "An optional hands-on junior penetration testing credential.",
        "https://security.ine.com/certifications/ejpt-certification/"
      ],
      [
        "TCM Security PNPT",
        "Role focus",
        "Practical assessment workflow and reporting-oriented preparation.",
        "https://certifications.tcm-sec.com/pnpt"
      ],
      [
        "OffSec OSCP / OSCP+",
        "Advanced",
        "A demanding hands-on pathway; check the current PEN-200 and exam rules.",
        "https://www.offsec.com/courses/pen-200/"
      ]
    ],
    "qa": [
      [
        "What must you obtain before starting a penetration test?",
        "Written authorization, scope, contacts, time window, safe testing rules and a stop/escalation procedure."
      ],
      [
        "How do you prioritize an exposed network service?",
        "Verify its presence and purpose, consider asset criticality and real reachability, then seek approved validation before making impact claims."
      ],
      [
        "Why is enumeration often more important than choosing a tool?",
        "It builds a reliable model of identities, assets and exposed functionality, reducing false assumptions and wasted testing."
      ],
      [
        "How would you verify an access-control finding safely?",
        "Use authorized test identities, a non-sensitive object and an expected-denial case; avoid actual customer data."
      ],
      [
        "What belongs in a good finding?",
        "Scope, affected asset, repeatable steps, expected versus observed behavior, sanitized evidence, impact and a practical retest."
      ],
      [
        "When should a tester stop?",
        "At an out-of-scope system, unexpected production impact, sensitive data exposure or an unsafe condition, following escalation rules."
      ]
    ]
  },
  {
    "id": "ethical-hacker",
    "title": "Ethical Hacker / CEH Path",
    "stage": "Foundation to intermediate · Ethical methodology",
    "intro": "Build an ethical assessment mindset across operating systems, reconnaissance, vulnerability discovery and responsible reporting.",
    "focus": [
      "Legal scope and assessment ethics",
      "Networking, Linux and Windows basics",
      "Enumeration and common vulnerability classes",
      "Evidence, prioritization and communication"
    ],
    "sequence": [
      "Learn core IT and security foundations",
      "Use the CEH-aligned track for methodical lab practice",
      "Perform an authorized mini-assessment using synthetic targets",
      "Document results, limitations and remediation"
    ],
    "portfolio": [
      "Authorized host reconnaissance and exposure worksheet",
      "Risk explanation and remediation demonstration"
    ],
    "tracks": [
      "ceh",
      "tools",
      "comptia"
    ],
    "certs": [
      [
        "CompTIA Security+",
        "Foundation",
        "Broad baseline before choosing a specialization.",
        "https://www.comptia.org/certifications/security"
      ],
      [
        "EC-Council Certified Ethical Hacker (CEH)",
        "Role focus",
        "Theory and assessment methodology; verify current exam and practical options.",
        "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/"
      ],
      [
        "INE eJPT",
        "Practical next step",
        "Hands-on validation complements theory-based study.",
        "https://security.ine.com/certifications/ejpt-certification/"
      ]
    ],
    "qa": [
      [
        "What makes ethical hacking different from unauthorized intrusion?",
        "Explicit permission, bounded scope, minimization of harm and responsible disclosure and reporting."
      ],
      [
        "How would you explain the difference between a vulnerability and a risk?",
        "A vulnerability is a weakness; risk combines likelihood, exploitability, asset context and potential impact."
      ],
      [
        "What is the difference between passive and active reconnaissance?",
        "Passive work uses already available information; active work directly interacts with approved target systems."
      ],
      [
        "How do you evaluate a vulnerability scan result?",
        "Correlate it with asset context, check for false positives and validate impact only within authorized scope."
      ],
      [
        "Why record limitations?",
        "They tell the recipient what was not tested and prevent overstating the assessment’s assurance."
      ],
      [
        "How do you communicate remediation priorities?",
        "Use verified impact, business criticality, feasibility, exposure and an agreed owner and timeline."
      ]
    ]
  },
  {
    "id": "oscp-oriented-tester",
    "title": "OSCP-Oriented Penetration Tester",
    "stage": "Advanced practice · Exam-style methodology",
    "intro": "Follow a reporting-led, hands-on study plan inspired by the skills used in rigorous penetration testing examinations.",
    "focus": [
      "Linux/Windows enumeration and privilege boundaries",
      "Web and network attack-path reasoning",
      "Time management and structured notes",
      "Reproducible evidence and reporting"
    ],
    "sequence": [
      "Complete core penetration testing prerequisites",
      "Study the Academy OSCP-style curriculum",
      "Perform authorized multi-stage lab assessments",
      "Reproduce findings and write a timed, readable report"
    ],
    "portfolio": [
      "Timed synthetic assessment with complete attack-path diagram",
      "Professional report with remediation and retest evidence"
    ],
    "tracks": [
      "oscp",
      "network",
      "webapp"
    ],
    "certs": [
      [
        "INE eJPT",
        "Optional prerequisite",
        "Use if foundational penetration testing is not yet comfortable.",
        "https://security.ine.com/certifications/ejpt-certification/"
      ],
      [
        "TCM Security PNPT",
        "Practical milestone",
        "Alternative practical testing and reporting practice.",
        "https://certifications.tcm-sec.com/pnpt"
      ],
      [
        "OffSec OSCP / OSCP+",
        "Primary goal",
        "Review the current OffSec exam objectives, identity verification and reporting rules.",
        "https://www.offsec.com/courses/pen-200/"
      ]
    ],
    "qa": [
      [
        "How do you structure a timed security assessment?",
        "Confirm scope, maintain an asset checklist, record hypotheses, time-box investigations and reserve reporting/retest time."
      ],
      [
        "What is a privilege-escalation finding?",
        "A validated boundary failure that enables a permitted test identity to perform actions outside its intended privileges."
      ],
      [
        "How do you avoid losing track of an attack path?",
        "Capture timestamps, systems, credentials represented safely, preconditions and clear evidence for each transition."
      ],
      [
        "Why do failed hypotheses matter?",
        "They prevent repeated work and explain testing coverage and remaining uncertainty."
      ],
      [
        "How would you demonstrate lateral movement responsibly?",
        "Only inside isolated, explicitly authorized training targets with an approved limit on the systems and data touched."
      ],
      [
        "What makes a technical report independently repeatable?",
        "Clear environment assumptions, minimal reproducible observations, impact boundaries, sanitized evidence and retest steps."
      ]
    ]
  },
  {
    "id": "bug-bounty-hunter",
    "title": "Bug Bounty Hunter / Web Researcher",
    "stage": "Intermediate · In-scope web research",
    "intro": "Build disciplined web and API vulnerability research habits with disclosure rules and public-safe proof of concept.",
    "focus": [
      "Program rules and scope verification",
      "HTTP, sessions and browser security",
      "Authentication and authorization testing",
      "Responsible reporting, duplicates and remediation"
    ],
    "sequence": [
      "Learn HTTP, APIs and web auth fundamentals",
      "Read a real program policy before testing any target",
      "Reproduce a finding only on an authorized lab or allowed program",
      "Write a concise, non-destructive report with evidence"
    ],
    "portfolio": [
      "Synthetic broken object authorization report",
      "Web security test matrix and responsible disclosure template"
    ],
    "tracks": [
      "webapp",
      "api",
      "appsec"
    ],
    "certs": [
      [
        "PortSwigger Burp Suite Certified Practitioner",
        "Optional practical specialization",
        "Hands-on web security skill signal; there is no mandatory bug-bounty certificate.",
        "https://portswigger.net/web-security/certification"
      ],
      [
        "INE eJPT",
        "Optional baseline",
        "General network and web testing confidence.",
        "https://security.ine.com/certifications/ejpt-certification/"
      ],
      [
        "OffSec OSWA",
        "Optional web specialization",
        "Web application attack methodology; review current requirements.",
        "https://www.offsec.com/courses/web-200/"
      ]
    ],
    "qa": [
      [
        "What determines whether a target is in scope?",
        "The program’s current written policy, asset list, prohibited actions and data-handling requirements."
      ],
      [
        "Why can an IDOR be high impact?",
        "An authorization boundary can expose or alter another user's object even when the request is syntactically valid."
      ],
      [
        "How do you check for duplicates before a report?",
        "Review public program guidance and available issue information; report only your own confirmed observations."
      ],
      [
        "What evidence should a bug-bounty report contain?",
        "Affected endpoint, authorized test role, expected and observed behavior, minimal proof, impact and safe remediation advice."
      ],
      [
        "How do you handle sensitive data encountered unexpectedly?",
        "Stop, avoid collecting it, preserve only permitted metadata and report promptly through the approved channel."
      ],
      [
        "Why is a successful scanner result not proof of a finding?",
        "Automated signals lack authorization context and may be false positives; verification must be safe and scoped."
      ]
    ]
  },
  {
    "id": "devsecops-engineer",
    "title": "DevSecOps Engineer",
    "stage": "Intermediate · Secure delivery",
    "intro": "Integrate security controls into software delivery without breaking developer velocity or platform reliability.",
    "focus": [
      "Threat modeling and code review",
      "CI/CD permissions and secret handling",
      "Container and infrastructure-as-code assurance",
      "Supply chain, observability and release safety"
    ],
    "sequence": [
      "Understand Git, Linux, application deployment and CI/CD",
      "Map build identities, artifacts and deployment boundaries",
      "Add safe automated checks to a synthetic pipeline",
      "Document false positives, exception handling and a rollback"
    ],
    "portfolio": [
      "Secure CI pipeline with dependency and secret checks",
      "Infrastructure-as-code review plus a protected release checklist"
    ],
    "tracks": [
      "appsec",
      "cloud",
      "projects"
    ],
    "certs": [
      [
        "CompTIA Security+",
        "Foundation",
        "Security fundamentals for multidisciplinary engineers.",
        "https://www.comptia.org/certifications/security"
      ],
      [
        "ISC2 CSSLP",
        "Advanced software lifecycle",
        "Software security processes; verify experience requirements.",
        "https://www.isc2.org/Certifications/CSSLP"
      ],
      [
        "Certified Kubernetes Security Specialist (CKS)",
        "Kubernetes specialization",
        "Optional for container platform security roles.",
        "https://www.cncf.io/training/certification/cks/"
      ]
    ],
    "qa": [
      [
        "How do you prevent secrets entering a Git repository?",
        "Use secret scanning, protected credentials, least privilege, developer education and tested rotation procedures."
      ],
      [
        "What makes a useful CI security gate?",
        "Clear policy, actionable findings, severity context, predictable feedback and an auditable exception workflow."
      ],
      [
        "Why should a deployment role be short-lived?",
        "Short-lived, scoped credentials reduce the impact of leakage and eliminate unattended long-term secrets."
      ],
      [
        "How do you harden a container image?",
        "Start with a maintained minimal base, run as non-root, reduce packages, scan dependencies and verify runtime permissions."
      ],
      [
        "What do you do when a security check blocks an urgent release?",
        "Assess the actual risk and approval authority, use documented exceptions if justified, and preserve an owner and expiry."
      ],
      [
        "How would you test supply-chain integrity?",
        "Verify provenance, dependency pinning, build isolation, artifact signatures and deploy-time policy against a known fixture."
      ]
    ]
  },
  {
    "id": "soc-analyst-engineer",
    "title": "SOC Analyst / Detection Engineer",
    "stage": "Foundation to intermediate · Blue team",
    "intro": "Investigate alerts, interpret telemetry and produce defensible triage decisions and incident evidence.",
    "focus": [
      "Networks, endpoints and event log formats",
      "Detection triage and false-positive analysis",
      "Incident response and case documentation",
      "Detection tuning and ATT&CK-informed reasoning"
    ],
    "sequence": [
      "Learn networking, OS processes and logs",
      "Triage synthetic authentication or endpoint alerts",
      "Correlate signals into a timeline and assess severity",
      "Write a case summary with containment and follow-up actions"
    ],
    "portfolio": [
      "Synthetic phishing or suspicious login investigation",
      "Detection rule tuning note with precision/recall tradeoffs"
    ],
    "tracks": [
      "comptia",
      "cloud",
      "projects"
    ],
    "certs": [
      [
        "ISC2 Certified in Cybersecurity (CC)",
        "Foundation",
        "Entry-level foundational security terminology.",
        "https://www.isc2.org/Certifications/CC"
      ],
      [
        "CompTIA CySA+",
        "Role focus",
        "Threat detection, security operations and analysis concepts.",
        "https://www.comptia.org/certifications/cybersecurity-analyst"
      ],
      [
        "Microsoft Security Operations Analyst Associate (SC-200)",
        "Platform-specific",
        "Microsoft security operations tooling and workflow; check current exam status.",
        "https://learn.microsoft.com/en-us/credentials/certifications/security-operations-analyst/"
      ]
    ],
    "qa": [
      [
        "How do you triage a suspicious sign-in alert?",
        "Check identity, device, time, authentication result, prior context and follow-on activity before choosing severity."
      ],
      [
        "What is the difference between an alert and an incident?",
        "An alert is a detection signal; an incident is a confirmed or sufficiently evidenced security event requiring response."
      ],
      [
        "How do you reduce a noisy rule without hiding attacks?",
        "Sample true and false positives, inspect conditions, tune context thresholds and validate against known positive test cases."
      ],
      [
        "What evidence is essential for an incident timeline?",
        "Timestamp, timezone, source, event IDs, identity, affected asset and the analyst’s confidence and notes."
      ],
      [
        "How do you handle an uncertain high-impact alert?",
        "State uncertainty, preserve relevant evidence, apply the escalation process and avoid declaring compromise without support."
      ],
      [
        "What would you include in a SOC handoff?",
        "Scope, impact, chronology, verified indicators, mitigations taken, open hypotheses and the next owner."
      ]
    ]
  },
  {
    "id": "application-security-engineer",
    "title": "Application Security Engineer",
    "stage": "Intermediate · Product security",
    "intro": "Connect development practices, threat models and safe application assessments to design and release decisions.",
    "focus": [
      "Authentication and authorization design",
      "Secure code and dependency review",
      "Threat modeling and abuse-case analysis",
      "Security testing integration and remediation"
    ],
    "sequence": [
      "Learn HTTP, application architecture and Git workflows",
      "Model a real or synthetic feature’s trust boundaries",
      "Validate one safe authorization or input-handling test",
      "Propose fix, regression case and secure release guidance"
    ],
    "portfolio": [
      "Threat model with trust boundaries and prioritized abuse cases",
      "Authorization test plan with a remediated retest"
    ],
    "tracks": [
      "appsec",
      "webapp",
      "api"
    ],
    "certs": [
      [
        "PortSwigger Burp Suite Certified Practitioner",
        "Practical web focus",
        "Web testing skill demonstration for applicable roles.",
        "https://portswigger.net/web-security/certification"
      ],
      [
        "ISC2 CSSLP",
        "Advanced",
        "Secure software lifecycle governance and design; experience prerequisites apply.",
        "https://www.isc2.org/Certifications/CSSLP"
      ],
      [
        "CompTIA Security+",
        "Foundation",
        "Security baseline for developers transitioning into AppSec.",
        "https://www.comptia.org/certifications/security"
      ]
    ],
    "qa": [
      [
        "How do you threat-model a new feature?",
        "Identify assets and trust boundaries, data flow, abuse cases, controls and testable security requirements."
      ],
      [
        "What is the difference between authentication and authorization?",
        "Authentication establishes identity; authorization decides what that identity can access or modify."
      ],
      [
        "How would you design a negative test for BOLA?",
        "Use approved role fixtures and cross-user object IDs, verify denial and avoid live user records."
      ],
      [
        "How do you prioritize a risky dependency?",
        "Consider exploit conditions, reachability, asset criticality, available fixes and compensating controls."
      ],
      [
        "What is a practical secure code review deliverable?",
        "A concise observation, context, minimal reproduction, safe patch guidance and a regression test."
      ],
      [
        "How do you handle a security bug found near release?",
        "Assess exposure and impact with owners, document the decision, deploy a tested fix or a time-limited exception."
      ]
    ]
  },
  {
    "id": "api-security-tester",
    "title": "API Security Tester",
    "stage": "Intermediate · Identity and APIs",
    "intro": "Inspect API boundaries, schemas, permissions and abuse cases using realistic, non-destructive tests.",
    "focus": [
      "HTTP methods, tokens and schemas",
      "BOLA/BFLA and object ownership",
      "Rate limiting and input validation",
      "Evidence and backend remediation testing"
    ],
    "sequence": [
      "Understand HTTP and token-based authentication",
      "Inventory routes and permission matrix on a local API",
      "Validate expected-denial tests with synthetic users",
      "Document root cause and an automated regression test"
    ],
    "portfolio": [
      "API endpoint inventory and roles/actions matrix",
      "Synthetic BOLA finding with corrected authorization test"
    ],
    "tracks": [
      "api",
      "webapp",
      "appsec"
    ],
    "certs": [
      [
        "PortSwigger Burp Suite Certified Practitioner",
        "Related web practice",
        "A practical web-security credential; not an API-specific certification.",
        "https://portswigger.net/web-security/certification"
      ],
      [
        "INE eJPT",
        "Optional baseline",
        "Structured security testing foundations before API specialization.",
        "https://security.ine.com/certifications/ejpt-certification/"
      ],
      [
        "ISC2 CSSLP",
        "Advanced secure software focus",
        "Useful if moving toward API design and software lifecycle assurance.",
        "https://www.isc2.org/Certifications/CSSLP"
      ]
    ],
    "qa": [
      [
        "What is BOLA and why is it dangerous?",
        "Broken object-level authorization lets a requester access an object without the required ownership or permission check."
      ],
      [
        "How would you build an API permission matrix?",
        "List roles, actions, objects, owners and expected outcomes, then derive positive and negative tests."
      ],
      [
        "What is the difference between HTTP 401 and 403?",
        "401 means valid authentication is required; 403 means access is denied even when the server understands the caller."
      ],
      [
        "How would you test rate limits without disruption?",
        "Use a pre-approved synthetic environment and a small, controlled request sequence, not unbounded traffic."
      ],
      [
        "Why are schema validations insufficient for authorization?",
        "A request may be structurally valid while the identity has no permission to access the selected object."
      ],
      [
        "How do you communicate an API finding to engineers?",
        "Specify the endpoint and role fixture, expected denial, observed behavior, probable ownership failure and a regression test."
      ]
    ]
  }
];
export const findGhcCareerPath = (id)=>ghcCareerPathways.find(p=>p.id===id);
export const ghcCareerURL = (id)=>id==='cloud-security-engineer'?'/learning-hub/cloud-security-roadmap/':`/learning-hub/career-paths/${id}/`;
export const ghcCertURL = (id)=>`/learning-hub/certification-paths/${id}/`;
export const ghcInterviewURL = (id)=>`/learning-hub/interview-paths/${id}/`;
