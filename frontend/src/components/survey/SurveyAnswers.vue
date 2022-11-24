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

  <div v-if="'sentiment' === getQuestionType || 'scale' === getQuestionType " class="question-answers" id="scaleAnswers">
      <span v-for="answer in getAnswers" :key="answer.value" :class="answer.iconClass" :id="answer.text"
            @click="handleAnswered(answer)">{{ answer.text }}</span>
  </div>

  <div v-if="'select' === getQuestionType" class="question-answers" @change="onChangeMethod($event)">
    <select>
      <option v-for="answer in getAnswers.answerValues" :key="answer" :value="answer">{{$t(answer)}}</option>
    </select>
  </div>

  <div v-if="'gender' === getQuestionType || 'age' === getQuestionType || 'profession' === getQuestionType" class="question-answers" @change="onChangeMethod($event)">
    <select>
      <option :value="selectedOptionText.text">{{ selectedOptionText.text }}</option>
      <option v-for="answer in getAnswers" :key="answer.value" :value="answer.value">{{ answer.text }}</option>
    </select>
  </div>
</template>

<script>
import {textReader} from "@/util/speech";
import {mapGetters} from "vuex";

export default {
  name: "SurveyAnswers",
  emits: ["answered"],
  props: {
    questionTitle: String
  },
  data() {
    return {}
  },
  methods: {
    readQuestionContent: function () {
      textReader(this.questionTitle)
    },
    handleAnswered: function (answer) {
      if ('scale' === this.getQuestionType || 'sentiment' === this.getQuestionType) {
        const scaleAnswers = document.getElementById('scaleAnswers').children;

        for (let i = 0; i < scaleAnswers.length; i++) {
          document.getElementById('scaleAnswers').children.item(i).classList.remove('active-answer');
        }

        document.getElementById(answer.text).classList.toggle("active-answer");
      }

      if (answer) {
        this.$emit('answered', {text: answer.text, value: answer.value});
      } else {
        this.$emit('answered', {text: '', value: ''});
      }
    },

    onChangeMethod(event) {
      this.handleAnswered({
            value: event.target.value,
            text: event.target.options[event.target.options.selectedIndex].text
          }
      );
    }
  },
  computed: {
    ...mapGetters(['getAnswers', 'getQuestionType']),
    selectedOptionText() {
      const answers = this.getAnswers;

      const questionType = this.getQuestionType;
      if ('gender' === questionType || 'age' === questionType || 'profession' === questionType) {
        const firstOption = answers.shift();

        this.handleAnswered(firstOption);

        if (firstOption) {
          return {
            value: firstOption.value,
            text: firstOption.text
          };
        } else {
          return {
            value: '',
            text: ''
          }
        }
      }
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
.audio-wrapper {
  cursor: pointer;
}
.active-answer {
  border: 1px solid;
  border-radius: 25px;
  background-color: #ccc8c8;
}

.survey-persona-wrapper {
  width: 30%;
  margin-left: 2em;
}

.dissatisfied {
  cursor: pointer;
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
  cursor: pointer;
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

/* For PC view */
@media only screen and (min-width: 800px) {
  img {
    /* max-height:300px; */
    max-height: 10em;
    float: right;
  }
}

</style>