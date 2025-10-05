# Azmyth — Vibe Coaching (static site)

A silly, sparkly landing page for Azmyth's vibe coaching.

## Quick start

- Open `index.html` in your browser.
- Edit content directly in `index.html` as needed.

## Photo

- Place Azmyth's photo in the `photos/` folder.
- The homepage currently points to `photos/484315527_649693667766322_1444558563975577862_n.jpg`.
- To change the image, replace that file or update the `src` in `index.html`.
- A square image (e.g., 1200×1200) gives the best circular crop.

## Booking link

- The "Book a call" buttons use a `data-booking-url` attribute.
- Update both button elements in `index.html` to your actual booking URL, e.g. `https://cal.com/your-handle/azmyth`.
- No code changes required beyond swapping the URL.

## Customize

- Colors and animations are in `styles.css`.
- Light JavaScript for confetti and year stamping lives in `script.js`.

## Deploy

- No build step required — this is a static site. Options:

### GitHub Pages
This repo includes a GitHub Actions workflow that auto-deploys to Pages on pushes to `main`.

Steps:
1) Create repo and push:

Using GitHub CLI:
```bash
gh repo create <your-username>/<repo-name> --public --source=. --remote=origin --push
```

Using plain git:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

2) Enable Pages:
- Go to Settings → Pages → Build and deployment → Source: GitHub Actions.

3) Custom domain (optional):
- In Settings → Pages, add your domain (e.g., `azmyth.com`).
- Add the DNS record your registrar requires (typically a CNAME to `<user>.github.io`).
- GitHub will place a `CNAME` file automatically.

Note: `.nojekyll` is included to skip Jekyll.

### Netlify
1. Drag-and-drop the folder at the Netlify dashboard, or connect the repo.
2. Publish directory: `.` (root). No build command.
3. Custom domain: add your domain and follow Netlify's DNS/CNAME instructions.
4. `netlify.toml` is included; nothing else is required.

### Vercel
1. `npm i -g vercel` (if you haven't), then run `vercel` in this folder.
2. Accept defaults; Vercel will detect a static project. Publish directory is `.`.
3. Add your custom domain in Vercel and follow their DNS (CNAME/A) guidance.
4. `vercel.json` is included with basic static settings.
