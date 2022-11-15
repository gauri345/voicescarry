<template>
  <Header HeaderIcon="spa" :HeaderText="$t('header_text')"/>
  <div id="body">
    <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
    <p> {{ $t('survey_ending_feedback') }} </p>
    <textarea :placeholder="$t('survey_ending_textbox')" class="textbox" v-model="content"/>
    <div class=button-wrapper data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
      <SurveyFeedbackModal/>
      <Button style="align-items:baseline" :text="$t('button_submit')" id="submitbutton" @click="storeFeedback"/>
    </div>
    <p> {{ $t('survey_ending_complaint') }} </p>
    <div class=button-wrapper>
      <router-link to="/complaint">
        <Button style="align-items:center !important;" id="complaintbutton" icon="assignment_late"
                :text="$t('button_report_complaint')"/>
      </router-link>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/utils/Button";
import SurveyFeedbackModal from "@/components/survey/SurveyFeedbackModal";
import {textReader} from "@/util/speech";
import LocalStorage from "@/util/local_storage";
import HttpClient from "@/util/http_client";

export default {
  name: 'SurveyEndingPage',
  components: {
    Header,
    Footer,
    Button,
    SurveyFeedbackModal
  },
  data() {
    return {
      isReading: false,
      content: ''
    }
  },
  methods: {
    readPageContent: function () {
      const textToRead =
          this.$i18n.t('survey_ending_feedback').replace('!', '. ') +
          this.$i18n.t('survey_ending_complaint');

      textReader(textToRead);
    },
    storeFeedback: async function (event) {
      event.preventDefault();

      const dataFromLocalStorage = LocalStorage.get('survey');

      try {
        await HttpClient.post('/feedback', {
          "factoryCode": dataFromLocalStorage.factoryCode,
          "factoryId": dataFromLocalStorage.factoryId,
          "surveyId": dataFromLocalStorage.surveyId,
          "content": this.content,
        });
        LocalStorage.remove('survey');
      } catch (error) {
        console.log("Failed storing feedback", error);
      }
    }
  }
}
</script>

<style scoped>
#body {
  padding-bottom: 80px;
  font-size: 20px;
  margin-left: 10%;
  margin-right: 10%;
}

.button-wrapper {
  margin: 1em 0 1em 0;
}

#submitbutton {
  display: inline-block;
  width: 100%;
  background: #4EB562;
}

.material-icons.audio {
  cursor: pointer;
  color: #2c3e50;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}

.textbox {
  padding: 10px 6px;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border: 1px solid rgba(36, 54, 86, 0.3);
  border-radius: 20px;
  margin: 0.5em 0 0.5em 0;
}
</style>
