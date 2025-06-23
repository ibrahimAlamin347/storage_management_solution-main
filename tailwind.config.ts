import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "100": "#1E2A3A",  // darker shade of main
          DEFAULT: "#333F4E",  // your primary color
        },
        red: "#D15F5F",       // muted red to complement
        error: "#9E2B2B",     // deeper, more professional error color
        green: "#2DBE9D",     // slightly desaturated green
        blue: "#4A9FD8",      // softer blue
        pink: "#D49AE6",      // muted pink
        orange: "#E0965C",    // earthy orange
        light: {
          "100": "#333F4E",    // same as brand DEFAULT
          "200": "#8A9AB0",    // medium light gray-blue
          "300": "#E6EBF2",    // very light gray-blue
          "400": "#F0F4F9",    // off-white with blue tint
        },
        dark: {
          "100": "#0A0D12",    // very dark blue-black
          "200": "#1A212E",    // dark blue-gray
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#333F4E",  // using your primary color
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#4A9FD8",  // using the blue from above
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#E6EBF2",  // from light.300
          foreground: "#64748B",
        },
        accent: {
          DEFAULT: "#2DBE9D",  // using the green
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#9E2B2B",  // from error
          foreground: "#FFFFFF",
        },
        border: "#D1D9E6",
        input: "#E6EBF2",
        ring: "#4A9FD8",      // matching the blue
        chart: {
          "1": "#333F4E",      // brand color
          "2": "#4A9FD8",      // blue
          "3": "#2DBE9D",      // green
          "4": "#E0965C",      // orange
          "5": "#D49AE6",      // pink
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(66, 71, 97, 0.1)",
        "drop-2": "0 8px 30px 0 rgba(65, 89, 214, 0.3)",
        "drop-3": "0 8px 30px 0 rgba(65, 89, 214, 0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
