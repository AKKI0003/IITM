/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "ink-navy": "#0E1B2B",
        "ink-navy-soft": "#16283F",
        "civic-amber": "#F2A93B",
        "civic-amber-dark": "#D68F22",
        "transit-teal": "#1E7A6C",
        "transit-teal-dark": "#145F54",
        "signal-red": "#D8483F",
        mist: "#EEF1F0",
        paper: "#FBFBF9",
        slate: "#4A5560",
        "slate-light": "#7A8790",
        line: "#DDE3E1",
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Segoe UI"', "sans-serif"],
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
