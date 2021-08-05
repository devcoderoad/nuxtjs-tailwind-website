<template>
  <section class="lg:container mx-auto pb-4">
    <div
      v-if="items && items.length"
      class="items-center mx-auto max-w-7xl px-8 xl:px-5"
    >
      <article
        v-for="item in items"
        :key="item.slug"
        class="flex flex-wrap items-center sm:-mx-3 my-10"
      >
        <div class="w-full md:w-1/2 md:px-3 md:pr-6">
          <div
            class="
              w-full
              pb-6
              space-y-6
              sm:max-w-md
              lg:max-w-xl
              md:space-y-4
              lg:space-y-8
              xl:space-y-9
              sm:pr-5
              lg:pr-0
              md:pb-0
            "
          >
            <h1
              class="
                text-4xl
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-4xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
              "
            >
              <span class="block xl:inline">{{ item.title }}</span>
              <!-- <span
                class="block text-indigo-600 xl:inline"
                data-primary="indigo-600"
                >Tell Your Story!</span> -->
            </h1>
            <p
              class="
                mx-auto
                text-base text-gray-500
                sm:max-w-md
                lg:text-xl
                md:max-w-3xl
                text-justify
              "
            >
              {{ item.description }}
            </p>
            <figcaption class="font-medium">
              <div class="text-gray-500 text-sm flex flex-initial">
                <span class="flex-1"
                  >By:
                  <!-- <Nuxt-Link
                    :to="
                      localePath({
                        name: 'article-author',
                        params: { slug: item.author.name }
                      })
                    "
                    > -->
                  <Nuxt-Link :to="`/article/author/${item.author.name}`">
                    {{ item.author.name }}</Nuxt-Link
                  ></span
                >
                <span class="flex-1 text-right">
                  Posted:
                  {{ $dateFns.format(item.createdAt, 'MMMM dd, yyyy') }}
                </span>
              </div>
            </figcaption>
            <div class="relative flex flex-col sm:flex-row sm:space-x-4">
              <Nuxt-Link
                :to="
                  localePath({
                    name: 'article-slug',
                    params: { slug: item.slug }
                  })
                "
                class="
                  flex
                  items-center
                  w-full
                  px-5
                  py-2
                  mb-3
                  text-lg text-white
                  bg-indigo-600
                  rounded-md
                  sm:mb-0
                  hover:bg-indigo-700
                  sm:w-auto
                "
              >
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Nuxt-Link>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div
            class="
              w-full
              h-auto
              overflow-hidden
              rounded-md
              shadow-xl
              sm:rounded-xl
            "
          >
            <Nuxt-Link
              :to="
                localePath({
                  name: 'article-slug',
                  params: { slug: item.slug }
                })
              "
            >
              <img
                :src="item.img"
                class="w-full object-cover h-60 md:h-72 xl:h-96"
              />
            </Nuxt-Link>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true, default: () => [] }
  }
}
</script>
