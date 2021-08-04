<template>
  <div class="page-content pt-24 min-h-screen h-full">
    <MetaHead
      :title="article.title"
      :description="article.description"
      :image="article.img"
    />
    <div class="container mx-auto">
      <div class="col-start-1 row-start-3 space-y-3 px-4">
        <h1 class="text-4xl font-black">{{ article.title }}</h1>
        <div class="my-4">
          <span>Author: {{ article.author.name }}</span> |
          <span>
            {{ $dateFns.format(article.createdAt, 'MMMM dd, yyyy') }}</span
          >
        </div>
        <img
          :src="article.img"
          class="object-cover w-full align-middle h-96"
          :alt="article.title"
        />
        <p class="leading-snug text-gray-500 text-center pb-2">
          {{ article.description }}
        </p>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, $content, params, error }) {
    try {
      const content =
        app.i18n.locale === app.i18n.defaultLocale
          ? `articles`
          : `articles/${app.i18n.locale}`

      const article = await $content(content, params.slug).fetch()
      const tagsList = await $content('tags')
        .only(['name', 'slug'])
        .where({ name: { $containsAny: article.tags } })
        .fetch()

      const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
      const readAlso = await $content('articles')
        .only(['title', 'slug'])
        .where({
          offLink: false,
          slug: { $ne: params.slug },
          tags: { $containsAny: Object.keys(tags) }
        })
        .sortBy('createdAt', 'desc')
        .limit(3)
        .fetch()

      const [prev, next] = await $content('articles')
        .where({ offLink: false })
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        tags,
        readAlso,
        prev,
        next
      }
    } catch (err) {
      error(err)
    }
  }
}
</script>
