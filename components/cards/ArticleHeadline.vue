<template>
  <div v-if="items && items.length" class="lg:container mx-auto my-12">
    <div v-for="item in items" :key="item.slug" class="row">
      <Nuxt-Link
        :to="localePath({ name: 'article-slug', params: { slug: item.slug } })"
        class="col-12 mb-4 shadow-lg hover:shadow-xl"
      >
        <figure class="md:flex bg-gray-100 p-8 md:p-0">
          <img
            class="
              w-32
              h-32
              md:w-48 md:h-auto md:rounded-none
              rounded-full
              mx-auto
              bg-gray-200
              order-2
            "
            :src="`${item.img}`"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4 order-1">
            <blockquote>
              <p class="text-lg font-semibold">
                {{ item.description }}
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">
                {{ item.author && item.author.name }}
              </div>
              <div class="text-gray-500">
                Posted:
                {{ $dateFns.format(item.createdAt, 'MMMM dd, yyyy') }}
              </div>
            </figcaption>
          </div>
        </figure>
      </Nuxt-Link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true, default: () => [] }
  }
}
</script>
