<template>
    <div class="signin-container">
        <div class="signin-inner-container">

            <div class="form-content">
                <div class="logo">
                    <img src="/logo.svg" alt="lawgecko logo" class="w-40 logo mb-50" />
                </div>
                <p class="mb-10 text-heading-text font-bold text-2xl">{{$t('signin.paragraph')}}</p> 
                <div class="form">
                    <form @submit.prevent="submit">
                        <div :class="{ 'error': form.emailAddressError }">
                            <label class="font-bold">{{$t('signin.emailAddress')}}</label>
                            <input v-model="form.emailAddress" class="w-full mt-3 " placeholder="elliot@lawgecko.com" />
                        </div>
                        <button type="submit" class="mb-5 hover:-translate-y-1 transition-all bg-btn-green cursor-pointer">
                            <p v-if="!loading" class="font-bold">{{ $t("header.signIn") }}</p>
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
                    <p class="mb-5 or-text">or</p>
                    <div class="hr">
                        <hr/>
                    </div>
                </div>
                <button id="google-btn" class="bg-btn-blue mt-8 mb-5 text-white" @click="googleAuth">
                    <img src="@/assets/images/google.png"/>
                    Continue with Google
                </button>
                <div>
                    <p class="text-center font-semibold text-[#6E6E6E]">Don't Have an Account? <a href="SignUp" class="text-[#4172D1]">Sign Up</a></p>
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
                    await axios.post(`${API_URL}/accounts/request-login-link`, signInRequest)
                    this.emailProvider = "https://"+this.form.emailAddress.split("@")[1]
                    this.popupTrigger = true
                    setTimeout(() => {
                        
                        this.popupTrigger = false
                    }, 20000)
                    this.resetForm()
                }
            } catch(error){
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
                const token = await fetcher.post('/accounts/handle-google-auth', { "code": response.code, "isLogin": true });
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
.logo {
  margin: 15px auto 10px;
}
.signin-container {
  background-image: url("@/assets/images/backgroundImage.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.signin-inner-container {
  display: flex;
  align-items: center;
  width: 100%;
}
.form-content {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

}
/* Images */
.image-container {
  margin: 40px 0 40px 100px;
}
.image-container img {
    max-width: 90%;
    position: relative;
    height: auto;
}
.or-demarcation {
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
.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form button {
  width: 100%;
  height: 47px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.error input {
  border-color: red;
}
button {
  width: 100%;
  height: 47px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button img {
    height:30px;
    margin-right: 10px;
}
@media (max-width: 760px) {
  
  .form-content {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
}
</style>