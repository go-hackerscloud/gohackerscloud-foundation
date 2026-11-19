import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const source=path=>readFileSync(path,'utf8');
const page=route=>{
  const file=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(file),'Missing built portfolio route: '+route);
  return source(file);
};
const projectPages=[
  {slug:'system-architecture',template:'system-architecture-worksheet'},
  {slug:'network-troubleshooting',template:'network-troubleshooting-report'},
  {slug:'cloud-iam-review',template:'cloud-iam-review'},
  {slug:'api-authorization',template:'api-authorization-test-plan'},
  {slug:'soc-alert-triage',template:'soc-alert-triage-report'},
  {slug:'git-devsecops-review',template:'git-devsecops-change-review'},
];
const templates=[...projectPages.map(x=>x.template),'portfolio-readme'];
const hubRoute='/portfolio/';
const hubSource=source('src/content/docs/portfolio/index.mdx');
const hub=page(hubRoute);
const headingCount=html=>(html.match(/<h1(?:\s|>)/g)||[]).length;
const diagramCount=html=>(html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
const h1FromBody=mdx=>mdx.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/,'').match(/^# [^#]/gm)||[];

assert.equal(headingCount(hub),1,'Portfolio hub needs one page-level heading');
assert.equal(diagramCount(hub),1,'Portfolio hub needs one rendered learning workflow');
assert.ok(hub.includes('name="description"'),'Portfolio hub SEO description missing');
assert.ok(hubSource.split(/\s+/).length>=850,'Hub needs substantial guidance');
assert.equal(h1FromBody(hubSource).length,0,'Do not duplicate Starlight title in portfolio hub');
assert.ok(hub.includes('/7-day-challenge/'),'Hub must link to free challenge');
assert.ok(hub.includes('/paths/students/')&&hub.includes('/paths/professionals/'),
  'Hub must serve both students and working professionals');
assert.ok(hub.includes('/learning-hub/cloud-security-roadmap/'),
  'Hub must connect to existing career roadmap');

const routes=new Set([hubRoute]);
for(const {slug,template} of projectPages){
  const route='/portfolio/projects/'+slug+'/';
  routes.add(route);
  const file='src/content/docs/portfolio/projects/'+slug+'.mdx';
  const content=source(file);
  const rendered=page(route);
  assert.ok(hub.includes(route),'Missing portfolio project link in hub: '+route);
  assert.ok(content.split(/\s+/).length>=450,'Project needs detailed instructional guidance: '+slug);
  assert.equal(h1FromBody(content).length,0,'Duplicate Markdown H1 on '+slug);
  assert.equal(headingCount(rendered),1,'Expected one rendered H1 on '+slug);
  assert.equal(diagramCount(rendered),1,'Expected one rendered Mermaid diagram on '+slug);
  assert.ok(rendered.includes('name="description"'),'Project missing SEO description '+slug);
  assert.ok(content.includes('## Guided project steps'),'Project instructions missing: '+slug);
  assert.ok(content.includes('## Self-review rubric'),'Self-review rubric missing: '+slug);
  assert.ok(content.includes('synthetic')||content.includes('Synthetic'),
    'Project must not claim unverified real-world evidence: '+slug);
  assert.ok(content.includes('download="'+template+'.md"'),
    'Project needs a downloadable worksheet: '+slug);
  assert.ok(content.includes('https://')===false,
    'Project must use stable internal Foundation sources unless externally verified: '+slug);
}

for(const name of templates){
  const path='downloads/portfolio/'+name+'.md';
  const raw='public/'+path;
  const built='dist/'+path;
  assert.ok(existsSync(raw),'Missing project worksheet source: '+path);
  assert.ok(existsSync(built),'Public Markdown worksheet not copied to built assets: '+path);
  const template=source(raw);
  assert.ok(template.split(/\s+/).length>=150,'Worksheet incomplete: '+name);
  assert.ok(template.includes('synthetic')||template.includes('Synthetic'),
    'Worksheet missing synthetic/authorized declaration: '+name);
  assert.ok(template.includes('## '),'Worksheet missing editable sections: '+name);
  assert.ok(hubSource.includes('/'+path),'Hub missing template download: '+name);
  assert.ok(hub.includes('/'+path),'Hub rendered download link missing: '+name);
  assert.ok(hubSource.includes('download="'+name+'.md"'),
    'Template links must offer direct Markdown download: '+name);
}
assert.equal(templates.length,7,'Exactly seven reusable Markdown templates expected');
assert.equal(projectPages.length,6,'Exactly six guided projects expected');

for(const path of ['src/content/docs/portfolio/index.mdx',
 ...projectPages.map(p=>'src/content/docs/portfolio/projects/'+p.slug+'.mdx')]){
  const md=source(path);
  for(const match of md.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)){
    const link=match[1];
    if(link.endsWith('.md')){
      assert.ok(existsSync('dist'+link),'Broken Markdown download '+link);
    } else {
      page(link);
    }
  }
}

const homeSource=source('src/content/docs/index.mdx');
const home=page('/');
assert.ok(home.includes(hubRoute),'Homepage must expose portfolio hub');
assert.ok(homeSource.includes('Turn your learning into a technical portfolio'),
  'Homepage needs learner-first portfolio section');
assert.ok(homeSource.indexOf('## Turn your learning into a technical portfolio') <
          homeSource.indexOf('<GoHackersCloudOfferings />'),
  'Free portfolio promotion must precede separate paid offerings');
const resources=source('src/components/FoundationResourceHub.astro');
assert.ok(resources.includes("href:'/portfolio/'"),'Learner resource cards must offer portfolio hub');

for(const route of ['/7-day-challenge/','/paths/students/','/paths/professionals/']){
  const built=page(route);
  assert.ok(built.includes(hubRoute),'Existing learner pathway missing portfolio bridge: '+route);
}
const nav=source('astro.config.mjs');
const first=nav.slice(nav.indexOf("label: 'Explore GoHackersCloud'"),
  nav.indexOf("label: 'Foundation Learning Stages'"));
assert.ok(first.includes("link: '/portfolio/'"),'Portfolio hub not in first sidebar section');
assert.ok(nav.includes("label: 'Portfolio Projects'"),'Collapsible project sidebar is missing');
for(const route of routes){
  assert.ok(nav.includes("link: '"+route+"'")||route===hubRoute,
    'Project navigation route absent: '+route);
}
for(const route of ['/curriculum/','/core-it-devops/','/ghc-labs/',
  '/about-gohackerscloud/catalog/']) page(route);

// This is intentionally static: users download worksheets and keep their own
// practice notes locally. No accounts, tracking, server forms or uploads.
assert.ok(!/\b(?:fetch|localStorage|sendBeacon|navigator\.clipboard)\b/.test(hubSource),
  'Do not add data capture/tracking to the free portfolio hub without review');
console.log('Portfolio Hub QA passed: 7 pages, 7 Mermaid diagrams, 6 guided projects, 7 downloadable Markdown worksheets, internal learning links and free-first navigation.');
