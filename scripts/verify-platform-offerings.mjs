import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

const sourceRoot='src/content/docs/about-gohackerscloud';
const paths=[
  {file:'index.mdx',route:'/about-gohackerscloud/',name:'complete platform overview'},
  {file:'courses.mdx',route:'/about-gohackerscloud/courses/',name:'courses and bundles'},
  {file:'test-engine.mdx',route:'/about-gohackerscloud/test-engine/',name:'test engine and mock exams'},
  {file:'cybersecurity-services.mdx',route:'/about-gohackerscloud/cybersecurity-services/',name:'business cybersecurity services'},
];
const read = (path) => readFileSync(path,'utf8');
const routeHtml=(route)=>{
  const path=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(path),'Missing built page: '+route);
  return read(path);
};
const pages=new Map();
for(const page of paths){
  const source=read(join(sourceRoot,page.file));
  assert.ok(source.split(/\s+/).length>=400,'Page too light: '+page.name);
  assert.ok(source.includes('description:'),'Missing SEO description: '+page.file);
  assert.ok(source.includes('/ghc-labs/'),'Missing Academy Labs connection: '+page.file);
  const html=routeHtml(page.route);
  assert.ok(html.includes('GoHackersCloud'),'Page missing company branding: '+page.route);
  assert.ok(html.includes('content="description"')||
    html.includes('name="description"'), 'Page is missing SEO description: '+page.route);
  const transformed=(html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
  assert.ok(transformed>=1,'Mermaid diagram did not compile: '+page.route);
  // All links to Foundation pages introduced here must resolve after the static build.
  for(const match of source.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)){
    const internal=match[1];
    const target=join('dist',internal.replace(/^\/+/,''),'index.html');
    assert.ok(existsSync(target),'Broken internal link '+internal+' in '+page.file);
  }
  pages.set(page.route,html);
}
const about=pages.get('/about-gohackerscloud/');
for(const route of ['/about-gohackerscloud/courses/','/about-gohackerscloud/test-engine/',
 '/about-gohackerscloud/cybersecurity-services/','/ghc-labs/','/start-here/']){
  assert.ok(about.includes(route),'Platform intro must cover '+route);
}
const courses=pages.get('/about-gohackerscloud/courses/');
assert.ok(courses.includes('https://gohackerscloud.com/ghc-offers'),'Missing official live bundles URL');
assert.ok(courses.includes('https://www.gohackerscloud.org/courses'),'Missing official course catalog URL');
const test=pages.get('/about-gohackerscloud/test-engine/');
assert.ok(test.includes('https://www.gohackerscloud.org/freetest'),'Missing main Classplus Free Tests link');
const services=pages.get('/about-gohackerscloud/cybersecurity-services/');
assert.ok(services.includes('https://gohackerscloud.com/cybersecurity-services'),'Missing official B2B services entry');
assert.ok(services.includes('https://gohackerscloud.com/contact-gohackerscloud'),'Missing B2B enquiry link');

// Verify the first Starlight sidebar group is renamed and ordered as requested.
const config=read('astro.config.mjs');
const navStart=config.indexOf("label: 'Explore GoHackersCloud'");
const learningStages=config.indexOf("label: 'Foundation Learning Stages'");
assert.ok(navStart>0&&learningStages>navStart,'The offerings must be the first learning sidebar section');
const nav=config.slice(navStart,learningStages);
const routes=['/about-gohackerscloud/','/about-gohackerscloud/courses/',
 '/about-gohackerscloud/test-engine/','/about-gohackerscloud/cybersecurity-services/',
 '/ghc-labs/','/start-here/','/curriculum/'];
let prev=-1;
for(const route of routes){
  const i=nav.indexOf("link: '"+route+"'");
  assert.ok(i>prev,'Missing or incorrectly ordered sidebar link: '+route);
  prev=i;
}
assert.ok(!nav.includes("label: 'Start Learning'"),'Old first group label remains');
const home=routeHtml('/');
assert.ok(home.includes('ghc-ecosystem-section'),'Homepage is missing offering cards');
for(const route of routes.slice(0,6)){
  assert.ok(home.includes(route),'Homepage should connect users to '+route);
}
const startHere=routeHtml('/start-here/');
assert.ok(startHere.includes('/about-gohackerscloud/'),'Start Here must explain where to learn about platform');
const labs=routeHtml('/ghc-labs/');
assert.ok(labs.includes('/about-gohackerscloud/courses/'),'Existing Labs page must link back to courses');

// Prices and SKU-level claims belong on live catalogs rather than Foundation.
for(const page of paths){
  const source=read(join(sourceRoot,page.file));
  assert.ok(!/₹\s?\d|US\$\s?\d|\$\s?\d+\/month/.test(source),'Hard-coded commercial prices are not allowed: '+page.file);
}
console.log('Offerings QA passed: 4 new pages, 4 rendered diagrams, six homepage cards, first-nav order and existing Foundation/Labs routes.');
