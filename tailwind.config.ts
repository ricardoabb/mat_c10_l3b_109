import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-out": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        "color-pulse": {
          "0%, 100%": { fill: "#EC644E" },
          "50%": { fill: "#6B2055" },
        },
        "color-pulse-white": {
          "0%, 100%": { fill: "#EC644E" },
          "50%": { fill: "#fff" },
        },
        "color-pulse-bg": {
          "0%, 100%": { backgroundColor: "#EC644E" },
          "50%": { backgroundColor: "#6B2055" },
        },
        slideIn: {
          "0%": { transform: "scaleX(0)", transformOrigin: "right" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.06)", opacity: "1" },
        },
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(10%)',  },
        },
      },
      animation: {
        "color-pulse-white": "color-pulse-white 1s infinite",
        "color-pulse": "color-pulse 1s infinite",
        "color-pulse-bg": "color-pulse-bg 2s infinite",
        "fade-in-out": "fade-in-out 1s infinite",
        slideIn: "slideIn 1s ease-in-out forwards",
        pulse: "pulse 2s infinite",
        'bounce-slow': 'bounceCustom 1s ease-in-out  infinite',
      },
    },
  },
  plugins: [],
};
export default config;
