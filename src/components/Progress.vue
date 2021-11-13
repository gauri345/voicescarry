<template>
  <div class="progress">
    <div class="progress-value"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress'
}
</script>

<style scoped>
body {
  justify-content: center;
  align-items: center;
  background: #000;
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.progress {
  background: #D8D8D8;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 30px;
  width: 100%;
}

.progress-value {
  animation: load 3s normal forwards;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);;
  border-radius: 100px;
  height: 30px;
  width: 0;
}

@keyframes load {
  0% {
    width: 0;
  }
  100% {
    width: 68%;
  }
}
</style>