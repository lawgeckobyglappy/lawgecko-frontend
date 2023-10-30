<template>
    <div class="otp-container">
      <h2>Enter the OTP</h2>
      <div class="otp-input">
        <input
          v-for="i in 6"
          :key="i"
          v-model="otp[i - 1]"
          @input="onInput(i)"
          @keydown="onKeyDown(i)"
          maxlength="1"
          :ref="`otpInput${i}`"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        otp: ["", "", "", "", "", ""],
      };
    },
    methods: {
      onInput(index) {
        if (/^[0-9]$/.test(this.otp[index - 1])) {
          if (index < 6) {
            this.$refs[`otpInput${index + 1}`][0].focus();
          }
        } else {
          this.otp[index - 1] = "";
        }
      },
      onKeyDown(index) {
        if (index > 1 && event.key === "Backspace" && !this.otp[index - 1]) {
          this.otp[index - 2] = "";
          this.$refs[`otpInput${index - 1}`][0].focus();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .otp-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Center vertically in the viewport */
  }
  
  .otp-input {
    display: flex;
    justify-content: center;
  }
  
  input {
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 18px;
    margin: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
  </style>
  