<template>
    <h1>Verifying Link...</h1>
</template>
<script>

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
}
</script>