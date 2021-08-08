<template>
  <section v-if="items && items.length && items.length > 0">
    <h3 class="font-black text-2xl uppercase text-left mb-6">
      {{ $t('label.topics') }}
    </h3>
    <nav>
      <ul class="flex flex-wrap md:mb-4 text-left">
        <li
          v-for="item of items"
          :key="item.slug"
          class="
            xs:w-full
            md:w-1/3
            lg:flex-1
            pl-2
            pr-4
            mb-2
            text-left
            border-l-2 border-gray-300
          "
        >
          <NuxtLink :to="`/article/tag/${item.slug}`">
            <p
              class="text-gray-500 uppercase tracking-wider font-medium text-ss"
            >
              {{ item.name }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Topics',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
