import messages from './lib/i18n'
import locales from './lib/i18n/locales'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'template-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  loading: { color: process.env.LOADING_COLOR },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/i18n',
    ['@pinia/nuxt', { disableVuex: false }]
  ],
  i18n: {
    baseUrl: process.env.BASE_URL,
    strategy: 'prefix',
    onlyOnRoot: true,
    seo: false,
    trailingSlashes: false,
    defaultLocale: process.env.DEFAULT_LOCALE,
    locales: locales,
    vueI18n: {
      fallbackLocale: process.env.FALLBACK_LOCALE,
      messages
    }
  },

  app: {
    baseURL: '/d/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
})
