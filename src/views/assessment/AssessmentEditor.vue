<template>
    <div class="flex">
        <div class="sidebar-left">
            <AssessmentSideBar />
        </div>
        <div class="main-view">
            <div class="flex flex-row justify-end mb-3">
                <TheButton text="Preview" class="mr-3" />
                <TheButton text="Save" />
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
                    <div>
                        <label class="font-bold">Assessment Summary</label>
                        <textarea class="font-normal w-full mt-1 h-36" placeholder="Start Typing..."></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import AssessmentSideBar from '@/components/layouts/AssessmentSideBar.vue';
import TheButton from '@/components/buttons/TheButton.vue';

export default {
    components: {
        AssessmentSideBar,
        TheButton
    },

    data() {
        return {
            src: require("@/assets/images/default.webp")
        }
    }
}
</script>
<style scoped>
.main-view {
    flex: 1; 
    padding: 2rem;
}

.form input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>