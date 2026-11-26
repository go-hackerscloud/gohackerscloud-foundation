import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ghcExploreGroups,ghcExploreRoutes} from '../src/data/ghc-explore-navigation.mjs';

const read=path=>readFileSync(path,'utf8');
const html=route=>{
  const file=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(file),'Missing public Explore destination '+route);
  return read(file);
};
const countClass=(markup,name)=>[...markup.matchAll(/class="([^"]*)"/g)]
  .filter(([,value])=>value.split(/\s+/).includes(name)).length;
const groups=ghcExploreGroups;
const original=new Set([
  '/','/about-gohackerscloud/','/about-gohackerscloud/catalog/',
  '/about-gohackerscloud/courses/','/about-gohackerscloud/test-engine/',
  '/about-gohackerscloud/cybersecurity-services/',
  '/ghc-labs/','/about-gohackerscloud/lab-directory/',
  '/start-here/','/7-day-challenge/','/portfolio/',
  '/paths/students/','/paths/professionals/','/curriculum/',
  '/core-it-devops/','/study-plan/',
]);
assert.equal(groups.length,4,'Explore needs four coherent user-facing categories');
assert.equal(ghcExploreRoutes.length,16,'Sixteen original Explore destinations must remain');
assert.equal(new Set(ghcExploreRoutes).size,16,'No duplicated Explore destinations');
assert.deepEqual(new Set(ghcExploreRoutes),original,
 'No original Explore page may be removed, renamed or silently relocated');
const config=read('astro.config.mjs');
const sidebar=config.split("label: 'Explore GoHackersCloud'")[1]
  ?.split("label: 'Foundation Learning Stages'")[0]||'';
assert.ok(sidebar.includes("link: '/explore/'")&&
 sidebar.includes("link: '/'")&&
 sidebar.includes("ghcExploreGroups.map(group=>")&&
 sidebar.includes("group.links.map(link=>"),
 'Explore sidebar must use the four shared route groups and overview');
assert.ok(!sidebar.includes('autogenerate'),
 'Explore sidebar must not expose another huge lesson tree');
const hub=html('/explore/');
assert.equal((hub.match(/<h1(?:\s|>)/g)||[]).length,1);
assert.equal(countClass(hub,'ghc-explore-hub-card'),4,
 'Four group cards should render on the overview page');
assert.ok(hub.includes('data-has-sidebar')&&
 hub.includes('ghc-explore-hub-marker'),
 'Explore overview should keep the sidebar and its scoped wide layout');
for(const group of groups){
 assert.ok(group.links.length>=3,'Group must contain meaningful destinations: '+group.id);
 assert.ok(hub.includes('id="explore-'+group.id+'"'),
  'Missing Explore group section: '+group.id);
 for(const link of group.links){
  assert.ok(hub.includes('href="'+link.href+'"'),
   'Hub must offer a real route for '+link.label);
  html(link.href);
 }
}
const splashDetailRoutes=[
 '/about-gohackerscloud/','/about-gohackerscloud/catalog/',
 '/about-gohackerscloud/courses/','/about-gohackerscloud/test-engine/',
 '/about-gohackerscloud/cybersecurity-services/',
 '/about-gohackerscloud/lab-directory/',
];
for(const route of splashDetailRoutes){
 const document=html(route);
 assert.equal(countClass(document,'ghc-explore-return'),1,
  'Splash layout without sidebar needs a single clear Explore return path: '+route);
 assert.ok(document.includes('href="/explore/"')&&document.includes('href="/"'),
  'Splash page must offer Overview and Foundation Home return links: '+route);
}

const freeFoundationStudyRoutes=[
 '/start-here/','/curriculum/','/core-it-devops/','/7-day-challenge/','/study-plan/',
];
for(const route of freeFoundationStudyRoutes){
  const document=html(route);
  assert.ok(document.includes('data-has-sidebar'),
    'Every free Foundation study page must keep the Starlight navigation menu: '+route);
  assert.equal(countClass(document,'ghc-study-navigation'),1,
    'Every free Foundation study page must have one common study navigation: '+route);
  assert.ok(document.includes('href="/explore/"'),
    'Free Foundation study page must offer its Explore Overview return link: '+route);
}
const hubSource=read('src/components/FoundationExploreHub.astro');
assert.ok(hubSource.includes('grid-template-columns:repeat(2,minmax(0,1fr))')&&
 hubSource.includes('@media(max-width:48rem)'),
 'Explore cards must be balanced on desktop and stack on mobile');
assert.ok(!/\b(?:fetch|sendBeacon|XMLHttpRequest)\s*\(/.test(hubSource),
 'Explore links should not collect student data');
assert.ok(html('/curriculum/').includes('id="lesson-directory"')&&
 html('/portfolio/').includes('ghc-portfolio-hub-marker'),
 'Foundation lessons and portfolio hubs must stay intact');
console.log('Explore navigation QA passed: four grouped categories, all 16 original routes, a sidebar-aware overview, six splash-page return links and five unified study pages.');
