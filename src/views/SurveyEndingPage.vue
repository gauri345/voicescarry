<template>
    <Header HeaderIcon="spa" :HeaderText="$t('headerText')"/>
    <div id="body">
        <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
            <p> {{ $t('survey_ending_feedback') }} </p>
            <textarea :placeholder="$t('survey_ending_textbox')" class="textbox"/>
            <div class=feedbackbuttonwrapper data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
                <SurveyFeedbackModal/>
                <GeneralButton style="align-items:baseline" :text="$t('button_submit')" id="submitbutton"/>
            </div>
            <p> {{ $t('survey_ending_complaint') }} </p>
        <div class=buttonwrapper>
            <router-link to="/complaint">
            <GeneralButton style="align-items:center !important;" id="complaintbutton" icon="assignment_late" :text="$t('button_report_complaint')"></GeneralButton>
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
      isReading: false
    }
  },
  methods: {
    readPageContent: function () {
      const textToRead =
        this.$i18n.t('survey_ending_feedback').replace('!', '. ') +
        this.$i18n.t('survey_ending_complaint');
      console.log(this.$i18n.locale);
      textReader(textToRead);
    }
  }
}
</script>

<style scoped>
.body {
  padding-bottom: 80px;
  font-size: 20px;
  margin-left: 10%;
  margin-right: 10%;
}

.buttonwrapper{
    margin: 1em 0 1em 0;
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