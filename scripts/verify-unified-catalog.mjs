import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ghcLabTracks} from '../src/data/ghc-labs-tracks.mjs';

const source=p=>readFileSync(p,'utf8');
const page=route=>{
  const p=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(p),'Missing built promotional page: '+route);
  return source(p);
};
const catalogRoute='/about-gohackerscloud/catalog/';
const labRoute='/about-gohackerscloud/lab-directory/';
const catalogSource=source('src/content/docs/about-gohackerscloud/catalog.mdx');
const labSource=source('src/content/docs/about-gohackerscloud/lab-directory.mdx');
const catalog=page(catalogRoute);
const labPage=page(labRoute);
const home=page('/');
const about=page('/about-gohackerscloud/');
const courses=page('/about-gohackerscloud/courses/');
const labs=page('/ghc-labs/');

assert.ok(catalog.includes('GoHackersCloud'),'Catalog branded heading missing');
assert.ok(catalogSource.split(/\s+/).length>1500,'Promotional catalog too short');
assert.ok(labSource.split(/\s+/).length>1000,'Lab inventory too short');
const mermaidCount=html=>(html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
assert.equal(mermaidCount(catalog),4,'Expected four professional catalog Mermaid diagrams');
assert.equal(mermaidCount(labPage),2,'Expected two lab learning-path diagrams');
assert.ok(catalog.includes('https://gohackerscloud.com/ghc-offers'));
assert.ok(catalog.includes('https://www.gohackerscloud.org/courses'));
assert.ok(catalog.includes('https://www.gohackerscloud.org/freetest'));
assert.ok(catalog.includes('https://gohackerscloud.com/cybersecurity-services'));
assert.ok(catalog.includes('https://gohackerscloud.com/hands-on-cybersecurity-labs'));
assert.ok(catalog.includes('https://gohackerscloud.com/contact-gohackerscloud'));

const bundles=[
  'https://gohackerscloud.com/ghc-comptia-certification-preparation-bundle',
  'https://gohackerscloud.com/cloud-security-courses-bundle-aws-google-ccsp',
  'https://gohackerscloud.com/aws-training-aws-certification-preparation',
  'https://gohackerscloud.com/ai-course-bundle-prompt-engineering-course-ai-for-cybersecurity',
  'https://gohackerscloud.com/google-cloud-course-bundle'
];
for(const url of bundles)assert.ok(catalog.includes(url),'Missing previously published bundle destination: '+url);
for(const title of [
 'AWS Cloud Practitioner','AWS Solutions Architect Associate','AWS Developer','AWS SysOps',
 'AWS DevOps','AWS Security Specialty','AWS Solutions Architect Professional',
 'AWS Data Engineer','AWS Machine Learning'
])assert.ok(catalog.includes(title),'Missing AWS Bundle topic: '+title);
assert.ok(catalog.includes('905776'),'Previously shared AWS Classplus listing missing');
assert.ok(catalog.includes('905780'),'Previously shared ISC2 Classplus listing missing');
for(const url of [
 'https://www.youtube.com/watch?v=Hibo0zLnKDM',
 'https://www.youtube.com/watch?v=iT3ml297v4w'
])assert.ok(catalog.includes(url),'Previously shared promotional video link missing: '+url);
assert.ok(catalog.includes('public watch-page access was not independently confirmed'),
  'Unverified video playback must be disclosed');
assert.ok(!/₹\s?\d|\$\s?\d+\/month|US\$\s?\d+/i.test(catalogSource),
  'Catalog must not hard-code stale prices');

assert.equal(ghcLabTracks.length,13,'Academy track count changed');
for(const tr of ghcLabTracks){
  const url='https://academy.gohackerscloud.com/tracks/'+tr.id+'/';
  assert.ok(catalog.includes(url),'Missing Academy track link '+url);
}
for(const name of [
 'GRC & Compliance','Vulnerability Management','Cloud Security','SOC & Managed Security',
 'Application Security','Identity & PAM','Incident Response','vCISO & Leadership'
])assert.ok(catalogSource.includes(name),'Service module missing: '+name);
const items=(labSource.match(/^- \*\*[^*\n]+?\*\*/gm)||[]).length;
assert.equal(items,90,'Expected 90 dedicated GHC Labs curriculum titles');
assert.ok(labSource.includes('**398**'),'Extended lab-related documents count missing');
assert.ok(labSource.includes('**488**'),'Total lab-related documents count missing');
assert.ok(labSource.includes('NOT')||labSource.includes('not a real-time count')||
  labSource.includes('not necessarily a unique hosted environment'),
  'Document versus hosted lab availability disclaimer missing');
assert.ok(catalog.includes(labRoute),'Catalog should link to lab inventory');
assert.ok(labs.includes(labRoute),'Existing GHC Labs overview should link inventory');
assert.ok(home.includes('ghc-catalog-feature'),'Homepage promotional catalog feature missing');
assert.ok(home.includes(catalogRoute),'Homepage missing catalog route');
assert.ok(about.includes(catalogRoute),'About page missing catalog route');
assert.ok(courses.includes(catalogRoute),'Courses page missing catalog route');

const config=source('astro.config.mjs');
const nav=config.slice(config.indexOf("label: 'Explore GoHackersCloud'"),config.indexOf("label: 'Foundation Learning Stages'"));
for(const route of [catalogRoute,labRoute])assert.ok(nav.includes("link: '"+route+"'"),'Missing sidebar catalog route: '+route);
const aboutIndex=nav.indexOf("link: '/about-gohackerscloud/'");
const catalogIndex=nav.indexOf("link: '"+catalogRoute+"'");
const coursesIndex=nav.indexOf("link: '/about-gohackerscloud/courses/'");
assert.ok(aboutIndex<catalogIndex&&catalogIndex<coursesIndex,'Catalog nav position incorrect');
assert.ok(nav.indexOf("link: '"+labRoute+"'")<nav.indexOf("link: '/start-here/'"),'Lab directory should precede free Start Here');

for(const [name,markdown] of [['catalog',catalogSource],['lab directory',labSource]]){
  for(const match of markdown.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)){
    const route=match[1];page(route);
  }
}
console.log('Unified promo catalog QA passed: 2 new routes, 6 diagrams, 9 AWS topics, 5 bundle landing URLs, 13 tracks, 90 lab titles, 8 service modules and 2 prior video links.');
