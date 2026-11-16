import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const readOutput = (file) => {
  const pathname = join(dist, file);
  assert.ok(existsSync(pathname), `Missing built artifact: ${pathname}`);
  return readFileSync(pathname, 'utf8');
};

const homepage = readOutput('index.html');
const robots = readOutput('robots.txt');
const llms = readOutput('llms.txt');
const sitemapIndex = readOutput('sitemap-index.xml');

assert.match(homepage, /GoHackersCloud Foundation/i, 'Homepage title is missing');
assert.match(homepage, /<main\b/i, 'Expected server-readable HTML content');
assert.match(homepage, /application\/ld\+json/i, 'Structured WebSite data missing');
assert.match(homepage, /rel="sitemap"/i, 'Sitemap discovery link missing');

assert.match(robots, /^User-agent:\s*\*\s*$/m);
assert.match(robots, /^Allow:\s*\/\s*$/m);
assert.match(robots, /^Content-Signal:\s*search=yes,\s*ai-train=no\s*$/m);
assert.match(robots, /^Sitemap:\s*https:\/\/foundation\.gohackerscloud\.com\/sitemap-index\.xml\s*$/m);
assert.match(llms, /# GoHackersCloud Foundation/);
assert.match(llms, /https:\/\/foundation\.gohackerscloud\.com\//);

const sitemapURLs = [...sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.ok(sitemapURLs.length > 0, 'Sitemap index contains no sitemap files');

let combined = '';
for (const absoluteURL of sitemapURLs) {
  const url = new URL(absoluteURL);
  assert.equal(url.hostname, 'foundation.gohackerscloud.com');
  const filename = decodeURIComponent(url.pathname.replace(/^\//, ''));
  assert.match(filename, /^sitemap-\d+\.xml$/);
  const sitemap = readOutput(filename);
  assert.match(sitemap, /<urlset\b/);
  combined += sitemap;
}

assert.ok(combined.includes('https://foundation.gohackerscloud.com/'), 'Homepage absent from sitemap');
assert.ok(combined.includes('/foundation/'), 'Foundation lessons absent from sitemap');
console.log(`Foundation discovery checks passed (${sitemapURLs.length} sitemap file(s)).`);
