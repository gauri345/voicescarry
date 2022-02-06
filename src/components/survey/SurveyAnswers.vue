<template>
  <div class="survey-question-container">
    <div class="survey-persona-wrapper">
      <img alt="Persona" src="../../assets/persona.png"/>
    </div>
    <div class="survey-question-wrapper">
      <div class="speech-bubble">
        <div class="question-title">{{ questionTitle }}</div>
      </div>
      <div class="audio-wrapper">
        <span v-if="'en' === $i18n.locale" class="material-icons audio"
              v-on:click="readQuestionContent">volume_up</span>
      </div>
    </div>
  </div>

  <div class="question-answers">
    <span class="material-icons very_dissatisfied"
          @click="answer('very dissatisfied', 5); ">sentiment_very_dissatisfied</span>

    <span class="material-icons dissatisfied" @click="answer('dissatisfied', 4)">sentiment_dissatisfied</span>

    <span class="material-icons neutral" @click="answer('neutral', 3)">sentiment_neutral</span>

    <span class="material-icons satisfied" @click="answer('satisfied', 2)">sentiment_satisfied</span>

    <span class="material-icons very_satisfied" @click="answer('very satisfied', 1)">sentiment_very_satisfied</span>
  </div>

</template>

<script>
import {textReader} from "@/util/speech";

export default {
  name: "SurveyAnswers",
  emits: ["answered"],
  props: {
    questionTitle: String
  },
  methods: {
    readQuestionContent: function () {
      textReader(this.questionTitle)
    },
    answer: function (answerText, answerValue) {
      this.$emit('answered', {text: answerText, value: answerValue});
    }
  }
}
</script>

<style scoped>
.survey-question-container {
  width: 100%;
  height: 300px;
  margin-top: 2%;
  overflow: hidden;
  background-image: url('../../assets/Background.png');
  display: flex;
  align-items: center;
}

.survey-persona-wrapper {
  width: 30%;
  margin-left: 2em;
}

img {
  max-height: 7em;
  float: right;
}

.survey-question-wrapper {
  width: 70%;
}

.speech-bubble {
  background: #1546A0;
  border-radius: 10px;
  display: inline-block;
  width: 80%;
  color: rgb(255, 255, 255);
  position: relative;
  vertical-align: top;
  padding: 15px;
  margin-top: 15px;
}

.speech-bubble::before {
  background-color: #1546A0;
  content: "\00a0";
  display: block;
  height: 16px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: -9px;
  transform: rotate(29deg) skew(-35deg);
  -moz-transform: rotate(29deg) skew(-35deg);
  -ms-transform: rotate(29deg) skew(-35deg);
  -o-transform: rotate(29deg) skew(-35deg);
  -webkit-transform: rotate(29deg) skew(-35deg);
}

.material-icons {
  font-size: 48px;
  color: #2c3e50;
}

.question-content {
  margin-top: 2%;
  margin-bottom: 2%;
}

.question-answers {
  margin-top: 2%;
  margin-bottom: 2%;
  width: 100%;
  height: 54px; /* hard coded size so that smileys dont move*/
  justify-content: space-evenly;
  align-items: center;
}

.question-title {
  position: relative;
  font-size: 20px;
  line-height: 28px;
  color: rgba(255, 255, 255);
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
  cursor: *-pointer;
}

.material-icons.very_dissatisfied {
  color: #F44209;
  margin-right: 2%;
  cursor: pointer;
}

select {
  height: 55px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}


.complaint-btn {
  width: 76%;
  background: red;
}

/* For PC view */
@media only screen and (min-width: 800px) {
  img {
    /* max-height:300px; */
    max-height: 10em;
    float: right;
  }
}

</style>