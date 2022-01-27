<template>
    <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>
    <div id="body">
    <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
    <div class="text">
    <p> {{ $t('intro_explanation') }} </p>
    </div>
    <div class="rating-picture">
        <img id="rating" alt="rating" src="../assets/rating.png"/>
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
img {
    width: 80%;
    margin-bottom: 15px;
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