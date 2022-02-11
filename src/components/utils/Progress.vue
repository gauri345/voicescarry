<template>
  <div class="progress-container">
    <div class="current-page-number">
      {{ $t('survey_progress_one') }} {{ currentPageNumber }} {{ $t('survey_progress_two') }} {{ totalQuestions }}
    </div>
    <div class="progress">
      <div class="progress-value"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Progress',
  props: {
    currentPageNumber: Number,
    totalQuestions: Number
  },
  data: function () {
    return {
      progressPercentage: this.calculateProgressPercentage()
    }
  },

  methods: {
    calculateProgressPercentage: function () {
      return (this.currentPageNumber / this.totalQuestions * 100) + "%";
    }
  }
}
</script>

<style scoped>

.progress-container {
  margin-bottom: 2%;
  padding-left: 5px;
}
.current-page-number {
  margin-left:20px;
  text-align: left;
}
.progress {
  background: #D8D8D8;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  display: flex;
  height: 30px;
  width: 99%;
  margin-top: 10px;
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
    width: v-bind(progressPercentage)
  }
}
</style>