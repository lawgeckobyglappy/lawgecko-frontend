<template>
  <div class="container">
    <div class="header-img"></div>
    <div>
      <avatar-input v-model="form.avatar" :default-src="form.defaultImageSrc"></avatar-input>
    </div>
    <form>
        <div class="form-group">
          <label for="bio">Bio:</label>
          <textarea id="bio" name="bio" rows="3" :disabled="!isEditable"></textarea>
        </div>
        <div class="form-group">
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" :value="email" disabled />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model="phone" :disabled="!isEditable" />
        </div>
        <div class="form-group">
          <label for="address">Home Address:</label>
          <input type="text" id="address" name="address" :value="address" disabled />
        </div>
        <!-- <div class="form-group">
          <label for="id">Government Issued ID:</label>
          <input type="file" id="id" name="id">
        </div> -->
    </form>
  </div>
</template>

<script>
import AvatarInput from "@/components/AvatarInput.vue";


export default {
  components: {
    AvatarInput,
},
  data() {
    return {
      form: {
      avatar: null, // Default value for avatar
      defaultImageSrc: require("@/assets/images/defaultImage.jpeg"),
    },
      isEditable: true,
      bio: "This is a sample bio.",
      email: "sample@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City",
    };
  },
  methods: {
    onImageChange() {
     
    },
  },
};
</script>

<style scoped>
.container{
  height: 100%;
}
.header-img{
  width: 100%;
  height: 100px;
  background-color: rgb(34, 155, 139); /* Set your desired background color */
  color: #fff;
  text-align: center;
  line-height: 100px; /* Vertically center the text */
  position:absolute;
  top: 0; /* Stick it to the top */
  margin-left: -32px;
}

.name {
  font-size: 24px;
  font-weight: bold;
}
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 18px;
  font-weight: bold;
}

textarea,
input[type="email"],
input[type="tel"],
input[type="text"],
input[type="file"] {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
/* Media Query for Mobile */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }

  textarea,
  input[type="email"],
  input[type="tel"],
  input[type="text"],
  input[type="file"] {
    width: 100%; /* Make inputs full width on smaller screens */
  }
}
</style>