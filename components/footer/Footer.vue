<template>
  <footer class="py-3">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-sm">
      <div class="nav-info">
        <div class="nav-content">
          <div class="flex flex-wrap items-center">
            <NuxtLink to="/" class="mr-2 text-gray-300 hover:text-gray-400">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-400.svg"
                alt="Logo"
              />
            </NuxtLink>
            <NuxtLink
              to="/signin"
              class="mr-2 text-gray-300 hover:text-gray-400"
              >Sign In</NuxtLink
            >
            |
            <NuxtLink
              to="/signup"
              class="ml-2 text-gray-300 hover:text-gray-400"
              >Sign Up</NuxtLink
            >
          </div>
        </div>
        <div class="nav-content">
          <nav class="flex flex-row justify-end">
            <a href="#facebook" title="Facebook" class="w-6">
              <span class="sr-only">Facebook</span
              ><font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="#twitter" title="Twitter" class="w-6">
              <span class="sr-only">Twitter</span>
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="#youtube" title="YouTube" class="w-6">
              <span class="sr-only">YouTube</span>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </nav>
        </div>
      </div>
      <div class="nav-info">
        <nav class="nav-link">
          <h4 class="text-2xl">About Us</h4>
          <ul>
            <li><a href="#about" title="About">About</a></li>
            <li><a href="#team" title="About">Teams</a></li>
            <li><a href="#careers" title="Careers">Careers</a></li>
            <li><a href="#contact" title="Contact">Contact</a></li>
          </ul>
        </nav>
        <nav class="nav-link">
          <h4 class="text-2xl">Support</h4>
          <ul>
            <li><a href="#Technical" title="Technical">Technical</a></li>
            <li><a href="#Billing" title="Billing">Billing</a></li>
            <li><a href="#Refund" title="Refund">Refund</a></li>
            <li><a href="#Sponsors" title="Sponsors">Sponsors</a></li>
          </ul>
        </nav>
        <nav class="nav-link">
          <h4 class="text-2xl">Office</h4>
          <ul>
            <li><a href="#main" title=">Main Office">Main Office</a></li>
            <li><a href="#us" title="Branch Office US">US Branch</a></li>
            <li>
              <a href="#canada" title="Branch Office Canada">Canada Branch</a>
            </li>
          </ul>
        </nav>
        <nav class="nav-link">
          <h4 class="text-2xl">Resources</h4>
          <ul>
            <li><a href="#pricing" title=">Pricing">Pricing</a></li>
            <li>
              <a href="#Documentation" title="Documentations">Documentation</a>
            </li>
            <li>
              <a href="#Tutorial" title="Tutorial">Tutorial</a>
            </li>
          </ul>
        </nav>
      </div>
      <NavigationBottom />
    </div>
  </footer>
</template>
<script>
export default {}
</script>
