import { color, keyframes } from "framer-motion";

/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/theme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/react/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", "sans-serif"],
      },
      colors: {
        first: "#000000",
        second: "#2f4550",
        third: "#586f7c",
        forth: "#b8dbd9",
        fifth: "#f4f4f9",
      },
      Animation: {
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [nextui()],
};
