<template>
    <div>
        <div v-show="!mobile" class="flex flex-row justify-end mb-3">
            <TheButton text="Preview" class="mr-3" />
            <TheButton text="Save" />
        </div>
        <div class="mb-10"></div>
    </div>
    <div class="coverImage">
        <input type="file" accept="image/*" class="hidden"/>
        <div class="relative inline-block mb-7">
            <img :src="src" alt="Avatar" class="h-36 w-72 h-36 object-cover rounded-lg "/>
            <div class="absolute top-0 h-full w-full rounded-lg bg-green-900 bg-opacity-25 flex items-center justify-center">
                <button><fa-icon :icon="['fas', 'camera']" size="xl" style="color: #a1a0a0;" /></button>
            </div>
        </div>
    </div>
            <div class="form">
                <form>
                    <div>
                        <label class="font-bold">Title</label>
                        <input placeholder="Give a name to your Assessment" class="h-16"/>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="font-bold">Max Attempts</label>
                            <select>
                                <option value="No Limit" selected>No Limit</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div>
                            <label class="font-bold">Grading Criteria</label>
                            <select>
                                <option value="Ungraded" selected>Ungraded (Default)</option>
                                <option value="Severity Level">Severity Level</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="font-bold">Assessment Summary</label>
                        <QuillEditor theme="snow" placeholder="Start Typing..." class="font-normal w-full mt-1 h-36 rounded-lg"/>
                    </div>
                    <div v-show="mobile" class="flex mt-10 flex-row justify-end mb-3">
                        <TheButton text="Preview" class="mr-3" />
                        <TheButton text="Save" />
                    </div>
                </form>
            </div>
            <div class="main-view">
                <router-view />
            </div>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
    components: {
        TheButton, 
        QuillEditor
    },

    data() {
        return {
            src: require("@/assets/images/default.webp"),
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