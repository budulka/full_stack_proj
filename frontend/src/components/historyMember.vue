<script setup>
import {defineProps} from 'vue';
defineProps({
  img: {
    type : String,
    required : true,
  },
  prediction: {
    type : String,
    required : true
  },
});
</script>

<template>
  <div class = "historyElement">
    <span style = "padding: 20px;"> IMAGE{{img}}| CLASS{{prediction}} </span>
  </div>
</template>

<style scoped>

</style>
