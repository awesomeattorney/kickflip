# kickflip.vc

Single-page brand site for Kickflip VC.

- `index.html` is the page.
- `worker.js` is the Cloudflare Worker that serves it inline on kickflip.vc. Regenerate it after editing index.html (see `build.js`).
- Pushes to `main` deploy through Workers Builds.
