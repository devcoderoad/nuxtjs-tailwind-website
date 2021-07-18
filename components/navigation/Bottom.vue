<template>
  <div class="navigation-bottom inline mx-auto text-center">
    <div class="flex justify-center py-3">
      <p>
        Copyrights Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Debitis ipsa fugit quod velit!.
      </p>
    </div>
    <div class="block container mx-auto">
      <ColorMode />
      <Languages class="my-3 block" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: { type: String, default: '' }
  }
}
</script>

<style lang="postcss">
.nuxt-link-exact-active.nuxt-link-active {
  @apply text-red-600;
}
footer {
  @apply text-sm;
}
</style>
