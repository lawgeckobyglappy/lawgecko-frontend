<template>
    <div>
        <SideBar />
    </div>
    <div>
        <h1>Site Admins</h1>
        <TheButton text="Add Sub Admin" />
        <div>
            <p>This is the Admin Page</p>
        </div>
    </div>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';
import SideBar from '@/components/layouts/SideBar.vue';

export default {
    components: {
        TheButton,
        SideBar
    }
}
</script>

<style scoped>

</style>