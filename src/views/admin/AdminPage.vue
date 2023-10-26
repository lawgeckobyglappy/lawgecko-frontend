<template>
    <div>
        <SideBar />
    </div>
    <div>
        <router-view />
    </div>
</template>
<script>

import SideBar from '@/components/layouts/SideBar.vue';

export default {
    components: {
        SideBar
    }
}
</script>

<style scoped>

</style>