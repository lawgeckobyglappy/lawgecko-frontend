<template>
    <div class="flex flex-row justify-end mb-3">
        <TheButton text="Preview" class="mr-3" />
        <TheButton text="Save" />
    </div>
    <div>
        <form class="form">
            <label class="font-bold">Question Type</label>
            <select>
                <option value="No Limit" selected>Select Options</option>
                <option value="1">MCQ</option>
                <option value="2">True False</option>
                <option value="3">Free Text</option>
            </select>

            <div>
                <label class="font-bold">Question Statement</label>
                <QuillEditor theme="snow" placeholder="Start Typing..." class="font-normal w-full mt-1 h-36 rounded-lg mb-5"/>
            </div>

            <div>
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
                        <div class="flex justify-center align-center w-full">
                            <input placeholder="Write a statement here..." class="border-none w-full mr-15 mt-3 active:outline-none focus:outline-none focus:border-none"/>
                        </div>
                    </div>
                </div>
                <TheButton text="Add an Option" />
            </div>
        </form>
    </div>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import { QuillEditor } from '@vueup/vue-quill';

export default {
    components: {
        TheButton, 
        QuillEditor
    },

    data() {
        return {

        }
    }
}
</script>
<style scoped>
.form input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>