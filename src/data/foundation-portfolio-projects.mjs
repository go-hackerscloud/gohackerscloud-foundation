// Canonical metadata for the six existing, free, synthetic portfolio projects.
// Projects are independent self-study activities; they are not hosted lab
// instances or instructor-verified assessments.
export const foundationPortfolioGroups = [
  {id:'it',title:'IT and networking fundamentals',description:'Start with systems thinking and troubleshooting.'},
  {id:'security',title:'Cloud and application security',description:'Practise safe access reviews and detection analysis.'},
  {id:'delivery',title:'Secure engineering and delivery',description:'Document software changes and release safeguards.'},
];
export const foundationPortfolioProjects = [
  {id:'system-architecture',number:'01',title:'System Architecture & IT Inventory',shortTitle:'System Architecture',group:'it',level:'Beginner',effort:'45–60 minutes',description:'Map a fictional service and its dependencies; explain a safe investigation plan.',deliverable:'Architecture diagram and inventory worksheet',career:'/learning-hub/career-paths/cloud-security-engineer/'},
  {id:'network-troubleshooting',number:'02',title:'Network & Web Troubleshooting',shortTitle:'Network Troubleshooting',group:'it',level:'Beginner–Intermediate',effort:'45–75 minutes',description:'Distinguish DNS, TLS, transport and application faults using synthetic evidence.',deliverable:'Fault-isolation report and escalation note',career:'/learning-hub/career-paths/penetration-tester/'},
  {id:'cloud-iam-review',number:'03',title:'Cloud IAM Least Privilege',shortTitle:'Cloud IAM Review',group:'security',level:'Intermediate',effort:'60–90 minutes',description:'Review an example cloud permission policy and propose expected-allow/deny cases.',deliverable:'Access matrix and risk-based remediation',career:'/learning-hub/career-paths/cloud-security-engineer/'},
  {id:'api-authorization',number:'04',title:'API Object Authorization',shortTitle:'API Authorization',group:'security',level:'Intermediate',effort:'60–90 minutes',description:'Create an actor–object permission matrix and negative tests on synthetic cases.',deliverable:'API authorization test plan',career:'/learning-hub/career-paths/api-security-tester/'},
  {id:'soc-alert-triage',number:'05',title:'SOC Alert Triage',shortTitle:'SOC Alert Triage',group:'security',level:'Intermediate',effort:'45–75 minutes',description:'Interpret a fictional login-alert timeline and record evidence and uncertainty.',deliverable:'Incident triage and evidence review',career:'/learning-hub/career-paths/soc-analyst-engineer/'},
  {id:'git-devsecops-review',number:'06',title:'Git & DevSecOps Review',shortTitle:'Git & DevSecOps Review',group:'delivery',level:'Beginner–Intermediate',effort:'45–75 minutes',description:'Review a harmless code change for scope, tests, secrets and rollback readiness.',deliverable:'Secure change-review and rollback plan',career:'/learning-hub/career-paths/devsecops-engineer/'},
];
export const foundationPortfolioURL = id=>`/portfolio/projects/${id}/`;
