<template>
  <div class="container">
    <div class="header-img"></div>
    <div class="profile-image" @click="uploadImage">
      <!-- This is where the user's profile image will be displayed -->
      <img v-if="userProfileImage" :src="userProfileImage" alt="Profile Image" class="image-preview" />
      <div class="image-icon">
        <i class="fa fa-camera"></i>
      </div>
      <input class="profile-image" type="file" @change="onImageChange" accept="image/*" style="display: none" ref="fileInput" />
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
          <input type="tel" id="phone" name="phone" v-model="phone" :disabled="!isEditable" />
        </div>
        <div class="form-group">
          <label for="address">Home Address:</label>
          <input type="text" id="address" name="address" :value="address" disabled />
        </div>
        <div class="form-group">
          <label for="id">Government Issued ID:</label>
          <input type="file" id="id" name="id">
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userProfileImage: null,
      isEditable: true,
      bio: "This is a sample bio.",
      email: "sample@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City",
    };
  },
  methods: {
    onImageChange(event) {
      // Handle user profile image upload
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        // Assuming you have an image preview here
        this.userProfileImage = URL.createObjectURL(selectedFile);
      }
    },
    uploadImage() {
      // Trigger the file input when the circle is clicked
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style scoped>
.container{
  height: 1vh;
}
.header-img{
  width: 100%;
  height: 100px;
  background-color: rgb(34, 155, 139); /* Set your desired background color */
  color: #fff; /* Set your desired text color */
  text-align: center;
  line-height: 100px; /* Vertically center the text */
  position:absolute;
  top: 0; /* Stick it to the top */
  margin-left: -32px;
}
.profile-image {
  margin-top: 20px;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc;
  overflow: hidden;
}

.image-preview {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.image-icon {
  position: absolute;
  bottom: 15px;
  right: -5px;
  background-color: rgb(71, 185, 151);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}

.image-icon i {
  color: #333;
}

/* Hide the input element */
/* input[type="file"] {
  display: none; */
/* } */

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
</style>
