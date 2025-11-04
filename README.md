# trizpro.app — Static Starter

A fast, accessible, **static** site (no frameworks) to showcase TRIZ + AI mini apps from the Vibe Coding community.

## Files
- `index.html` — main page with sections (Hero, Showcase, Creators, Testimonials, Submit, About)
- `styles.css` — light theme only
- `main.js` — sample dataset + rendering + filters + modal + schema
- `privacy.html`, `terms.html` — legal basics
- `robots.txt`, `sitemap.xml` — SEO helpers
- `assets/` — placeholder images (OG + favicons + thumbnails + avatars)

## Edit the dataset
Open `main.js` and modify the `DATA` constant:
- Add to `apps[]`, `creators[]`, and `testimonials[]`.
- Thumbnails live under `/assets/apps/…` and avatars under `/assets/creators/…`.

## Local preview
Just open `index.html` in a browser, or run a simple server:
```bash
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy
### GitHub Pages
1. Create a repo and push these files to the root (or `/docs`).
2. In **Settings → Pages**, choose the branch (`main`) and root folder.
3. Open your Pages URL.

### Vercel (static)
1. Import the repo in Vercel.
2. Framework preset: **Other** (no build). Output dir: `/`.
3. Deploy. Add custom domain `trizpro.app` if desired.

## Notes
- No dark mode codepaths included.
- All interactivity is client-side; no external network calls.
