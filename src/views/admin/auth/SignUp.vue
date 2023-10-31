<template>
    <div class="signin-container">
        <div class="signin-inner-container">
            <div class="form-content">
                <div class="logo">
                    <img src="/logo.svg" alt="lawgecko logo" class="w-40 logo mb-50" />
                </div>
                <div>
                  <avatar-input v-model="form.avatar" :default-src="form.defaultImageSrc"></avatar-input>
                </div>
                <div class="form">
                  <form>
                    <div class="name">
                      <div :class="{ 'error': form.firstNameError }">
                        <label class="font-bold">
                          {{ $t('signup.firstName') }}  
                        </label>
                        <input v-model="form.firstName" @keydown.space.prevent placeholder="Elliot"/>
                      </div>
                      <div :class="{ 'error': form.lastNameError }">
                        <label class="font-bold">
                          {{ $t('signup.lastName') }}
                        </label>
                        <input v-model="form.lastName" @keydown.space.prevent placeholder="Johnson"/>
                      </div>
                    </div>
                    <div>
                        <label class="font-bold">Bio</label>
                        <textarea class="w-full mt-3 " placeholder="What's your area of interest?"></textarea>
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

<script>
import AvatarInput from "@/components/AvatarInput.vue";

export default {
   components: {
    AvatarInput
   },

   data() {
     return {
      form: {
        avatar: null,
        defaultImageSrc: require("@/assets/images/defaultImage.jpeg")
      },
     }
   }
}
</script>

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
  margin-bottom: 15px;
  border: 1px solid #926e0a;
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
.name {
  display: flex;
  justify-content: space-between;
}

.name > div:first-child{
  margin-right: 10px;
}

.error input {
  border-color: red;
}

@media (max-width: 768px) {
  .form-content {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }

  .name {
      flex-direction: column;
      width: 100%;
    }

    .name > div:first-child{
      margin-right: 0;
    }
}

</style>