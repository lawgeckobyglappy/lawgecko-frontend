<template>
    <div class="flex flex-row justify-end mb-3">
        <TheButton text="Preview" class="mr-3" />
        <TheButton text="Save" />
    </div>
    <div class="">
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
                <!-- <Option /> -->
                <Option v-for="(option, index) in options" :key="index"/>
                <TheButton text="Add an Option" />
            </div>
        </form>
    </div>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import Option from '@/components/MCQOption.vue'
import { QuillEditor } from '@vueup/vue-quill';

export default {
    components: {
        TheButton, 
        QuillEditor,
        Option,
    },

    data() {
        return {
            questionType: null,
            options: [Option, Option]
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