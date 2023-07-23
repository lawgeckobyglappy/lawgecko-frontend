<template>
  <v-sheet class="" max-width="">
    <v-slide-group v-model="model" class="pa-4" show-arrows :icon="['fa', 'arrow-left']">
      <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ toggle}" >
        <v-card :class="['ma-4']" height="300" width="400"  :style=" 'border: 1px solid black;'" @click="toggle">
          <v-card-title>

            <div class="flex mt-5 items-center font-bold">
                <img class="rounded h-15 w-15 mr-2" src="/images/user3.png" alt="">
                Michel Johnson
            </div>
              
          </v-card-title>
          <v-card-text class="mt-5">
            <span class="text-xl text-gray-500">
              I was feeling lost and alone. But Lawgecko gave me the help
              and support i needed to get through it.
            </span>
          </v-card-text>

          <v-card-footer class="mt-8 ml-16">
            <fa-icon :icon="['fas', 'star']" class="text-yellow-600 mr-2"/>
            <fa-icon :icon="['fas', 'star']" class="text-yellow-600 mr-2"/>
            <fa-icon :icon="['fas', 'star']" class="text-yellow-600 mr-2"/>
            <fa-icon :icon="['fas', 'star']" class="text-yellow-600 mr-2"/>
            <fa-icon :icon="['fas', 'star']" class="text-yellow-600"/>
          </v-card-footer>
        </v-card>
        
      </v-slide-group-item>
    </v-slide-group>
    <div class="flex items-center justify-center mt-5 mb-40 text-2xl">
      <fa-icon :icon="['fa', 'arrow-left']" class="text-yellow-600 mr-8"/>
      <fa-icon :icon="['fa', 'arrow-right']" class="text-yellow-600"/>
    </div>
  </v-sheet>
</template>

<script>
  export default {

    msg: "jane",

    data() {
      return{
        cardTitle: "Jane doe"
      }
    },
  }
</script>

<style>

</style>