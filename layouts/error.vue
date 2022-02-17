<template>
  <section
    class="py-60 bg-no-repeat w-full bg-center bg-cover text-center"
  >
    <h1>
      {{ $t('error.pageNotFound') }}
    </h1>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title = this.pageNotFound
    return {
      title,
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found'
    }
  }
})
</script>
