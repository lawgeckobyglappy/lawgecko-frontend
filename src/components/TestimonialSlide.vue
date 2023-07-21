<template>
  <v-sheet class="" max-width="">
    <v-slide-group v-model="model" class="pa-4" show-arrows>
      <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ toggle}">
        <v-card color="" :class="['ma-4']" height="300" width="400" @click="toggle">
            <v-card-title>
                <div class="flex mt-5 items-center font-bold">
                    <img class="rounded h-15 w-15 mr-2" src="/images/user3.png" alt="">
                    Michel Johnson
                </div>
                
            </v-card-title>
            <v-card-text class="text-2xl mt-5">
                I was feeling lost and alone. But Lawgecko gave me the help
                and support i needed to get through it.
            </v-card-text>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style>

</style>