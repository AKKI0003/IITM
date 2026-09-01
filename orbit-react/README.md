# Orbit Smart City — Citizen Portal

A React + Vite + Tailwind CSS municipal "one-stop citizen portal" concept site: services, emergency helplines, transport, tourism, events, news, departments, a photo gallery, FAQs, contact/feedback forms.

This README documents **what changed, why, how it's built, and where to touch things** — read it before you edit anything below.

---

## 1. Quick start

```bash
cd orbit-react
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint        # oxlint
```

No environment variables or backend are required — all data (services, events, gallery photos, etc.) lives in-repo as static arrays/objects at the top of each component file, or in `src/data/mockData.js`.

---

## 2. What changed in this pass, and why

### 2.0 Running the real shadcn / skiper-ui / taste-skill / react-bits tools yourself

These couldn't run inside the sandbox that built this (its network is locked to package registries only — see §2.2). On your own machine, with normal internet access, they will work. Do this **after** `npm install`, from inside `orbit-react/`:

```bash
# 1) shadcn/ui — one-time setup, writes components.json
npx shadcn@latest init
# It will ask which style/base-color to use. This project already has
# the equivalent of that setup by hand (see src/lib/utils.js, tailwind
# tokens in tailwind.config.js) — if init complains a file already
# exists, that's why; you can still let it write components.json.

# 2) Add any real shadcn component — installs into src/components/ui/
npx shadcn@latest add card
npx shadcn@latest add tabs
npx shadcn@latest add sonner
# etc. Each one drops a new file in src/components/ui/ next to the
# hand-built button.jsx / dialog.jsx / accordion.jsx already there.

# 3) skiper-ui (community shadcn-registry, e.g. skiper4 blocks)
npx shadcn@latest add https://skiper-ui.com/r/skiper4.json
# skiper-ui distributes *through* the shadcn CLI's registry protocol,
# so you use `shadcn add <url-to-their-registry-json>`, not a
# separate `skiper-ui` CLI. Grab the exact URL for each block from
# https://skiper-ui.com — every block's page has a copyable command.

# 4) Leonxlnx/taste-skill
# This is a Claude Code / Claude *skill* (a folder of instructions
# for me to follow), not an npm package — there's no npx install for
# it. To use it: open this project in Claude Code, then ask Claude to
# install the skill from https://github.com/Leonxlnx/taste-skill
# (Claude Code can `git clone` it into your skills folder and load it
# automatically). Once loaded, ask Claude Code to apply it to a
# component and it'll restyle using that skill's taste rules.

# 5) react-bits (https://github.com/DavidHDev/react-bits)
# Not a package either — it's a component gallery you copy-paste
# from. Browse https://reactbits.dev, pick an animation/effect, and
# copy its source into src/components/ui/ (it's Tailwind + Framer
# Motion, so it'll fit right in next to reveal.jsx).
```

If you want, hand this project to Claude Code (not this sandboxed chat) and ask it to run steps 1–3 for real — it has normal outbound network access and can actually fetch from `ui.shadcn.com` / `skiper-ui.com`.

### 2.1 The "boxy / choppy" feel + the white bottom cut
The page was a vertical stack of `<section>` blocks, each with a flat background color (`bg-ink-navy`, `bg-mist`, `bg-paper`/none) directly abutting the next section with a hard 1px edge. Where a dark section (Hero, Emergency) met a light one, that edge reads as a harsh, ugly seam — that's the "bad white bottom" you saw right under the Hero stats row.

**Fix:** `src/components/ui/section-divider.jsx` — a small SVG "wave" that sits between two sections and is filled with the *next* section's exact color, so the transition curves instead of cutting. Wired into `App.jsx` around `<Hero />` and `<Emergency />` (the two full-bleed dark sections). If you add another full-bleed dark section, drop a `<SectionDivider to="<hex of the next section's bg>" />` before/after it the same way.

