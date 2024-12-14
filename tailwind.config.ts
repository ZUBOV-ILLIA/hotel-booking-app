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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      fontFamily: {
        corinthia: ["var(--font-corinthia)", ...["--font-corinthia"]],
      },
      keyframes: {
        slideInFromTop: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInFromTop: "slideInFromTop 0.5s ease-out",
        slideInFromBottom: "slideInFromBottom 0.5s ease-out",
        slideInFromLeft: "slideInFromLeft 0.5s ease-out",
        slideInFromRight: "slideInFromRight 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
