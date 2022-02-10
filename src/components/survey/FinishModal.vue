<template>
  <div aria-hidden="true" aria-labelledby="finalInformationModal" class="modal fade bd-example-modal-pm" role="dialog" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ $t('survey_finish_modal_title') }} </h5>
          <router-link :to="'/question/ending'">
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </router-link>
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
            <router-link :to="'/question/ending'">
              <button class="btn btn-secondary" background="" data-bs-dismiss="modal" type="button">{{ $t('button_finish_survey') }}</button>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {textReader} from "@/util/Speech";

export default {
  name: 'FinishModal',
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