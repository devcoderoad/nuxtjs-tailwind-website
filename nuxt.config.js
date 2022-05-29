// import {
//   // PRODUCTION,
//   I18N
// } from './config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-tailwind-website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/date-fns-moduleWith
    '@nuxtjs/date-fns',
    // Doc: https://github.com/nuxt-community/fontawesome-module or https://github.com/FortAwesome/vue-fontawesome
    '@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/i18n-module
    // 'nuxt-i18n',
    // Doc: https://github.com/fukuiretu/nuxt-user-agent
    'nuxt-user-agent'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Tailwindcss
  tailwindcss: {
    jit: true
  },

  // // Router
  // router: {
  //   middleware: 'userAgent'
  // },

  // I18N
  // i18n: I18N,

  // Generate routes
  generate: {
    routes: async () => {
      const routes = []
      const authors = []
      let pages = []
      let articles = []
      let tags = []

      const { $content } = require('@nuxt/content')

      /* Pages */
      if (pages === null || pages.length === 0) {
        pages = await $content('pages').where({ showInMenu: true }).fetch()
      }

      /* Articles */
      if (articles === null || articles.length === 0) {
        articles = await $content('articles')
          .where({ status: 'publish', category: { $ne: '' } })
          .fetch()
      }

      /* Article Categories */
      // if (categories === null || categories.length === 0) {
      //   categories = await $content('articles')
      //     .where({ status: 'publish', category: { $ne: '' } })
      //     .fetch()
      // }

      /* Article Tags */
      if (tags === null || tags.length === 0) {
        tags = await $content('tags').fetch()
      }

      /* Pages */
      for (const page of pages) {
        routes.push(`/page/${page.slug}`)
      }

      /* Articles */
      for (const article of articles) {
        authors.push(article.author.name)
        routes.push(`/article/${article.slug}`)
        routes.push(`/article/category/${article.category.replace(' ', '_')}`)
      }

      /* Articles Authors */
      for (const author of authors.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) === index
      })) {
        routes.push(`/article/author/${author}`)
      }

      /* Articles Categories */
      // for (const category of categories) {
      //   routes.push(`/article/category/${category.replace(' ', '_')}`)
      // }

      /* Articles Tags */
      for (const tag of tags) {
        routes.push(`/article/tag/${tag.name.replace(' ', '_')}`)
      }

      return routes.sort()
      // return routes
    },

    fallback: true // fallback to 404 page not found file
  },

  // Fontawesome
  fontawesome: {
    // suffix: true,
    icons: {
      solid: true,
      brands: true
      // light: true
    }
  }
}
