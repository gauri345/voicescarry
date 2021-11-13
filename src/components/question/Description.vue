<template>
  <div class="question-description-container">
    <div class="question-description description-title">
      <div>Question {{ questionNumber }}</div>
      <em class="fas fa-volume-up"></em>
      <em class="fas fa-info-circle"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    questionNumber: String
  }
}
</script>

<style scoped>
.fa-volume-up {
  font-size: 24px;
  margin-left: 10px;
}

.fa-info-circle {
  font-size: 24px;
  margin-left: 10px;
}

.question-description-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.description-title {
  position: relative;
  width: 100%;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  justify-content: center;
  color: #393939;
}

</style>