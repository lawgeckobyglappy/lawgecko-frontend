<template>
    <div class="p-8 flex flex-row">
        <div>
             <img src="../assets/images/auth.png"  class="h-full" />
        </div>
        <div class="w-4/5 border-solid border-2 flex flex-col align-center">
            <h1 >Create Account</h1>
            <div class="form">
                <form @submit.prevent="submit">
                        <div class="name">
                            <div :class="{ 'error': form.firstNameError }">
                                <label>
                                    {{ $t('signup.firstName') }}
                                </label>
                                <input v-model="form.firstName" @keydown.space.prevent />
                            </div>
                            <div :class="{ 'error': form.lastNameError }">
                                <label>
                                    {{ $t('signup.lastName') }}
                                </label>
                                <input v-model="form.lastName" @keydown.space.prevent />
                            </div>
                        </div>
                        <div :class="{ 'error': form.usernameError }">
                            <label>
                                {{ $t('signup.username') }}
                            </label>
                            <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p>
                            <input v-model="form.username" @keydown.space.prevent />
                        </div>
                        <div :class="{ 'error': form.usernameError }">
                            <label>
                                Phone Number
                                <!-- {{ $t('signup.phoneNumber') }} -->
                            </label>
                            <!-- <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p> -->
                            <input />
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
            </div>
            <div class="or-demarcation">
                <div class="hr">
                    <hr/>
                </div>
                <p class="or-text">or Register Using</p>
                <div class="hr">
                    <hr/>
                </div>
            </div>
            <div class="auth">
                <button id="google-btn" @click="googleAuth">
                    <img src="../assets/images/google.png"/>
                    Sign up with Google
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {

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
    }
}

</script>
<style>
.name {
    display: flex;
    justify-content: space-between;
}
.name > div:first-child{
    margin-right: 10px;
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
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #1a1a1a;
    color: black;
    border-radius: 5px;
}
label {
    margin-bottom: 5px;
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
</style>