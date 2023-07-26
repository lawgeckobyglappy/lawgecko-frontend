<template>
  <router-view/>
  <div>

    <TheFooter/> 
  </div>
</template>
<script>
  import TheFooter from '@/components/layouts/TheFooter.vue';
  export default {
    components: {
      TheFooter,
    }
  }
</script>

<style></style>
