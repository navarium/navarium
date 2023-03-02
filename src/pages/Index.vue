<template>
  <Layout>
    <Hero></Hero>
    <Introduction></Introduction>
    <Services></Services>
    <References></References>
  </Layout>
</template>

<script>
import Hero from '../components/sections/Hero.vue'
import Introduction from '../components/sections/Introduction.vue'
import Services from '../components/sections/Services.vue'
import References from '../components/sections/References.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Hero,
    Introduction,
    Services,
    References
  }
}
</script>
