import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const pkg=JSON.parse(readFileSync('package.json','utf8'));
const lock=JSON.parse(readFileSync('package-lock.json','utf8'));

assert.equal(pkg.overrides?.katex,'0.18.2',
  'Patched KaTeX version must stay pinned pending upstream Mermaid support');
assert.equal(lock.packages['']?.overrides?.katex,'0.18.2',
  'package-lock must agree with the reviewed override');

const katexEntries=Object.entries(lock.packages).filter(([name])=>
  name==='node_modules/katex' || name.endsWith('/node_modules/katex')
);
assert.ok(katexEntries.length>=1,'Installed KaTeX dependency missing');
for(const [path,item] of katexEntries){
  assert.equal(item.version,'0.18.2','Vulnerable/transitive KaTeX version: '+path);
  assert.ok(item.resolved?.endsWith('/katex-0.18.2.tgz'),
    'KaTeX tarball is not the reviewed 0.18.2 release: '+path);
  assert.match(item.integrity||'',/^sha512-/,
    'Resolved KaTeX dependency lacks an integrity hash: '+path);
}

// Mermaid 11.17.2 is pinned for continuity; upgrading Mermaid to 12.x
// would be a separate compatibility review affecting many diagrams.
assert.equal(pkg.dependencies.mermaid,'11.17.2',
  'Mermaid upgrade is out of scope for this controlled remediation');
assert.equal(lock.packages['node_modules/mermaid']?.version,'11.17.2');

// Exercise the patched renderer through its public library entry point.
const katex=require('katex');
const math=katex.renderToString('\\frac{a}{b}+x^2',{
  throwOnError:true,
  trust:false,
  output:'htmlAndMathml',
});
assert.match(math,/katex-html/,'Patched KaTeX did not render normal math to HTML');
assert.match(math,/katex-mathml/,'Patched KaTeX did not render accessibility MathML');

// Picomatch remains a separate, unresolved upstream advisory.
// We intentionally do not suppress npm audit or claim this check is a pass.
const picomatch=Object.entries(lock.packages).filter(([p])=>
  p==='node_modules/picomatch' || p.endsWith('/node_modules/picomatch')
);
assert.ok(picomatch.length>=1,'Expected upstream glob dependency is missing');
console.log('KaTeX remediation verified: '+katexEntries.length+
  ' lockfile package(s) on 0.18.2, integrity present, and math renders.');
console.log('Remaining Picomatch packages (not a security clearance): '+
  picomatch.map(([p,v])=>p+'@'+v.version).join(', '));
console.log('Full npm audit remains REQUIRED and is not weakened by this check.');
