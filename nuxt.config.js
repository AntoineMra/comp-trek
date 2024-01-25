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
  modules: [["@nuxtjs/google-fonts", { families: { Poppins: true } }]],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
