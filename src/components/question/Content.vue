<template>
  <!-- The content of the question goes here -->
  <div class="question-content">
    <div class="question-title">{{ questionTitle }}</div>
    <div class="question-image">
      <img alt="question image" src="../../assets/image_1.png"/>
    </div>
    <div class="question-answers">
      <em class="fas fa-frown" @click="answer('not happy')"></em>
      <em class="fas fa-meh" @click="answer('so so')"></em>
      <em class="fas fa-smile" @click="answer('happy')"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    questionTitle: String,
  },
  methods: {
    answer: function (answer) {
      console.log(answer);
    }
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
  font-size: 24px;
  line-height: 28px;

  color: #393939;
}

.fa-smile {
  color: #4EB729;
  margin-left: 30px;
  cursor: pointer;
}

.fa-meh {
  color: #F4DD09;
  cursor: pointer;
}

.fa-frown {
  color: #F44209;
  margin-right: 30px;
  cursor: pointer;
}
</style>