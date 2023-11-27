<template>
    <div class="flex">
        <div class="sidebar-left">
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
    }
}
</script>

<style scoped>
.main-view {
    flex: 1; 
    padding: 2rem;
}
</style>