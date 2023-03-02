<template>
  <Layout>
    <div class="container mx-auto py-24">
      <h1 class="h1 text-4xl font-medium mb-8 text-center">{{$t('section.references.title')}}</h1>
      <div class="grid grid-cols-3 gap-8">
        <router-link v-for="edge in $page.references.edges" :to="edge.node.path" :key="edge.node.id">
          <Reference :reference="edge.node"/>
        </router-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($locale: String) {
  references: allReference (filter: {lang: { eq: $locale } }) {
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
</page-query>

<script>
import Reference from '@/components/Reference'

export default {
  name: 'References',
  components: {
    Reference,
  },
  metaInfo: {
    title: 'References'
  }
}
</script>
