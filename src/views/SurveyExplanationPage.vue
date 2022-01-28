<template>
    <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>
    <div id="body">
        <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
    <div class="text">
        <p> {{ $t('intro_explanation') }} </p>
    </div>
    <div class="answertypes">
        <div class="text-center" style="font-size:16px">
            <span class="material-icons vd">sentiment_very_dissatisfied</span>
            <span> Strongly Disagree </span>
        </div>
        <div class="text-center" style="font-size:16px">
            <span class="material-icons d">sentiment_dissatisfied</span>
            <span> Disagree </span>
            <br>
        </div>
        <div class="text-center" style="font-size:16px">
            <span class="material-icons n">sentiment_neutral</span>
            <span> Neutral </span>
            <br>
        </div>
        <div class="text-center" style="font-size:16px">
            <span class="material-icons s">sentiment_satisfied</span>
            <span> Agree </span>
            <br>
        </div>
        <div class="text-center" style="font-size:16px">
            <span class="material-icons vs">sentiment_very_satisfied</span>
            <span> Strongly Agree </span>
        </div>
    </div>

    <div class="text">
        <p> {{ $t('explain_rating') }} </p>
    </div>
    <div class=buttonwrapper>
        <router-link to="/question/1">
        <GeneralButton style="align-items:baseline" id="surveystartbutton" text="Start the Survey!"/>
        </router-link>
    </div>
    </div>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GeneralButton from "@/components/GeneralButton"
import {textReader} from "@/util/Speech";

export default {
  name: 'SurveyExplanationPage',
  components: {
      Header,
      Footer,
      GeneralButton
      },
data() {
    return {
      isReading: false
    }
  },
  methods: {
    readQuestionContent: function () {
        const textToRead =
            this.$i18n.t('intro_explanation').replace('!', '. ') +
            this.$i18n.t('explain_rating').replace('!', '. ');

        console.log(this.$i18n.locale);

        textReader(textToRead);

        }
  }
}
</script>

<style scoped>
.material-icons{
  font-size:48px;
}
.material-icons.audio{
    font-size:35px;
}
.answertypes{
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0.2em;
  margin-right:0.2em;
  display: flex;
}
.text-center{
    vertical-align: middle;
    display:inline-grid;
    width:20%;
}
.material-icons.vs {
  color: #1f7500;
}
.material-icons.s {
  color: #68da3e;
}
.material-icons.n {
  color: #F4DD09;
}
.material-icons.d {
  color: #f09309;
}
.material-icons.vd {
  color: #F44209;
}
#surveystartbutton {
    width: 60%;
    margin:0;
}
.text {
    font-size: 20px;
    margin-left: 10%;
    margin-right: 10%;
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