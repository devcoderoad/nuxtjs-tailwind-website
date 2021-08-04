<template>
  <div class="page-content">
    <!-- <Header /> -->
    <CardsArticleHeadline :items="articleHeadline" />
    <CardsArticle :items="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let articles = []
    let articleHeadline = []
    let error = null

    try {
      articles = await $content('articles')
        .where({ headline: { $ne: true } })
        .limit(10)
        .fetch()
      articleHeadline = await $content('articles')
        .where({ headline: true })
        .limit(4)
        .fetch()
    } catch (err) {
      error = err
    }

    return {
      articles,
      articleHeadline,
      error
    }
  }
}
</script>
