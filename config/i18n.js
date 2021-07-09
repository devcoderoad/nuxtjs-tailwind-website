import { BASE_URL, LANG } from '../config/constants'

import en from '../lang/en-US'
import id from '../lang/in-ID'

export default {
  baseUrl: BASE_URL,
  // strategy: 'prefix_and_default',
  // strategy: 'no_prefix',
  strategy: 'prefix_except_default',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English'
    },
    {
      code: 'id',
      iso: 'in-ID',
      name: 'Indonesia'
    }
  ],
  defaultLocale: LANG,
  routes: {
    // about: {
    //   id: '/tentang-kami',
    //   en: '/about-us'
    // },
    // contact: {
    //   id: '/kontak',
    //   en: '/contact'
    // },
    // blogs: {
    //   id: '/artikel',
    //   en: '/blog'
    // },

    'page-slug': {
      id: '/page/:slug?',
      en: '/page/:slug?'
    },
    'article-slug': {
      id: '/article/:slug?',
      en: '/article/:slug?'
    }
    // 'dynamicNested/_category': {
    //   fr: 'imbrication-dynamique/:category'
    // }
  },
  vueI18n: {
    fallbackLocale: LANG,
    messages: { en, id }
    // messages: { id }
  }
}
