<template>
  <div class="page-content">
    <!-- <Header /> -->
    <CardsArticleHeadline :items="articleHeadline" />
    <CardsArticle :items="articles" />
    <Topics :items="tags" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let articles = []
    let articleHeadline = []
    let tags = []

    try {
      articles = await $content('articles')
        .where({ headline: { $ne: true } })
        .limit(10)
        .fetch()
      articleHeadline = await $content('articles')
        .where({ headline: true })
        .limit(4)
        .fetch()
      tags = await $content('tags')
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
    } catch (err) {
      error(err)
    }

    return {
      articles,
      articleHeadline,
      tags,
      error
    }
  }
}
</script>
