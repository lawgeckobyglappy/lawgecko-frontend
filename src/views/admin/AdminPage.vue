<template>
    <div class="flex">
        <div class="sidebar-left">
            <SideBar />
        </div>
        <div class="main-view">
            <router-view />
        </div>
    </div>
</template>
<script>

import SideBar from '@/components/layouts/SideBar.vue';

export default {
    components: {
        SideBar
    },
}
</script>

<style scoped>
.main-view {
    flex: 1; 
    padding: 2rem;
}

@media (max-width: 1000px) {
    .main-view {
        overflow-x: hidden;
        padding-left: 6rem;
    }
}
</style>