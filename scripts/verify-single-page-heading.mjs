import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {join,relative} from 'node:path';

const root='src/content/docs';
const githubOwnedFolders=[
  'about-gohackerscloud',
  'core-it-devops',
  'curriculum',
  'ghc-labs',
  'learning-hub',
  'paths',
  'study-plan',
];
const rootFiles=['index.mdx','start-here.mdx'];
const routes=[
  '/about-gohackerscloud/',
  '/about-gohackerscloud/catalog/',
  '/about-gohackerscloud/courses/',
  '/about-gohackerscloud/cybersecurity-services/',
  '/about-gohackerscloud/lab-directory/',
  '/about-gohackerscloud/test-engine/',
  '/core-it-devops/',
  '/curriculum/',
  '/ghc-labs/',
  '/study-plan/',
  '/learning-hub/aws-clf-c02/',
  '/learning-hub/cloud-security-roadmap/',
  '/learning-hub/it-interview/',
];

function walk(directory){
  return readdirSync(directory,{withFileTypes:true}).flatMap(item=>{
    const path=join(directory,item.name);
    if(item.isDirectory())return walk(path);
    return /\.(md|mdx)$/i.test(item.name)?[path]:[];
  });
}

function bodyLevelH1(source){
  const frontmatter=/^---\r?\n[\s\S]*?\r?\n---\r?\n/;
  const found=frontmatter.exec(source);
  assert.ok(found,'Starlight page needs frontmatter');
  let inFence=false;
  let count=0;
  for(const line of source.slice(found[0].length).split(/\r?\n/)){
    if(/^\s*(?:\x60{3,}|~{3,})/.test(line)){
      inFence=!inFence;
      continue;
    }
    if(!inFence && /^#(?:\s|$)/.test(line))count++;
  }
  return count;
}

// For GitHub-owned content, Starlight frontmatter.title is the sole page H1.
// Leave Obsidian-owned original Foundation lessons untouched by this PR.
const authored=[
  ...githubOwnedFolders.flatMap(directory=>walk(join(root,directory))),
  ...rootFiles.map(file=>join(root,file)),
];
assert.ok(authored.length>=60,'Expected the full GitHub-owned public guide set');
for(const path of authored){
  const source=readFileSync(path,'utf8');
  assert.equal(bodyLevelH1(source),0,
    'Duplicate document heading in '+relative(root,path)+
    ': remove Markdown H1; Starlight already renders frontmatter.title');
}

for(const route of routes){
  const output=join('dist',route.replace(/^\/+/,''),'index.html');
  assert.ok(existsSync(output),'Required landing page missing '+route);
  const html=readFileSync(output,'utf8');
  const h1=(html.match(/<h1(?:\s|>)/g)||[]).length;
  assert.equal(h1,1,'Expected one rendered H1 on '+route+' but found '+h1);
  assert.ok(html.includes('name="description"'),'SEO description missing on '+route);
}

const catalog=readFileSync(join(root,'about-gohackerscloud/catalog.mdx'),'utf8');
assert.ok(catalog.includes('title: "GoHackersCloud Catalog — Courses, Labs & Services"'),
  'Concise promotional title was not retained');
assert.ok(catalog.includes('## 1. Choose your GoHackersCloud experience'),
  'Core promotional sections were accidentally removed');
assert.ok(catalog.includes('\x60\x60\x60mermaid'),'Catalog diagrams were removed');
assert.ok(catalog.includes('https://www.gohackerscloud.org/courses'),
  'Official catalog link was removed');
console.log(
 'Heading QA passed: '+authored.length+
 ' GitHub-maintained documents have no extra H1 and all '+
 routes.length+' key landing routes render exactly one title.'
);
