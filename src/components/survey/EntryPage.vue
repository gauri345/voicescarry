<template>
    <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>
    <div id="body">
    <span  v-if="'en' === $i18n.locale" class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
    <div class="text">
    <p> {{ $t('welcome_survey') }} </p>
    </div>
    <div class="team-picture">
        <img id="Team" alt="Team" src="../../assets/TeamPicture.jpg"/>
    </div>
    <div class="text">
        <p> {{ $t('explain_survey') }} </p>
    </div>
    <div class=buttonwrapper>
        <router-link to="/question/1">
        <GeneralButton id="startbutton" text="Start the Questionnaire!"/>
        </router-link>
    </div>
    </div>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GeneralButton from "@/components/complaint/ComplaintButton"
import {textReader} from "@/util/Speech";

export default {
  name: 'EntryPage',
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
            this.$i18n.t('welcome_survey').replace('!', '. ') +
            this.$i18n.t('explain_survey').replace('!', '. ');

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
#startbutton {
    width: 50%;
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
  font-size: 32px;
  cursor: pointer;
  color: #2c3e50;
  margin-bottom: 15px;
}
</style>