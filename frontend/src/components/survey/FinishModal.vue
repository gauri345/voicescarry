<template>
  <div class="modal fade" id="completeSurvey" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ $t('survey_finish_modal_title') }} </h5>
            <button type="button" class="btn-close close" data-bs-dismiss="modal" aria-label="Close" @click="completeSurvey">
            </button>
        </div>
        <div class="modal-body">
          <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
          <p> 
            {{ $t('survey_finish_thank_you_message') }}
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button" @click="completeSurvey">{{ $t('button_finish_survey') }}</button>
        </div>
      </div>
    </div>
  </div>
  <SurveyButton class="submit" text="Submit" data-bs-toggle="modal" data-bs-target="#completeSurvey"  @btn-click="submitSurvey"/>
</template>

<script>
import SurveyButton from "@/components/survey/SurveyButton";
import router from "@/router";
import {mapActions} from "vuex";
import {textReader} from "@/util/speech";

export default {
  name: 'FinishModal',
  components: {
    SurveyButton
  },
  data() {
    return {
      isReading: false
    }
  },
  methods: {
    ...mapActions(['storeSurvey']),
    submitSurvey() {
      this.storeSurvey();
    },
    completeSurvey() {
      router.push({name: 'SurveyEndingPage'})
    },
    readPageContent: function () {
    const textToRead =
        this.$i18n.t('survey_finish_modal_question_one') +
        this.$i18n.t('survey_finish_modal_answer_one') +
        this.$i18n.t('survey_finish_modal_question_two') +
        this.$i18n.t('survey_finish_modal_answer_two') +
        this.$i18n.t('survey_finish_modal_question_three') +
        this.$i18n.t('survey_finish_modal_answer_three');
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