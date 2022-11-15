<template>
    <Header HeaderIcon="spa" :HeaderText="$t('header_text')"/>
    <div id="body">
        <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
        <div class="text">
            <p> {{ $t('survey_entry_welcome') }} </p>
        </div>
        <div class="team-picture">
            <img id="Team" alt="Team" src="../assets/TeamPicture.jpg"/>
        </div>
        <div class="text">
            <p> {{ $t('survey_entry_explanation') }} </p>
        </div>
        <div class=buttonwrapper>
            <router-link to="/question/explanation">
            <SurveyButton id="nextbutton" icon2="arrow_forward" :text="$t('button_next')"/>
            </router-link>
        </div>
    </div>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SurveyButton from "@/components/survey/SurveyButton";
import {textReader} from "@/util/speech";

export default {
    name: 'SurveyEntryPage',
    components: {
        Header,
        Footer,
        SurveyButton
        },
    data() {
        return {
        isReading: false
        }
    },
    methods: {
        readPageContent: function () {
            const textToRead =
                this.$i18n.t('survey_entry_welcome').replace('!', '. ') +
                this.$i18n.t('survey_entry_explanation');
            console.log(this.$i18n.locale);
            textReader(textToRead);
        }
    }
}
</script>

<style scoped>
img {
    width: 80%;
    margin-bottom: 15px;
}
.text {
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
}
#nextbutton{
    width:60%;
}
#body {
    padding-bottom: 80px;
}
.material-icons.audio {
    cursor: pointer;
    color: #2c3e50;
    margin-top:0.2em;
    margin-bottom: 0.2em;
}
</style>