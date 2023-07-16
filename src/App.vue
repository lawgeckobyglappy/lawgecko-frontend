<template>
  <language-switcher/>
  <router-view/>
</template>

<script>
import LanguageSwitcher from './components/LanguageSwitcher.vue'

    export default {
        components: {
          LanguageSwitcher,
        }
    }
</script>

<style></style>
