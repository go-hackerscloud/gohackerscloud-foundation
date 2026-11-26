import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {foundationChallengeDays} from '../src/data/foundation-challenge.mjs';
import {ghcExploreGroups,ghcExploreRoutes} from '../src/data/ghc-explore-navigation.mjs';

const challengePath='src/content/docs/7-day-challenge.mdx';
const componentPath='src/components/FoundationChallenge.astro';
const promoPath='src/components/FoundationChallengePromo.astro';
const route='/7-day-challenge/';
const source=path=>readFileSync(path,'utf8');
const page=path=>{
  const file=join('dist',path.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(file),'Broken Foundation route: '+path);
  return source(file);
};

assert.equal(foundationChallengeDays.length,7,'Exactly seven challenge days required');
let questionCount=0;
const seen=new Set();
for(const [index,day] of foundationChallengeDays.entries()){
  assert.equal(day.id,String(index+1).padStart(2,'0'),'Days need stable 01–07 IDs');
  assert.ok(day.title.length>6 && day.objective.length>30,'Day needs a clear objective');
  assert.ok(day.assignment.length>70 && day.evidence.length>30,'Practical work and evidence missing');
  assert.ok(day.lessonLabel && day.topic,'Topic and lesson label must be populated');
  page(day.lesson);
  page(day.optionalLesson);
  assert.equal(day.questions.length,3,'Exactly three original questions per day');
  for(const question of day.questions){
    questionCount++;
    assert.ok(question.prompt.length>30,'Question too short');
    assert.ok(!seen.has(question.prompt),'Repeated question: '+question.prompt);
    seen.add(question.prompt);
    assert.equal(question.options.length,4,'Four answer options expected');
    assert.equal(new Set(question.options).size,4,'Duplicate answer choice');
    assert.ok(Number.isInteger(question.correct)&&question.correct>=0&&question.correct<4,
      'Correct answer index out of range');
    assert.ok(question.explanation.length>45,'Every answer requires an explanation');
  }
}
assert.equal(questionCount,21,'Expected 21 original questions');

const markdown=source(challengePath);
const component=source(componentPath);
const promo=source(promoPath);
const built=page(route);
assert.ok(markdown.startsWith('---\n'),'Challenge page missing Starlight frontmatter');
assert.ok(/^title:\s*.+$/m.test(markdown)&&/^description:\s*.+$/m.test(markdown),
  'Challenge page missing title/SEO description');
