<template>
  <div>
    <NavigationTop
      :items="storeMenu"
      :class-menu="classMenu"
      @scroll="handleScroll"
    />
    <main class="wrapper">
      <Nuxt />
    </main>
    <Footer ref="scrollToMe" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      scrollPosition: 0,
      limitScroll: 150,
      classMenu: 'bg-gray-200 animate fade-in'
    }
  },
  computed: {
    ...mapState({
      storeMenu: (state) => state.menu.data
    })
  },
  mounted() {
    const { handleScroll } = this

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    // this.classMenu = 'bg-gradient-to-b from-gray-200 animate fade-in'
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(e) {
      const { documentElement: html } = document

      const currentScrollPosition = html.scrollTop
      if (currentScrollPosition > this.limitScroll) {
        this.classMenu =
          'bg-gradient-to-b from-gray-200 animate fade-in text-white'
      } else {
        this.classMenu = 'bg-gray-200 animate fade-in'
      }
      this.scrollPosition = currentScrollPosition
      // eslint-disable-next-line no-console
      // console.warn(this.classMenu)
    }
  }
}
</script>
