<template>
<div id="header">
  <Header>
    <div class="div-vertical">
      <div class="div-top-img"><img class="img-top" alt="top image" src="@/assets/homepagewoman.png"/></div>
      <div class="div-top-txt">
        <br> {{ $t('homepage_entered_message') }} <br><br> {{ $t('homepage_info_message') }} <br><br>
        <span class="material-icons info" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal">info</span>
        <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
        <InformationModal/>
      </div>
    </div>
  </Header>
</div>

<div id="body">
  <router-link to="/question/1">
    <div class="navigation-buttons">
      <GeneralButton icon="assignment" :text="$t('homepage_start_survey')"></GeneralButton>
    </div>
  </router-link>

  <router-link to="/complaint">
    <div class="navigation-buttons">
      <GeneralButton icon="assignment_late" :text="$t('homepage_report_complaint')"></GeneralButton>
    </div>
  </router-link>
</div>

  <!-- The Footer bar goes here -->
  <div id="footer">
    <Footer/>
  </div>


</template>


<script>
import GeneralButton from "@/components/GeneralButton";
import Footer from "@/components/Footer"
import Header from "@/components/Header";
import InformationModal from "@/components/question/InformationModal";
import {textReader} from "@/util/Speech";

export default {
  name: "Homepage",
  components: {
    GeneralButton,
    Header,
    Footer,
    InformationModal
  },
  data() {
    return {
      isReading: false
    }
  },
  methods: {
    readQuestionContent: function () {
     const textToRead =
         this.$i18n.t('homepage_entered_message').replace('!', '. ') +
         this.$i18n.t('homepage_info_message');

     console.log(this.$i18n.locale);

     textReader(textToRead);

    }
  }
}
</script>

<style scoped>

.audio {
  font-size: 33px;
  cursor: pointer;
}

.img-top {
  width: 50%;
  shape-outside: circle(10%);
  border-radius: 10%;
  vertical-align: text-bottom;
}

.div-top-txt {
  display: inline-block;
}

.div-top-img {
  display: inline-block;
}

.navigation-buttons {
  width: 80%;
  display: inline-block;
}

.material-icons.info {
  font-size: 32px;
  cursor: pointer;
  vertical-align: center;
}

body {
   margin:0;
   padding:0;
   height:100%;
}
#body {
   padding:10px;
   padding-bottom:80px;   /* Height of the footer */
}
#text {
  padding-left: 10px;
}
</style>