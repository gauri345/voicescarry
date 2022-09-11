<template>

  <Button id="surveystartbutton" :text="$t('button_start_survey')" data-bs-target="#consentSurvey" data-bs-toggle="modal"
          style="align-items:baseline"/>

  <div id="consentSurvey" aria-hidden="true" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ $t('survey_consent_head') }} </h5>
          <button aria-label="Close" class="btn-close close" data-bs-dismiss="modal" type="button">
          </button>
        </div>
        <div class="modal-body">
          <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
          <p>
            {{ $t('survey_finish_modal_question_one') }}
            <br><br>
            {{ $t('survey_finish_modal_answer_one') }}
            <br><br>
            {{ $t('survey_finish_modal_question_two') }}
            <br><br>
            {{ $t('survey_finish_modal_answer_two') }}
            <br><br>
            {{ $t('survey_finish_modal_question_three') }}
            <br><br>
            {{ $t('survey_finish_modal_answer_three') }}
          </p>
        </div>
        <div class="modal-footer">
          <router-link to="/question/0">
            <button class="btn btn-secondary" data-bs-dismiss="modal" style="align-items:baseline" type="button">
              {{ $t('button_start_survey') }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SurveyButton from "@/components/survey/SurveyButton";
import {textReader} from "@/util/speech";
import Button from "@/components/utils/Button"

export default {
  name: 'ConsentModal',
  components: {
    SurveyButton,
    Button
  },
  data() {
    return {
      isReading: false
    }
  },
  methods: {
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
  color: black;
  font-size: 24px;
}

.modal-content {
  font-weight: normal;
  text-align: left;
  color: black;
}

.material-icons.audio {
  cursor: pointer;
  color: #2c3e50;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}

.btn {
  background: #4EB562;
  border-color: #4EB562;
  font-size: 20px;
  font-weight: bold;
}

.close {
  border: none;
  border-radius: 5px;
}

#surveystartbutton {
  width: 60%;
  margin: 0;
}

</style>