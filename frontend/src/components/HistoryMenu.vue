<script>
import HistoryMember from "@/components/historyMember.vue";
import axiosInstance from "../../axios.config";

export default {
  name: 'HistoryMenu',
components: {
HistoryMember
},
data() {
return {
HistoryList: null
};
},
async mounted() {
const response = await axiosInstance.get("/items/history");
console.log("Raw history data:", response.data);
this.HistoryList = response.data;
}
}
</script>

<template>
<div>
<h1>History Elements</h1>
<div v-if="HistoryList && HistoryList.length">
<ul>
<li v-for="[key, value] in Object.entries(HistoryList)" :key="key">
<HistoryMember :key="value.id" :img="value.name" :prediction="value.class"/>
</li>
</ul>
</div>
<div v-else>
<p>No history elements found.</p>
</div>
</div>
</template>

<styles>
	ul {
		list-style: none;
	}
</styles>
