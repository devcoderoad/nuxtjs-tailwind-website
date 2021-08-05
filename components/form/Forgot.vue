<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold">Input your email</h1>
    <form class="grid grid-flow-row">
      <div class="col-auto">
        <label for="form-name"
          >Email:
          <input
            id="form-forgot"
            type="email"
            name="form-forgot"
            placeholder="Email"
            class="block"
          />
        </label>
      </div>
      <div class="col-auto">
        <button class="btn btn-lg btn-outline">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>
