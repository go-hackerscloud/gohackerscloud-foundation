import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';

// Non-blocking audit-only report. Built HTML is the source; manual
// browser checks are separate. No pages, CSS or routes are modified.
const base='https://foundation.gohackerscloud.com';
const config=readFileSync('astro.config.mjs','utf8');
const explore=config.split("label: 'Explore GoHackersCloud'")[1]?.split("label: 'Foundation Learning Stages'")[0]||'';
const routes=[...new Set([...explore.matchAll(/link:\s*'(\/[^']*)'/g)].map(m=>m[1]))];
const issues=[];
const counts={routes:routes.length,internalLinks:0,externalLinks:0,images:0};
const reportIssue=(severity,route,rule,detail)=>issues.push({severity,route,rule,detail});
const htmlPath=route=>join('dist',route.replace(/^\/+/,''),'index.html');
const readRoute=route=>readFileSync(htmlPath(route),'utf8');
const attr=(tag,key)=>{const match=tag.match(new RegExp('\\b'+key+'\\s*=\\s*(?:"([^"]*)"|\\x27([^\\x27]*)\\x27)','i'));return match?.[1]??match?.[2];};
if(routes.length!==16)reportIssue('review','/','sidebar-routes','Expected 16 Explore routes; found '+routes.length);
for(const route of routes){
  if(!existsSync(htmlPath(route))){reportIssue('high',route,'missing-page','No built index.html');continue;}
  const html=readRoute(route);
  const h1=[...html.matchAll(/<h1(?:\s|>)/g)].length;
  if(h1!==1)reportIssue('high',route,'h1','Expected one H1; found '+h1);
  if(!/<title[^>]*>[^<]+<\/title>/i.test(html))reportIssue('high',route,'title','Missing title');
  if(!/<meta[^>]+name=["']description["']/i.test(html))reportIssue('review',route,'description','Check meta description (possibly reversed attribute order)');
  const seen=new Set();
  for(const match of html.matchAll(/<a\b[^>]*>/gi)){
    const href=attr(match[0],'href');
    if(!href){reportIssue('review',route,'anchor','Anchor without href');continue;}
    if(/^(mailto:|tel:|javascript:|data:)/i.test(href))continue;
    let url;
    try{url=new URL(href,base+route);}catch{continue;}
    if(!['https:','http:'].includes(url.protocol))continue;
    if(url.origin!==base){counts.externalLinks++;continue;}
    counts.internalLinks++;
    const pathname=decodeURIComponent(url.pathname);
    const key=pathname+url.hash;
    if(seen.has(key))continue;seen.add(key);
    const htmlTarget=htmlPath(pathname.endsWith('/')?pathname:pathname+'/');
    const assetTarget=join('dist',pathname.replace(/^\/+/,''));
    if(!existsSync(htmlTarget)&&!existsSync(assetTarget)){reportIssue('high',route,'broken-internal-link',href);continue;}
    if(url.hash&&existsSync(htmlTarget)){
      const target=readRoute(pathname.endsWith('/')?pathname:pathname+'/');
      const fragment=decodeURIComponent(url.hash.slice(1));
      const ids=[...target.matchAll(/\bid=["']([^"']+)["']/g)].map(x=>x[1]);
      if(!ids.includes(fragment))reportIssue('review',route,'fragment-not-in-static-html',href);
    }
  }
  for(const match of html.matchAll(/<img\b[^>]*>/gi)){
    counts.images++;
    if(attr(match[0],'alt')===undefined)reportIssue('review',route,'image-alt',attr(match[0],'src')||'image');
  }
}
const result={
  name:'Foundation P5 audit-first static scan',
  scope:'16 Explore routes from Astro config, built HTML only',
  counts,
  findings:issues,
  limitations:[
    'Not a full accessibility or WCAG audit',
    'No browser layout, mobile zoom, keyboard or screen-reader testing',
    'No Lighthouse, Core Web Vitals or remote external-link verification',
    'Fragments inserted after hydration may be reported for manual review'
  ]
};
const dest='dist/foundation-p5-audit.json';
writeFileSync(dest,JSON.stringify(result,null,2)+'\n');
console.log('P5 static audit: '+routes.length+' routes, '+counts.internalLinks+' internal links, '+issues.length+' findings. Report: '+dest);
for(const issue of issues.slice(0,30))console.log('AUDIT ['+issue.severity+'] '+issue.route+' '+issue.rule+' '+issue.detail);
if(issues.length>30)console.log('Additional findings in '+dest);
// Observational only. Separate fix PRs will address confirmed findings.
