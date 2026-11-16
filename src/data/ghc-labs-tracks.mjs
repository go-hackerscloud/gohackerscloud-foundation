// Curated student-facing overview. Cross-checked against the Academy tracks
// source (gohackerscloud-academy/src/data/tracks.mjs) in Nov 2026.
// Review when Academy tracks change; not every track guarantees hosted labs.
export const ghcLabTracks = [
{id:'ceh',name:'CEH / Ethical Hacking',type:'hands-on',description:'Reconnaissance, enumeration, responsible assessment methodology and reporting.'},
{id:'webapp',name:'Web Application Security',type:'hands-on',description:'HTTP, authentication, access control and intentionally vulnerable web applications.'},
{id:'api',name:'API Security',type:'hands-on',description:'API discovery, authorization boundaries and evidence-based API review.'},
{id:'network',name:'Network Penetration Testing',type:'hands-on',description:'Host discovery, network services, protocol analysis and infrastructure controls.'},
{id:'oscp',name:'OSCP-Style Practice',type:'hands-on',description:'Progressive assessment methodology, target enumeration and professional reports.'},
{id:'aws',name:'AWS Security / AWS Goat',type:'hands-on',description:'Cloud identity, storage, telemetry and AWS-oriented practice scenarios.'},
{id:'appsec',name:'Application Security',type:'hands-on',description:'Secure development, application testing, threat modeling and DevSecOps.'},
{id:'cloud',name:'GHC Cloud Security',type:'hands-on',description:'Cloud security engineering, architecture and practical defensive workflows.'},
{id:'tools',name:'Ethical Hacking Tools',type:'learning',description:'Learn the purpose and safe use of common technical assessment tools.'},
{id:'comptia',name:'CompTIA Practical',type:'hands-on',description:'Certification-aligned systems, network and cybersecurity fundamentals.'},
{id:'careers',name:'Career & Professional Paths',type:'learning',description:'Early-career guidance, specialist pathways, evidence and workplace habits.'},
{id:'projects',name:'Projects & Capstones',type:'challenge',description:'Combine skills through scoped projects, written findings and reflection.'},
{id:'hackathon',name:'90-Day Hackathon',type:'challenge',description:'A progressive challenge sequence reusing learning and lab resources.'},
];
export const ghcTrackURL = (id) => `https://academy.gohackerscloud.com/tracks/${id}/`;
