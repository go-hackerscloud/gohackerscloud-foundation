import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {foundationModules} from '../src/data/foundation-modules.mjs';

const source = path => readFileSync(path,'utf8');
const html = route => {
  const built=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(built),'Missing page: '+route);
  return source(built);
};

const homepage=html('/');
const studentRoute='/paths/students/';
const professionalRoute='/paths/professionals/';
const pages=[
  {route:studentRoute,file:'src/content/docs/paths/students.mdx'},
  {route:professionalRoute,file:'src/content/docs/paths/professionals.mdx'}
];
assert.equal(foundationModules.length,16,'Foundation module count changed unexpectedly');
const component=source('src/components/FoundationHero.astro');
assert.ok(component.includes('Learn IT, Cloud, Cybersecurity & AI.'),
  'Hero must communicate broad free Foundation learning');
assert.ok(component.includes('Free, at your own pace.'),
  'Hero must lead with free self-paced learning');
assert.ok(component.includes('16 free learning modules'),'Hero must describe real curriculum');
assert.ok(component.includes('href="/start-here/"'),'Hero must offer direct free start');
assert.ok(component.includes('href="/#choose-your-path"'),'Hero must link to learner choice');
assert.ok(component.includes('01-it-fundamentals/01-computer-hardware/'),
  'Hero must offer a real first-lesson preview');

const homeSource=source('src/content/docs/index.mdx');
const sections=[
  '<FoundationHero />',
  '<FoundationAudiencePaths />',
  '<FoundationModuleExplorer featured={true} />',
  '<FoundationResourceHub />',
  '<GoHackersCloudOfferings />'
];
let last=-1;
for(const section of sections){
  const position=homeSource.indexOf(section);
  assert.ok(position>last,'Incorrect learner-first homepage section order: '+section);
  last=position;
}
assert.ok(homeSource.includes('## Explore free Foundation modules'),
  'Free modules section missing');
assert.ok(homeSource.includes('## Learn by doing'),
  'Independent practice message missing');
assert.ok(homeSource.includes('## Explore GoHackersCloud'),
  'Separate offering overview must remain accessible');
assert.ok(homeSource.includes('16-module free curriculum'),
  'Homepage must explain free module coverage');

const classes=[
  'foundation-hero',
  'foundation-paths',
  'foundation-explorer',
  'foundation-resource-hub',
  'ghc-ecosystem-section'
];
last=-1;
for(const marker of classes){
  const position=homepage.indexOf(marker);
  assert.ok(position>last,'Learning components must render before offerings: '+marker);
  last=position;
}
assert.ok(homepage.includes(studentRoute),'Student entry missing from homepage');
assert.ok(homepage.includes(professionalRoute),'Professional entry missing from homepage');
assert.ok(homepage.includes('No paid subscription for Foundation lessons'),
  'Free Foundation access is unclear');
assert.ok(homepage.includes('/about-gohackerscloud/catalog/'),
  'Existing complete promotional catalog must remain accessible');
assert.equal((homepage.match(/<h1(?:\s|>)/g)||[]).length,1,
  'Homepage should retain Starlight single H1 convention');

const nav=source('astro.config.mjs');
for(const route of [studentRoute,professionalRoute]){
  assert.ok(nav.includes("link: '"+route+"'"),'New audience guide missing from sidebar: '+route);
}
const start=html('/start-here/');
assert.ok(start.includes(studentRoute)&&start.includes(professionalRoute),
  'Start Here must connect to both audience entry points');

const pre=/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g;
for(const item of pages){
  const mdx=source(item.file);
  assert.ok(mdx.startsWith('---\n'),'Missing route frontmatter '+item.route);
  assert.ok(/^title: .+/m.test(mdx)&&/^description: .+/m.test(mdx),
    'Missing title or SEO description on '+item.route);
  assert.ok(mdx.split(/\s+/).length>=500,
    'New audience guide lacks practical depth: '+item.route);
  assert.equal((mdx.match(/^# (.+)$/gm)||[]).length,0,
    'New audience page must not duplicate Starlight title: '+item.route);
  assert.ok(mdx.includes('Expected deliverable:')||
            mdx.includes('Expected evidence:'),
    'Learner evidence instructions missing from '+item.route);
  assert.ok(mdx.includes('free')||mdx.includes('Free'),
    'Free self-study access must be explicit');
  assert.ok(mdx.includes('/ghc-labs/'),
    'Optional GHC Labs next step missing from '+item.route);
  const built=html(item.route);
  assert.equal((built.match(/<h1(?:\s|>)/g)||[]).length,1,
    'Expected a single page title on '+item.route);
  assert.equal((built.match(pre)||[]).length,1,
    'Mermaid route/learning flow did not compile on '+item.route);
  assert.ok(built.includes('name="description"'),'Missing SEO description '+item.route);
  for(const match of mdx.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)){
    html(match[1]);
  }
}
for(const route of ['/curriculum/','/core-it-devops/','/study-plan/',
  '/ghc-labs/','/about-gohackerscloud/catalog/']){
  html(route);
}
console.log('Learner-first homepage QA passed: two detailed free audience paths, two Mermaid diagrams, safe original links and free-before-offers ordering.');
