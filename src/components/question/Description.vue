<template>
  <div class="question-description-container">
    <div class="question-description description-title">
      <div>Question {{ questionNumber }}</div>
      <em class="fas fa-volume-up" v-on:click="readQuestionContent"></em>
      <em class="fas fa-info-circle" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal"></em>

      <!-- Modal -->
      <InformationModal :question-content="questionContent"
                        additional-information="This is the information to be displayed in the modal box"/>
      <div aria-hidden="true" aria-labelledby="additionalInformationModal" class="modal fade bd-example-modal-sm" role="dialog"
           tabindex="-1">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            {{ additionalInformation }}
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal" type="button">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InformationModal from "@/components/question/InformationModal";

export default {
  name: 'Description',
  props: {
    questionNumber: String,
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
}

.description-title {
  position: relative;
  width: 100%;
  font-family: Roboto, serif;
  font-style: normal;
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