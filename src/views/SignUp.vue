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
                <input v-model="form.firstName" @keydown.space.prevent placeholder="Carl"/>
              </div>
              <div :class="{ 'error': form.lastNameError }">
                <label>
                  {{ $t('signup.lastName') }}
                </label>
                <input v-model="form.lastName" @keydown.space.prevent placeholder="Johnson"/>
              </div>
            </div>
            <div :class="{ 'error': form.usernameError }">
              <label>
                {{ $t('signup.username') }}
              </label>
              <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p>
              <input v-model="form.username" @keydown.space.prevent placeholder="carl_johnson"/>
            </div>
            <div :class="{ 'error': form.usernameError }">
              <label>
                Phone Number
                <!-- {{ $t('signup.phoneNumber') }} -->
              </label>
              <!-- <p v-if="usernameExists" class="text-red-500 text-xs">* Username Already Exists</p> -->
              <input placeholder="99808877"/>
            </div>
            <div :class="{ 'error': form.emailAddressError }">
              <label>
                {{ $t('signup.emailAddress') }}
              </label>
              <p v-if="emailExists" class="text-red-500 text-xs">* Email Already Exists</p>
              <input v-model="form.emailAddress" placeholder="CarlJohnson22@yahoo.com"/>
            </div>
            <div class="policy-agreement" :class="{ 'error': !form.policySigned }">
              <input type="checkbox" id="checkboxInput" v-model="form.policySigned" />
              <label for="termsCheckbox">
                <p class="text-xs text-red-500" v-if="form.policySigned === false">* Required</p>
                {{$t('signup.terms')}}
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
                <img src="../assets/images/google.png"/>
                Sign up with Google
            </button>
          </div>
        </div>
        <p>Already Have an Account? <span>Sign In</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
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
      };
    },
  };
  </script>
  
  <style scoped>
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
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 24px;
    border: 2px solid #B9B9B9;
    border-radius: 5px;
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
    .form-content{
        width: 100%;
    }
    .form input[name="firstName"] {
    width: 100%;
  }  
  }
  </style>
  