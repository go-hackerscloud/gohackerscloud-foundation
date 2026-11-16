import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

const root='src/content/docs/foundation/GoHackersCloud Foundation';
const specs=[
  ['12 Enterprise Security Operations','01 Security Operations Center (SOC).md',3],
  ['12 Enterprise Security Operations','03 Security Information and Event Management (SIEM).md',1],
  ['12 Enterprise Security Operations','05 Vulnerability Management.md',1],
  ['13 Professional Skills','01 Technical Documentation.md',3],
  ['13 Professional Skills','02 Report Writing.md',1],
  ['13 Professional Skills','03 Communication Skills.md',1],
  ['14 AI Fundamentals','01 AI Concepts.md',3],
  ['14 AI Fundamentals','03 Generative AI.md',1],
  ['14 AI Fundamentals','09 Responsible AI & AI Governance.md',1],
  ['15 Enterprise (GRC)','01 Introduction to GRC.md',3],
  ['15 Enterprise (GRC)','03 Risk Management Fundamentals.md',1],
  ['15 Enterprise (GRC)','07 Security Audits & Compliance Assessments.md',1],
];
const slug = value => value.toLowerCase()
  .replace(/[&()]/g,'').replace(/\s/g,'-').replace(/[^a-z0-9-]/g,'')
  .replace(/^-|-$/g,'');

assert.equal(specs.length,12);
const moduleNums=new Set();
let total=0;
for(const [folder,file,expected] of specs){
  moduleNums.add(folder.substring(0,2));
  const source=join(root,folder,file);
  const markdown=readFileSync(source,'utf8');
  const graphs=[...markdown.matchAll(new RegExp('^\\x60{3}mermaid\\s*$','gm'))];
  assert.equal(graphs.length,expected,'Mermaid diagram count differs: '+source);
  const fences=markdown.match(/^\x60{3}/gm)||[];
  assert.equal(fences.length%2,0,'Unbalanced code fences: '+source);
  assert.ok(markdown.split(/\s+/).length>=1250,'Expanded lesson too brief: '+source);
  assert.ok(markdown.includes('## Architecture workshop'),'Missing architecture workshop: '+source);
  assert.ok(/exercise|practice|assignment|assessment/i.test(markdown),'Missing learner practice: '+source);
  const mainText=markdown.replace(/^---[\s\S]*?---\s*\n/,'');
  assert.ok(!/^# [^#]/m.test(mainText),'Found nested page-level H1 headings: '+source);

  const route='/foundation/gohackerscloud-foundation/'+slug(folder)+'/'+slug(file.slice(0,-3))+'/';
  const output=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(output),'Existing lesson route missing after build: '+route);
  const page=readFileSync(output,'utf8');
  const compiled=(page.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
  assert.equal(compiled,expected,'Mermaid did not compile: '+route);
  assert.ok(page.includes('Architecture workshop'),'Workshop missing from built lesson: '+route);

  // Internal links introduced in the educational workshops should lead to real pages.
  const links=[...markdown.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g)].map(x=>x[1]);
  for(const link of links){
    const target=join('dist',link.replace(/^\/+/,''),'index.html');
    assert.ok(existsSync(target),'Internal workshop link missing: '+link+' in '+source);
  }
  total+=compiled;
}
assert.equal(moduleNums.size,4,'Must cover all four Stage 03 modules');
assert.equal(total,20,'Expected exactly 20 compiled Stage 03 Mermaid diagrams');

const config=readFileSync('astro.config.mjs','utf8');
assert.ok(config.includes("from 'astro-mermaid'"),'Mermaid renderer missing');
const sync=readFileSync('scripts/sync-foundation-to-obsidian.ps1','utf8');
assert.ok(sync.includes("'EnterpriseProUpdates'"),'Missing targeted Stage 03 Obsidian import scope');
assert.ok(sync.includes('if ($stagePath -notin $enterpriseAllowedLessons)'),'Targeted import allowlist not enforced');
const selected=[...sync.matchAll(/'GoHackersCloud Foundation\/(?:12 |13 |14 |15 )[^']+\.md'/g)];
assert.equal(selected.length,12,'Obsidian import must select exactly 12 updated Stage 03 lessons');
assert.ok(sync.includes('if (-not $Apply)')&&sync.includes("if ($state -eq 'Changed' -and -not $Overwrite)"),'Safety switches removed');
assert.ok(sync.includes('foundation-obsidian-sync-backups'),'Obsidian backup guard missing');
assert.ok(existsSync('docs/ENTERPRISE_PROFESSIONAL_MERMAID_RELEASE.md'),'Release runbook missing');
console.log('Stage 03 complete: 4 modules, 12 existing lesson URLs, 20 compiled Mermaid diagrams, linked practical workshops and safe Obsidian sync.');
