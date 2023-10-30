<template>
    <div class="signin-container">
        <div class="signin-inner-container">
            <div class="form-content">
                <div class="logo">
                    <img src="/logo.svg" alt="lawgecko logo" class="w-40 logo mb-50" />
                </div>
                <div class="form">
                    <form>
                        <div>
                            <label class="font-bold">Bio</label>
                            <textarea class="w-full mt-3 " placeholder="What's your area of interest?"></textarea>
                        </div>
                        <div>
                            <label class="font-bold">Email Address</label>
                            <input class="w-full mt-3 " />
                        </div>
                        <div>
                            <label class="font-bold">Phone Number</label>
                            <input type="tel" class="w-full mt-3" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </div>
                        <div>
                            <label class="font-bold">House Address</label>
                            <input class="w-full mt-3 " />
                        </div>
                        <div>
                            <label class="font-bold">Government Issued ID</label>
                            <input type="file" accept="image/*" class="w-full mt-3 " />
                        </div>
                        <button type="submit" class="mb-5 hover:-translate-y-1 transition-all bg-btn-green cursor-pointer">
                            <p class="font-bold">Register</p>
                        </button>
                    </form>
                </div>

            </div>

        </div>

    </div>
</template>
<style lang="scss" scoped>
.logo {
  margin: 15px auto 10px;
}

.signin-container {
  background-image: url("@/assets/images/backgroundImage.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.signin-inner-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.form-content {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
 
}

.form input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form button {
  width: 100%;
  height: 47px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error input {
  border-color: red;
}

@media (max-width: 760px) {
  .form-content {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
}

</style>