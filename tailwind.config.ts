import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        surface: {
          1: "oklch(var(--surface-1))",
          2: "oklch(var(--surface-2))",
          3: "oklch(var(--surface-3))",
        },
        neon: {
          cyan: "oklch(var(--neon-cyan))",
          purple: "oklch(var(--neon-purple))",
          blue: "oklch(var(--neon-blue))",
        },
      },
      boxShadow: {
        "glow-cyan":
          "0 0 0 1px oklch(var(--neon-cyan) / 0.35), 0 0 28px oklch(var(--neon-cyan) / 0.28)",
        "glow-purple":
          "0 0 0 1px oklch(var(--neon-purple) / 0.35), 0 0 28px oklch(var(--neon-purple) / 0.28)",
        "glow-blue":
          "0 0 0 1px oklch(var(--neon-blue) / 0.35), 0 0 28px oklch(var(--neon-blue) / 0.28)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, oklch(var(--grid-line) / 0.35) 1px, transparent 1px), linear-gradient(to bottom, oklch(var(--grid-line) / 0.35) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
} satisfies Config

export default config