The "choppy" feeling was also partly about *timing*: every section was simply present on page load with no sense of sequence. **Fix:** `src/components/ui/reveal.jsx` — a Framer Motion wrapper that fades + slides a section up into place the first time it scrolls into view (`whileInView`, `once: true`). Every major section below the fold is now wrapped in `<Reveal>` in `App.jsx`. Hero/About are intentionally left un-animated since they're above the fold — animating first-paint content only delays perceived load.

### 2.2 "Use shadcn / skiper-ui / react-bits / taste-skill"
I attempted the literal commands you gave:

```bash
npx shadcn add @skiper-ui/skiper4
npx skills add Leonxlnx/taste-skill
```

Both need to reach `ui.shadcn.com` (and the skiper/taste-skill registries) over the network. This sandbox's egress is allow-listed to package registries only (npm, PyPI, GitHub) — not those registry hosts — so the CLI installer itself cannot complete here. Rather than fake it, I did what the CLI *would have done* by hand:

- **shadcn/ui's actual pattern** — unstyled Radix primitive + a small styled wrapper you own and can edit, using `class-variance-authority` for variants and a `cn()` class-merge helper. That's exactly `src/lib/utils.js` + `src/components/ui/*`.
- **react-bits' idea of small reusable motion primitives** — `ui/reveal.jsx` (scroll-reveal) is that pattern, built on `framer-motion` (installed for real, from npm).
- All of it lives in `src/components/ui/`, the same folder shadcn's CLI writes to, so if you get local network access to run the real CLI later, anything it adds will sit alongside these without conflict.

If you *do* have shadcn/skiper-ui reachable on your own machine (outside this sandbox), you can now run `npx shadcn@latest add <component>` for real — `components.json` conventions are compatible with what's here (`cn()` in `src/lib/utils.js`, Tailwind config already has the needed tokens).

### 2.3 New dependencies (installed for real, via npm)

| Package | Why |
|---|---|
| `class-variance-authority` | Variant system for `Button` (shadcn/ui's standard approach) |
| `clsx` + `tailwind-merge` | `cn()` helper — merges/deduplicates Tailwind classes safely |
| `@radix-ui/react-dialog` | Accessible modal primitive → powers the Gallery lightbox |
| `@radix-ui/react-accordion` | Accessible accordion primitive → powers the FAQ section |
| `framer-motion` | Scroll-reveal (`Reveal`) + dialog entrance animation |
| `lucide-react` | Icon set used inside the new `ui/` primitives (X, ChevronLeft/Right, Maximize2, ChevronDown) — the existing hand-drawn `Icons.jsx` sprite set is untouched and still used everywhere else |

---

## 3. New file structure

```
src/
  lib/
    utils.js               # cn() — class-merge helper (shadcn/ui standard)
  components/
    ui/                     # "shadcn-style" primitives — own this, edit freely
      button.jsx            # CVA-based Button with variant/size props
      dialog.jsx             # Radix Dialog + Framer Motion, styled
      accordion.jsx          # Radix Accordion, styled
      reveal.jsx              # scroll-reveal wrapper (react-bits style)
      section-divider.jsx    # SVG wave transition between sections
    Button.jsx              # now just `export { default } from "./ui/button"`
                             #   (kept so every existing `import Button from "./Button"`
                             #   across the codebase keeps working unchanged)
    Gallery.jsx              # rewritten: full-screen lightbox via Radix Dialog
    FAQ.jsx                  # rewritten: real accordion via Radix Accordion
    ...                     # all other feature components unchanged in structure,
                             #   only Tailwind classes tweaked (see §4)
  App.jsx                   # now also renders <SectionDivider> + wraps sections in <Reveal>
```

**Where to change things:**
- Want different button colors/sizes? → `src/components/ui/button.jsx`, edit the `cva(...)` variants object.
- Want the lightbox to look different? → `src/components/ui/dialog.jsx` (structure/behavior) or `src/components/Gallery.jsx` (content/layout inside it).
- Want a different scroll-in animation or to remove it? → `src/components/ui/reveal.jsx`, or just delete a `<Reveal>` wrapper in `App.jsx`.
- Want to remove/add a section divider? → edit `App.jsx`, `<SectionDivider to="#hex" />`.

---

## 4. The Gallery Lightbox (the assigned task) — exact code pointer

`src/components/Gallery.jsx` is the **only** file behind the lightbox feature (plus the shared `src/components/ui/dialog.jsx` primitive it now uses). Here's precisely what's different from the original, unmodified project you uploaded:

**Original `Gallery.jsx`** — a static grid only:
```jsx
export default function Gallery() {
  return (
    <section id="gallery" ...>
      <Container>
        <SectionHeader ... />
        <div className="grid ...">
          {items.map((g) => (
            <div key={g.label} className="group relative aspect-[4/3] ...">
              <img src={g.image} alt={g.label} ... />
              <div className="absolute inset-0 bg-gradient-to-t ...">
                {/* label/category/description overlay */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```
Clicking a photo did nothing — it was just a `<div>`.

**New `Gallery.jsx`** — three concrete additions:

1. **State** (top of the `Gallery` component):
   ```jsx
   const [activeIndex, setActiveIndex] = useState(null); // null = closed, else 0..7
   const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)), []);
   const prev = useCallback(() => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)), []);
   ```

2. **Each grid tile is now a `<button>` instead of a `<div>`, with an onClick:**
   ```jsx
   <button
     key={g.label}
     type="button"
     onClick={() => setActiveIndex(i)}
     aria-label={`Open ${g.label} in full screen`}
     className="group relative aspect-[4/3] ... text-left focus-visible:outline ..."
   >
     {/* same img + overlay as before, plus a Maximize2 icon on hover */}
   </button>
   ```

3. **A new `Lightbox` sub-component, rendered once at the bottom of `Gallery`:**
   ```jsx
   <Lightbox
     index={activeIndex}
     onOpenChange={(open) => !open && setActiveIndex(null)}
     onNext={next}
     onPrev={prev}
   />
   ```
   `Lightbox` (defined above `Gallery` in the same file) wraps Radix's `<Dialog>` (imported from `./ui/dialog`) and renders: the close ✕ button (`DialogClose`), the "n / 8" counter, the Prev/Next chevron buttons, and the full-size `<img>` + caption. It also adds a `keydown` listener for `ArrowLeft`/`ArrowRight` (Escape is already handled by Radix internally, so that's not hand-coded).

