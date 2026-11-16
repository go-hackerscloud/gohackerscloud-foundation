import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';
import {foundationModules, foundationGroups} from '../src/data/foundation-modules.mjs';

const built = (route) => join('dist', route.replace(/^\/+/, ''), 'index.html');
const check = (route) => {
  const file = built(route);
  assert.ok(existsSync(file), `Broken Foundation curriculum link: ${route}`);
  return readFileSync(file, 'utf8');
};

assert.equal(foundationModules.length, 16, 'The catalogue must have all 16 modules');
assert.equal(new Set(foundationModules.map(m=>m.id)).size, 16, 'Module IDs must be unique');
assert.equal(new Set(foundationModules.map(m=>m.link)).size, 16, 'Module links must be unique');
for (const group of foundationGroups) assert.ok(foundationModules.some(m=>m.category===group.id), `Empty group: ${group.id}`);

for (const module of foundationModules) {
  assert.ok(module.description && module.outcome, `Missing learner context: ${module.id}`);
  check(module.link);
}
for (const route of ['/', '/start-here/', '/curriculum/', '/study-plan/']) {
  const html = check(route);
  assert.match(html, /GoHackersCloud|Foundation/i, `No Foundation copy: ${route}`);
}
const homepage = check('/');
const curriculum = check('/curriculum/');
assert.match(homepage, /foundation-hero/);
assert.match(curriculum, /data-foundation-explorer/);
for (const module of foundationModules) {
  assert.ok(curriculum.includes(module.link), `Missing curriculum card: ${module.id}`);
}
const guide = check('/start-here/');
assert.match(guide, /paid Academy subscription/i);
const plan = check('/study-plan/');
assert.match(plan, /12-week/i);
console.log('Foundation learning checks passed: 16 existing module URLs, new pages, navigation catalogue.');
