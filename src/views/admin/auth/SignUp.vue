<template>
    <div class="signin-container">
        <div class="signin-inner-container">
            <div class="form-content">
                <div class="logo">
                    <img src="/logo.svg" alt="lawgecko logo" class="w-40 logo mb-50" />
                </div>
                <div>
                  <avatar-input v-model="form.avatar" :default-src="form.defaultImageSrc" @input="handleAvatarInput"></avatar-input>
                </div>
                <div class="form">
                  <form @submit.prevent="submit">
                    <div class="name grid grid-cols-2 gap-3">
                      <div :class="{ 'error': form.firstNameError }">
                        <label class="font-bold">
                          {{ $t('signup.firstName') }}  
                         
                        </label>
                        <input class="font-normal" v-model="form.firstName" @keydown.space.prevent placeholder="Elliot"/>
                      </div>
                      <div :class="{ 'error': form.lastNameError }">
                        <label class="font-bold">
                          {{ $t('signup.lastName') }}
                        </label>
                        <input class="font-normal" v-model="form.lastName" @keydown.space.prevent placeholder="Johnson"/>
                      </div>
                    </div>
                    <address-field
                      v-model:street="form.address.street"
                      v-model:streetNumber="form.address.streetNumber"
                      v-model:postcode="form.address.postcode"
                      v-model:city="form.address.city"
                      v-model:country="form.address.country"
                    ></address-field>
                    <div>
                        <label class="font-bold">Bio</label>
                        <textarea v-model="form.bio" class="font-normal w-full mt-1" placeholder="What's your area of interest?"></textarea>
                    </div>
                    <div :class="{ 'error': form.phoneNumberError }">
                        <label class="font-bold">Phone Number</label>
                        <div class="flex justify-between">
                          <select v-model="form.countryCode" id="countryCode" >
                            <option value="+234">+234</option>
                            <option value="+44">+44</option>
                          </select>
                          <input v-model="form.phoneNumber" @keydown.space.prevent placeholder="9098088770" />
                        </div>
                    </div>
                    <!-- :class="{ 'error': form.fileError }" -->
                    <div :class="{ 'error': form.governmentIDError }">
                        <label class="font-bold">Government Issued ID</label>
                        <input type="file" accept="image/*" class="font-normal w-full mt-1" @change="change" ref="governmentIDInput"/>
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
import AddressField from "@/components/layouts/AddressField.vue";
import { fetcher } from '@/utils/fetcher';

export default {
   components: {
    AvatarInput,
    AddressField,
  },

  created() {
      const token = this.$route.query.t;
      this.token = token;
  },

  data() {
     return {
      form: {
        avatar: null,
        defaultImageSrc: require("@/assets/images/defaultImage.jpeg"),
        firstName: "",
        lastName: "",
        countryCode: "+234",
        phoneNumber: "",
        firstNameError: "",
        lastNameError: "",
        phoneNumberError: "",
        emailAddressError: "",
        address: {
          street: "",
          streetNumber: "",
          postcode: "",
          city: "",
          country: ""
        },
        governmentID: "",
        governmentIDError: "",
        bio: "",
        token: ""
      },
     }
   },

   methods: {
    validateUserData() {
      this.form.firstNameError = this.form.firstName === "";
      this.form.lastNameError = this.form.lastName === "";
      this.form.phoneNumberError = this.form.phoneNumber === "";
      this.form.governmentIDError = this.form.governmentID === "";
    },

    resetForm() {
        this.form.firstName = ""
        this.form.lastName = ""
        this.form.phoneNumber = ""
        this.form.bio = ""
        this.form.avatar = ""
        this.form.address.street = ""
        this.form.address.streetNumber = ""
        this.form.address.postcode = ""
        this.form.address.city = ""
        this.form.address.country = ""
        this.$refs.governmentIDInput.value = null
    },

    async submit() {
      this.validateUserData()
      try {
        if (this.isAllValidated) {
          const registerRequest = this.createRegisterRequest;
          await fetcher.patch(`/accounts/security-admins/invitations/${this.token}`, registerRequest)
          this.resetForm();
        }
      } catch (error) {
        console.log(error)
        // this.loading = false;
        // this.handleRegistrationError(error)
      }
    },

    handleAvatarInput(file) {
      this.form.avatar = file;
    },

    change(e) {
        this.form.governmentID = e.target.files[0]
      }
   },

   computed: {
    isAllValidated() {
      return !this.form.firstNameError && !this.form.lastNameError && !this.form.phoneNumberError && !this.form.governmentIDError
    },

    createRegisterRequest() {
      const formData = new FormData()
      console.log("Profile -> ", this.form.avatar)
      formData.append("address", JSON.stringify(this.form.address))
      formData.append("firstName", this.form.firstName)
      formData.append("lastName", this.form.lastName)
      formData.append("phoneNumber", this.form.countryCode + this.form.phoneNumber)
      formData.append("profilePicture", this.form.avatar)
      formData.append("governmentID", this.form.governmentID)
      formData.append("bio", this.form.bio)
      return formData;
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

.form input, textarea, select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select {
  width: 15%;
  margin-right: 10px;
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