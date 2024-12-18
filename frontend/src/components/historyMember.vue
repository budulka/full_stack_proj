<script>
export default {
  name: 'HistoryMember',
  props: {
    img: {
      type: String,
      required: true
    },
    prediction: {
      type: [String, Array],
      required: true
    }
  },
  mounted() {
    console.log('Props received:', {
      img: this.img,
      prediction: this.prediction
    });
  }
}
</script>

<template>
  <div class="historyElement">
    <span class = "spen">
      IMAGE: {{img}} | CLASS: {{prediction}}
    </span>
  </div>
</template>


<styles>	
	.spen {
		padding: 20px; 
		color : black;
		border-bottom: 1px solid black;
	}
</styles>
