// File: nuxt.config.js
export default {
  ssr: true, // Activer le SSR
  head: {
    title: "comp-trek", // Titre de votre application
  },
  plugins: [],
  components: true,
  buildModules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/main.css"],
  runtimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:1337",
  },
  modules: [["@nuxtjs/google-fonts", { families: { Poppins: true } }]],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
