import { BASE_URL, LANG } from '../config/constants'

import en from '../lang/en-US'
import id from '../lang/in-ID'

export default {
  baseUrl: BASE_URL,
  // strategy: 'prefix_and_default',
  // strategy: 'no_prefix',
  // strategy: 'prefix_except_default',
  strategy: 'no_prefix',
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
    'page-slug': {
      id: '/page/:slug?',
      en: '/page/:slug?'
    },
    'article-slug': {
      id: '/article/:slug?',
      en: '/article/:slug?'
    },
    'article-author': {
      id: '/article/author/:slug?',
      en: '/article/author/:slug?'
    },
    'article-tag': {
      id: '/article/tag/:slug?',
      en: '/article/tag/:slug?'
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
