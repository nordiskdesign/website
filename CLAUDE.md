# Nordisk Design — Portfolio Website

## What this is
A frontend-only portfolio site for selling web development services. Visitors see a grid of previously built client websites, each with a live scaled-down preview.

**Live URL:** https://nordiskdesign.github.io/website/
**Repo:** https://github.com/nordiskdesign/website
**Stack:** React 18 + TypeScript + Vite 6
**Deployment:** GitHub Actions → GitHub Pages (auto-deploys on push to `main`)

---

## Project structure

```
src/
  data/
    sites.ts          — list of portfolio sites (name, description, url, tags)
  components/
    SiteCard.tsx      — individual card with scaled iframe preview
    SiteCard.module.css
  App.tsx             — page layout, renders the grid
  App.module.css
  main.tsx
  index.css           — global reset
.github/
  workflows/
    deploy.yml        — build + deploy to GitHub Pages
vite.config.ts        — base: '/website/' (required for GitHub Pages)
```

---

## Key decisions

- **`base: '/website/'` in vite.config.ts** — required because the site lives at a subpath on GitHub Pages, not the root. Do not remove this.
- **iframe previews** — each card renders the target site in a 1440px iframe scaled down via CSS `transform: scale()`. A `ResizeObserver` keeps the scale in sync with the card width. A transparent overlay div blocks interaction with the iframe.
- **CSS Modules** — scoped styles per component, no CSS framework.
- **No backend** — purely static. No Supabase, no API, no server.
- **Custom domain** — not set up yet, will be added later. Don't hardcode the github.io URL.

---

## Adding a new site to the grid

Edit `src/data/sites.ts` and add an entry:

```ts
{
  id: 'unique-slug',
  name: 'Client Name',
  description: 'One or two sentences about the site.',
  url: 'https://their-site.com',
  tags: ['Tag one', 'Tag two'],
}
```

That's it — the card renders automatically.

## iframe caveat
Sites that set `X-Frame-Options: DENY` will show blank in the preview. For those, a static screenshot fallback will be needed (not yet implemented).

---

## Planned next steps

- [ ] Replace placeholder sites in `sites.ts` with real client work
- [ ] Decide on a site name / domain and update the header + page title
- [ ] Add a static screenshot fallback for sites that block iframes
- [ ] Set up a custom domain on GitHub Pages
- [ ] Consider a contact section or CTA for potential clients
