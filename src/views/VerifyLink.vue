<template>
    <h1>Verifying Link...</h1>
    <!-- <GoogleLogin :callback="callback"/> -->
</template>
<script>
// import { GoogleLogin } from 'vue3-google-login';
// import { decodeCredential } from 'vue3-google-login'

export default{
    created() {
        const id = this.$route.query.id;
        this.verifyLoginLink(id);
    },
    methods: {
        async verifyLoginLink(linkId) {
            await this.$store.dispatch('verifyLoginLink', linkId);
        },

        // callback(response){
        //     // This callback will be triggered when the user selects or login to
        //     // his Google account from the popup
        //     // const userData = decodeCredential(response.credential)
        //     // console.log("Handle the userData", userData)
        // }
    },
    // components: { GoogleLogin }
}
</script>