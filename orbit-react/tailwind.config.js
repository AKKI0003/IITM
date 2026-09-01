/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // One cohesive palette: deep ink navy + a single warm accent,
        // built on warm neutrals so every section reads as one family.
        "ink-navy": "#101B2D",
        "ink-navy-soft": "#182946",
        "civic-amber": "#D9922F",
        "civic-amber-dark": "#B87620",
        "civic-amber-soft": "#F2D9AE",
        // kept as aliases so existing components referencing the old
        // teal/transit tokens still resolve to the new single accent
        "transit-teal": "#182946",
        "transit-teal-dark": "#101B2D",
        "signal-red": "#B8483C",
        "civic-steel": "#5C7A93",
        "civic-moss": "#71805B",
        mist: "#F3F0E9",
        paper: "#FAF8F3",
        slate: "#4B5360",
        "slate-light": "#848C96",
        line: "#E7E1D4",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Segoe UI"', "sans-serif"],
        serif: ['"Fraunces"', "Georgia", "serif"],
        body: ['"IBM Plex Sans"', '"Segoe UI"', "sans-serif"],
        mono: ['"IBM Plex Mono"', '"Courier New"', "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
      },
      spacing: {
        section: "88px",
      },
    },
  },
  plugins: [],
};
