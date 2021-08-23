<template>
  <div class="page-content block">
    <OgMetaHead
      v-if="category"
      :title="category"
      :description="`Article written in ${category} category`"
    />
    <div class="block lg:w-full xs:w-full lg:h-full">
      <span>Category</span>
      <h1
        class="
          text-6xl
          lg:text-8xl
          capitalize
          font-black
          text-gray-800
          mb-5
          mt-2
        "
      >
        {{ category }}
      </h1>
      <div v-if="categories && categories.length" class="xl-block my-3 group">
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="{
            name: 'article-category-slug',
            params: { slug: category }
          }"
          class="
            border-2 border-gray-400
            rounded-full
            px-3
            text-gray-400
            mr-2
            uppercase
            hover:text-gray-500 hover:border-gray-500
          "
        >
          {{ category }}
        </NuxtLink>
      </div>
    </div>
    <div class="block lg:w-full xs:w-full lg:h-full z-10 mt-6">
      <NuxtLink to="/"><p class="hover:underline">&laquo; Back</p></NuxtLink>
      <h3 class="mb-4 font-bold text-4xl my-4">
        Articles in <span class="capitalize">{{ category }}</span> category:
      </h3>
      <ul class="flex lg:flex-row flex-col">
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full lg:w-1/2 px-2 xs:mb-6 md:mb-12"
        >
          <NuxtLink
            :to="{ name: 'article-slug', params: { slug: article.slug } }"
            class="
              flex
              transition-shadow
              duration-150
              ease-in-out
              border border-gray-200
              shadow-lg
              hover:shadow-xl
              flex-row
              xxlmax:flex-col
              article-card
              overflow-hidden
              rounded-lg
              bg-white
            "
          >
            <img
              v-if="article.img"
              class="w-1/2 h-64 lg:h-96 xl:h-80 object-cover"
              :src="article.img"
              :alt="article.alt"
            />

            <div
              class="
                p-6
                flex flex-col
                justify-between
                xxlmin:w-1/2
                xxlmax:w-full
              "
            >
              <h4 class="font-bold">{{ article.title }}</h4>
              <p class="my-2">{{ `${article.description.slice(0, 80)}..` }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ $dateFns.format(article.updatedAt, 'MMMM dd, yyyy') }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const category = await $content('articles')
        .where({ category: { $eq: params.slug.toLowerCase() } })
        .only('category')
        .limit(1)
        .fetch()

      const articles = await $content('articles')
        .where({
          status: 'publish',
          category: { $eq: params.slug }
        })
        .sortBy('createdAt', 'asc')
        .fetch()

      const _categories = await $content('articles')
        .where({
          status: 'publish',
          category: { $ne: params.slug }
        })
        .only('category')
        .sortBy('createdAt', 'asc')
        .fetch()

      const categories = [
        ...new Set(_categories.map((items) => items.category))
      ]

      return {
        articles,
        category: category[0]?.category && category[0].category,
        categories
      }
    } catch (err) {
      error(err)
    }
  }
}
</script>
