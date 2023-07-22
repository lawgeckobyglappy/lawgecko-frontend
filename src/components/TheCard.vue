<template>
    <v-card class="mx-auto" max-width="400" max-height="800">
        <v-img v-bind:src="cardImage" height="" >
        </v-img>

        <v-card-title class="mt-5">
          <span class="text-2xl font-bold">{{ cardTitle }}</span>  
        </v-card-title>

        <v-card-text>
            <span class="text-lg text-gray-500">
                {{ cardText }}
            </span>
        </v-card-text>

    </v-card>
</template>

<script>
export default {

    props: {
        cardImage: String,
        cardTitle: String,
        cardText: String
    }
    
}
</script>

<style>

</style>