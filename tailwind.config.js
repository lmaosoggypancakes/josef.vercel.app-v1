/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#c4a7e7",
          secondary: "#ebbcba",
          accent: "#f6c177",
          neutral: "#191724",
          "base-100": "#1f1d2e",
          info: "#31748f",
          success: "#9ccfd8",
          warning: "#f6c177",
          error: "#eb6f92",
        },
        light: {
          primary: "#907aa9",
          secondary: "#d7827e",
          accent: "#907aa9",
          neutral: "#faf4ed",
          "base-100": "#fffaf3",
          info: "#286983",
          success: "#56949f",
          warning: "#ea9d34",
          error: "#b4637a",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [require("daisyui")],
};
