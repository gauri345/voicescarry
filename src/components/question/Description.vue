<template>
  <div class="question-description-container">
    <div class="question-description description-title">
      <h1>Question Number {{ questionNumber }}</h1>
    </div>
    <div class="question-description description-play">
      <em class="fas fa-volume-up"></em>
    </div>
    <div class="question-description description-info">
      <em class="fas fa-info-circle"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
}
</script>

<style scoped>
.question-description-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.question-description {
  width: 100px;
}

.description-title {
  position: relative;
  width: 33%;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #393939;
}

.description-play {
  position: relative;
  width: 27px;
  height: 27px;
  align-items: center;
  top: 26px;
}

.description-info {
  position: relative;
  width: 27px;
  height: 27px;
  align-items: center;
  top: 26px;
}
</style>