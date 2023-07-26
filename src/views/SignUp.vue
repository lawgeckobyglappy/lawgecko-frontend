<template>
    <div class="signup-container">
        <div class="signup-inner-container">
            <h1>Sign up to Lawgecko</h1>
            <div class="auth">
                <button id="google-btn">
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
                                First Name
                            </label>
                            <input v-model="form.firstName" />
                        </div>
                        <div :class="{ 'error': form.lastNameError }">
                            <label>
                                Last Name
                            </label>
                            <input v-model="form.lastName" />
                        </div>
                    </div>
                    <div :class="{ 'error': form.usernameError }">
                        <label>
                            Username
                        </label>
                        <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p>
                        <input v-model="form.username" />
                    </div>
                    <div :class="{ 'error': form.emailAddressError }">
                        <label>
                            Email Address
                        </label>
                        <p v-if="emailExists" class="text-red-500 text-xs">* Email Already Exists</p>
                        <input v-model="form.emailAddress" />
                    </div>
                    <div class="policy-agreement" :class="{ 'error': !form.policySigned }">
                        <input type="checkbox" id="checkboxInput" v-model="form.policySigned"/>
                        <label for="termsCheckbox">
                            <p class="text-xs text-red-500" v-if="form.policySigned === false">* Required</p>
                            By signing up, you agree to our Terms of Service and Privacy Policy,
                            including Cookie Use
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" class="bg-btn-green cursor-pointer"/>
                    </div>
                </form>
                <PopUp v-if="popupTrigger">
                    <fa-icon :icon="['fas', 'envelope-open-text']" size="2xl" style="color: #6CDFBD;" class="my-3" />
                    <h2 class="text-lg font-bold mb-1">Check your email</h2>
                    <p class="text-gray-500">Login with the link sent to <br><span class="font-bold">{{ this.form.emailAddress }} some.com</span></p>
                    <a :href=emailProvider><button class="bg-btn-green cursor-pointer px-10 py-2 mt-6 rounded-md ">Go to email</button></a>
                </PopUp>
            </div>
        </div>
    </div>
</template>
<script>
import PopUp from '@/components/PopUp.vue'
export default {
    components: {
        PopUp
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
                emailProvider: ""

            }, 
            usernameExists: false,
            emailExists: false,
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            popupTrigger: false
        }
    },

    methods: {
        async submit(){
            this.validateUserData()
            if(this.isAllValidated){
                // call signup api
                console.log("Submitted", this.form.emailAddress)
                this.emailProvider = "https://"+this.form.emailAddress.split("@")[1]
                this.popupTrigger = true
                await this.resetForm()
                setTimeout(() => {
                    this.popupTrigger = false
                }, 5000)
            }
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
            this.form.policySigned = null
            this.form.emailAddress = ""
        }
    },

    computed: {
        isAllValidated(){
            return !this.form.firstNameError && !this.form.lastNameError && !this.form.usernameError
            && !this.form.emailAddressError && this.form.policySigned
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
    margin-bottom: 3vh;
    font-size: 20px;
    font-weight: 500;
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