assert.ok(!/^# [^#]/m.test(markdown),'Duplicate page-level H1 in challenge page');
assert.ok(markdown.includes('<FoundationChallenge />'),'Challenge interface must be mounted');
assert.ok(markdown.includes('no pass mark')||markdown.includes('No minimum score'),
  'Formative assessment disclaimer missing');
assert.ok(markdown.includes('local storage'),'Local-only progress disclosure missing');
assert.ok(markdown.includes('no formal certificate'),'No-credential warning missing');
const compiled=(built.match(/<pre[^>]*\bclass="[^"]*\bmermaid\b[^"]*"/g)||[]).length;
assert.equal(compiled,1,'Introductory learning-loop diagram must render');
assert.equal((built.match(/<h1(?:\s|>)/g)||[]).length,1,'Page should render only one H1');
assert.ok(built.includes('name="description"'),'Challenge page lacks SEO meta');
assert.equal((built.match(/data-day="0[1-7]"/g)||[]).length,7,'Seven interactive challenge panels required');
assert.equal((built.match(/<fieldset[^>]*\bdata-question(?=[\s>])/g)||[]).length,21,'Twenty-one accessible fieldsets required');
assert.equal((built.match(/<input[^>]*\btype="radio"/g)||[]).length,84,'Every question should have four radio choices');
assert.equal((built.match(/<form[^>]*\bdata-challenge-form(?=[\s>])/g)||[]).length,7,'Missing quiz forms');
assert.equal((built.match(/<button[^>]*\bdata-mark-day(?=[\s>])/g)||[]).length,7,'Missing gated review buttons');
assert.ok(built.includes('data-save-progress'),'Explicit opt-in control missing');
assert.ok(built.includes('data-clear-progress'),'Reset control missing');
assert.ok(built.includes('data-progress-bar'),'Progress display missing');

assert.ok(component.includes('save.checked = false'),'Saving must default off');
assert.ok(component.includes("save.addEventListener('change'"),'Storage access must require opt-in');
assert.ok(component.includes('window.localStorage.getItem(key)'),'Optional restore unavailable');
assert.ok(component.includes('window.localStorage.setItem(key'),'Optional browser saving unavailable');
assert.ok(component.includes('window.localStorage.removeItem(key)'),'Browser progress removal unavailable');
assert.ok(component.includes('window.confirm('),'Reset should require an explicit confirmation');
assert.ok(component.includes("fields.some(field => !field.querySelector("),
  'Unanswered quizzes must not be scored');
assert.ok(component.includes('document.createElement('),'Feedback must be safely DOM-constructed');
assert.ok(component.includes('feedback.replaceChildren('),'Clear previous feedback on retake/reset');
assert.ok(component.includes('role="status"')&&component.includes('aria-live="polite"'),
  'Accessible scoring feedback missing');
assert.ok(!/\b(?:fetch|XMLHttpRequest|sendBeacon|document\.cookie)\s*\(/.test(component),
  'Challenge must not send answers or use cookies');
assert.ok(!/name="(?:email|phone|full-name|password)"/i.test(component),
  'Challenge must not collect identifying information');

const homeSource=source('src/content/docs/index.mdx');
const before=[
  '<FoundationHero />',
  '<FoundationAudiencePaths />',
  '<FoundationChallengePromo />',
  '<FoundationModuleExplorer featured={true} />',
  '<GoHackersCloudOfferings />',
];
let pos=-1;
for(const item of before){
  const i=homeSource.indexOf(item);
  assert.ok(i>pos,'Homepage challenge must appear between paths and free modules: '+item);
  pos=i;
}
const home=page('/');
assert.ok(home.includes('challenge-promo'),'Homepage challenge card missing');
assert.ok(home.includes(route),'Homepage challenge CTA broken');
assert.ok(promo.includes(route),'Promo component missing challenge link');
assert.ok(page('/start-here/').includes(route),'Start Here must link to challenge');
assert.ok(page('/paths/students/').includes(route),'Student path must link to challenge');
assert.ok(page('/paths/professionals/').includes(route),'Professional path must link to challenge');
const nav=source('astro.config.mjs');
assert.ok(nav.includes("ghcExploreGroups.map(group=>") &&
  ghcExploreRoutes.includes('/7-day-challenge/'),
  'Challenge must be discoverable from the grouped Explore navigation');
const foundationGroup=ghcExploreGroups.find(group=>group.id==='foundation');
const careerGroup=ghcExploreGroups.find(group=>group.id==='careers');
assert.ok(foundationGroup&&careerGroup&&
 ghcExploreGroups.indexOf(foundationGroup)<ghcExploreGroups.indexOf(careerGroup),
 'Free Foundation learning must precede career pathways');
const firstLink=foundationGroup.links.findIndex(link=>link.href==='/start-here/');
const challengeLink=foundationGroup.links.findIndex(link=>link.href==='/7-day-challenge/');
assert.ok(firstLink>=0&&challengeLink>firstLink,
 'The seven-day challenge should follow Start Here inside the free learning group');

for(const match of markdown.matchAll(/\]\((\/[^)#?]+)(?:[?#][^)]*)?\)/g))page(match[1]);
for(const path of ['/curriculum/','/ghc-labs/','/about-gohackerscloud/catalog/'])page(path);
console.log('Free 7-Day Challenge QA passed: 7 lesson-linked tasks, 21 original explained questions, 84 radio choices, opt-in local progress, clear/reset and homepage/nav discovery.');
