// File: nuxt.config.js
export default {
    ssr: true, // Activer le SSR
    head: {
      title: 'comp-trek', // Titre de votre application
    },
    plugins: [],
    components: true,
    buildModules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    css: ['@/assets/main.css'],
    modules: [],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }