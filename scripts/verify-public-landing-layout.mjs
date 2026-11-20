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

const css=read('src/styles/landing-layout.css');
const config=read('astro.config.mjs');
assert.ok(config.includes("'./src/styles/landing-layout.css'"),'Missing Foundation layout CSS');
assert.ok(css.includes('body:has(.foundation-hero)'),'Flagship homepage selector must remain present');
assert.ok(css.includes('body:has(.ghc-about-lead)'),'Academy-style width must include About');
assert.ok(css.includes('--sl-content-width: 60rem'),
  'Public Foundation pages should use the reduced 60rem canvas');
assert.ok(css.includes('max-width: min(100%, 60rem)'),
  'Actual Starlight content container must be capped at 60rem, not just a CSS variable');
assert.ok(css.includes('.content-panel > .sl-container') && css.includes('margin-inline: auto'),
  'Reduced Foundation content must be centered in the actual content panel');
assert.ok(!/\.content-panel \.sl-container,\s*body:has\(\.ghc-study-plan-marker\) \.content-panel \.sl-container\s*\{\s*min-width:\s*0;\s*max-width:\s*100%/.test(css),
  'Do not reintroduce a max-width:100% override on Starlight sl-container');
assert.ok(!css.includes('88rem'),'Reject the oversized PR #19 desktop layout');
assert.ok(css.includes('html:not([data-has-sidebar]) body'),
  'Every public splash page must use Academy width');
assert.ok(css.includes('body:has(.ghc-study-plan-marker)'),
  'Study Plan must share the Academy width without changing other lessons');
assert.ok(css.includes('overscroll-behavior-x: contain'),
  'Wide public tables must scroll locally rather than overflow the viewport');
assert.ok(read('src/content/docs/study-plan/index.mdx').includes('ghc-study-plan-marker'),
  'Study Plan style marker must be present');
assert.ok(css.includes('max-width: 70ch'),
  'Long paragraph lines must remain readable on wide hero pages');
assert.ok(css.includes('@media (max-width: 48rem)'),'Mobile layout fallback is required');

const compiledCss=readdirSync('dist/_astro',{recursive:true})
  .filter(f=>f.endsWith('.css')).map(f=>read(join('dist/_astro',f))).join('\n');
assert.ok(compiledCss.includes('60rem')&&compiledCss.includes('foundation-hero')&&
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
const challenge=built('/7-day-challenge/');
assert.ok(challenge.includes('ghc-challenge-rail')&&
  challenge.includes('data-save-progress')&&challenge.includes('data-clear-progress'),
  'Previous challenge sidebar and privacy settings must remain intact');

console.log('Academy-style Foundation layout QA passed: 12 splash routes at 60rem plus Study Plan, '+ 
 '3 lesson + 4 pathway + 3 portfolio cards, 5 learning-stage + 6 site cards, '+ 
 'Mermaid and existing free lesson/challenge navigation.');
