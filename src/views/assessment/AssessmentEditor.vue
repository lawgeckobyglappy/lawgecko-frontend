<template>
    <div class="flex">
        <div v-show="mobileNav" class="sidebar-left">
            <AssessmentSideBar />
        </div>
        <div class="main-view">
            <router-view />
        </div>
    </div>
</template>
<script>
import AssessmentSideBar from '@/components/layouts/AssessmentSideBar.vue';

export default {
    components: {
        AssessmentSideBar
    },

    data(){
        return {
            windowWidth: null,
            mobileNav: null
        }
    },

    mounted(){
        window.addEventListener("resize", this.checkScreen);
        window.addEventListener("load", this.checkScreen);
        this.checkScreen();
    }, 

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            const main = document.getElementsByClassName('main-view')[0];

            if (!main) {
                return;
            }

            if (this.windowWidth <= 850) {
                main.style.marginLeft = '0';
                this.mobileNav = false;
            } else {
                main.style.marginLeft = '250px';
                this.mobileNav = true;
            }
        }
    }
}
</script>

<style scoped>
.sidebar-left {
  position: fixed;
}
.main-view {
    flex: 1; 
    padding: 2rem;
    overflow-y: auto;
    margin-left: 250px;
}
</style>