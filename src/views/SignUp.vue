<template>
    <div class="p-8 flex flex-row signup-container">
      <div class="images">
        <img src="../assets/images/auth.png" class="w-full" />
      </div>
      <div class="w-9/12 mt-5 mb-10 w-full form-content">
        <!-- align-center -->
        <div class="logo">
          <img src="/logo.svg" alt="lawgecko logo" class="w-40 mx-auto logo" />
        </div>
        <div class="w-7/12 mx-auto form">
          <p class="mb-10 mt-10 font-bold text-2xl">Create An Account</p>
          <form @submit.prevent="submit">
            <div class="name">
                <div :class="{ 'error': form.firstNameError }">
                    <label>
                      {{ $t('signup.firstName') }}  
                    </label>
                    <input v-model="form.firstName" @keydown.space.prevent placeholder="Elliot"/>
                </div>
                <div :class="{ 'error': form.lastNameError }">
                    <label>
                      {{ $t('signup.lastName') }}
                    </label>
                  <input v-model="form.lastName" @keydown.space.prevent placeholder="Johnson"/>
                </div>
            </div>
            <div :class="{ 'error': form.emailAddressError }">
              <label>
                {{ $t('signup.emailAddress') }}
              </label>
              <p v-if="emailExists" class="text-red-500 text-xs">* {{ this.emailAddressError }}</p>
              <input v-model="form.emailAddress" @keydown.space.prevent placeholder="e.johnson@lawgecko.com" />
            </div>
            <div :class="{ 'error': form.phoneNumberError }">
              <label>
                {{ $t('signup.phoneNumber') }}
              </label>
              <p v-if="phoneNumberExists" class="text-red-500 text-xs">* {{ this.phoneNumberError }}</p>
              <div class="flex justify-between">
                <select v-model="form.countryCode" id="countryCode">
                  <option value="+234" selected>+234</option>
                  <option value="+44">+44</option>
                </select>
                <input v-model="form.phoneNumber" @keydown.space.prevent placeholder="9098088770" />
              </div>
            </div>
            <div class="policy-agreement" :class="{ 'error': !form.policySigned }">
              <input type="checkbox" id="checkboxInput" v-model="form.policySigned" />
              <label for="termsCheckbox">
                <p class="text-xs text-red-500" v-if="form.policySigned === false">* Required</p>
                {{ $t('signup.terms') }}
              </label>
            </div>
            <div>
              <button type="submit" class="hover:-translate-y-1 mb-8 mt-8 transition-all bg-btn-green cursor-pointer">
                <p v-if="!loading" class="font-bold">Create Account</p>
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
          <div class="or-demarcation">
            <div class="hr">
              <hr />
            </div>
            <p class="or-text">or</p>
            <div class="hr">
              <hr />
            </div>
          </div>
          <div class="auth">
            <button id="google-btn" class="bg-btn-blue mt-8 mb-5 text-white" @click="googleAuth">
              <img src="../assets/images/google.png" />
              Sign up with Google
            </button>
          </div>
          <p class="text-center font-semibold text-[#6E6E6E]">Already Have an Account? <a href="/signin" class="text-[#4172D1]"><span>Sign In</span></a> </p>
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
    ButtonSpinner
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        policySigned: null,
        firstNameError: "",
        lastNameError: "",
        phoneNumberError: "",
        emailAddressError: "",
        countryCode: "+234"
      },
      loading: false,
      emailProvider: "",
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      popupTrigger: false,
      emailAddress: "",
      emailExists: "",
      phoneNumberExists: "",
    };
  },

  methods: {
    async submit() {
      this.validateUserData()
      try {
        if (this.isAllValidated) {
          this.loading = true
          const registerRequest = this.createRegisterRequest
          this.emailAddress = registerRequest.email

          await fetcher.post('/auth/register', registerRequest)

          this.emailProvider = "https://" + this.form.emailAddress.split("@")[1]
          this.popupTrigger = true

          setTimeout(() => {
            this.popupTrigger = false
          }, 20000)

          this.resetForm()
        }
      } catch (error) {
        this.loading = false;
        this.handleRegistrationError(error)
      }
    },

    handleRegistrationError(error) {
      this.emailAddressError = error.message === "Email already taken" ? error.message : ""; 
      this.emailExists = !!this.emailAddressError;

      const phoneNumberErrorMessages = ["Invalid phone format", "Phone number already taken"];
      this.phoneNumberError = phoneNumberErrorMessages.includes(error.message) ? error.message : "";
      this.phoneNumberExists = !!this.phoneNumberError;
    },

    validateUserData() {
      this.form.firstNameError = this.form.firstName === "";
      this.form.lastNameError = this.form.lastName === "";
      this.form.phoneNumberError = this.form.phoneNumber === "";
      this.form.policySigned = this.form.policySigned === true;
      this.form.emailAddressError = this.form.emailAddress === "" || !this.emailRegex.test(this.form.emailAddress)
    },

    resetForm() {
      this.form.firstName = "",
        this.form.lastName = "",
        this.form.phoneNumber = "",
        this.form.policySigned = null,
        this.form.emailAddress = ""
      this.loading = false
    },

    async googleAuth() {
      try {
        const response = await googleAuthCodeLogin();
        const token = await fetcher.post('/auth/handle-google-auth', { "code": response.code });
        await this.$store.dispatch('verifyToken', token.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  },

  computed: {
    isAllValidated() {
      return !this.form.firstNameError && !this.form.lastNameError && !this.form.phoneNumberError
        && !this.form.emailAddressError && this.form.policySigned
    },

    createRegisterRequest() {
      return {
        "email": this.form.emailAddress,
        "firstName": this.form.firstName,
        "lastName": this.form.lastName,
        "phoneNumber": this.countryCode + this.form.phoneNumber
      }
    }
  }
}
</script>
  
  <style scoped>
  .signup-container {
    background-image: url("../assets/images/backgroundImage.png");
    background-size: cover;
    background-position: center;
    align-items: center;
    /* min-height: 100vh; */
  }
  .logo {
    margin-bottom: 20px;
  }
  .name {
    display: flex;
    justify-content: space-between;
  }
  .name > div:first-child{
    margin-right: 10px;
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
  input, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 24px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  select {
    width: 20%;
    margin-right: 10px;
  }
  label {
    font-weight: bold;
  }
  .policy-agreement {
    display: flex;
    align-items: center;
    margin: 20px 0 10px 0;
  }
  #checkboxInput {
    width: 20px;
    height: 20px;
    margin-right: 10px;
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
  @media (max-width: 768px) {
    .images {
      display: none;
    }
    .name {
      flex-direction: column;
      width: 100%;
    }
    .form .policy-agreement label {
      font-size: 12px;
    }
    .form{
      width: 100%;
    }
    button{
      width: 100%;
    }
    /* .form-content{
      width: 70%;
    }  */
  }
  </style>
  