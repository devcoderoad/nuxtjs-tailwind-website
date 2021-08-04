<template>
  <header class="headlineHero">
    <div class="container mx-auto w-3/4">
      <h1 class="text-7xl lg:text-9xl font-bold inline uppercase">
        Rules of The Game
      </h1>
      <p class="leading-snug">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eum aut
        obcaecati voluptatum eveniet placeat adipisci laudantium nobis dolorum
        vero ratione cumque quasi molestiae quam, magnam perspiciatis magni
        corporis praesentium. Quidem totam hic voluptates voluptatem delectus
        iure atque fugit, deserunt dignissimos quasi quam distinctio.
      </p>
      <div class="container">
        <form>
          <label for="form-email"
            ><span class="sr-only">Email:</span>
            <input
              id="form-email"
              type="email"
              name="form-email"
              placeholder="Email"
              class="inline"
            />
          </label>
          <button class="btn btn-lg btn-outline bg-white">Subscribe</button>
        </form>
      </div>
      <span>No Credit Card Required. Free limited to try our services.</span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    links: { type: Object, default: null }
  }
}
</script>
