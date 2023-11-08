<template>
    <div class="captcha-container">
      <h1>Captcha Challenge</h1>
      <p v-if="isCaptchaSolved" class="success-message">Captcha Solved!</p>
      <div class="captcha-question">
        <p>{{ captchaQuestion }}</p>
        <input v-model="userAnswer" @input="checkCaptcha" class="captcha-input" />
        <button @click="generateNewCaptcha" class="captcha-button">New Captcha</button>
      </div>
    </div>
  </template>
  

<script>
export default {
  data() {
    return {
      captchaQuestion: this.generateRandomCaptcha(),
      userAnswer: '',
      isCaptchaSolved: false,
    };
  },
  methods: {
    generateRandomCaptcha() {
      // Generate a random math question
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      return `${num1} + ${num2} = ?`;
    },
    checkCaptcha() {
      // Check if the user's answer is correct
      const [num1, num2] = this.captchaQuestion.match(/\d+/g);
      const correctAnswer = parseInt(num1) + parseInt(num2);

      if (parseInt(this.userAnswer) === correctAnswer) {
        this.isCaptchaSolved = true;
      } else {
        this.isCaptchaSolved = false;
      }
    },
    generateNewCaptcha() {
      // Generate a new captcha question
      this.captchaQuestion = this.generateRandomCaptcha();
      this.userAnswer = '';
      this.isCaptchaSolved = false;
    },
  },
};
</script>

<style scoped>
.captcha-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Center vertically in the viewport */
  background-color: #f0f0f0;
}

.success-message {
  color: #008000; /* Green color for success message */
}

.captcha-question {
  text-align: center;
  margin: 20px;
  font-size: 24px; /* Increase font size for the question */
}

.captcha-input {
  width: 50px;
  height: 50px; /* Increase input size */
  text-align: center;
  font-size: 24px; /* Increase font size for input */
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin: 0 10px; /* Add margin between input and button */
}

.captcha-button {
  padding: 10px 20px; /* Increase button padding */
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px; /* Increase font size for button */
  transition: background-color 0.3s;
}

.captcha-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}
</style>
