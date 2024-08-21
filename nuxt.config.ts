import { defineNuxtConfig } from 'nuxt/config'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    "@nuxt/icon",
    'nuxt-split-type',
    "@nuxtjs/google-fonts"
  ],
  fontawesome: {
    icons: {
    },
    component: 'fa',
    suffix: true
  },
  googleFonts: {
    families: {
      Roboto: true,
    }
  }
})