<template>
  <!-- The content of the question goes here -->
  <div class="question-content">
    <div class="question-title">{{ questionTitle }}</div>
    <div class="question-image">
      <img alt="question image" src="../../assets/image_1.png"/>
    </div>
    <div class="question-answers">
      <span class="material-icons very_dissatisfied" @click="answer('very dissatisfied')">sentiment_very_dissatisfied</span>
      <span class="material-icons dissatisfied" @click="answer('dissatisfied')">sentiment_dissatisfied</span>
      <span class="material-icons neutral" @click="answer('neutral')">sentiment_neutral</span>
      <span class="material-icons satisfied" @click="answer('satisfied')">sentiment_satisfied</span>
      <span class="material-icons very_satisfied" @click="answer('very satisfied')">sentiment_very_satisfied</span>
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

<style scoped>
.material-icons{
  font-size:48px;
}

.question-image {
  margin-top: 2%;
  margin-bottom: 2%;
}
.question-content {
  margin-top: 2%;
  margin-bottom: 2%;
}
.question-answers{
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  justify-content: space-evenly;
}

.question-title {
  position: relative;
  font-size: 24px;
  line-height: 28px;

  color: #393939;
}

.material-icons.very_satisfied {
  color: #1f7500;
  margin-left: 2%;
  cursor: pointer;
}
.material-icons.satisfied {
  color: #68da3e;
  margin-left: 2%;
  cursor: pointer;
}
.material-icons.neutral {
  color: #F4DD09;
  cursor: pointer;
}
.material-icons.dissatisfied {
  color: #f09309;
  margin-right: 2%;
  cursor: pointer;
}
.material-icons.very_dissatisfied {
  color: #F44209;
  margin-right: 2%;
  cursor: pointer;
}
</style>