<template>
  <div class="lg:container mx-auto">
    <div
      v-if="items && items.length > 0"
      class="mx-auto my-12 lg:flex space-x-4"
    >
      <Nuxt-Link
        v-for="(item, index) in items"
        :key="item.slug"
        :to="localePath({ name: 'article-slug', params: { slug: item.slug } })"
        class="mb-4 shadow-lg hover:shadow-xl lg:flex-1"
      >
        <figure class="md:flex bg-gray-100 p-8 md:p-0" :rel="`card-${index}`">
          <img
            class="
              w-32
              h-32
              md:w-48 md:h-auto md:rounded-none
              rounded-full
              mx-auto
              bg-gray-200
            "
            :src="`${item.img}`"
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">
                {{ item.description.slice(0, 50) }}...
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-cyan-600">{{ item.author.name }}</div>
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
