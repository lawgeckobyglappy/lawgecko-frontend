<template>
    <div class="signin-container">
        <div class="signin-inner-container">

            <div class="image-container">
                <div class="image rounded-top"></div> <!-- First div with rounded top -->
                <div class="image"></div> <!-- Second div (no rounded borders) -->
                <div class="image rounded-bottom"></div> <!-- Third div with rounded bottom -->
            </div>

        <div class="form-content">
            <h1 class="mb-8 mt-1 text-heading-text font-bold text-2xl">Lawgeck<span class="text-orange-400"><span class="big-o">o</span></span></h1>
            <p class="mb-10 text-heading-text font-bold text-2xl">{{$t('signin.paragraph')}}</p> 
            <div class="form">
                <form @submit.prevent="submit">
                    <div :class="{ 'error': form.emailAddressError }">
                        <label>{{$t('signin.emailAddress')}}</label>
                        <input v-model="form.emailAddress" class="w-full mt-3 " placeholder="CarlJohnson22@yahoo.com" />
                    </div>
                    <button type="submit" class="mb-5 hover:-translate-y-1 transition-all bg-btn-green cursor-pointer">
                        <p v-if="!loading">{{ $t("header.signUp") }}</p>
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
                <p class="mb-5 or-text">or Sign in Using</p>
                <div class="hr">
                    <hr/>
                </div>
            </div>
            <button class="google-button" @click="registerUsingGoogle">
                Register Using Google
            </button>
            <div class="signin-link">
                <p class="text-center">Don't Have an Account? <a href="SignUp">Sign Up</a></p>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import { API_URL } from '@/constant'
import axios from 'axios'
import PopUp from '@/components/PopUp.vue'
import ButtonSpinner from '@/components/spinner/ButtonSpinner.vue'
import { googleAuthCodeLogin } from "vue3-google-login"
import { fetcher } from "@/utils/fetcher"

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
        },

        validateUserEmail(){
            this.form.emailAddressError = this.form.emailAddress === "" || !this.emailRegex.test(this.form.emailAddress)
        },

        resetForm(){
            this.loading = false
            this.form.emailAddress = ""
        },

        async googleAuth() {
            try {
                const response = await googleAuthCodeLogin();
                const token = await fetcher.post('/auth/handle-google-auth', { "code": response.code, "isLogin": true });
                await this.$store.dispatch('verifyToken', token.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
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
    display: flex;
    align-items: center;
    width: 100%;
}
.form-content {
  display: flex;
  flex-direction: column;
  margin: auto;
}
/* Images*/
.image-container {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 10px;
}

.image {
  width: 300px;
  height: 180px;
  background-color: #ccc;
  margin-bottom: 1px;
}

.rounded-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.rounded-bottom {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
.big-o {
    font-size: 1.2em;
  }
  .google-button {
    background-color: rgb(49, 69, 179);
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 47px;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
  }
  .signin-link{
    font-weight: 600;
    color: #6E6E6E;
  }
  @media (max-width: 768px) {
  .image-container {
    display: none;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    margin-top: -200px; 
    }
}
</style>