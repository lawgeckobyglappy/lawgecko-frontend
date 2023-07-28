<template>
    <h1>Verifying Link...</h1>
</template>
<script>
import axios from 'axios';
import { API_URL } from '@/constant';
import router from '@/router/index'
export default{
    created(){
        const id = this.$route.query.id
        this.verifyLoginLink(id)
    },

    methods: {
        async verifyLoginLink(linkId){
            try{
                const response = await axios.post(`${API_URL}/auth/verify-login-link`, {id: linkId})
                const jwtToken = response.data.data
                await this.getCurrentUser(jwtToken)
                router.push("/signin")
            } catch(error){
                console.log(error)
            }
        }, 

        async getCurrentUser(jwtToken){
            try{
                const config = {
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`
                    }
                }
                const response = await axios.get(`${API_URL}/auth/current-user`, config);
                console.log(response.data)
            } catch(error){
                console.log(error)
            }
        }
    }
}
</script>