<template>
  <!-- The content of the question goes here -->
  <div class="survey-question-container">
    <div class="center">
          <div class="survey-persona-wrapper">
            <img alt="Persona" src="../../assets/Woman.png"/>
          </div>
          <div class="survey-question-wrapper">
            <div class="speechbubble left">
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
  margin-top: 2%;
  display: inline-block;
}
.center{
  display: flex;
}
.survey-persona-wrapper{
  width: 50%;
}
.survey-question-wrapper{
  width: 50%;
}
.speechbubble{
  height: 30%;
  width: 80%;
  color: rgb(255, 255, 255);
  background: #1546A0;
  border-radius: 10px; 
  position: relative; 
  padding: 15px;
  margin: 20px 0;
  
}
.speechbubble::after{
  content: "";
  position: absolute;
  bottom: -15px;
  display:block;
  width:0;
  height: 0;
  border-top: 15px solid #1546A0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
.left.speechbubble::after{
  top: auto;
  right: auto;
  bottom: 80px;
  left: -20px;
  
  border-bottom: 10px solid transparent;
  border-left: 0;
  border-right: 25px solid #1546A0;
  border-top: 10px solid transparent;
}
.material-icons.audio {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
}
.material-icons.info {
  font-size: 24px;
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
  font-size: 24px;
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