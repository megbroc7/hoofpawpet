import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const redirects = JSON.parse(await readFile("src/content/blog-redirects.json", "utf8"));
const corrections = JSON.parse(await readFile("src/content/blog-corrections.json", "utf8"));
const base = process.argv[2];

function checkHtml(html, label) {
  const text = html.replace(/<[^>]*>/g, " ").replaceAll("&amp;", "&").replaceAll("&#x27;", "'");
  for (const claim of ["Insured & Bonded", "fully insured and bonded", "She's insured and bonded", "We're insured", "handled by Sheryl: insured", "Insured and experienced", "Insured, bonded, and backed"]) {
    assert.ok(!text.includes(claim), `${label}: false claim ${claim}`);
  }
  const links = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1].split(/[?#]/)[0]);
  for (const source of Object.keys(redirects)) {
    assert.ok(!links.some((href) => href === `/blog/${source}` || href.endsWith(`hoofpawpet.com/blog/${source}`)), `${label}: retired blog link ${source}`);
  }
}

if (base) {
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  for (const source of Object.keys(redirects)) assert.ok(!urls.includes(`/blog/${source}`));
  for (const destination of Object.values(redirects)) assert.ok(urls.includes(`/blog/${destination}`));
  for (let i = 0; i < urls.length; i += 4) {
    await Promise.all(urls.slice(i, i + 4).map(async (url) => {
      const response = await fetch(`${base}${url}`);
      assert.equal(response.status, 200, url);
      const html = await response.text();
      checkHtml(html, url);
      assert.ok(html.includes(`rel="canonical" href="https://www.hoofpawpet.com${url === "/" ? "/" : url}"`), `${url}: canonical`);
      for (const [, replacement] of corrections[url.split("/").at(-1)] ?? []) {
        if (replacement) assert.ok(html.includes(replacement), `${url}: missing correction`);
      }
    }));
  }
  for (const [source, destination] of Object.entries(redirects)) {
    const response = await fetch(`${base}/blog/${source}?utm_source=verification`, { redirect: "manual" });
    assert.equal(response.status, 308, source);
    assert.equal(new URL(response.headers.get("location"), base).pathname, `/blog/${destination}`);
    assert.equal(new URL(response.headers.get("location"), base).searchParams.get("utm_source"), "verification");
  }
  console.log(`PASS: ${urls.length} live pages, ${urls.filter((u) => u.startsWith("/blog/")).length} retained articles, 12 redirects, canonicals, corrected claims and internal links.`);
} else {
  async function inspect(directory) {
    let count = 0;
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) count += await inspect(filename);
      else if (filename.endsWith(".html")) {
        checkHtml(await readFile(filename, "utf8"), filename);
        count++;
      }
    }
    return count;
  }
  const count = await inspect(".next/server/app");
  const routes = JSON.parse(await readFile(".next/routes-manifest.json", "utf8"));
  for (const [source, destination] of Object.entries(redirects)) {
    assert.ok(!Object.hasOwn(redirects, destination), `Redirect chain: ${source}`);
    assert.ok(routes.redirects.some((r) => r.source === `/blog/${source}` && r.destination === `/blog/${destination}` && r.statusCode === 308));
    await readFile(`.next/server/app/blog/${destination}.html`);
  }
  for (const [slug, pairs] of Object.entries(corrections)) {
    const html = await readFile(`.next/server/app/blog/${slug}.html`, "utf8");
    for (const [before, after] of pairs) {
      assert.ok(!html.includes(before), `${slug}: original claim remains`);
      if (after) assert.ok(html.includes(after), `${slug}: missing correction`);
    }
  }
  console.log(`PASS: ${count} built pages; 12 one-hop permanent redirects with existing destinations; all known false insurance claims removed.`);
}
