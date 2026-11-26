// Five planned GoHackersCloud recordings. Add each actual published YouTube
// 11-character ID only after publication and a privacy/scope review.
// Never invent video URLs, present an unpublished recording as available,
// or store keys, credentials, student identities or internal hostnames here.
export const demoVideos = [
  {
    id:'video-1',
    title:'Getting started with GHC Labs',
    description:'Navigate Academy tracks, understand permitted practice, read lesson goals and safely close a lab session.',
    roleId:'ethical-hacker',
    trackId:'ceh',
    videoId:'',
  },
  {
    id:'video-2',
    title:'Ethical hacking and OSCP-style lab workflow',
    description:'Walk through safe reconnaissance, environment boundaries, findings and reporting using synthetic targets.',
    roleId:'oscp-oriented-tester',
    trackId:'oscp',
    videoId:'',
  },
  {
    id:'video-3',
    title:'Web, API and bug bounty testing methodology',
    description:'Show test-role setup, authentication and authorization checks on intentionally vulnerable applications.',
    roleId:'bug-bounty-hunter',
    trackId:'webapp',
    videoId:'',
  },
  {
    id:'video-4',
    title:'AWS and cloud security lab tour',
    description:'Explain simulated AWS identity, access controls, logging and security review evidence.',
    roleId:'cloud-security-engineer',
    trackId:'aws',
    videoId:'',
  },
  {
    id:'video-5',
    title:'SOC triage and DevSecOps engineering practice',
    description:'Demonstrate synthetic alert triage, secure delivery checkpoints and documentation of remediation.',
    roleId:'soc-analyst-engineer',
    trackId:'projects',
    videoId:'',
  },
];
// Backward-compatible overview player: publish the first introductory demo
// to activate that player; the five-video library accepts independent IDs.
export const demoVideoId=demoVideos[0].videoId;
export const demoTitle=demoVideos[0].title;
