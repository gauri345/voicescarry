<template>
  <!-- The content of the question goes here -->
  <div class="survey-question-container">
    <div class="center">
          <div class="survey-persona-wrapper">
            <img alt="Persona" src="../../assets/Woman.png"/>
          </div>
          <div class="survey-question-wrapper">
            <div class="speechbubble">
              <div class="question-title">{{ questionTitle }}</div>
              <span class="material-icons info" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal">info</span>
                <InformationModal :additional-information="additionalInformation" 
                                  :question-content="questionContent"/>
              <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
             </div>
          </div> 
    </div>
  </div>

  <div class="question-answers">
    <span class="material-icons very_dissatisfied" @click="answer('very dissatisfied')">sentiment_very_dissatisfied</span>
    <span class="material-icons dissatisfied" @click="answer('dissatisfied')">sentiment_dissatisfied</span>
    <span class="material-icons neutral" @click="answer('neutral')">sentiment_neutral</span>
    <span class="material-icons satisfied" @click="answer('satisfied')">sentiment_satisfied</span>
    <span class="material-icons very_satisfied" @click="answer('very satisfied')">sentiment_very_satisfied</span>
  </div>

</template>

<script>
import InformationModal from "@/components/question/InformationModal";

export default {
  name: 'Content',
  props: {
    questionTitle: String,
    questionNumber: Number,
    questionContent: String,
    additionalInformation: String
  },
  components: {
    InformationModal
  },
  methods: {
    answer: function (answer) {
      console.log(answer);
    },
    readQuestionContent: function () {
      const synth = window.speechSynthesis;
      const inputTxt = this.questionContent;

      if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
      }
      if (inputTxt.value !== '') {
        const utterThis = new SpeechSynthesisUtterance(inputTxt);
        utterThis.onend = function () {
          console.log('SpeechSynthesisUtterance.onend');
        }
        utterThis.onerror = function () {
          console.error('SpeechSynthesisUtterance.onerror');
        }
        utterThis.pitch = 0.9;
        utterThis.rate = 1;
        synth.speak(utterThis);
      }
    }
  }
}
</script>

<style scoped>

.survey-question-container{
  width: 100%;
  height: 300px;
  margin-top: 2%;
  display: inline-block;
  overflow: hidden;
  background-image: url('../../assets/Background.png');
}
.center{
  display: flex;
}
.survey-persona-wrapper{
  width: 50%;
  height:100%;
}
img{
  max-height:300px;
}
.survey-question-wrapper{
  width: 50%;
  height:100%;
  
}

.speechbubble{
  background: #1546A0;
  border-radius: 10px;
  display:inline-block;
  width: 80%;
  color: rgb(255, 255, 255);
  position: relative;
  vertical-align: top;
  padding: 15px;
  margin: 20px 0;
}
.speechbubble::before{
  background-color: #1546A0;
  content: "\00a0";
  display: block;
  height:16px;
  width: 20px;
  position: absolute;
  top:10px;
  left:-9px;
  transform:rotate(29deg) skew(-35deg);
  -moz-transform: rotate(29deg) skew(-35deg);
  -ms-transform: rotate(29deg) skew(-35deg);
  -o-transform: rotate(29deg) skew(-35deg);
  -webkit-transform: rotate(29deg) skew(-35deg);
}
.material-icons.audio {
  font-size: 32px;
  margin-left: 10px;
  cursor: pointer;
}
.material-icons.info {
  font-size: 32px;
  margin-left: 10px;
  cursor: pointer;

}
.material-icons{
  font-size:48px;
  color: rgba(255, 255, 255, 0.75);
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
  font-size: 120%;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.75);
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