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
    ],
    css: ['~/assets/main.css'],
    modules: [],
    build: {
      postcss: {
        plugins: {
          'tailwindcss': require('tailwindcss'),
          'autoprefixer': require('autoprefixer'),
        },
      },
    },
  }