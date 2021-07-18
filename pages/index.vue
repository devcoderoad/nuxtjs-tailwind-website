<template>
  <div>
    <Header />
    <CardsArticleHeadline :items="articleHeadlines" />
    <CardsArticle :items="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .where({ headline: { $ne: true } })
      .limit(10)
      .fetch()
    const articleHeadlines = await $content('articles')
      .where({ headline: true })
      .limit(4)
      .fetch()
    return {
      articles,
      articleHeadlines
    }
  }
}
</script>
