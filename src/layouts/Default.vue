<template>
  <div>
    <Navbar :isScrolled="isScrolled" :scrollAmount="scrollAmount"/>
    <main class="min-h-screen text-gray-700 bg-white dark:bg-primary dark:text-gray-50">
      <slot />
    </main>
    <Contact class="relative z-10" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Contact from '../components/Contact.vue';
export default {
  components: {
    Navbar,
    Contact
  },
  data() {
    return {
      isScrolled: false,
      scrollAmount: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 100), { passive: true })
  },
  methods: {
    throttle(fn, delay) {
      let timeoutID = null
      return () => {
        timeoutID = setTimeout(() => {
          clearTimeout(timeoutID)
          fn()
        }, delay)
      }
    },
    handleScroll() {
      this.isScrolled = (window.scrollY || window.scrollTop) > 80
      this.scrollAmount = 10 * Math.round(window.scrollY / 20)
      if (this.scrollAmount >= 100) { this.scrollAmount = 100 }
    }
  }
}
</script>
