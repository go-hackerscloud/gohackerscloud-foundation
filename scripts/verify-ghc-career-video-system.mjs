import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ghcCareerPathways,ghcCareerURL,ghcCertURL,ghcInterviewURL} from '../src/data/ghc-career-pathways.mjs';
import {ghcLabTracks} from '../src/data/ghc-labs-tracks.mjs';
import {demoVideos} from '../src/data/ghc-labs-demo.mjs';

const built=(route)=>{
 const file=join('dist',route.replace(/^\/+/,''),'index.html');
 assert.ok(existsSync(file),'Missing built GHC learner route: '+route);
 return readFileSync(file,'utf8');
};
const countClass=(html,cls)=>[...html.matchAll(/class="([^"]*)"/g)]
 .filter(([,v])=>v.split(/\s+/).includes(cls)).length;
const config=readFileSync('astro.config.mjs','utf8');

assert.equal(ghcCareerPathways.length,9,'Nine connected career profiles required');
assert.equal(new Set(ghcCareerPathways.map(p=>p.id)).size,9,'Role IDs must be unique');
assert.equal(demoVideos.length,5,'Exactly five video slots expected');
assert.equal(new Set(demoVideos.map(v=>v.id)).size,5,'Video slot IDs must be unique');
for(const section of ['career-paths','certification-paths','interview-paths']){
 const route='/learning-hub/'+section+'/';
 const html=built(route);
 assert.equal(countClass(html,'ghc-route-card'),9,'Directory must list nine career roles: '+route);
}
for(const p of ghcCareerPathways){
 assert.ok(p.id&&p.title&&p.stage&&p.intro,'Career metadata incomplete');
 assert.equal(p.focus.length,4,'Four skill themes required for '+p.id);
 assert.equal(p.sequence.length,4,'Four actionable stages required for '+p.id);
 assert.equal(p.portfolio.length,2,'Two portfolio exercises required for '+p.id);
 assert.ok(p.tracks.length>=1&&p.tracks.every(t=>ghcLabTracks.some(x=>x.id===t)),
  'Career maps to an unknown Academy track: '+p.id);
 assert.ok(p.certs.length>=2,'Each role needs multiple optional credential choices: '+p.id);
 for(const cert of p.certs){
  assert.equal(cert.length,4,'Certificate title, level, reason and provider URL required');
  assert.ok(/^https:\/\//.test(cert[3]),'Credential provider must have an HTTPS URL: '+p.id);
 }
 assert.equal(p.qa.length,6,'Each career interview must contain six original Q&As: '+p.id);
 assert.ok(p.qa.every(q=>q.length===2&&q[0].length>18&&q[1].length>45),
  'Interview question and model answer should be substantive: '+p.id);
 const career=built(ghcCareerURL(p.id));
 const cert=built(ghcCertURL(p.id));
 const interview=built(ghcInterviewURL(p.id));
 assert.ok(career.includes('data-career-id="'+p.id+'"')&&career.includes('data-career-mode="roadmap"'),
  'All nine career roadmaps must render the unified guide: '+p.id);
 assert.ok(cert.includes('data-career-id="'+p.id+'"')&&cert.includes('data-career-mode="certifications"'),
  'Missing routed certification mapping: '+p.id);
 assert.ok(interview.includes('data-career-id="'+p.id+'"')&&interview.includes('data-career-mode="interview"'),
  'Missing routed interview exercises: '+p.id);
 for(const t of p.tracks){
  assert.ok(cert.includes('https://academy.gohackerscloud.com/tracks/'+t+'/'),
   'Certification guide missing Academy track '+t+' for '+p.id);
 }
 assert.ok(interview.includes('Q01')&&interview.includes('Q06'),
  'Interview question list incomplete: '+p.id);
}
assert.equal(ghcCareerURL('cloud-security-engineer'),'/learning-hub/career-paths/cloud-security-engineer/',
 'Cloud career link must use the shared roadmap design rather than the old 14-chapter standalone page');
assert.ok(!config.includes("{label: 'AWS Cloud Practitioner · 14-chapter Guide',"),
 'Optional AWS CLF-C02 reference should no longer be a top-level Certification Guides item');
const demo=built('/ghc-labs/instructor-demo/');
assert.equal(countClass(demo,'ghc-video-card'),5,'GHC Labs public video gallery must show five cards');
assert.ok(!demo.includes('How to attach the real demo')&&!demo.includes('Do not paste a full YouTube URL'),
 'Student page must not expose internal video publishing instructions');
for(const [i,v] of demoVideos.entries()){
 assert.equal(v.id,'video-'+(i+1),'Video slots should have stable numbering');
 assert.ok(ghcCareerPathways.some(p=>p.id===v.roleId),'Invalid video-linked career pathway');
 assert.ok(ghcLabTracks.some(t=>t.id===v.trackId),'Invalid video-linked Academy track');
 assert.ok(demo.includes('id="'+v.id+'"')&&demo.includes('href="#'+v.id+'"'),
  'Public video slot must have a working anchor '+v.id);
 const valid=/^[A-Za-z0-9_-]{11}$/.test(v.videoId);
 assert.ok(!v.videoId||valid,'Use a real 11-character YouTube video ID only: '+v.id);
 if(valid)assert.ok(demo.includes('https://www.youtube-nocookie.com/embed/'+v.videoId),
  'Published video should use privacy-enhanced YouTube embedding: '+v.id);
}
assert.ok(config.includes('ghcCareerPathways.map(role=>')&&
 config.includes("ghcCareerURL(role.id)")&&config.includes("ghcCertURL(role.id)")&&
 config.includes("ghcInterviewURL(role.id)"),
 'Career, certifications and interview sidebar must share the same role mapping');
for(const route of ['/learning-hub/cloud-security-roadmap/','/learning-hub/aws-clf-c02/','/learning-hub/it-interview/']){
 assert.ok(built(route).includes('14 chapters')||built(route).includes('Chapter 14')||built(route).includes('Fourteen'),
  'The original detailed guide must remain available: '+route);
}
console.log('GHC career + video system QA passed: 9 consistently formatted career routes, 9 certification paths, 54 original interview Q&As, 5 truthful video slots, 13 canonical Academy tracks.');
