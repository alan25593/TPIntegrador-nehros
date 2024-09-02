import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#9747FF",
      },
      backgroundImage: {
        fondo: "url('/images/fondo.webp')",
        "fondo-mobile": "url('/images/fondomobile.webp')",
        dibujo: "url('/images/dibujos.webp')",
        "dibujo-blanco": "url('/images/dibujosblancos.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
