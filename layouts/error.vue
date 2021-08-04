<template>
  <div class="h-screen">
    <div class="container mx-auto pt-40">
      <h1 v-if="error.statusCode === 404" class="text-4xl font-black">
        Page not found
      </h1>
      <h1 v-else class="text-4xl font-black">An error occurred</h1>
      <h2 class="text-2xl font-semibold">
        {{ error.statusCode }} :
        {{ error.message }}
      </h2>
      <NuxtLink to="/" class="text-xl">&laquo; back</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default', // you can set a custom layout for the error page
  props: ['error']
}
</script>
