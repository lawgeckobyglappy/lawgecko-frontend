<template>
  <TheHeader />
  <!-- <h1 class="text-center mt-10 uppercase font-bold text-3xl text-green-700">
   <h1>{{ $t('message') }}</h1>
   <fa-icon icon="user"/>
   <fa-icon :icon="['fab','font-awesome']"/>
  </h1> -->
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components:{
    TheHeader
  }
};
</script>

<style scoped></style>
