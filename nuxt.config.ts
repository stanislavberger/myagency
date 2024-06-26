// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue'
  ],
  primevue: {
      /* Options */
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css', 
        './assets/styles.css']
})
