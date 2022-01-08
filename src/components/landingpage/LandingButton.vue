<template>
  <button @click="onClick()" :style="{ background: color }" class="btn">
    <div class="button-text-wrapper">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String,
    icon: String,

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
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  border: 0;
  padding: 10px;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  box-shadow: 0px 24px 48px -18px rgba(21, 70, 160, 0.5);
  border-radius: 20px;
  text-align:center;
  margin-top: 10px;
  height: fit-content;
  width:80%;
}
.button-text-wrapper{
  display: inline;
}

</style>