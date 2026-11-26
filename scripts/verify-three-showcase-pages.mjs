import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const source=path=>readFileSync(path,'utf8');
const built=route=>{
 const file=join('dist',route.replace(/^\/+/,''),'index.html');
 assert.ok(existsSync(file),'Missing published route '+route);
 return source(file);
};
// Match exact whitespace-delimited class tokens, not class name prefixes:
 // "ghc-section-intro" must not also count "ghc-section-intro-main".
const countClass=(html,klass)=>
 [...html.matchAll(/class="([^"]*)"/g)].filter(([,value])=>
  value.split(/\s+/).includes(klass)).length;
const countMermaid=html=>
 (html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
const h1=html=>(html.match(/<h1(?:\s|>)/g)||[]).length;

const css=source('src/styles/landing-layout.css');
const academyStyle=[
 'body:has(.foundation-hero)',
 'body:has(.ghc-about-lead)',
 'body:has(.ghc-catalog-hero)',
 '--sl-content-width: 78rem',
 '--sl-color-accent: #1381a8',
 '--sl-color-accent: #66dbf2',
];
for(const marker of academyStyle)
 assert.ok(css.includes(marker),'Showcase pages must retain existing brand tokens: '+marker);
assert.ok(!css.includes('max-width: min(100%, 60rem)'),
 'The old 60rem cap must not reduce the wider Foundation landing canvas');
assert.ok(!css.includes('88rem'),'Do not introduce an oversized desktop width');
assert.ok(css.includes('html:not([data-has-sidebar]) body') &&
 css.includes('body:has(.ghc-study-plan-marker)'),
 'Public splash pages and Study Plan must share Academy width');
assert.ok(!css.includes('html[data-has-sidebar] body {') &&
 !css.includes('body:has(.ghc-lesson-context) {'),
 'Standard technical lesson pages must not inherit Academy landing width');
assert.ok(css.includes('overscroll-behavior-x: contain'),
 'Wide tables must scroll within their page instead of causing horizontal overflow');
assert.ok(css.includes('body:has(.ghc-catalog-hero) .sl-markdown-content > table'),
 'Catalog tables need usable width');
assert.ok(css.includes('.ghc-catalog-anchor'),'Stable catalog anchors need offset for sticky header');

const homeSource=source('src/content/docs/index.mdx');
const intro=source('src/components/FoundationSectionIntro.astro');
const home=built('/');
assert.equal(h1(home),1);
assert.ok(home.includes('foundation-hero'),'Preserve original learner-first homepage hero');
assert.ok(home.includes('foundation-paths'),'Preserve student/professional paths');
assert.ok(home.includes('foundation-explorer'),'Preserve original 16-module explorer');
for(const variant of ['modules','practice','pathways','portfolio','offerings']){
 assert.ok(homeSource.includes('<FoundationSectionIntro variant="'+variant+'" />'),
  'Homepage must use a balanced section introduction: '+variant);
 assert.ok(home.includes('data-showcase-intro="'+variant+'"'),
  'Rendered homepage missing shared section introduction: '+variant);
 assert.ok(intro.includes(variant+':{'),
  'Shared section intro data missing: '+variant);
}
assert.equal(countClass(home,'ghc-section-intro'),5,
 'Five balanced homepage section introductions expected');
for(const route of ['/curriculum/','/7-day-challenge/','/start-here/','/portfolio/',
 '/about-gohackerscloud/catalog/']) {
 assert.ok(home.includes('href="'+route+'"'),'Missing useful homepage action '+route);
 built(route);
}
assert.ok(home.includes('data-module-count="4"')&&home.includes('data-module-count="2"'),
 'Core and security module grids must remain balanced');
assert.ok(home.includes('ghc-catalog-feature'),'Full catalog link must remain prominent');
assert.ok(intro.includes('grid-template-columns:minmax(0,1fr) minmax(14rem,.38fr)'),
 'Homepage must use contextual right-hand navigation alongside its copy');
assert.ok(intro.includes('@media(max-width:54rem)'),
 'Homepage information panels must stack at tablet widths');

const aboutSource=source('src/content/docs/about-gohackerscloud/index.mdx');
const aboutLayout=source('src/components/FoundationAboutDiagram.astro');
const about=built('/about-gohackerscloud/');
assert.equal(h1(about),1);
assert.ok(aboutSource.includes('<FoundationAboutLead />'),
 'Keep Academy-like About intro and free-learning start panel');
assert.ok(aboutSource.includes('<FoundationAboutCards variant="journey" />')&&
 aboutSource.includes('<FoundationAboutCards variant="websites" />'),
 'Keep existing step and official resource cards');
assert.ok(aboutSource.includes('<FoundationAboutDiagram>')&&
 aboutSource.includes('</FoundationAboutDiagram>'),
 'Wrap real ecosystem diagram in contextual companion');
assert.ok(about.includes('ghc-about-diagram-layout')&&
 about.includes('ghc-about-diagram-companion'),
 'Rendered learning ecosystem needs usable right-side context');
assert.equal(countMermaid(about),1,'About must retain exactly one real Mermaid diagram');
for(const route of ['/7-day-challenge/','/portfolio/','/ghc-labs/',
 '/about-gohackerscloud/cybersecurity-services/']){
 assert.ok(about.includes('href="'+route+'"'),'About diagram companion missing '+route);
}
assert.ok(aboutLayout.includes('@media(max-width:65rem)'),
 'About graph and aside must stack below desktop');
assert.equal(countClass(about,'ghc-method-card'),5);
assert.equal(countClass(about,'ghc-site-card'),6);

const catalogSource=source('src/content/docs/about-gohackerscloud/catalog.mdx');
const catalog=built('/about-gohackerscloud/catalog/');
const hero=source('src/components/FoundationCatalogHero.astro');
const choices=source('src/components/FoundationCatalogChoices.astro');
assert.equal(h1(catalog),1,'Catalog must not repeat H1');
assert.ok(catalogSource.includes('title: "GoHackersCloud Complete Catalog"'),
 'Catalog heading must be concise and readable');
assert.ok(catalogSource.includes('<FoundationCatalogHero />')&&
 catalogSource.includes('<FoundationCatalogChoices />'),
 'Catalog must use an Academy-style branded hero and five goal cards');
assert.equal(countClass(catalog,'ghc-catalog-choice'),5,'Catalog needs five option cards');
assert.ok(catalog.includes('ghc-catalog-hero')&&catalog.includes('ghc-catalog-snapshot'),
 'Catalog must offer strong visual entry points');
assert.equal(countMermaid(catalog),4,'Four catalog learning and engagement diagrams must be preserved');
const sections=[
 'catalog-experiences','catalog-courses','catalog-tests','catalog-tracks',
 'catalog-services','catalog-videos','catalog-next'
];
for(const id of sections){
 assert.ok(catalogSource.includes('id="'+id+'"'),'Missing stable section anchor '+id);
 assert.ok(catalog.includes('id="'+id+'"'),'Catalog did not render section anchor '+id);
 assert.ok(catalog.includes('href="#'+id+'"'),'Catalog lacks working jump shortcut '+id);
}
assert.equal(countClass(catalog,'ghc-catalog-anchor'),7);
assert.ok(catalog.includes('aria-label="Catalog section shortcuts"'),
 'Catalog should offer descriptive section navigation');
assert.ok(hero.includes('grid-template-columns:minmax(0,1.2fr) minmax(16rem,.8fr)'),
 'Catalog hero must use two complementary desktop columns');
assert.ok(hero.includes('@media(max-width:63rem)')&&
 choices.includes('@media(max-width:38rem)'),
 'Catalog hero and offers must be mobile responsive');
assert.ok(catalog.includes('https://www.gohackerscloud.org/courses')&&
 catalog.includes('https://gohackerscloud.com/ghc-offers')&&
 catalog.includes('https://gohackerscloud.com/cybersecurity-services'),
 'Catalog must retain official course, offers and services destinations');
assert.ok(catalog.includes('not confirmation of current storefront inventory'),
 'Historic product/track counts must not be represented as real-time availability');
assert.ok(catalogSource.includes('public watch-page access was not independently confirmed'),
 'Previously supplied video links must retain their availability disclaimer');
for(const url of ['https://www.youtube.com/watch?v=Hibo0zLnKDM',
 'https://www.youtube.com/watch?v=iT3ml297v4w'])
 assert.ok(catalog.includes(url),'Previously supplied promotional video link missing');

const challenge=built('/7-day-challenge/');
assert.ok(challenge.includes('data-save-progress')&&challenge.includes('ghc-challenge-rail'),
 'Seven-day challenge and privacy behavior must remain intact');
assert.equal(countMermaid(challenge),1,'Existing seven-day learning diagram missing');
const docs=built('/foundation/gohackerscloud-foundation/01-it-fundamentals/01-computer-hardware/');
assert.equal(h1(docs),1,'Original Obsidian learning route must not be modified');
console.log('Three-showcase alignment QA passed: Academy-style 78rem design system, 5 balanced home intros, About diagram+companion, 5 catalog choices, 7 jump shortcuts, all 4 catalog Mermaid diagrams and original free learning routes.');
