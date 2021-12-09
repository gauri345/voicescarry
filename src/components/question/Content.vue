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
   
  <div v-if="questionNumber <= 20" class="question-answers">
    <span class="material-icons very_dissatisfied" @click="answer('very dissatisfied')">sentiment_very_dissatisfied</span>
    <span class="material-icons dissatisfied" @click="answer('dissatisfied')">sentiment_dissatisfied</span>
    <span class="material-icons neutral" @click="answer('neutral')">sentiment_neutral</span>
    <span class="material-icons satisfied" @click="answer('satisfied')">sentiment_satisfied</span>
    <span class="material-icons very_satisfied" @click="answer('very satisfied')">sentiment_very_satisfied</span>
  </div>

  <div v-else-if="questionNumber == 21" class="question-answers">
     <select v-model="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
  </div>

  <div v-else-if="questionNumber == 22" class="question-answers">
    <select v-model="age">
      <option value="twentyoryounger">20 or younger</option>
      <option value="twentyonethirty">21 - 30</option>
      <option value="thirtyonefourty">31 - 40</option>
      <option value="fourtyonefifty">41 - 50</option>
      <option value="fiftyonesixty">51 - 60</option>
      <option value="sixtyoneseventy">61 - 70</option>
      <option value="seventyorolder">71 or older</option>
    </select>
  </div>

  <div v-else-if="questionNumber == 23" class="question-answers">
    <select v-model="position">
      <option value="worker">Worker</option>
      <option value="manager">Manager</option>
    </select>
  </div>

  <div v-else-if="questionNumber == 24" class="question-answers">
    <textarea class="textfield">
    </textarea>
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
   data() {
    return {
      gender: 'female',
      age: 'twentyoryounger',
      position: 'worker',
    }
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
  margin-top: 15px;
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
  color: rgba(255, 255, 255);
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
  display: center;
  height: 50px;
  padding: 10px 6px;
  width: 80%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.textfield {
    display: center;
    padding: 10px 6px;  
    width: 80%;
    height: 100px;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid rgba(36, 54, 86, 0.3);
    box-sizing: border-box;
    border-radius: 20px;
}

</style>