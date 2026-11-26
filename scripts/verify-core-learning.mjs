import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {ghcExploreRoutes} from '../src/data/ghc-explore-navigation.mjs';

const built = route => join('dist',route.replace(/^\/+/,''),'index.html');
const html = route => {
  const file = built(route);
  assert.ok(existsSync(file), 'Missing built route: '+route);
  return readFileSync(file,'utf8');
};
const read = path => readFileSync(path,'utf8');

const coreOverview=html('/core-it-devops/');
assert.match(coreOverview,/Core IT & DevOps/);
const homepage=html('/');
const startHere=html('/start-here/');
assert.ok(homepage.includes('/core-it-devops/'));
assert.ok(startHere.includes('/core-it-devops/'));
const config=read('astro.config.mjs');
assert.ok(config.includes("ghcExploreGroups.map(group=>") &&
  ghcExploreRoutes.includes('/core-it-devops/'),
  'Core path must remain reachable from the grouped Explore sidebar');

const base='src/content/docs/core-it-devops';
const original='src/content/docs/foundation/GoHackersCloud Foundation';
const modules=[
  ['00','00 Welcome to GoHackersCloud','01 Welcome to the Academy.md'],
  ['01','01 IT Fundamentals','01 Computer Hardware.md'],
  ['02','02 Networking Fundamentals','01 Networking Basics.md'],
  ['03','03 Linux Fundamentals','01 Linux Introduction.md'],
  ['04','04 Windows Fundamentals','01 Windows Architecture.md'],
  ['05','05 Programming Fundamentals','01 Programming Concepts.md'],
  ['06','06 DevOps & Version Control','01 Git.md'],
];

for(const [num,folder,file] of modules) {
  const guide=read(join(base,'module-'+num+'.md'));
  assert.ok(guide.trim().split(/\s+/).length>=600,'Module guide too thin: '+num);
  assert.match(guide,/Enterprise case study/);
  assert.match(guide,/Guided self-study exercise/);
  assert.match(guide,/Knowledge|Check your understanding/);
  assert.match(guide,/https:\/\/gohackerscloud.com\/hands-on-cybersecurity-labs/);
  const page=html('/core-it-devops/module-'+num+'/');
  assert.ok(page.includes('Module '+num));
  assert.ok(coreOverview.includes('/core-it-devops/module-'+num+'/'));

  const lesson=read(join(original,folder,file));
  assert.ok(lesson.split(/\s+/).length>=1000,'Enhanced first lesson too brief: '+file);
  assert.ok(lesson.includes('/core-it-devops/module-'+num+'/'),'Lesson missing new guide link');
  assert.ok(!/^# [^#]/m.test(lesson.replace(/^---[\s\S]*?---\s*\n/,'')),'Unexpected H1 in enriched lesson: '+file);
}
const second=read(join(original,'00 Welcome to GoHackersCloud','02 How to Use the Academy.md'));
assert.match(second,/How to Use GoHackersCloud Foundation/);
assert.ok(second.includes('/curriculum/'));
assert.ok(second.includes('/ghc-labs/'));

for(const theme of ['logo-light','logo-dark']){
  const svg=read('src/assets/branding/'+theme+'.svg');
  assert.ok(svg.includes('GoHackersCloud Foundation'));
  assert.ok(svg.includes('>FOUNDATION</text>'));
  assert.ok(!svg.includes('>ACADEMY</text>'));
}
const sync=read('scripts/sync-foundation-to-obsidian.ps1');
assert.ok(sync.includes("Scope = 'CoreUpdates'"));
assert.ok(sync.includes("if (-not $Apply)"));
assert.ok(sync.includes("if ($state -eq 'Changed' -and -not $Overwrite)"));
assert.ok(sync.includes('foundation-obsidian-sync-backups'));
assert.ok(sync.includes("Source='core-it-devops'"));
assert.ok(existsSync('docs/CORE_IT_OBSIDIAN_REVERSE_SYNC.md'));

console.log('Core Foundation checks passed: 7 detailed guides, 7 enriched entry lessons, Foundation branding and safe reverse-sync script.');
