import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3efe0",
        "primary-strong": "#EEE8D3",
        "secondary-strong": "#EE5879",
        "secondary": "#F6A2B4",
        "tertiary-strong": "#517FF6",
        "tertiary": "#D9E4FC"
      },
      minHeight: {
        section: "75svh"
      }
    },
  },
  plugins: [],
} satisfies Config;
