import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {ghcLabTracks} from '../src/data/ghc-labs-tracks.mjs';

const distPath=(route)=>join('dist',route.replace(/^\/+/,''),'index.html');
const htmlFor=(route)=>{
  const path=distPath(route);
  assert.ok(existsSync(path),`Missing built public page: ${route}`);
  return readFileSync(path,'utf8');
};

const homepage=htmlFor('/');
for(const route of ['/learning-hub/cloud-security-roadmap/','/learning-hub/aws-clf-c02/','/learning-hub/it-interview/','/ghc-labs/']){
  assert.ok(homepage.includes(route),`Homepage must introduce ${route}`);
}

const guides=[
  {id:'cloud-security-roadmap',label:'Cloud Security Engineer'},
  {id:'aws-clf-c02',label:'AWS Cloud Practitioner'},
  {id:'it-interview',label:'IT Interview'},
];
for(const guide of guides){
  const directory=`src/content/docs/learning-hub/${guide.id}`;
  const files=readdirSync(directory).filter(file=>file.endsWith('.md') && file!=='index.md').sort();
  assert.equal(files.length,14,`Expected 14 substantial chapters for ${guide.id}`);
  const overview=htmlFor(`/learning-hub/${guide.id}/`);
  for(const file of files){
    const route=`/learning-hub/${guide.id}/${file.replace(/\.md$/,'')}/`;
    const markdown=readFileSync(join(directory,file),'utf8');
    assert.ok(markdown.length>1000,`Chapter is too brief: ${file}`);
    assert.ok(markdown.includes('description:'),`Missing page description: ${file}`);
    assert.ok(overview.includes(route),`Missing chapter navigation for ${route}`);
    const html=htmlFor(route);
    assert.ok(html.includes('contents')||html.includes('Guide')||html.includes('Handbook'),`Chapter lacks navigation: ${route}`);
  }
  console.log(`Guide validated: ${guide.label}, ${files.length} linked chapters`);
}

assert.equal(ghcLabTracks.length,13,'Academy overview must list exactly 13 known tracks');
assert.equal(new Set(ghcLabTracks.map(track=>track.id)).size,13,'Track IDs must be unique');
const labs=htmlFor('/ghc-labs/');
for(const track of ghcLabTracks){
  assert.ok(labs.includes(`https://academy.gohackerscloud.com/tracks/${track.id}/`),`Missing track: ${track.id}`);
}
assert.ok(labs.includes('Official demo video'), 'A truthful demo placeholder is expected until a video ID is published');
assert.ok(labs.includes('https://gohackerscloud.com/hands-on-cybersecurity-labs'),'Lab subscriptions link missing');
for(const page of ['how-it-works','track-selection','instructor-demo','faq']){
  htmlFor(`/ghc-labs/${page}/`);
}
console.log('Expanded guide and GHC Labs checks passed: 42 chapters, 3 hub pages, 13 tracks, demo and membership links.');
