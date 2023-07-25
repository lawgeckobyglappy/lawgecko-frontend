<template>
  <router-view/>
  <div>

    <TheFooter/> 
  </div>
</template>
<script>
  import TheFooter from '@/components/Layouts/TheFooter.vue';
  export default {
    components: {
      TheFooter,
    }
  }
</script>

<style></style>
