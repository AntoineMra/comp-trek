/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: [
      'lightrek',
      {
        lightrek: {
          "primary": "#4d7c0f",
          "secondary": "#fdba74",
          "accent": "#a3e635",
          "neutral": "#d1d5db",
          "base-100": "#f5f5f4",
          "info": "#4ade80",
          "success": "#38bdf8",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
}

