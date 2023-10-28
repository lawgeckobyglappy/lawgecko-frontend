<template>
  <div class="email-template login-email">
    <div class="header">Lawgeck</div>
    <div class="content">
      <p class="login-acct"><a href="#">Log into your account</a></p>
      <p>
        To access your account, simply click on the link below. This link will
        expire after a single use, enhancing your account's security.
      </p>
      <button>Click here to login</button>
      <p>If you didn't request this login link, please disregard this email.</p>
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
  width: 450px;
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

.footer {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
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
</style>