If you want to change **what happens when you click a photo**, edit #2. If you want to change **what the fullscreen viewer looks like**, edit the `Lightbox` function (top of `Gallery.jsx`) or its underlying `DialogContent` styling in `src/components/ui/dialog.jsx`. If you want to change **the photos themselves**, edit the `items` array at the top of `Gallery.jsx` — same array, untouched shape (`label`, `category`, `image`, `description`).

---

## 5. Design system notes

Colors/fonts/spacing tokens live in `tailwind.config.js` (unchanged — `ink-navy`, `civic-amber`, `transit-teal`, `paper`, `mist`, etc.) — this pass did **not** replace the palette, it changed how surfaces (buttons, cards, dialogs, dividers) express that palette: more elevation (layered shadows), consistent `rounded-xl` corners, subtle lift-on-hover motion, and now the section dividers/scroll reveals described above.

`src/index.css` gained two keyframe sets:
- `fadeIn`/`scaleIn` — no longer used directly (superseded by Framer Motion in the Dialog) but left in case you want a lightweight CSS-only alternative somewhere.
- `accordionDown`/`accordionUp` — drive the FAQ accordion's height animation via Radix's `--radix-accordion-content-height` CSS variable.

---

## 6. Known follow-ups (not done in this pass, flagged honestly)

- Only `Button`, the Gallery lightbox, and FAQ were migrated to the Radix/CVA "shadcn" pattern. Cards (Services/Departments/Transport/Events/News) still use the earlier hand-written Tailwind classes — functionally fine, just not yet re-expressed as `ui/card.jsx`. Say the word and I'll do that pass too.
- Real shadcn CLI / skiper-ui / taste-skill / react-bits installs need network access this sandbox doesn't have — run those yourself locally if you want their exact upstream source rather than the hand-built equivalents here.
