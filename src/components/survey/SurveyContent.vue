<template>
  <!-- The content of the question goes here -->
  <div v-if="questionNumber <24" class="survey-question-container">
          <div class="survey-persona-wrapper">
            <img alt="Persona" src="../../assets/persona.png"/>
          </div>
          <div class="survey-question-wrapper">
            <div class="speechbubble">
              <div class="question-title">{{ questionTitle }}</div>
            </div>
            <div class="audio-wrapper">
              <span  v-if="'en' === $i18n.locale" class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
            </div>
          </div> 
  </div>

   <div v-if="questionNumber >23" class="survey-question-container final-question">
   <div class="feedback-box-wrapper">
            <div class="speechbubble">
              <div class="question-title">{{ questionTitle }}</div>
            </div>
            <div class="audio-wrapper">
              <span  v-if="'en' === $i18n.locale" class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
            </div>
          </div> 
    </div>
   
  <div v-if="questionNumber <= 20" class="question-answers">
     <span :class="{'outlined_vd':thema_vd ==='true'}"
           class="material-icons very_dissatisfied"
           @click="answer('very dissatisfied'); outlineIcon_vd()">sentiment_very_dissatisfied</span>

     <span :class="{'outlined_d':thema_d ==='true'}"
           class="material-icons dissatisfied"
           @click="answer('dissatisfied'); outlineIcon_d()">sentiment_dissatisfied</span>

     <span :class="{'outlined_n':thema_n ==='true'}"
           class="material-icons neutral"
           @click="answer('neutral'); outlineIcon_n()">sentiment_neutral</span>

     <span :class="{'outlined_s':thema_s ==='true'}"
           class="material-icons satisfied"
           @click="answer('satisfied'); outlineIcon_s()">sentiment_satisfied</span>

     <span :class="{'outlined_vs':thema_vs ==='true'}"
           class="material-icons very_satisfied"
           @click="answer('very satisfied'); outlineIcon_vs()">sentiment_very_satisfied</span>

  </div>

  <div v-else-if="questionNumber == 21" class="question-answers">
     <select v-model="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="diverse">Diverse</option>
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
      <option value="employee">Employee</option>
      <option value="manager">Manager</option>
    </select>
  </div>
  <div v-else-if="questionNumber == 24" class="question-answers">
      <router-link to="/complaint">
        <Button style="align-items:center !important;" icon="assignment_late" text="Report a complaint" id="complaintbtn"></Button>
      </router-link>
  </div>

  <div v-else-if="questionNumber == 25" class="question-answers">
    <textarea class="textfield">
    </textarea>
  </div>

</template>

<script>
import {textReader} from "@/util/speech";
import Button from "@/components/utils/Button";

export default {
  name: 'SurveyContent',
  components: {
    Button,
  },
  props: {
    questionTitle: String,
    questionNumber: Number,
    questionContent: String,
   
  },
   data() {
    return {
      gender: 'female',
      age: 'twentyoryounger',
      position: 'employee',
      thema_vd: 'false',
      thema_d: 'false',
      thema_n: 'false',
      thema_s: 'false',
      thema_vs: 'false',
    }
  },
  methods: {
    answer: function (answer) {
      console.log(answer);
    },
     outlineIcon_vd(){
       if (this.thema_vd === 'true'){
         this.thema_vd ='false'
       } else {
         this.thema_vd = 'true'
         this.thema_d = 'false'
         this.thema_n = 'false'
         this.thema_s = 'false'
         this.thema_vs = 'false'
       }
     },

     outlineIcon_d(){
       if (this.thema_d === 'true'){
         this.thema_d ='false'
       } else {
         this.thema_d = 'true'
         this.thema_vd = 'false'
         this.thema_n = 'false'
         this.thema_s = 'false'
         this.thema_vs = 'false'
       }
     },

     outlineIcon_n(){
       if (this.thema_n === 'true'){
         this.thema_n ='false'
       } else {
         this.thema_n = 'true'
         this.thema_d = 'false'
         this.thema_vd = 'false'
         this.thema_s = 'false'
         this.thema_vs = 'false'
       }
     },

     outlineIcon_s(){
       if (this.thema_s === 'true'){
         this.thema_s ='false'
       } else {
         this.thema_s = 'true'
         this.thema_d = 'false'
         this.thema_n = 'false'
         this.thema_vd = 'false'
         this.thema_vs = 'false'
       }
     },

     outlineIcon_vs(){
       if (this.thema_vs === 'true'){
         this.thema_vs ='false'
       } else {
         this.thema_vs = 'true'
         this.thema_d = 'false'
         this.thema_n = 'false'
         this.thema_s = 'false'
         this.thema_vd = 'false'
       }
     },
    readQuestionContent: function () {
      textReader(this.questionContent)
    }
  }
}
</script>

<style scoped>

.survey-question-container{
  width: 100%;
  height: 300px;
  margin-top: 2%;
  overflow: hidden;
  background-image: url('../../assets/Background.png');
  display:flex;
  align-items: center;
}
.final-question{
  display:inline-block !important; 
  overflow-y:auto !important;
}
.survey-persona-wrapper{
  width: 30%;
  margin-left: 2em;
}
img{
  max-height:7em;
  float: right;
}
.survey-question-wrapper{
  width: 70%;  
}
.feedback-box-wrapper{
  width: 100%;
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
.material-icons{
  font-size:48px;
  color:#2c3e50;
}
.question-content {
  margin-top: 2%;
  margin-bottom: 2%;
}
.question-answers{
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
.outlined_vd{
   /* border:2px solid 	#f4440979; */
   border-radius: 2px;
   background: #f4440979;
 }
 .outlined_d{
   /* border:2px solid 	#f0940980; */
   border-radius: 2px;
   background: #f0940980;
 }
 .outlined_n{
   /* border:2px solid 	#d8c30652; */
   border-radius: 2px;
   background: #d8c30652;
 }
 .outlined_s{
  /* border:2px solid 	#68da3e8a; */
  border-radius: 2px;
   background: #68da3e8a;
 }
 .outlined_vs{
  /* border:2px solid 	#1f75009d; */
  border-radius: 2px;
  background: #1f75009d;
 }
select {
  height: 55px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.textfield {
  padding: 10px 6px;  
  width: 80%;
  height: 100%; /* makes fiels size the same size as smileys and form*/
  font-size: 14px;
  background: #FFFFFF;
  border: 1px solid rgba(36, 54, 86, 0.3);
  box-sizing: border-box;
  border-radius: 20px;
}
#complaintbtn{
  width:76%;
  background:red;
}

/* For PC view */
@media only screen and (min-width: 800px) {
  img{
  /* max-height:300px; */
  max-height:10em;
  float: right;
}
}

</style>