import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';

const source=path=>readFileSync(path,'utf8');
const built=route=>{
  const file=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(file),'Missing built landing route: '+route);
  return source(file);
};

// Inventory of every current Starlight "splash" (sidebar-free) content page.
// These are presentation/marketing pages. Original Obsidian lessons and
// technical documentation keep Starlight's narrow reading width.
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
  const mdx=source(file);
  assert.ok(/^template:\s*splash\s*$/m.test(mdx),
    'This public landing route should use splash template: '+route);
  const html=built(route);
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,
    'Keep exactly one semantic H1 on '+route);
  assert.ok(html.includes('name="description"'),
    'Landing route lost SEO description '+route);
}

// Detect new splash documents without forcing them into a broken default.
// Designers should review the responsive width before publishing.
const mdxFiles=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap(entry=>{
  const path=join(dir,entry.name);
  return entry.isDirectory()?mdxFiles(path):/\.mdx$/.test(entry.name)?[path]:[];
});
const sourceSplash=mdxFiles('src/content/docs').filter(file=>
  /^template:\s*splash\s*$/m.test(source(file))
);
assert.equal(sourceSplash.length,splash.length,
  'Update the responsive splash layout review if a new public landing page is added');

const css=source('src/styles/landing-layout.css');
const config=source('astro.config.mjs');
assert.ok(config.includes("'./src/styles/landing-layout.css'"),
  'New landing CSS must be included after the existing Foundation styles');
assert.ok(css.includes('html:not([data-has-sidebar]) .content-panel .sl-container'),
  'Wide max-width must be limited to Starlight splash pages without lesson sidebars');
assert.ok(css.includes('max-width: min(88rem, 100%)'),
  'Landing content width must be capped and responsive');
assert.ok(css.includes('html:not([data-has-sidebar]) .sl-markdown-content > p'),
  'Keep paragraphs to a readable measure on expanded landing pages');
assert.ok(css.includes('html:not([data-has-sidebar]) .sl-markdown-content > table'),
  'Tables should fill the new usable canvas');
assert.ok(!/html\s*\{\s*--sl-content-width|:root\s*\{\s*--sl-content-width/.test(css),
  'Do not widen technical docs or Obsidian-owned learning content globally');

const compiledStyles=readdirSync('dist/_astro',{recursive:true})
  .filter(name=>/\.css$/i.test(name)).map(name=>source(join('dist/_astro',name))).join('\n');
assert.ok(compiledStyles.includes('88rem')&&compiledStyles.includes('data-has-sidebar'),
  'Responsive landing stylesheet was not included in generated CSS assets');

const aboutSource=source('src/content/docs/about-gohackerscloud/index.mdx');
const aboutLead=source('src/components/FoundationAboutLead.astro');
const aboutHtml=built('/about-gohackerscloud/');
assert.ok(aboutSource.includes('title: "About GoHackersCloud"'),
  'Oversized About SEO/page title should be shortened');
assert.ok(aboutSource.includes('<FoundationAboutLead />'),
  'About should mount the new two-column contextual introduction');
for(const landmark of ['ghc-about-lead','ghc-about-story','ghc-about-start','ghc-about-stats']){
  assert.ok(aboutHtml.includes(landmark),'About overview component missing '+landmark);
}
for(const [route,label] of [
 ['/start-here/','Start free learning'],
 ['/7-day-challenge/','Take the 7-day challenge'],
 ['/portfolio/','Build a technical portfolio'],
 ['/about-gohackerscloud/catalog/','Explore the complete catalog']
]){
  assert.ok(aboutHtml.includes('href="'+route+'"'),
    'About free resource link absent: '+label);
  built(route);
}
assert.ok(aboutHtml.includes('16')&&aboutHtml.includes('challenge days')&&aboutHtml.includes('guided projects'),
  'About panel must be grounded in current Foundation modules, challenge and projects');
assert.ok(aboutLead.includes('grid-template-columns:minmax(0,1.65fr) minmax(18rem,.85fr)'),
  'About panel needs a meaningful two-column desktop layout');
assert.ok(aboutLead.includes('@media(max-width:58rem)'),
  'About layout must stack on mobile/tablet');
assert.ok(aboutHtml.includes('How the learning ecosystem fits together'),
  'About learning flow was accidentally removed');
assert.equal((aboutHtml.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length,1,
  'About learning ecosystem Mermaid must still render');

const explorer=source('src/components/FoundationModuleExplorer.astro');
const home=built('/');
for(const value of [
 'foundation-explorer-featured',
 'data-module-count={group.modules.length}',
 'data-module-count="4"',
 'data-module-count="2"',
 'repeat(4,minmax(0,1fr))',
 'repeat(2,minmax(0,1fr))'
]){
  assert.ok(explorer.includes(value)||home.includes(value),
    'Feature grid requires a balanced layout: '+value);
}
assert.ok(home.includes('data-module-count="4"')&&home.includes('data-module-count="2"'),
  'Four core and two security featured modules must form balanced rows');
const homeResourceCards=(home.match(/class="[^"]*\bfoundation-resource-card\b[^"]*"/g)||[]).length;
assert.equal(homeResourceCards,6,
  'Homepage learning resource section needs six evenly distributed cards');
assert.ok(home.includes('href="/7-day-challenge/"'),
  'Free 7-day challenge must remain prominently available on the homepage');
for(const route of ['/curriculum/','/about-gohackerscloud/','/portfolio/',
 '/paths/students/','/paths/professionals/'])built(route);

console.log('Landing layout QA passed: '+splash.length+
 ' public splash routes with a capped wider canvas; one-H1/SEO preservation; '+
 'About two-column free-learning panel; balanced 4+2 featured cards and 6 resource cards. Original docs remain narrow.');
