<template>
    <div>
        <div class="flex border h-36 mb-5 rounded-lg">
            <div class="mr-5 border-r-2 w-20 flex justify-center align-center">
                <h1 class="text-4xl">{{ letter }}</h1>
            </div>
            <div class="flex justify-center align-center w-full relative">
                <div class="absolute top-3 right-5 flex align-center">
                    <fa-icon :icon="['fas', 'trash']" />
                </div>
                <input placeholder="Write a statement here..." class="border-none w-full mr-15 active:outline-none focus:outline-none focus:border-none"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        letter: {
            type: String,
            default: 'A'
        }
    },

    data() {
        return {
        }
    }
}
</script>