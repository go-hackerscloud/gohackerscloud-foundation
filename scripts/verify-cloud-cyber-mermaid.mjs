import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const base='src/content/docs/foundation/GoHackersCloud Foundation';
const specs=[
  ['07 Cloud Computing Fundamentals','01 Cloud Computing.md',3],
  ['07 Cloud Computing Fundamentals','02 IaaS.md',1],
  ['07 Cloud Computing Fundamentals','11 Shared Responsibility.md',1],
  ['08 Cybersecurity Fundamentals','01 Security Mindset.md',3],
  ['08 Cybersecurity Fundamentals','02 CIA Triad.md',1],
  ['08 Cybersecurity Fundamentals','08 Defense in Depth.md',1],
  ['08 Cybersecurity Fundamentals','10 Security Architecture.md',1],
  ['08 Cybersecurity Fundamentals','12 Security Operations.md',1],
];
const slug=s=>s.toLowerCase()
  .replace(/&/g,'-').replace(/[^a-z0-9]+/g,'-')
  .replace(/^-|-$/g,'');
let diagrams=0;
for(const [folder,file,expected] of specs){
  const src=join(base,folder,file);
  const markdown=readFileSync(src,'utf8');
  const fences=[...markdown.matchAll(new RegExp('^\\x60{3}mermaid\\s*$','gm'))];
  diagrams+=fences.length;
  assert.equal(fences.length,expected,'Unexpected Mermaid diagrams: '+src);
  const allFences=(markdown.match(/^\x60{3}/gm)||[]);
  assert.equal(allFences.length%2,0,'Unclosed Markdown code fence: '+src);
  assert.ok(markdown.includes('workshop')||markdown.includes('diagram'),
    'Missing architecture interpretation: '+src);
  assert.ok(markdown.toLowerCase().includes('exercise')||
            markdown.toLowerCase().includes('practice')||
            markdown.toLowerCase().includes('assignment'),
    'Missing learner activity: '+src);
  const url='/foundation/gohackerscloud-foundation/'+slug(folder)+'/'+slug(file.replace(/\.md$/,''))+'/';
  const output=join('dist',url.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(output),'Built lesson missing: '+url);
  const html=readFileSync(output,'utf8');
  const compiled=(html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
  assert.equal(compiled,expected,'Mermaid fences not transformed into rendered diagrams: '+url);
  assert.ok(html.includes('ghc-labs')||html.includes('curriculum')||html.includes('next'),
    'Lesson missing next-step navigation: '+url);
}
assert.equal(diagrams,12,'Expected twelve educational architecture diagrams');
const config=readFileSync('astro.config.mjs','utf8');
assert.ok(config.includes("from 'astro-mermaid'"),'Astro Mermaid integration is missing');
assert.ok(config.indexOf('mermaid({')<config.indexOf('starlight({'),'Mermaid must be registered before Starlight');
const pkg=JSON.parse(readFileSync('package.json','utf8'));
assert.equal(pkg.dependencies['astro-mermaid'],'2.1.0');
assert.equal(pkg.dependencies.mermaid,'11.17.2');
const lock=JSON.parse(readFileSync('package-lock.json','utf8'));
assert.ok(lock.packages['node_modules/astro-mermaid'],'Mermaid renderer missing from lockfile');
assert.ok(lock.packages['node_modules/mermaid'],'Mermaid runtime missing from lockfile');
console.log('Cloud + Cybersecurity Mermaid QA passed: 8 original lesson URLs, 12 compiled diagrams, exercises and pinned renderer.');
