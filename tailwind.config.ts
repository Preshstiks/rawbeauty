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
        "hero-bg": 'url("../assets/hero-img.svg")',
      },
      fontFamily: {
        interBlack: ["InterBlack", "sans-serif"],
        interBold: ["InterBold", "sans-serif"],
        interExtraBold: ["InterExtraBold", "sans-serif"],
        interExtraLight: ["InterExtraLight", "sans-serif"],
        interLight: ["InterLight", "sans-serif"],
        interMedium: ["InterMedium", "sans-serif"],
        interRegular: ["InterRegular", "sans-serif"],
        interSemiBold: ["InterSemiBold", "sans-serif"],
        interThin: ["InterThin", "sans-serif"],
        zodiakBlack: ["ZodiakBlack", "serif"],
        zodiakBold: ["ZodiakBold", "serif"],
        zodiakExtraBold: ["ZodiakExtraBold", "serif"],
        zodiakLight: ["ZodiakLight", "serif"],
        zodiakRegular: ["ZodiakRegular", "serif"],
        zodiakThin: ["ZodiakThin", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
