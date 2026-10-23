// Rebuilds worker.js from index.html. Run: node build.js
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const worker = `const HTML = ${JSON.stringify(html)};
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname.startsWith("www.")) { url.hostname = url.hostname.slice(4); return Response.redirect(url.toString(), 301); }
    if (url.pathname !== "/" && url.pathname !== "/index.html") { return Response.redirect(url.origin + "/", 302); }
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300", "x-frame-options": "DENY", "x-content-type-options": "nosniff", "referrer-policy": "strict-origin-when-cross-origin" } });
  }
};
`;
fs.writeFileSync("worker.js", worker);
console.log("worker.js rebuilt");
