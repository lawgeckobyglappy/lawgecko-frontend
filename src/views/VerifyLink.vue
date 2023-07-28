<template>
    <h1>Verifying Link...</h1>
</template>
<script>
import axios from 'axios';
import { API_URL } from '@/constant';
export default{
    created(){
        const id = this.$route.query.id
        this.verifyLoginLink(id)
    },

    methods: {
        async verifyLoginLink(linkId){
            try{
                const response = await axios.post(`${API_URL}/auth/verify-login-link`, {id: linkId})
                console.log(response)
            } catch(error){
                console.log(error)
            }
        }
    }
}
</script>