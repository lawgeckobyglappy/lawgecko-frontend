<template>
  <v-card class="hover:translate-y-1 mx-4" height="300" width="400"  :style=" 'border: 1px solid black;'" @click="toggle">
    <v-card-title>

      <div class="flex mt-5 items-center font-bold">
        <img class="rounded h-15 w-15 mr-2" v-bind:src="cardProfile" alt="">
        {{ ProfileName }}
      </div>
        
    </v-card-title>
    <v-card-text class="mt-5">
      <span class="text-xl text-gray-500">
        {{ TestimonyText }}
      </span>
    </v-card-text>

    <v-card-footer class="mt-8 ml-16">
      <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
      <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
      <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
      <fa-icon :icon="['fas', 'star']" class="text-secondary-color mr-2"/>
      <fa-icon :icon="['fas', 'star']" class="text-secondary-color"/>
    </v-card-footer>
    </v-card>
</template>

<script>
export default {

    props: {
      cardProfile: String,
      ProfileName: String,
      TestimonyText: String
    }
    
}
</script>

<style>

</style>