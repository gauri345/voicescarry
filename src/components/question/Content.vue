<template>
  <!-- The content of the question goes here -->
  <div class="question-content">
    <div class="question-title">{{ questionTitle }}</div>
    <div class="question-image">
      <img alt="question image" src="../../assets/image_1.png"/>
    </div>
    <div class="question-answers">
      <em class="fas fa-smile"></em>
      <em class="fas fa-meh"></em>
      <em class="fas fa-frown"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    questionTitle: String,
  }
}
</script>

<style>

.question-image {
  margin-top: 20px;
  margin-bottom: 20px;
}
.question-content {
  margin-top: 20px;
  margin-bottom: 20px;
}
.question-answers{
  font-size: 55px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-evenly;
}

.question-title {
  position: relative;
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #393939;
}

.fa-smile {
  color: #F44209;
  margin-right: 30px;
}

.fa-meh {
  color: #F4DD09;
  margin-right: 30px;
}

.fa-frown {
  color: #4EB729;
}
</style>