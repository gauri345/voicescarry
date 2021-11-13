<template>
  <!-- The content of the question goes here -->
  <div class="question-content">
    <div class="question-title">
      <h1>{{ questionTitle }}</h1>
    </div>
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
}
</script>

<style>
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
}

.fa-meh {
  color: #F4DD09;
}

.fa-frown {
  color: #4EB729;
}
</style>