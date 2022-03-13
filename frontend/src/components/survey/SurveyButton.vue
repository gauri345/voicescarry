<template>
  <button @click="onClick()" :style="{ background: color }" class="btn" >
    <span class="material-icons back-arrow">{{ icon1 }}</span>
    {{ text }}
    <span class="material-icons next-arrow">{{ icon2 }}</span>
  </button>
</template>

<script>
export default {
  name: 'SurveyButton',
  props: {
    text: String,
    color: String,
    icon1: String,
    icon2: String,
    
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;
  border: 0;
  padding: 10px;
  width: 100%;
  height: 43px;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  box-shadow: 0px 24px 48px -18px rgba(21, 70, 160, 0.5);
  border-radius: 20px;
  text-align:center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.material-icons{
  font-size:28px;
}
.material-icons.back-arrow{
  float:left;
  width:28px;
}
.material-icons.next-arrow{
  float:right;
  width:28px;
}
</style>