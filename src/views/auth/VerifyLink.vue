<template>
    <div class="outer-container">
        <ButtonSpinner />
    </div>
</template>
<script>
import ButtonSpinner from '@/components/spinner/ButtonSpinner.vue';

export default{
    created() {
        const id = this.$route.query.id;
        this.verifyLoginLink(id);
    },
    methods: {
        async verifyLoginLink(linkId) {
            await this.$store.dispatch('verifyLoginLink', linkId);
        },
    },
    components: {
        ButtonSpinner
    }
}
</script>
<style scoped>
.outer-container{
    background-image: url("@/assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    filter: brightness(70%);
}
</style>