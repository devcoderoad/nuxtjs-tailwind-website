<template>
  <div>
    <Header />
    <CardsArticleHeadline :item="storeArticle" />
    <CardsArticle :items="storeArticles" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ app, params, store, store: { dispatch, getters } }) {
    const lang =
      app.i18n.locale === app.i18n.defaultLocale ? '' : app.i18n.locale

    await dispatch('article/list/getList', { status: 'publish' })
    await dispatch('article/listQuery/getListQuery', {
      where: { headline: true },
      limit: 1
    })

    await dispatch('article/detail/getDetail', {
      where: { headline: true },
      lang
    })
  },
  computed: {
    ...mapState({
      storeArticles: (state) => state.article.list.data,
      storeArticle: (state) => state.article.detail.data,
      storeArticleLatest: (state) => state.article.listQuery.data
    })
  },
  mounted() {
    // console.log(this.storeArticle)
  }
}
</script>
