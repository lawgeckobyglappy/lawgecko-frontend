<template>
    <div class="signup-container">
        <!-- <GoogleLogin :callback="oAuthCallBack"/> -->
        <div class="signup-inner-container">
            <h1 class="mb-4 text-heading-text font-bold text-2xl">Sign up to Lawgecko</h1>
            <div class="auth">
                        <button id="google-btn" @click="oAuthCallBack">
                            <img src="../assets/images/google.png"/>
                            Sign up with Google
                        </button>
                <button id="apple-btn">
                    <img src="../assets/images/apple.png"/>
                    Sign up with Apple
                </button>
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
            <div class="form">
                <form @submit.prevent="submit">
                    <div class="name">
                        <div :class="{ 'error': form.firstNameError }">
                            <label>
                                {{ $t('signup.firstName') }}
                            </label>
                            <input v-model="form.firstName" />
                        </div>
                        <div :class="{ 'error': form.lastNameError }">
                            <label>
                                {{ $t('signup.lastName') }}
                            </label>
                            <input v-model="form.lastName" />
                        </div>
                    </div>
                    <div :class="{ 'error': form.usernameError }">
                        <label>
                            {{ $t('signup.username') }}
                        </label>
                        <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p>
                        <input v-model="form.username" />
                    </div>
                    <div :class="{ 'error': form.emailAddressError }">
                        <label>
                            {{ $t('signup.emailAddress') }}
                        </label>
                        <p v-if="emailExists" class="text-red-500 text-xs">* Email Already Exists</p>
                        <input v-model="form.emailAddress" />
                    </div>
                    <div class="policy-agreement" :class="{ 'error': !form.policySigned }">
                        <input type="checkbox" id="checkboxInput" v-model="form.policySigned"/>
                        <label for="termsCheckbox">
                            <p class="text-xs text-red-500" v-if="form.policySigned === false">* Required</p>
                            {{$t('signup.terms')}}
                        </label>
                    </div>
                    <div>
                        <button type="submit" class="hover:-translate-y-1 transition-all bg-btn-green cursor-pointer">
                        <p v-if="!loading">{{ $t("header.signUp") }}</p>
                        <ButtonSpinner v-else />
                    </button>
                    </div>
                </form>
                <PopUp v-if="popupTrigger">
                    <fa-icon :icon="['fas', 'envelope-open-text']" size="2xl" style="color: #6CDFBD;" class="my-3" />
                    <h2 class="text-lg font-bold mb-1">Check your email</h2>
                    <p class="text-gray-500">Login with the link sent to <br><span class="font-bold">{{ this.emailAddress }}</span></p>
                    <a :href=emailProvider><button class="bg-btn-green cursor-pointer px-10 py-2 mt-6 rounded-md ">Go to email</button></a>
                </PopUp>
            </div>
        </div>
    </div>
</template>
<script>
import PopUp from '@/components/PopUp.vue'
import ButtonSpinner from '@/components/spinner/ButtonSpinner.vue'
import { fetcher } from "@/utils/fetcher"
import { googleAuthCodeLogin } from "vue3-google-login"

export default {
    components: {
    PopUp,
    ButtonSpinner,
},

    data() {
        return {
            form : {
                firstName: "",
                lastName: "",
                username: "",
                emailAddress: "",
                policySigned: null,
                firstNameError: "",
                lastNameError: "",
                usernameError: "",
                emailAddressError: "",
            }, 
            loading: false,
            emailProvider: "",
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            popupTrigger: false,
            emailAddress: "",
            emailExists: "",
            usernameExists: "",
        }
    },

    methods: {
        async submit(){
            this.validateUserData()
            try{
                if(this.isAllValidated){
                    const registerRequest = this.createRegisterRequest
                    this.emailAddress = registerRequest.email

                    await fetcher.post('/auth/register', registerRequest)

                    this.emailProvider = "https://"+this.form.emailAddress.split("@")[1]
                    this.popupTrigger = true

                    setTimeout(() => {
                        this.popupTrigger = false
                    }, 20000)

                    this.resetForm()
                }
            } catch(error){
                this.handleRegistrationError(error)
            }
        },

        handleRegistrationError(error){
            this.emailExists = error.message === 'Email already taken' ? error.message : ''
            this.usernameExists = error.message === 'Username already taken' ? error.message : ''
        },

        validateUserData(){
            this.form.firstNameError = this.form.firstName === "";
            this.form.lastNameError = this.form.lastName === "";
            this.form.usernameError = this.form.username === "";
            this.form.policySigned = this.form.policySigned === true;
            this.form.emailAddressError = this.form.emailAddress === "" || !this.emailRegex.test(this.form.emailAddress)
        },

        resetForm(){
            this.form.firstName = "",
            this.form.lastName = "",
            this.form.username = "",
            this.form.policySigned = null,
            this.form.emailAddress = ""
        },

        oAuthCallBack(){
            googleAuthCodeLogin().then((response) => {
                console.log("Handle the response", response)
            })
        }
    },

    computed: {
        isAllValidated(){
            return !this.form.firstNameError && !this.form.lastNameError && !this.form.usernameError
            && !this.form.emailAddressError && this.form.policySigned
        },

        createRegisterRequest(){
            return {
                "email": this.form.emailAddress,
                "firstName": this.form.firstName,
                "lastName": this.form.lastName,
                "username": this.form.username
            }
        }
    }
}
</script>
<style scoped>
.signup-container{
    background-image: url("../assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.signup-inner-container{
    max-width: 500px;
    padding: 20px;
}
.signup-inner-container h1{
    text-align: center;
    color: black;
}
.auth {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 20px auto;
}
.auth button {
    border: 1px solid;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 25px 5px 4px;
    font-size: 12px;
}
.auth button img {
    height: 25px;
    padding: 5px;
    background-color: white;
    border-radius: 2px;
    margin-right: 7px;
}
#apple-btn{
    background-color: #414040;
    color: white;
}
#google-btn{
    background-color: #4172D1;
    color: white;
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
.form {
    display: flex;
    flex-direction: column;
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
.name {
    display: flex;
    justify-content: space-between;
}
.name > div:first-child{
    margin-right: 10px;
}
label {
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.policy-agreement {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

#checkboxInput{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.error input{
    border-color: red;
}

@media (max-width: 600px) {
    .name {
        flex-direction: column;
    }
    .name > div:first-child{
    margin-right: 0;
}
}
</style>