<template>
  <div class="relative z-10 py-12 bg-white dark:bg-primary">
    <div class="container mx-auto px-4">
      <h1 class="h1 text-4xl font-medium mb-8 text-center">{{$t('section.references.title')}}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <router-link v-for="edge in references" :to="edge.node.path" :key="edge.node.id">
          <ReferenceCard :reference="edge.node"/>
        </router-link>
      </div>
    </div>
    <div class="text-center p-8">
      <g-link class="text-2xl text-blue-500" to="/references">
        {{ $t('section.references.all') }}
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  references: allReference {
    edges {
      node {
        id
        title
        lang
        date (format: "YYYY-MM-DD")
        path
        images
        description
      }
    }
  }
}
</static-query>

<script>
import ReferenceCard from '@/components/ReferenceCard'

export default {
  name: 'SectionReferences',
  components: {
    ReferenceCard,
  },
  computed: {
    references() {
      return this.$static.references.edges
        .filter(reference => reference.node.lang === this.$i18n.locale)
        .slice(0, 3)
    }
  }
}
</script>
