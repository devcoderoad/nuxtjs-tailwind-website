<template>
  <div
    class="
      page-content
      flex
      lg:h-screen
      w-screen
      lg:overflow-hidden
      xs:flex-col
      lg:flex-row
    "
  >
    <MetaHead
      :title="articles[0].author.name"
      :description="articles[0].author.bio"
      :image="articles[0].author.img"
    />
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <amp-img
        v-if="$isAMP"
        :src="articles[0].author.img"
        :alt="articles[0].author.name"
        class="absolute h-full w-full object-cover"
        layout="responsive"
        height="400"
        width="400"
      />
      <img
        v-else
        :src="articles[0].author.img"
        :alt="articles[0].author.name"
        class="absolute h-full w-full object-cover"
      />
    </div>

    <div class="overlay"></div>
    <div class="absolute top-32 left-32 text-white">
      <div class="relative">
        <NuxtLink to="/"><Logo :amp="$isAMP" /></NuxtLink>
      </div>
      <div class="mt-16 -mb-3 flex flex-col uppercase text-sm">
        <h1 class="text-4xl font-bold">
          {{ articles[0].author.name }}
        </h1>
        <p class="mb-4">{{ articles[0].author.bio }}</p>
      </div>
    </div>
    <div
      class="
        relative
        xs:py-8 xs:px-8
        lg:py-32 lg:px-16 lg:w-1/2
        xs:w-full
        h-full
        overflow-y-scroll
        markdown-body
        post-right
        custom-scroll
        bg-white
      "
    >
      <NuxtLink to="/"><p class="hover:underline">&laquo; Back</p></NuxtLink>
      <h1 class="mt-4 mb-6 font-bold text-4xl">
        Here are a list of articles by {{ articles[0].author.name }}:
      </h1>
      <ul>
        <li
          v-for="article in articles"
          :key="article.slug"
          class="w-full px-2 xs:mb-6 md:mb-12"
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
              xxlmax:flex-col
              article-card
            "
          >
            <img
              v-if="article.img"
              class="h-auto xxlmin:w-1/2 xxlmax:w-full object-cover"
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
              <h3 class="font-bold">{{ article.title }}</h3>
              <p class="my-3">{{ article.description }}</p>
              <p class="font-bold text-gray-600 text-sm">
                {{ $dateFns.format(article.updatedAt, 'MMMM, dd yyyy') }}
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
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        },
        offLink: false
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles
    }
  }
}
</script>
