<template>
  <section class="container mx-auto">
    <h1 class="text-4xl">Sign In</h1>
    <form class="grid grid-flow-row">
      <div class="col-auto">
        <label for="form-email"
          >Email:
          <input
            id="form-email"
            type="email"
            name="form-email"
            placeholder="Email"
            class="block"
          />
        </label>
      </div>
      <div class="col-auto">
        <label for="form-password"
          >Password:
          <input
            id="form-password"
            type="password"
            name="form-password"
            placeholder="Password"
            class="block"
          />
        </label>
      </div>
      <div class="col-auto">
        <button class="btn btn-lg btn-outline">Sign In</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>
