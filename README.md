# Lakshmana Selvan V — SAP ABAP Developer portfolio

A one-page portfolio built with **Next.js 16**, **TypeScript** and **Tailwind CSS v4**, using the "Clean Corporate" theme (white background, SAP-inspired blue, charcoal text). It exports as a fully static site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to /out
npm start          # serves /out locally
```

## Edit the content

All text lives in **`src/data/profile.ts`**. You don't need to touch the components.

| What | Where in `profile.ts` |
|---|---|
| Name, role, tagline, email, LinkedIn | `profile` |
| Show your phone number | set `profile.phone` to `"+91 XXXXX XXXXX"` |
| Add a résumé download | copy your PDF to `public/resume.pdf`, then set `profile.resumeUrl` to `"/resume.pdf"` |
| GitHub link | `profile.github` (shown when set) |
| Skills (mark in-progress ones with `learning: true`) | `skillGroups` |
| Job history | `experience` |
| Projects | `projects` |
| Education and certifications | `education`, `certifications` |

## Change the colours

The design tokens live at the top of `src/app/globals.css` (`--primary`, `--ink`, `--muted` …). Every text colour pair passes WCAG 2.2 AA contrast. If you change a colour, recheck it with a contrast checker (4.5:1 for body text).

## Deploy

- **Vercel:** import the repository; it detects Next.js automatically.
- **Netlify, GitHub Pages or any static host:** run `npm run build` and upload the `out/` folder.

## Accessibility

Designed to meet WCAG 2.2 AA. It includes a skip link, semantic landmarks, one H1, visible keyboard focus, 44px tap targets, reflow down to 320px, and respects reduced-motion settings. Before you share it, run a Lighthouse or axe check in your browser and do a quick screen-reader pass (VoiceOver: Cmd+F5).
