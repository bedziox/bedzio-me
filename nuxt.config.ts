
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vesp/nuxt-fontawesome',
    '@nuxt/ui'
  ],
  fontawesome: {
    icons: {
    },
    component: 'fa',
    suffix: true
  }
})