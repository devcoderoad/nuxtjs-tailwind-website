// B
const BLOG = {
  BLOG_INDEX: {
    href: '/blog/index.vue',
    route: '/blog',
    url: '/blog'
  },
  BLOG_DETAIL: {
    href: '/blog/_slug.vue',
    route: '/blog/:slug',
    url: '/blog'
  },
  BLOG_TAG: {
    href: '/blog/tag/_tag.vue',
    route: '/blog/tag/:tag',
    url: '/blog'
  },
  BLOG_AUTHOR: {
    href: '/blog/author/_author.vue',
    route: '/blog/author/:author',
    url: '/blog'
  }
}

// C
const CONTACT = {
  href: '/contact.vue',
  route: '/contact',
  url: '/contact'
}

// H
const HOME = {
  href: '/index.vue',
  route: '/index',
  url: '/'
}

module.exports = {
  ...BLOG,
  ...CONTACT,
  ...HOME
}
