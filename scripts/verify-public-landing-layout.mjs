import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
const read=path=>readFileSync(path,'utf8');
const built=route=>{
  const path=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(path),'Missing public page '+route);
  return read(path);
};

const splash=[
 ['/', 'src/content/docs/index.mdx'],
 ['/about-gohackerscloud/','src/content/docs/about-gohackerscloud/index.mdx'],
 ['/about-gohackerscloud/catalog/','src/content/docs/about-gohackerscloud/catalog.mdx'],
 ['/about-gohackerscloud/courses/','src/content/docs/about-gohackerscloud/courses.mdx'],
 ['/about-gohackerscloud/test-engine/','src/content/docs/about-gohackerscloud/test-engine.mdx'],
 ['/about-gohackerscloud/cybersecurity-services/','src/content/docs/about-gohackerscloud/cybersecurity-services.mdx'],
 ['/about-gohackerscloud/lab-directory/','src/content/docs/about-gohackerscloud/lab-directory.mdx'],
 ['/7-day-challenge/','src/content/docs/7-day-challenge.mdx'],
 ['/core-it-devops/','src/content/docs/core-it-devops/index.mdx'],
 ['/curriculum/','src/content/docs/curriculum/index.mdx'],
 ['/ghc-labs/','src/content/docs/ghc-labs/index.mdx'],
 ['/portfolio/','src/content/docs/portfolio/index.mdx'],
];
for(const [route,file] of splash){
  const mdx=read(file);
  assert.match(mdx,/^template:\s*splash\s*$/m,'Expected public landing page '+route);
  const html=built(route);
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,
    'Landing page should have exactly one title '+route);
  assert.ok(html.includes('name="description"'),'SEO description missing '+route);
}
const files=dir=>readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
  const file=join(dir,e.name);
  return e.isDirectory()?files(file):/\.mdx$/.test(e.name)?[file]:[];
});
assert.equal(files('src/content/docs').filter(file=>/^template:\s*splash\s*$/m.test(read(file))).length,
  splash.length,'Review new splash pages before changing widths');

// Every Explore sidebar destination must use the Academy-aligned canvas.
// 12 splash pages use html:not([data-has-sidebar]); the four learner
// guidance pages opt in with a marker without widening technical lessons.
const sidebarConfig=read('astro.config.mjs');
const exploreSidebar=sidebarConfig.split("label: 'Explore GoHackersCloud'")[1]
  ?.split("label: 'Foundation Learning Stages'")[0]||'';
