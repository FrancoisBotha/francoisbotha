// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', 'github-markdown-css', 'highlight.js'],
  modules: ['nuxt-icon',
            '@nuxt/content',
            '@nuxtjs/google-fonts',
          ],
  googleFonts: {
    families: {
      Oswald: {
        wght: [100, 300,600],
        ital: [100]
      },
      Montserrat: {
        wght: [100, 300,600],
        ital: [100]
      }
    }
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    markdown: {
      anchorLinks: false
    }
  },
  devtools: { enabled: true }
})
