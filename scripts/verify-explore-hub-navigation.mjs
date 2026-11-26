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
// All seven Courses/Labs and About/Services pages now keep their sidebars.
// The section navigator is generated from the canonical Explore route map.
const sections=[
 {id:'academy',routes:ghcExploreGroups.find(g=>g.id==='academy').links.map(g=>g.href)},
 {id:'company',routes:ghcExploreGroups.find(g=>g.id==='company').links.map(g=>g.href)},
];
const sectionSource=read('src/components/FoundationExploreSectionNavigation.astro');
assert.ok(sectionSource.includes("ghcExploreGroups.find(g=>g.id===section)") &&
  sectionSource.includes("'academy','company','careers'") &&
  sectionSource.includes('aria-current=') &&
  sectionSource.includes('@media(max-width:44rem)'),
  'Courses/Labs, Company/Services and Career/Portfolio navigation must share canonical links and mobile layout');
for(const section of sections){
 for(const route of section.routes){
  const page=html(route);
  assert.ok(page.includes('data-has-sidebar') && page.includes('ghc-explore-width-marker'),
   'The sidebar and wide Explore canvas must stay visible for '+route);
  assert.equal(countClass(page,'ghc-section-navigation'),1,
   'Exactly one shared '+section.id+' navigation is required on '+route);
  assert.ok(page.includes('aria-current="page"'),
   'The current section page must be highlighted: '+route);
  for(const sibling of section.routes){
   assert.ok(page.includes('href="'+sibling+'"'),
    'Section '+section.id+' must link '+route+' to '+sibling);
  }
  assert.ok(page.includes('href="/explore/"') && page.includes('href="/"'),
   'Every section page must offer Explore/Home return links: '+route);
 }
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

const journeyComponent=read('src/components/FoundationJourneyNavigation.astro');
assert.ok(journeyComponent.includes("label:'Explore Overview'") &&
  journeyComponent.includes('aria-current=') &&
  journeyComponent.includes('@media(max-width:40rem)'),
  'Homepage/Overview navigation must support active state and stack on phones');
for(const route of ['/','/explore/']){
 const document=html(route);
 assert.ok(document.includes('data-has-sidebar'),
   'Both entry pages must preserve the visible Explore navigation sidebar: '+route);
 assert.equal(countClass(document,'ghc-journey-navigation'),1,
   'Both entry pages must have exactly one matching overview/home navigation: '+route);
 for(const sibling of ['/','/explore/'])
   assert.ok(document.includes('href="'+sibling+'"'),
    'Entry page must link directly to '+sibling+' from '+route);
 assert.ok(document.includes('aria-current="page"'),
   'Entry page must clearly identify its current section: '+route);
}
const careerPages=[
 ['/paths/students/','src/content/docs/paths/students.mdx'],
 ['/paths/professionals/','src/content/docs/paths/professionals.mdx'],
 ['/portfolio/','src/content/docs/portfolio/index.mdx'],
];
const careers=ghcExploreGroups.find(group=>group.id==='careers');
assert.equal(careers?.links.length,3,'Career & Portfolio group must have three routes');
for(const [route,sourcePath] of careerPages){
 const page=html(route);
 const mdx=read(sourcePath);
 assert.ok(!/^template:\\s*splash\\s*$/m.test(mdx) &&
   page.includes('data-has-sidebar') && mdx.includes('ghc-explore-width-marker'),
   'Career page must retain the sidebar and Explore content canvas: '+route);
 assert.ok(mdx.includes('<FoundationExploreSectionNavigation section="careers" current="'+route+'" />'),
   'Career page must mount the exact shared section navigation: '+route);
 assert.equal(countClass(page,'ghc-section-navigation'),1,
   'Each Career page needs the same navigation component as Courses/Labs and Company/Services: '+route);
 assert.equal(countClass(page,'ghc-journey-navigation'),0,
   'Career page must not render the retired parallel navigation component: '+route);
 assert.ok(page.includes('aria-current="page"'),
   'Career page should highlight its current location: '+route);
 for(const link of careers.links){
   assert.ok(page.includes('href="'+link.href+'"'),
     'Career and Portfolio page must link to sibling '+link.href+' from '+route);
 }
 assert.ok(page.includes('href="/explore/"')&&page.includes('href="/"'),
   'Each Career page must provide Overview and Foundation Home return routes: '+route);
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
console.log('Explore navigation QA passed: four grouped categories, all 16 original routes, two synchronized entry pages, ten section-synchronized product/company/career pages and five unified study pages.');
