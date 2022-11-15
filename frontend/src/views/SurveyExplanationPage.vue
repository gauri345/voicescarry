<template>
  <Header HeaderIcon="spa" :HeaderText="$t('header_text')"/>
  <div id="body">
    <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
    <div class="text">
      <p> {{ $t('survey_explanation_intro') }} </p>
    </div>
    <div class="answertypes">
      <div class="text-center" style="font-size:16px">
        <span class="material-icons vd">sentiment_very_dissatisfied</span>
        <span> {{ $t('survey_sentiment_vd') }} </span>
      </div>
      <div class="text-center" style="font-size:16px">
        <span class="material-icons d">sentiment_dissatisfied</span>
        <span> {{ $t('survey_sentiment_d') }}  </span>
        <br>
      </div>
      <div class="text-center" style="font-size:16px">
        <span class="material-icons n">sentiment_neutral</span>
        <span> {{ $t('survey_sentiment_n') }} </span>
        <br>
      </div>
      <div class="text-center" style="font-size:16px">
        <span class="material-icons s">sentiment_satisfied</span>
        <span> {{ $t('survey_sentiment_s') }} </span>
        <br>
      </div>
      <div class="text-center" style="font-size:16px">
        <span class="material-icons vs">sentiment_very_satisfied</span>
        <span>{{ $t('survey_sentiment_vs') }}</span>
      </div>
    </div>
    <div class="text">
      <p> {{ $t('survey_explanation_rating') }} </p>
    </div>
    <div class=buttonwrapper>
      <ConsentModal />
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/utils/Button"
import {textReader} from "@/util/speech";
import ConsentModal from "@/components/survey/ConsentModal";

export default {
  name: 'SurveyExplanationPage',
  components: {
    Header,
    Footer,
    Button,
    ConsentModal
    },
  data() {
    return {
      isReading: false
    }
  },
  methods: {
    readQuestionContent: function () {
        const textToRead =
          this.$i18n.t('survey_explanation_intro').replace(':', '. ') +
          this.$i18n.t('survey_explanation_rating').replace('!', '. ');
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
.answer-types{
  margin: 1em 0.2em;
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