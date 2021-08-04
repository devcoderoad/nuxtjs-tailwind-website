<template>
  <section class="container mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-extrabold">Sign up your account</h1>
    <form class="theme-form">
      <div class="col-auto">
        <label for="form-name"
          >Name:
          <input
            id="form-name"
            type="text"
            name="form-name"
            placeholder="Name"
            class="block"
          />
        </label>
      </div>
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
        <button class="btn btn-lg btn-outline btn-muted">Sign Up</button>
        <Nuxt-Link
          to="/signin"
          class="
            underline
            hover:no-underline
            lg:ml-4
            block
            lg:inline-block
            text-gray-600
          "
          >Login</Nuxt-Link
        >
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>
