<template>

  <div class = "main_container">
	<span class="Goku">Goku will predict if this is a dog or a cat</span>
	<div class="fleeex">
    <div class="custom-file">
      <input
        type="file"
        id="file"
        class="file-input"
        @change="handleImageUpload"
      />
      <label for="file" class="file-label">
        Choose a photo
      </label>
      <span class="file-name">{{ imageFile ? imageFile.name : "No file chosen" }}</span>
    </div>

    <button class="file-label" @click="sendImage">Classify Image</button>
    </div>
    <p style= "margin:0">Prediction: {{ prediction }}</p>
  </div>
</template>
<script>

import axiosInstance from "../../axios.config.js";
export default {
  data() {
    return {
      imageFile: null,
      prediction: ''
    };
  },
  methods: {
    handleImageUpload(event) {
      this.imageFile = event.target.files[0];
    },
    async sendImage() {
      const formData = new FormData();
      formData.append('image', this.imageFile);
      
      try {
        const response = await axiosInstance.post(`/items/predict`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log(response.data);
        this.prediction = response.data.prediction[0];
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }
};
</script>

<style src="./HelloWorld.css"></style>

