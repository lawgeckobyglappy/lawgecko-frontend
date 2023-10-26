<template>
    <main>
        <h1>Site Admins</h1>
        <TheButton text="Add Sub Admin" />
        <div>
            <p>This is the Admin Page</p>
        </div>
    </main>
</template>
<script>
import TheButton from '@/components/buttons/TheButton.vue';

export default {
    components: {
        TheButton
    }
}
</script>