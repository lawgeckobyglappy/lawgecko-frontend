<template>
  <div class="email-template welcome-email">
    <div class="header">WELCOME TO LAWGECKO</div>
    <div class="content">
      <p>Hi, Carl</p>
      <p>Your Journey to Mental Health Well-being Begins Here!</p>
      <p>
        We are committed to providing a wealth of resources and support to help
        you navigate through life. Whether you're looking for coping strategies
        or resources we've got you covered.
      </p>
      <p>Here's what you can expect from us</p>
      <ul>
        <li>Diverse Resources</li>
        <li>Self assessment tests</li>
        <li>Safety Plan</li>
      </ul>
      <p class="footer-lawgecko">Lawgeck</p>
      <p>Best regards</p>
      <p>Lawgecko Team</p>
      <p>
        Here is our <a href="#">privacy policy</a> and
        <a href="#">Terms and conditions</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.email-template {
  margin: auto;
  padding: 0;
  border: 1px solid black;
  width: 500px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}
p {
  margin: 20px;
}

.header {
  background-color: #6bdfbdff;
  color: black;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
.login-acct {
  font-weight: bold;
}

.content {
  padding: 10px;
}

button {
  background-color: #4c82ebff;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 20px;

  cursor: pointer;
  border-radius: 4px;
}

a {
  color: #4c82ebff;
  text-decoration: none;
}

li {
  margin: 20px;
}

.footer-lawgecko {
  font-weight: bold;
  font-size: 20px;
}
</style>
