<template>
  <section class="container mx-auto">
    <h1 class="text-4xl">Sign Up</h1>
    <form class="grid grid-flow-row">
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
        <button class="btn btn-lg btn-outline">Sign Up</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {}
</script>
