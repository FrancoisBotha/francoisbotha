// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css', 'github-markdown-css', 'highlight.js'],
  modules: ['nuxt-icon', '@nuxt/content'],
  content: {
    // https://content.nuxtjs.org/api/configuration
    markdown: {
      anchorLinks: false
    }
  },
  devtools: { enabled: true }
})
