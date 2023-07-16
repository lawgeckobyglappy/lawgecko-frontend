<template>
  <h1 class="text-center mt-10 uppercase font-bold text-3xl text-green-700">
    The Home page
    <p>{{ $t('message') }}</p>
    <p>{{ $t('nav.features') }}</p>

    <router-link to="/about">About</router-link>
  </h1>
</template>

<script>
export default {};
</script>

<style scoped></style>
