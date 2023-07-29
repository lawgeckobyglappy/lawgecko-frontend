<template>
    <div class="signin-container">
        <div class="signin-inner-container">
            <h1 class="mb-2 text-heading-text font-bold text-2xl">Sign In</h1>
            <p class=" text-center text-md mb-8 text-light-dark-text">Enter your email address to login</p>
            <div class="form">
                <form @submit.prevent="submit">
                    <div :class="{ 'error': form.emailAddressError }">
                        <label>Email Address</label>
                        <input v-model="form.emailAddress" class="w-full mt-3 " />
                    </div>
                    <button type="submit" class="hover:-translate-y-1 transition-all bg-btn-green cursor-pointer">
                        <p v-if="!loading">Sign In</p>
                        <ButtonSpinner v-else />
                    </button>
                </form>
                <PopUp v-if="popupTrigger">
                    <fa-icon :icon="['fas', 'envelope-open-text']" size="2xl" style="color: #6CDFBD;" class="my-3" />
                    <h2 class="text-lg font-bold mb-1">Check your email</h2>
                    <p class="text-gray-500">Login with the link sent to <br><span class="font-bold">{{ this.emailAddress }}</span></p>
                    <a :href=emailProvider><button class="bg-btn-green cursor-pointer px-10 py-2 mt-6 rounded-md ">Go to email</button></a>
                </PopUp>
            </div>
            <div class="or-demarcation">
                <div class="hr">
                    <hr/>
                </div>
                <p class="or-text">or</p>
                <div class="hr">
                    <hr/>
                </div>
            </div>
            <div class="auth">
                <button id="google-btn">
                    <img src="../assets/images/google.png"/>
                </button>
                <button id="apple-btn">
                    <img src="../assets/images/apple.png"/>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { API_URL } from '@/constant'
import axios from 'axios'
import PopUp from '@/components/PopUp.vue'
import ButtonSpinner from '@/components/spinner/ButtonSpinner.vue'

export default {
    components: {
        PopUp,
        ButtonSpinner
    },

    data(){
        return {
            form : {
                emailAddress: "",
                emailAddressError: "",
            },
            loading: false,
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            popupTrigger: false,
        }
    },

    methods: {
        async submit(){
            this.validateUserEmail()
            try{
                if(this.isEmailValidated){
                    this.loading = true
                    const signInRequest = this.createSignInRequest
                    this.emailAddress = signInRequest.email
                    await axios.post(`${API_URL}/auth/request-login-link`, signInRequest)
                    this.emailProvider = "https://"+this.form.emailAddress.split("@")[1]
                    this.popupTrigger = true
                    setTimeout(() => {
                        this.popupTrigger = false
                    }, 20000)
                    this.resetForm()
                }
            } catch(error){
                console.log(error)
                this.resetForm()
            }

            this.resetForm()
        },

        validateUserEmail(){
            this.form.emailAddressError = this.form.emailAddress === "" || !this.emailRegex.test(this.form.emailAddress)
        },

        resetForm(){
            this.loading = false
            this.form.emailAddress = ""
        },
    },

    computed: {
        isEmailValidated(){
            return !this.form.emailAddressError
        },

        createSignInRequest(){
            return {
                "email": this.form.emailAddress,
            }
        }
    }
}
</script>
<style scoped>
.signin-container{
    background-image: url("../assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.signin-inner-container{
    min-width: 400px;
    padding: 20px;
}
.signin-inner-container h1 {
    text-align: center;
    margin-bottom: 3vh;
}
.or-demarcation{
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
}
.hr {
    height: 1.5px;
    margin-top: 12px;
    margin-bottom: 20px;
    background-color: #cbcaca;
}
.or-text {
    margin: 0 10px;
    font-weight: 600;
    color: #6E6E6E;
}
.form input{
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.form button{
    width: 100%;
    height: 47px;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.auth {
    display: flex;
    justify-content: space-between;
    max-width: 150px;
    margin: 10px auto;
}
.auth button {
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
}
.auth button img {
    height: 30px;
    width: 30px;
    padding: 5px;
}
.error input{
    border-color: red;
}
</style>