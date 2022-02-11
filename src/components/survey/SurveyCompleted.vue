<template>
  <div v-if="questionNumber >23" class="survey-question-container final-question">
    <div class="feedback-box-wrapper">
      <div class="speech-bubble">
        <div class="question-title">{{ questionTitle }}</div>
      </div>
      <div class="audio-wrapper">
        <span  v-if="'en' === $i18n.locale" class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
      </div>
    </div>
  </div>

  <div class="question-answers">
    <router-link to="/complaint">
      <Button style="align-items:center !important;" icon="assignment_late" text="Report a complaint" id="complaintbtn"></Button>
    </router-link>
  </div>

</template>

<script>

import Button from "@/components/utils/Button";
import {textReader} from "@/util/speech";

export default {
  name: "SurveyCompleted",
  components: {
    Button
  },
  props: {
    questionNumber: String,
    questionTitle: String
  },

  data() {
      return {
        thankYouMessage: this.$i18n.t('thank_you_message')
      }
  },

  methods: {
    readQuestionContent: function () {
      textReader(this.thankYouMessage);
    }
  }
}
</script>

<style scoped>

</style>