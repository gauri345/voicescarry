<template>
  <div class="current-page-number">
    Page {{currentPageNumber}} of 10
  </div>
  <div class="progress">
    <div class="progress-value"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    currentPageNumber: String
  }
}
</script>

<style scoped>

.current-page-number {
  margin: 0 0 20px 20px;
  text-align: left;
}

.progress {
  background: #D8D8D8;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 30px;
  width: 99%;
}

.progress-value {
  animation: load 3s normal forwards;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);;
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