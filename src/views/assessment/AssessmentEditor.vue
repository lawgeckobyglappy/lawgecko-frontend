<template>
    <div class="flex">
        <div class="sidebar-left">
            <AssessmentSideBar />
        </div>
        <div class="main-view">
            <div>Vibes</div>
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