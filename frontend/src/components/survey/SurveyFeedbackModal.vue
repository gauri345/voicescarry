<template>
  <div aria-hidden="true" aria-labelledby="SurveyFeedbackModal" class="modal fade bd-example-modal-pm" role="dialog"
      tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ $t('survey_feedback_modal_title') }} </h5>
          <router-link :to="'/homepage'">
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </router-link>
        </div>
        <div class="modal-body">
          <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
          <p> {{ $t('survey_feedback_modal_text') }}</p>
        </div>
        <div class="modal-footer">
            <router-link to="LandingPage">
              <button class="btn btn-secondary" background="" data-bs-dismiss="modal" type="button"> {{ $t('button_homepage') }} </button>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {textReader} from "@/util/speech";

export default {
  name: 'SurveyFeedbackModalModal',
  data() {
    return {
      isReading: false
    }
  },
  methods: {
    readPageContent: function () {
    const textToRead =
      this.$i18n.t('survey_feedback_modal_text').replace('!', '. ');
    console.log(this.$i18n.locale);
    textReader(textToRead);
    }
  }
}
</script>

<style scoped>
.modal-title {
  font-weight: bold;
  text-align: left;
  color:black;
  font-size:24px;
}
.modal-content {
  font-weight: normal;
  text-align: left;
  color: black;
}
.material-icons.audio {
  cursor: pointer;
  color: #2c3e50;
  margin-top:0.2em;
  margin-bottom: 0.2em;
}
.btn {
  background: #4EB562;
  border-color: #4EB562;
  font-size:20px;
  font-weight: bold;
}
.close {
  border: none;
  border-radius: 5px;
}

</style>