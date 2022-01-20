<template>
<div id="header">
  <Header>
    <div class="div-vertical">
      <div class="div-top-img"><img class="img-top" alt="top image" src="@/assets/persona.png"/></div>
      <div class="div-top-txt">
        <br> {{ $t('homepage_entered_message') }} <br><br> {{ $t('homepage_info_message') }} <br><br>
        <span class="material-icons info" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal">info</span>
        <HomepageModal/>
        <span class="material-icons audio" v-on:click="readQuestionContent">volume_up</span>
      </div>
    </div>
  </Header>
</div>

<div id="body">
  
    <div class="navigation-buttons">
      <router-link to="/question/information">
      <GeneralButton icon="assignment" :text="$t('homepage_start_survey')"></GeneralButton>
      </router-link>
    </div>
  
 <br>
  
    <div class="navigation-buttons">
      <router-link to="/complaint">
      <GeneralButton icon="assignment_late" :text="$t('homepage_report_complaint')"></GeneralButton>
      </router-link>
    </div>
  
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
import HomepageModal from "@/components/HomepageModal";
import {textReader} from "@/util/Speech";

export default {
  name: "Homepage",
  components: {
    GeneralButton,
    Header,
    Footer,
    HomepageModal,
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
  margin-left: 10%;
  margin-right: 10%;
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
</style>