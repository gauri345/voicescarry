<template>
    <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>
    <div id="body">
        <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
            <p> Thank you for completing the survey. 
                We want your feedback! 
                You can provide any general feedback to the app or related to your survey answers.</p>
            <textarea placeholder="Optional" class="textfield"/>
            <div class=feedbackbuttonwrapper data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
                <SurveyFeedbackModal/>
                <GeneralButton style="align-items:baseline" text="Submit feedback" id="submitbutton"/>
            </div>
            <p>If you feel uncomfortable and want to learn more about how to report a complaint, click on the button below.</p>
        <div class=buttonwrapper>
            <router-link to="/complaint">
            <GeneralButton style="align-items:center !important;" id="complaintbutton" icon="assignment_late" :text="$t('homepage_report_complaint')"></GeneralButton>
            </router-link>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GeneralButton from "@/components/GeneralButton";
import SurveyFeedbackModal from "@/components/survey/SurveyFeedbackModal";
import {textReader} from "@/util/Speech";

export default {
name: 'SurveyEndingPage',
components: {
    Header,
    Footer,
    GeneralButton,
    SurveyFeedbackModal
    },
data() {
    return {
    isReading: false
    }
},
methods: {
    readQuestionContent: function () {
        const textToRead =
            this.$i18n.t('welcome_survey').replace('!', '. ') +
            this.$i18n.t('explain_survey').replace('!', '. ');

        console.log(this.$i18n.locale);

        textReader(textToRead);

        }
    }
}
</script>

<style scoped>

#submitbutton{
    width:100%;
    background: #4EB562;
    margin: 0.5em 0 0.5em 0;
}
#complaintbutton{
    width:100%;
    margin: 0.5em 0 0.5em 0;
}
#body {
    padding-bottom: 80px;
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
}
.buttonwrapper{
    margin: 1em 0 1em 0;
}
.buttonwrapper{
    margin: 1em 0 1em 0;
}
.material-icons.audio {
    cursor: pointer;
    color: #2c3e50;
    margin-top:0.2em;
    margin-bottom: 0.2em;
}
.textfield {
    padding: 10px 6px;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid rgba(36, 54, 86, 0.3);
    border-radius: 20px;
    margin: 0.5em 0 0.5em 0;
}
</style>