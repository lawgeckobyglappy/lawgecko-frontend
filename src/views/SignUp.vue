<template>
  <div class="p-8 flex flex-row">
    <div class="images">
      <img src="../assets/images/auth.png" class="w-full" />
    </div>
    <div class="w-9/12 border-solid flex flex-col align-center mt-5 mb-10 form-content">
      <div class="logo">
        <img src="/logo.svg" alt="lawgecko logo" class="w-40 logo" />
      </div>
      <p class="mb-14 mt-10 font-bold text-xl">Create An Account</p>
      <div class="w-8/12 form">
        <form @submit.prevent="submit">
          <div class="name">
            <div :class="{ 'error': form.firstNameError }">
              <label>
                {{ $t('signup.firstName') }}
              </label>
              <input v-model="form.firstName" @keydown.space.prevent placeholder="Carl" />
            </div>
            <div :class="{ 'error': form.lastNameError }">
              <label>
                {{ $t('signup.lastName') }}
              </label>
              <input v-model="form.lastName" @keydown.space.prevent placeholder="Johnson" />
            </div>
          </div>
          <div :class="{ 'error': form.emailAddressError }">
            <label>
              {{ $t('signup.emailAddress') }}
            </label>
            <p v-if="emailExists" class="text-red-500 text-xs">* Email Already Exists</p>
            <input v-model="form.emailAddress" @keydown.space.prevent placeholder="CarlJohnson22@yahoo.com" />
          </div>
          <div :class="{ 'error': form.phoneNumberError }">
            <label>
              {{ $t('signup.phoneNumber') }}
            </label>
            <p v-if="phoneNumberExists" class="text-red-500 text-xs">* Phone Number Already Exists</p>
            <input v-model="form.phoneNumber" @keydown.space.prevent placeholder="99808877" />
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
        <div class="or-demarcation">
          <div class="hr">
            <hr />
          </div>
          <p class="or-text">or Register Using</p>
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
      </div>
      <p>Already Have an Account? <a href="/signin"><span>Sign In</span></a> </p>
    </div>
  </div>
</template>
  
<script>

import ButtonSpinner from '@/components/spinner/ButtonSpinner.vue'
import { fetcher } from "@/utils/fetcher"
import { googleAuthCodeLogin } from "vue3-google-login"

export default {
  components: {
    ButtonSpinner
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        countryCode: [
          {code: '+234'},
          {code: '+237'}
        ],
        emailAddress: "",
        policySigned: null,
        firstNameError: "",
        lastNameError: "",
        phoneNumberError: "",
        emailAddressError: "",
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
        this.handleRegistrationError(error)
      }
    },

    handleRegistrationError(error) {
      this.emailExists = error.message === 'Email already taken' ? error.message : ''
      this.phoneNumberExists = error.message === 'phone number already taken' ? error.message : ''
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
        "phoneNumber": this.form.phoneNumber
      }
    }
  }
}
</script>
  
<style scoped>
.logo {
  margin-bottom: 20px;
}

.name {
  display: flex;
  justify-content: space-between;
}

.name>div:first-child {
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

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 24px;
  border: 2px solid #B9B9B9;
  border-radius: 5px;
}

.error input {
  border-color: red;
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
span {
  color: blueviolet;
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

  button {
    width: 100%;
  }

  .form-content {
    width: 100%;
  }
}</style>
  