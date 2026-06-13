# Tyrese Thomas — Portfolio

Interactive 3D personal site. Built from scratch with React Three Fiber.

**Live:** https://portfolio-of7pm5liy-tyrese-s-projects38.vercel.app

## Stack

- **React + TypeScript** — UI and tab routing
- **React Three Fiber + drei** — the 3D hero scene (a distorted metallic blob with environment lighting, particles, mouse parallax, and scroll reaction)
- **Vite** — dev server and build
- **Plain CSS** — styling, no framework
- **Vercel** — hosting, auto-deploy on push

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Structure

- `src/content.ts` — all copy and links in one place
- `src/components/` — Scene/HeroBlob (3D), Nav (tabs), section components, case-study modal
- `src/hooks/` — scroll progress + reveal-on-scroll
- `public/images/` — project artwork
- `public/cv/` — CV (HTML source + generated PDF)
