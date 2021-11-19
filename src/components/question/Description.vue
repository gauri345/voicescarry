<template>
  <div class="question-description-container">
    <div class="question-description description-title">
      <div>Question {{ questionNumber }}</div>
      <em class="fas fa-volume-up" v-on:click="readQuestionContent"></em>
      <em class="fas fa-info-circle" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal"></em>
      <InformationModal :additional-information="additionalInformation" :question-content="questionContent"/>
    </div>
  </div>
</template>

<script>
import InformationModal from "@/components/question/InformationModal";

export default {
  name: 'Description',
  props: {
    questionNumber: Number,
    questionContent: String,
    additionalInformation: String
  },

  components: {
    InformationModal
  },

  methods: {
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
.fa-volume-up {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer
}

.fa-info-circle {
  font-size: 24px;
  margin-left: 10px;
  cursor: pointer;
}

.question-description-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.description-title {
  position: relative;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  justify-content: center;
  color: #393939;
}

</style>