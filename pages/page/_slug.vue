<template>
  <div class="page-content min-h-screen h-full">
    <MetaHead
      :title="page.title"
      :description="page.description"
      :image="page.image"
    />
    <div class="grid grid-cols-1">
      <div
        class="
          h-96
          relative
          overflow-hidden
          col-start-1
          row-start-1
          px-4
          pb-3
          bg-gradient-to-t
          from-black
        "
      >
        <img
          :alt="page.title"
          :src="page.img"
          class="
            absolute
            w-full
            top-0
            bottom-0
            left-0
            right-0
            -z-1
            object-cover
            h-96
          "
        />
        <div class="relative z-1 pt-3">
          <p class="text-lg font-medium text-white">Entire House</p>
          <h1 class="text-6xl font-semibold text-white">
            {{ page.title }}
          </h1>
        </div>
      </div>

      <div class="col-start-1 row-start-2 px-4">
        <div class="flex items-center text-sm font-medium my-5"></div>
      </div>

      <div class="col-start-1 row-start-3 space-y-3 px-4">
        {{ page.description }}

        <!-- content from markdown -->
        <nuxt-content :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let page = []

    try {
      page = await $content('pages', params.slug).fetch()
    } catch (err) {
      error(err)
    }

    return {
      page
    }
  },
  head() {
    return {
      title: `${this.page.title} | Dykraf.com`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.page.description} | Dykraf.com`
        }
      ]
    }
  }
}
</script>
