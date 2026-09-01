// Kept as a thin re-export so every existing `import Button from "./Button"`
// across the site keeps working unchanged. The real implementation now
// lives in ./ui/button.jsx, following the shadcn/ui folder convention
// (primitives in components/ui/, feature components elsewhere).
export { default } from "./ui/button";
