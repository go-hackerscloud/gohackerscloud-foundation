import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

const root='src/content/docs/foundation/GoHackersCloud Foundation';
const originals=[
  ['00 Welcome to GoHackersCloud','01 Welcome to the Academy.md',2],
  ['01 IT Fundamentals','01 Computer Hardware.md',2],
  ['02 Networking Fundamentals','01 Networking Basics.md',2],
  ['03 Linux Fundamentals','01 Linux Introduction.md',2],
  ['04 Windows Fundamentals','01 Windows Architecture.md',2],
  ['05 Programming Fundamentals','01 Programming Concepts.md',2],
  ['06 DevOps & Version Control','01 Git.md',2],
  ['07 Cloud Computing Fundamentals','03 PaaS.md',1],
  ['07 Cloud Computing Fundamentals','07 Hybrid Cloud.md',1],
  ['07 Cloud Computing Fundamentals','08 Cloud Networking.md',1],
  ['07 Cloud Computing Fundamentals','10 Cloud Identity.md',1],
  ['08 Cybersecurity Fundamentals','03 Risk Management.md',1],
  ['08 Cybersecurity Fundamentals','07 Security Controls.md',1],
  ['08 Cybersecurity Fundamentals','09 Zero Trust.md',1],
  ['08 Cybersecurity Fundamentals','11 Secure Design.md',1],
];
const guides=Array.from({length:7},(_,i)=>'src/content/docs/core-it-devops/module-0'+i+'.md');
const slug=s=>s.toLowerCase().replace(/[&()]/g,'').replace(/\s/g,'-').replace(/[^a-z0-9-]/g,'');
const read=p=>readFileSync(p,'utf8');
const built=url=>{
  const path=join('dist',url.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(path),'Missing built route: '+url);
  return read(path);
};
const fence=/^\x60{3}mermaid\s*$/gm;
const pre=/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g;
let total=0;
const inspected=[];
for(const [dir,name,expected] of originals){
  const p=join(root,dir,name);
  const source=read(p);
  const diagrams=[...source.matchAll(fence)].length;
  assert.equal(diagrams,expected,'Wrong source diagram count: '+p);
  assert.equal((source.match(/^\x60{3}/gm)||[]).length%2,0,'Unbalanced code fences: '+p);
  assert.ok(/Architecture (and workplace practice|workshop)/.test(source),'Missing explanation section: '+p);
  assert.ok(/independent|practical exercise|exercise|self-directed/i.test(source),'Missing self-study: '+p);
  assert.ok(source.includes('/ghc-labs/'),'Missing Labs next step: '+p);
  const url='/foundation/gohackerscloud-foundation/'+slug(dir)+'/'+slug(name.slice(0,-3))+'/';
  const html=built(url);
  assert.equal((html.match(pre)||[]).length,expected,'Diagram not compiled for '+url);
  inspected.push(url);
  total+=expected;
}
for(const p of guides){
  const source=read(p);
  assert.equal([...source.matchAll(fence)].length,1,'Guide should have one diagram: '+p);
  assert.ok(source.includes('## Architecture diagram'),'Missing guide explanation: '+p);
  const route='/core-it-devops/'+p.split('/').at(-1).replace(/\.md$/,'')+'/';
  const html=built(route);
  assert.equal((html.match(pre)||[]).length,1,'Guide not compiled: '+route);
  inspected.push(route);
  total++;
}
assert.equal(originals.length,15);
assert.equal(inspected.length,22);
assert.equal(total,29,'Expected 29 new rendered diagrams');
for(const route of ['/','/core-it-devops/','/curriculum/','/ghc-labs/'])built(route);

const sync=read('scripts/sync-foundation-to-obsidian.ps1');
assert.ok(sync.includes("'Stage0102Diagrams'"),'Sync scope missing');
const section=sync.split("if ($Scope -eq 'Stage0102Diagrams') {")[1];
assert.ok(section,'Targeted allowlist missing');
const originalAllow=(section.match(/'GoHackersCloud Foundation\/[^']+\.md'/g)||[]);
const guideAllow=(section.match(/'module-0[0-6]\.md'/g)||[]);
assert.equal(originalAllow.length,15,'Must select exactly 15 original lessons');
assert.equal(guideAllow.length,7,'Must select 7 optional guide references');
assert.ok(section.includes('if ($syncPath -notin $visualAllowedLessons) { continue }'));
assert.ok(section.includes('if ($syncPath -notin $visualAllowedGuides) { continue }'));
assert.ok(sync.includes('if (-not $Apply)')&&sync.includes("if ($state -eq 'Changed' -and -not $Overwrite)"));
assert.ok(sync.includes('foundation-obsidian-sync-backups'));
assert.ok(existsSync('docs/STAGE_01_02_MERMAID_RELEASE.md'),'Release instructions missing');
console.log('Stage 01+02 Mermaid: 15 original lessons + 7 guide routes, 29 diagrams and safe Obsidian sync passed.');
