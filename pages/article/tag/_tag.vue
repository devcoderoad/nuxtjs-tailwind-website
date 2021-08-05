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
      :title="tag.name"
      :description="tag.description"
      :image="tag.img"
    />
    <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
      <img
        :src="tag.img"
        :alt="tag.name"
        class="absolute h-full w-full object-cover"
      />
    </div>
    <div class="overlay"></div>
    <div class="absolute top-32 left-32 right-32 text-white">
      <div class="flex flex-row justify-between w-full">
        <div class="xs:w-1/1 md:w-1/4 justify-between">
          <!-- <NuxtLink to="/"><Logo :amp="$isAMP" /></NuxtLink> -->
          <NuxtLink to="/"><Logo /></NuxtLink>
        </div>
        <div class="xs:w-full md:w-3/4 flex flex-row">
          <NuxtLink
            to="/"
            class="
              xs:ml-2
              mr-8
              self-center
              text-white
              font-bold
              hover:underline
            "
          >
            All Articles
          </NuxtLink>
          <SearchInput class="self-center" />
        </div>
      </div>
      <div class="mt-16 -mb-3 flex flex-col text-sm">
        <div class="relative lg:w-1/2 xs:w-full xs:h-84 lg:h-full post-left">
          <h1 class="text-4xl font-bold uppercase">
            {{ tag.name }}
          </h1>
          <p class="mb-4 uppercase">{{ tag.description }}</p>

          <nuxt-content :document="tag" />
        </div>
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
      <h3 class="mb-4 font-bold text-4xl">Articles tagged {{ tag.name }}:</h3>
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
              overflow-hidden
              rounded-lg
            "
          >
            <img
              v-if="article.img"
              class="h-auto w-1/2 object-cover"
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
      const tags = await $content('tags')
        .where({ slug: { $contains: params.tag } })
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}
      const articles = await $content('articles', params.slug)
        .where({ tags: { $contains: tag.name }, status: 'publish' })
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles,
        tag
      }
    } catch (err) {
      error(err)
    }
  }
}
</script>
