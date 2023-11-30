<template>
    <div>
        <div class="flex justify-between">
            <h1 class="font-bold text-xl">Multiple Choice Question:</h1>
            <div class="flex">
                <input type="checkbox" id="multiple" name="multiple" value="multiple" class="h-3 mt-1.5"/>
                <label for="multiple" class="whitespace-nowrap ml-2">Allow multiple answers</label>
            </div>
        </div>
        <div class="flex border h-36 mb-5 rounded-lg">
            <div class="mr-5 border-r-2 w-20 flex justify-center align-center">
                <h1 class="text-4xl">A</h1>
            </div>
            <div class="flex justify-center align-center w-full relative">
                <div class="absolute top-3 right-5 flex align-center">
                    <div class="flex">
                        <p>Required</p>
                        <SwitchToggle class="mr-5 ml-1" />
                    </div>
                    <fa-icon :icon="['fas', 'trash']" />
                </div>
                <input placeholder="Write a statement here..." class="border-none w-full mr-15 active:outline-none focus:outline-none focus:border-none"/>
            </div>
        </div>
    </div>
</template>
<script>
import SwitchToggle from './SwitchToggle.vue';

export default {
    components: {
        SwitchToggle
    }
}
</script>