const exploreRoutes=[...new Set([...exploreSidebar.matchAll(/link:\s*'(\/[^']*)'/g)].map(m=>m[1]))];
const markedExploreGuides=new Map([
  ['/start-here/','src/content/docs/start-here.mdx'],
  ['/paths/students/','src/content/docs/paths/students.mdx'],
  ['/paths/professionals/','src/content/docs/paths/professionals.mdx'],
  ['/study-plan/','src/content/docs/study-plan/index.mdx'],
]);
const splashRoutes=new Set(splash.map(([route])=>route));
assert.equal(exploreRoutes.length,16,'Explore navigation must cover exactly 16 routes');
for(const route of exploreRoutes){
  assert.ok(splashRoutes.has(route)||markedExploreGuides.has(route),
    'Missing Academy-width coverage for Explore page '+route);
  const html=built(route);
  if(markedExploreGuides.has(route)){
    const file=markedExploreGuides.get(route);
    assert.ok(read(file).includes('class="ghc-explore-width-marker"')||
      read(file).includes('ghc-explore-width-marker'),
      'Guide must explicitly opt in to wide landing canvas '+route);
    assert.ok(html.includes('ghc-explore-width-marker'),
      'Width marker must render on Explore guide '+route);
  }
}
assert.ok(!built('/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/')
  .includes('ghc-explore-width-marker'),
  'Original technical lessons must not inherit the Explore width marker');


const css=read('src/styles/landing-layout.css');
const config=read('astro.config.mjs');
assert.ok(config.includes("'./src/styles/landing-layout.css'"),'Missing Foundation layout CSS');
assert.ok(css.includes('body:has(.foundation-hero)'),'Flagship homepage selector must remain present');
assert.ok(css.includes('body:has(.ghc-about-lead)'),'Academy-style width must include About');
assert.ok(css.includes('--sl-content-width: 78rem'),
  'Public Foundation landing pages should share Academy's 78rem canvas');
assert.ok(!css.includes('max-width: min(100%, 60rem)'),
  'The prior 60rem hard cap must not restrict public landing pages');
assert.ok(css.includes('html:not([data-has-sidebar]) .content-panel > .sl-container') &&
  css.includes('body:has(.ghc-explore-width-marker) .content-panel > .sl-container'),
  'Wider Foundation canvas must remain scoped to splash pages and marked Explore guides');
assert.ok(css.includes('max-width: min(100%, 78rem)'),
  'Starlight public content container must match the Academy's 78rem width');
assert.ok(css.includes('.content-panel > .sl-container') && css.includes('margin-inline: auto'),
  'Wide Foundation landing content must remain centered');
assert.ok(!/\.content-panel \.sl-container,\s*body:has\(\.ghc-study-plan-marker\) \.content-panel \.sl-container\s*\{\s*min-width:\s*0;\s*max-width:\s*100%/.test(css),
  'Do not reintroduce a max-width:100% override on Starlight sl-container');
assert.ok(!css.includes('88rem'),'Reject the oversized PR #19 desktop layout');
assert.ok(css.includes('html:not([data-has-sidebar]) body'),
  'Every public splash page must use Academy width');
assert.ok(css.includes('body:has(.ghc-explore-width-marker)'),
  'Four Explore guidance pages must share Academy width without widening technical lessons');
assert.ok(css.includes('overscroll-behavior-x: contain'),
  'Wide public tables must scroll locally rather than overflow the viewport');
assert.ok(read('src/content/docs/study-plan/index.mdx').includes('ghc-study-plan-marker'),
  'Study Plan must retain its original styling marker');
assert.ok(css.includes('max-width: 70ch'),
  'Long paragraph lines must remain readable on wide hero pages');
assert.ok(css.includes('@media (max-width: 48rem)'),'Mobile layout fallback is required');

const compiledCss=readdirSync('dist/_astro',{recursive:true})
  .filter(f=>f.endsWith('.css')).map(f=>read(join('dist/_astro',f))).join('\n');
assert.ok(compiledCss.includes('78rem')&&compiledCss.includes('foundation-hero')&&
  compiledCss.includes('ghc-about-lead'),
  'Academy-style shared width must compile into the actual CSS assets');

const h1=html=>(html.match(/<h1(?:\s|>)/g)||[]).length;
const cards=(html,name)=>(html.match(new RegExp('class="[^"]*\\b'+name+'\\b[^"]*"','g'))||[]).length;
const home=built('/');
const homeSource=read('src/content/docs/index.mdx');
const homeCards=read('src/components/FoundationHomeCards.astro');
for(const marker of ['<FoundationHero />','<FoundationAudiencePaths />',
 '<FoundationModuleExplorer featured={true} />',
 '<FoundationHomeCards variant="evidence" />',
 '<FoundationHomeCards variant="pathways" />',
 '<FoundationHomeCards variant="portfolio" />',
 '<FoundationResourceHub />','<GoHackersCloudOfferings />']){
  assert.ok(homeSource.includes(marker),'Homepage section missing: '+marker);
}
assert.equal(cards(home,'ghc-home-exercise'),3,'Exactly three hands-on lesson cards');
assert.equal(cards(home,'ghc-home-path'),4,'Exactly four learning-plan cards');
assert.equal(cards(home,'ghc-home-portfolio-feature'),1,'Portfolio featured card missing');
assert.equal(cards(home,'ghc-home-portfolio-next'),1,'Portfolio quick-project links missing');
assert.equal(cards(home,'foundation-resource-card'),6,'Keep six balanced resource cards');
for(const route of [
 '/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/',
 '/foundation/gohackerscloud-foundation/02-networking-fundamentals/01-networking-basics/',
 '/foundation/gohackerscloud-foundation/08-cybersecurity-fundamentals/01-security-mindset/',
 '/core-it-devops/','/study-plan/','/paths/students/','/paths/professionals/',
 '/portfolio/','/portfolio/projects/system-architecture/','/portfolio/projects/cloud-iam-review/'
]){
  assert.ok(home.includes('href="'+route+'"'),'Missing free homepage destination '+route);
  built(route);
}
assert.ok(home.includes('data-module-count="4"')&&home.includes('data-module-count="2"'),
  'Preserve balanced 4 Core and 2 Cloud/Security module rows');
assert.ok(homeCards.includes('grid-template-columns:repeat(3,minmax(0,1fr))')&&
  homeCards.includes('@media(max-width:42rem)'),
  'Practical cards must stack at smaller viewport widths');
assert.ok(!/\b(?:fetch|sendBeacon|XMLHttpRequest)\s*\(/.test(homeCards),
  'Learning cards must be links without collecting learner information');

const about=built('/about-gohackerscloud/');
const aboutSource=read('src/content/docs/about-gohackerscloud/index.mdx');
const aboutCards=read('src/components/FoundationAboutCards.astro');
const lead=read('src/components/FoundationAboutLead.astro');
const aboutDiagram=read('src/components/FoundationAboutDiagram.astro');
const catalogHero=read('src/components/FoundationCatalogHero.astro');
assert.equal(h1(about),1);
assert.ok(aboutSource.includes('title: "About GoHackersCloud"'),
  'About needs concise Starlight page title');
assert.ok(aboutSource.includes('<FoundationAboutLead />'),
  'Keep the useful About overview and free first-step panel');
assert.ok(aboutSource.includes('<FoundationAboutCards variant="journey" />'),
  'About should explain the five learning stages with actionable cards');
assert.ok(aboutSource.includes('<FoundationAboutCards variant="websites" />'),
  'About should include navigable official site/resource cards');
assert.equal(cards(about,'ghc-method-card'),5,'Five learning-stage cards required');
assert.equal(cards(about,'ghc-site-card'),6,'Six official destination cards required');
assert.ok(aboutCards.includes('grid-template-columns:repeat(6,minmax(0,1fr))'),
  'Five steps must balance across a 3+2 desktop grid');
assert.ok(aboutCards.includes('@media(max-width:39rem)'),
  'About links and learning stages must stack on narrow screens');
assert.ok(lead.includes('@media(max-width:58rem)'),
  'Existing About introduction must stack below tablet widths');
assert.ok(lead.includes('grid-template-rows:2.1rem minmax(2.1rem,auto)'),
  'About numeric facts must align numbers and labels into common rows');
assert.ok(aboutDiagram.includes('grid-template-columns:minmax(0,1fr)') &&
  aboutDiagram.includes('grid-template-columns:repeat(2,minmax(0,1fr))'),
  'About ecosystem diagram must use available reading width and balance companion cards');
assert.ok(catalogHero.includes('grid-template-rows:2rem minmax(2.5rem,auto)'),
  'Catalog metric cards must align counts and labels');
assert.ok(css.includes('body:has(.ghc-about-lead) .sl-markdown-content > h2') &&
  css.includes('body:has(.ghc-catalog-hero) .sl-markdown-content > h2'),
  'Showcase heading spacing must remain scoped away from lessons');
assert.equal((about.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length,1,
  'Existing ecosystem Mermaid diagram must be retained');
for(const route of ['/start-here/','/7-day-challenge/','/portfolio/',
 '/about-gohackerscloud/catalog/','/about-gohackerscloud/courses/','/ghc-labs/']){
  assert.ok(about.includes('href="'+route+'"'),'About lost important route '+route);
}
assert.ok(about.includes('https://www.gohackerscloud.org/courses')&&
  about.includes('https://gohackerscloud.com/cybersecurity-services')&&
  about.includes('https://academy.gohackerscloud.com/'),
  'About must retain verified official course, services and Academy destinations');

for(const route of ['/curriculum/','/ghc-labs/','/7-day-challenge/','/portfolio/',
 '/about-gohackerscloud/catalog/']){
  assert.equal(h1(built(route)),1,'Keep Starlight H1 on '+route);
}
// PR 2: discovery panels must render on only the selected learning-product
// pages; preserve page headings, canonical links and noninteractive disclaimers.
const discovery=read('src/components/FoundationDiscoveryPanel.astro');
assert.ok(discovery.includes('@media(max-width:50rem)') &&
  discovery.includes('@media(max-width:38rem)'),
  'Discovery banners and resource cards must stack on tablet/mobile');
assert.ok(discovery.includes('grid-template-columns:repeat(3,minmax(0,1fr))'),
  'Discovery cards should form a balanced desktop row');
assert.ok(!['fetch(', 'sendBeacon(', 'XMLHttpRequest('].some(call => discovery.includes(call)),
  'Discovery navigation must not collect learner data');
for(const [route,variant,expectedLink] of [
  ['/about-gohackerscloud/courses/','courses','https://www.gohackerscloud.org/courses'],
  ['/about-gohackerscloud/test-engine/','tests','https://www.gohackerscloud.org/freetest'],
]){
  const html=built(route);
  const mdx=read('src/content/docs'+route.slice(0,-1)+'.mdx');
  assert.ok(mdx.includes('<FoundationDiscoveryPanel variant="'+variant+'" />'),
    'Expected contextual panel on '+route);
  assert.ok(html.includes('ghc-discovery--'+variant),
    'Discovery panel missing from built route '+route);
  const exactDiscoveryCards=[...html.matchAll(/<a\b[^>]*class="([^"]*)"/g)]
    .filter(([,classes])=>classes.split(/\s+/).includes('ghc-discovery-card'));
  assert.equal(exactDiscoveryCards.length,3,
    'Exactly three navigable resource cards expected on '+route);
  assert.ok(html.includes(expectedLink),
    'Canonical current resource destination missing on '+route);
  assert.equal(h1(html),1,'Discovery panel must not create another H1 on '+route);
}
assert.ok(!built('/').includes('ghc-discovery--tests') &&
  !built('/about-gohackerscloud/').includes('ghc-discovery--courses'),
  'Discovery banners must remain limited to their intended pages');

// P3: Validate contextual panels, exact nav cards, and 7 accessible
// directory anchors. Never confuse curriculum documents with live lab slots.
const p3Panel=read('src/components/FoundationExperiencePanel.astro');
const p3DirectoryNav=read('src/components/FoundationLabDirectoryNav.astro');
const p3TrackDirectory=read('src/components/GhcLabsTrackDirectory.astro');
const p3ModuleExplorer=read('src/components/FoundationModuleExplorer.astro');
const p3LabMdx=read('src/content/docs/ghc-labs/index.mdx');
const p3ServiceMdx=read('src/content/docs/about-gohackerscloud/cybersecurity-services.mdx');
const p3DirectoryMdx=read('src/content/docs/about-gohackerscloud/lab-directory.mdx');
const exactAnchors=(html,className)=>[...html.matchAll(/<a\b[^>]*class="([^"]*)"/g)]
  .filter(([,classList])=>classList.split(/\s+/).includes(className));
assert.ok(p3Panel.includes('@media(max-width:50rem)') &&
  p3Panel.includes('@media(max-width:38rem)'),
  'P3 panels and card navigation must stack responsively');
assert.ok(p3LabMdx.includes('<FoundationExperiencePanel variant="labs" />') &&
  p3ServiceMdx.includes('<FoundationExperiencePanel variant="services" />'),
  'Only targeted pages should include P3 contextual panels');
for(const [route,variant,cta] of [
  ['/ghc-labs/','labs','https://gohackerscloud.com/hands-on-cybersecurity-labs'],
  ['/about-gohackerscloud/cybersecurity-services/','services','https://gohackerscloud.com/contact-gohackerscloud'],
]){
  const html=built(route);
  assert.ok(html.includes('ghc-experience--'+variant) && html.includes(cta),
    'P3 discovery and correct official link missing from '+route);
  assert.equal(exactAnchors(html,'ghc-experience-card').length,3,
    'Exactly three navigable cards required on '+route);
  assert.equal(h1(html),1,'Panel must not create a duplicate title on '+route);
}
const p3LabHtml=built('/about-gohackerscloud/lab-directory/');
const labSectionIds=[
  'lab-section-ceh','lab-section-webapp','lab-section-api',
  'lab-section-network','lab-section-oscp','lab-section-aws','lab-section-projects'
];
assert.ok(p3DirectoryMdx.includes('<FoundationLabDirectoryNav />'),
  'Lab Directory category navigation component missing');
assert.equal(exactAnchors(p3LabHtml,'ghc-lab-index-link').length,7,
  'Expected seven Lab Directory category jump links');
for(const id of labSectionIds){
  assert.ok(p3DirectoryMdx.includes('id="'+id+'"') &&
    p3LabHtml.includes('id="'+id+'"') && p3LabHtml.includes('href="#'+id+'"'),
    'Lab Directory section link or anchor missing: '+id);
}
assert.ok(p3DirectoryNav.includes('90 dedicated curriculum documents') &&
  p3LabHtml.includes('not necessarily a unique hosted environment'),
  'Lab directory must distinguish documents from active environments');
assert.ok(p3TrackDirectory.includes('grid-template-columns:repeat(2,minmax(0,1fr))') &&
  p3ModuleExplorer.includes('grid-template-columns:repeat(2,minmax(0,1fr))'),
  'Track and module cards must use balanced two-column desktop grids');
assert.equal(exactAnchors(built('/ghc-labs/'),'ghc-labs-track-card').length,13,
  'All 13 Academy tracks must remain navigable');
assert.equal(exactAnchors(built('/curriculum/'),'foundation-module-card').length,16,
  'All 16 free Foundation modules must remain navigable');
assert.ok(!p3Panel.includes('fetch(') && !p3Panel.includes('sendBeacon('),
  'P3 panels must not collect learner information');

// P4: Guidance navigation belongs only on the four free learner-planning
// pages, with exactly three real links and no change to hosted lab access.
const nextSteps=read('src/components/FoundationGuidedNextSteps.astro');
assert.ok(nextSteps.includes('@media(max-width:48rem)'),
  'Guided next-step cards must stack on mobile devices');
assert.ok(!['fetch(', 'sendBeacon(', 'XMLHttpRequest('].some(call=>nextSteps.includes(call)),
  'Guided links must not collect or submit learner information');
for(const [route,file,variant] of [
  ['/start-here/','src/content/docs/start-here.mdx','start'],
  ['/paths/students/','src/content/docs/paths/students.mdx','student'],
  ['/paths/professionals/','src/content/docs/paths/professionals.mdx','professional'],
  ['/study-plan/','src/content/docs/study-plan/index.mdx','plan'],
]){
  const html=built(route);
  assert.ok(read(file).includes('<FoundationGuidedNextSteps variant="'+variant+'" />'),
    'Missing learner-guidance component in '+file);
  assert.ok(html.includes('ghc-guided-next'),
    'Missing learner-guidance navigation on '+route);
  const links=[...html.matchAll(/<a\b[^>]*class="([^"]*)"/g)]
    .filter(([,classList])=>classList.split(/\s+/).includes('ghc-guided-next-link'));
  assert.equal(links.length,3,
    'Expected exactly three learner-guidance cards on '+route);
  assert.equal(h1(html),1,'Do not add a second title on '+route);
}
assert.ok(!built('/').includes('ghc-guided-next') &&
  !built('/about-gohackerscloud/catalog/').includes('ghc-guided-next'),
  'Guidance navigation must not spread to promotional or home pages');
assert.ok(css.includes('--sl-content-width: 78rem'),
  'P4 navigation must preserve the Academy-aligned Foundation landing width');

const challenge=built('/7-day-challenge/');
assert.ok(challenge.includes('ghc-challenge-rail')&&
  challenge.includes('data-save-progress')&&challenge.includes('data-clear-progress'),
  'Previous challenge sidebar and privacy settings must remain intact');

console.log('Academy-style Foundation layout QA passed: 12 splash routes at 78rem plus Study Plan, '+ 
 '3 lesson + 4 pathway + 3 portfolio cards, 5 learning-stage + 6 site cards, '+ 
 'Mermaid and existing free lesson/challenge navigation.');
