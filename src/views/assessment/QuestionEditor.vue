<template>
    <div v-show="!mobile" class="flex flex-row justify-end mb-3">
        <TheButton text="Preview" class="mr-3" />
        <TheButton text="Save" />
    </div>
    <div class="mb-10"></div>
    <div>
        <form class="form">
            <label class="font-bold">Question Type</label>
            <select v-model="questionType" @change="handleQuestionTypeChange">
                <option value="Null" selected>Select Options</option>
                <option value="MCQ">MCQ</option>
                <option value="True/False">True False</option>
                <option value="Scale">Scale</option>
            </select>

            <div>
                <label class="font-bold">Question Statement</label>
                <QuillEditor theme="snow" placeholder="Start Typing..." class="font-normal w-full mt-1 h-36 rounded-lg mb-5"/>
            </div>

            <div>
                <div v-if="questionType === 'MCQ'" class="flex justify-between">
                    <h1 class="font-bold text-xl">Multiple Choice Question:</h1>
                    <div class="flex">
                        <label for="multiple" class="whitespace-nowrap mr-1">Allow multiple answers</label>
                        <input type="checkbox" id="multiple" name="multiple" value="multiple" class="h-3 mt-1.5 mr-4"/>
                        <div class="flex">
                            <p>Required</p>
                            <SwitchToggle class="ml-1" />
                        </div>
                    </div>
                </div>
                <div v-if="questionType === 'True/False'" class="flex justify-between">
                    <h1 class="font-bold text-xl">Statement is:</h1>
                    <div class="flex align-center">
                        <div class="mr-4">
                            <button class="border p-2" >True</button>
                            <button class="border p-2" >False</button>
                        </div>
                        <div class="flex">
                            <p>Required</p>
                            <SwitchToggle class="mr-5 ml-1" />
                        </div>
                    </div>
                </div>
                <div v-if="questionType === 'Scale'" class="flex justify-between">
                    <h1 class="font-bold text-xl">Severity Level:</h1>
                    <div class="flex align-center">
                        <div class="flex">
                            <p>Required</p>
                            <SwitchToggle class="mr-5 ml-1" />
                        </div>
                    </div>
                </div>
                <div v-if="questionType === 'MCQ'">
                    <Option v-for="(option, index) in options" :key="index" :letter="option.letter"/>
                    <TheButton v-if="questionNumber < 91" text="Add an Option" @click.prevent="addOption" class="w-32"/>
                </div>
                <div v-if="questionType === 'True/False' || questionType === 'Scale'">
                    <Statement class="mt-2"/>
                </div>
            </div>
            <div v-show="mobile" class="flex flex-row mt-10 justify-end mb-3">
                <TheButton text="Preview" class="mr-3" />
                <TheButton text="Save" />
            </div>
        </form>
    </div>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import Option from '@/components/MCQOption.vue'
import { QuillEditor } from '@vueup/vue-quill';
import SwitchToggle from '@/components/SwitchToggle.vue'
import Statement from '@/components/QuestionStatement.vue'

export default {
    components: {
        TheButton, 
        QuillEditor,
        Option,
        SwitchToggle,
        Statement
    },

    data() {
        return {
            questionType: "Null",
            options: [Option],
            questionNumber: 66,
            isTrue: true,
            windowWidth: null,
            mobile: null
        }
    },

    mounted(){
        window.addEventListener("resize", this.checkScreen);
        window.addEventListener("load", this.checkScreen);
        this.checkScreen()
    },

    methods: {
        addOption(){
            let option = {
                letter: String.fromCharCode(this.questionNumber)
            }
            this.options.push(option)
            this.questionNumber += 1;
        },

        handleQuestionTypeChange(){
            this.questionNumber = 66
            this.options = [Option]
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;

            if (this.windowWidth <= 850) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        },
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