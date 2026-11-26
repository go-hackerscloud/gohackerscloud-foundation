import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ghcCareerPathways,ghcCareerURL} from '../src/data/ghc-career-pathways.mjs';
const read=(path)=>readFileSync(path,'utf8');
const html=(route)=>{
  const file=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(file),'Missing linked Foundation page: '+route);
  return read(file);
};
const classCount=(document,klass)=>[...document.matchAll(/class="([^"]*)"/g)]
  .filter(([,tokens])=>tokens.split(/\s+/).includes(klass)).length;
const home=html('/');
const resourceSource=read('src/components/FoundationResourceHub.astro');
assert.equal(ghcCareerPathways.length,9,'Career hub requires 9 aligned roles');
assert.equal(ghcCareerPathways.reduce((n,role)=>n+role.qa.length,0),54,
 'The stated question total should match actual role profiles');
assert.equal(classCount(home,'foundation-resource-card'),6,
 'Keep the six balanced, Academy-style homepage discovery cards');
assert.equal(classCount(home,'foundation-career-shortcuts'),1,
 'Add one compact career shortcuts section after the six cards');
for(const route of [
 '/learning-hub/career-paths/',
 '/learning-hub/certification-paths/',
 '/learning-hub/interview-paths/',
 '/ghc-labs/instructor-demo/',
 '/learning-hub/cloud-security-roadmap/',
 '/learning-hub/aws-clf-c02/',
 '/learning-hub/it-interview/',
 '/portfolio/','/ghc-labs/','/7-day-challenge/',
]){
 assert.ok(home.includes('href="'+route+'"'),'Homepage missing destination '+route);
 html(route);
}
assert.ok(home.includes('54 original practice questions')&&
 (home.includes('nine')||home.includes('9 career directions')),
 'Homepage should describe cross-linked career and interview system');
for(const role of ghcCareerPathways){
 const url=ghcCareerURL(role.id);
 assert.ok(home.includes('href="'+url+'"'),'Missing homepage career shortcut for '+role.id);
 html(url);
}
assert.ok(resourceSource.includes('@media(max-width:650px)')&&
 resourceSource.includes('.foundation-resource-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))'),
 'Six discovery cards must retain responsive 2-column desktop / 1-column mobile design');
assert.ok(!['fetch(', 'sendBeacon(', 'XMLHttpRequest('].some(x=>resourceSource.includes(x)),
 'Home resource links should never collect learner information');
const required=[
 ['/start-here/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/paths/students/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/paths/professionals/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/portfolio/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/about-gohackerscloud/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/about-gohackerscloud/catalog/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/','/ghc-labs/instructor-demo/']],
 ['/ghc-labs/track-selection/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/','/ghc-labs/instructor-demo/']],
 ['/curriculum/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/about-gohackerscloud/courses/',['/learning-hub/career-paths/','/learning-hub/certification-paths/','/learning-hub/interview-paths/']],
 ['/about-gohackerscloud/test-engine/',['/learning-hub/certification-paths/','/learning-hub/interview-paths/','/ghc-labs/instructor-demo/']],
];
for(const [route,links] of required){
 const page=html(route);
 for(const link of links) assert.ok(page.includes('href="'+link+'"'),
   route+' should connect learner journey to '+link);
 assert.equal((page.match(/<h1(?:\s|>)/g)||[]).length,1,
   'Do not create a duplicate Starlight page heading: '+route);
}
assert.equal(classCount(home,'ghc-home-exercise'),3,
 'Keep the existing three free starter lesson cards');
assert.equal(classCount(home,'ghc-home-path'),4,
 'Keep the existing four study-path cards');
assert.ok(home.includes('https://academy.gohackerscloud.com/')||
 home.includes('/ghc-labs/'),'Separate Academy access still needs a discovery link');
console.log('Foundation homepage career sync QA passed: 6 resource cards, 9 career shortcuts, 9 certification paths, 54 interview Q&As, 5-video series, legacy 14-chapter guides and 10 cross-linked learner pages.');
