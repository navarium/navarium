<template>
  <Layout>
    <div class="container mx-auto py-24">
      <g-link to="/references/"><button class="text-blue-500">&larr; {{ $t('general.back')}}</button></g-link>
      <article>
        <div class="my-6">
          <h1 class="text-6xl text-medium dark:text-white mb-2">
            {{ $page.reference.title }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 my-4">
            {{ $page.reference.date.split('-')[0] }}
          </p>
        </div>

        <hr class="my-8 border-gray-600">

        <div v-html="$page.reference.content" class="space-y-6 prose prose-xl text-primary dark:text-white"/>

        <hr class="my-8 border-gray-600">

        <div v-if="$page.reference.images?.length" class="grid gap-8 place-center">
          <g-link v-for="image in $page.reference.images" :key="image" :to="image" target="_blank" noopener npreferrer>
            <img class="mx-auto" :src="image">
          </g-link>
        </div>
      </article>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.reference.title,
      htmlAttrs: {
        lang: this.$page.reference.lang
      },
      meta: [{
        // Meta Description
        key: 'description',
        name: 'description',
        content: this.$page.reference.description
      }]
    }
  },
}
</script>

<page-query>
query Reference ($id: ID!) {
  reference: reference (id: $id) {
    id
    title
    lang
    content
    images
    date (format: "YYYY-MM-DD")
  }
}
</page-query>

<style scoped>
/* Apply Global Article Styles Here */
article h2 {
  @apply text-xl font-bold;
}

article a {
  @apply font-semibold text-blue-500;
}
</style>
