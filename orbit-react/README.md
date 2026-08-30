# Orbit Smart City — Portal (React + Tailwind)

A pixel-faithful React + Tailwind CSS port of the "Orbit Smart City Portal" template. All sections, copy, colors, spacing,
icons, and responsive breakpoints have been reproduced using componentized
React (JSX) with Tailwind utility classes instead of a separate stylesheet.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build (outputs to dist/)
```

## Project structure

```
src/
  components/
    Icons.jsx        # all line icons, ported from the original <symbol> sprite
    IconBadge.jsx     # reusable colored icon badge
    Container.jsx     # max-width + padding wrapper (was .container)
    Button.jsx        # primary / ghost / outline button variants
    SectionHeader.jsx # eyebrow + heading + description block used across sections
    NoticeBanner.jsx
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    Emergency.jsx
    Transport.jsx
    Tourism.jsx
    Events.jsx
    News.jsx
    Departments.jsx
    Gallery.jsx
    FAQ.jsx
    Contact.jsx
    Feedback.jsx
    Footer.jsx
  App.jsx
  index.css           # Tailwind directives + minimal global styles
  main.jsx
tailwind.config.js     # design tokens (colors, fonts) matching the original :root variables
```

## Notes

- Design tokens (`--ink-navy`, `--civic-amber`, `--transit-teal`, fonts, radii)
  from the original `css/style.css` `:root` block were moved into
  `tailwind.config.js` under `theme.extend`.
- Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) are loaded in
  `index.html`, same as the original.
- The original had no interactive JavaScript (static markup only), so this
  port is likewise static markup, componentized into JSX.
- All copy, numbers, and section ordering are unchanged from the source template.
