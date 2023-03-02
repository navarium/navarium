<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
    >
      <img :src="`/img/flags/${$i18n.locale}.svg`" alt="Locale flag" class="object-cover h-full w-full" />
    </button>
    <div
      v-show="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></div>
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <button
        v-for="locale in locales"
        :key="locale"
        class="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-primary hover:text-white disabled:opacity-50"
        @click="
          (ev) => {
            localeChanged(locale);
          }
        "
        :disabled="$i18n.locale === locale"
      >
        <div class="mr-2 h-8 w-8 rounded-full overflow-hidden border border-gray-400">
          <img :src="`/img/flags/${locale}.svg`" alt="Locale flag" class="object-cover h-full w-full" />
        </div>
        {{ $t(`lang.${locale}`) }}
      </button>
    </div>
  </div>
</template>

<script>
import { languageMixin } from '@/mixins/languageMixin'

export default {
  mixins: [languageMixin],
  data() {
    return {
      locales: ['hu', 'en', 'de', 'it'],
      isOpen: false
    }
  },
  mounted() {
    const locale = localStorage.getItem('locale') || 'hu'
    this.loadLanguageAsync(locale).catch(() => {
      console.log('Async language fetch failed')
    })
  },
  methods: {
    localeChanged (locale) {
      this.loadLanguageAsync(locale).catch(() => {
        console.log('Async language fetch failed')
      })
      localStorage.setItem('locale', locale)
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
button:disabled {
  background-color: #E2E2E2;
}
</style>
