<script>
import HistoryMember from "@/components/historyMember.vue";
import axiosInstance from "../../axios.config";
export default {
  components: {
    HistoryMember
  },
  data() {
    return {
      HistoryList: null
    };
  },
  async mounted() {
    await this.getList()
  },
  methods: {
    async getList() {
      try {
        const response = await axiosInstance.get("/items/history");
        this.HistoryList = response.data;
      }
      catch (error) {
        console.log("oh no!");
      }

    }
  }
}



</script>

<template>
  <div>
    <h1>History Elements</h1>
    <div v-if="HistoryList && HistoryList.length">
      <HistoryMember
		v-for="item in HistoryList"
		:key="item.id"
		:img="item.img"
		:prediction="item.prediction"/>
    </div>
    <div v-else>
      <p>No history elements found.</p>
    </div>
  </div>
</template>

<style src = "./HistoryMenu.css"></style>


<!--
<script>
import axiosInstance from "../../axios.config.js";
export default {
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

*/!-->
