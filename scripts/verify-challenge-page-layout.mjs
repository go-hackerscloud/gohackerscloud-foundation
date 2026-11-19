import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {foundationChallengeDays} from '../src/data/foundation-challenge.mjs';

const read=path=>readFileSync(path,'utf8');
const built=route=>{
  const path=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(path),'Missing Foundation route '+route);
  return read(path);
};
const source=read('src/content/docs/7-day-challenge.mdx');
const layout=read('src/components/FoundationChallengeLayout.astro');
const quiz=read('src/components/FoundationChallenge.astro');
const html=built('/7-day-challenge/');

assert.ok(source.includes("import FoundationChallengeLayout from '../../components/FoundationChallengeLayout.astro';"),
  'The challenge MDX must import the responsive layout');
assert.equal((source.match(/<FoundationChallengeLayout>/g)||[]).length,1,
  'Expected one challenge layout wrapper');
assert.equal((source.match(/<\/FoundationChallengeLayout>/g)||[]).length,1,
  'Challenge layout must close after the final free-learning links');
assert.ok(source.indexOf('<FoundationChallengeLayout>')<source.indexOf('## How the challenge works'),
  'Sidebar must appear alongside the introduction and learning content');
assert.ok(source.indexOf('</FoundationChallengeLayout>')>source.indexOf('## After the challenge: keep learning for free'),
  'Sidebar should persist through the full challenge reading experience');
assert.ok(source.includes('<FoundationChallenge />'),
  'Existing quiz component must remain unchanged in the MDX page');
assert.ok(html.includes('ghc-challenge-layout')&&html.includes('ghc-challenge-content'),
  'Built page missing the two-column challenge layout');
assert.ok(html.includes('ghc-challenge-rail')&&
  html.includes('aria-label="Seven-day challenge study companion"'),
  'Built challenge page lacks a labeled right-hand study rail');
assert.ok(html.includes('aria-label="Jump to a challenge day"'),
  'Sidebar day shortcuts must be a labeled navigation landmark');

assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,
  'The page must still render exactly one Starlight title');
assert.equal((html.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length,1,
  'Existing introduction Mermaid flow must remain rendered');
assert.ok(html.includes('How the challenge works'),'How-to content missing from rendered slot');
assert.ok(html.includes('Assessments and progress'),'Assessment guidance missing from rendered slot');
assert.ok(html.includes('After the challenge: keep learning for free'),
  'Challenge follow-up content missing from rendered slot');
assert.ok(html.includes('data-progress-bar')&&html.includes('data-save-progress')&&
  html.includes('data-clear-progress'),'Existing quiz saving/reset controls must remain present');
assert.equal((html.match(/<fieldset[^>]*\bdata-question(?=[\s>])/g)||[]).length,21,
  'Existing 21 knowledge checks must remain intact');
assert.equal((html.match(/<form[^>]*\bdata-challenge-form(?=[\s>])/g)||[]).length,7,
  'All seven quiz forms must remain intact');

assert.equal(foundationChallengeDays.length,7);
for(const day of foundationChallengeDays){
  const anchor='challenge-day-'+day.id;
  const href='#'+anchor;
  assert.ok(quiz.includes("id={'challenge-day-'+day.id}"),
    'Day IDs should be derived from the existing Foundation challenge data');
  assert.ok(html.includes('id="'+anchor+'"'),
    'Clickable target missing for day '+day.id);
  assert.ok(html.includes('href="'+href+'"'),
    'Sidebar shortcut missing for day '+day.id);
  assert.ok(html.includes('data-challenge-day-link="'+day.id+'"'),
    'Sidebar shortcut missing stable day metadata for '+day.id);
}
assert.equal((html.match(/data-challenge-day-link="0[1-7]"/g)||[]).length,7,
  'Expected exactly seven sidebar shortcuts');

assert.ok(quiz.includes("railCount.textContent = reviewed+' / 7'"),
  'Sidebar progress count must be synchronized to the current reviewed-day state');
assert.ok(quiz.includes('if (railBar) railBar.value = reviewed;'),
  'Sidebar native progress bar must be synchronized');
assert.ok(quiz.includes("railLink.dataset.reviewed = record?.reviewed ? 'true' : 'false';"),
  'Reviewed state should be shown in the day shortcuts');
assert.ok(quiz.includes("target.open = true"),'Selecting a shortcut must expand its lesson');
assert.ok(quiz.includes("window.addEventListener('hashchange', openLinkedDay)"),
  'Direct bookmarked day links should expand correctly');
assert.ok(quiz.includes("save.checked = false"),'Browser-saving must remain opt-in');
assert.ok(quiz.includes('window.localStorage.removeItem(key)'),
  'Existing local progress clear control must remain functional');
assert.ok(!/\b(?:fetch|XMLHttpRequest|sendBeacon)\s*\(/.test(layout),
  'Study companion must not send learner behavior to a network service');

assert.ok(layout.includes('position:sticky'),'Desktop study rail should be sticky');
assert.ok(layout.includes('grid-template-columns:minmax(0,1fr) minmax(15rem,18rem)'),
  'Desktop grid should reserve a useful right-hand rail');
assert.ok(layout.includes('@media(max-width:62rem)'),
  'A single-column responsive fallback is needed');
assert.ok(layout.includes('scroll-snap-type:x proximity'),
  'Narrow screens need horizontally browsable day shortcuts');
assert.ok(layout.includes('aria-label="Related Foundation learning resources"'),
  'Related resource links must be accessible');

for(const route of ['/portfolio/','/curriculum/','/paths/students/','/paths/professionals/']){
  assert.ok(html.includes('href="'+route+'"'),'Missing free resource in the study sidebar: '+route);
  built(route);
}
console.log('Seven-day challenge layout QA passed: sticky desktop study rail, responsive day shortcuts, 7 direct anchors, synchronized self-review progress, 21 quiz questions, 1 Mermaid and 4 free learning destinations.');
