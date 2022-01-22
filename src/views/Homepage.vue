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
  
  <div class="div-vertical">
     <div class="navigation-buttons">
       <div class="btn">
        <router-link to="/question/information">
          <GeneralButton style="align-items:center !important;" icon="assignment" :text="$t('homepage_start_survey')"></GeneralButton>
          <div class="img-pc-view"><img class="img-survey" src="@/assets/btn_survey.png"/></div>
        </router-link>
      </div>
     </div>

     <div class="navigation-buttons">
       <div class="btn">
        <router-link to="/complaint">
          <GeneralButton style="align-items:center !important;" icon="assignment_late" :text="$t('homepage_report_complaint')"></GeneralButton>
          <div class="img-pc-view"><img class="img-complaint" src="@/assets/btn_complaint.png"/></div>
        </router-link>
      </div>
     </div>
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

.img-survey{
  width: 100%;
}
.img-complaint{
  width: 100%;
}
.img-top {
  width: 50%;
  shape-outside: circle(10%);
  border-radius: 10%;
  vertical-align: text-bottom;
}
.info{
  margin-right:0.2em;
}
.audio{
  margin-left:0.2em;
}
.div-vertical{
   margin: auto;
   display: flex;
   align-items: center;
   justify-content:  center;
   padding-top: 1em;
   flex-wrap: wrap;
 }
.div-top-txt {
  display: inline-block;
}

.div-top-img {
  display: inline-block;
}

.navigation-buttons {
  width: 20em;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
  display: inline-block;
}

body {
  height:100%;
}
.btn {
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  border: 0;
  width: 100%;
  height: fit-content;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  box-shadow: 0px 24px 48px -18px rgba(21, 70, 160, 0.5);
  text-align:center;
  padding-top: 0.8em;
  padding-bottom: 1em;
 }

 .btn:hover {
     transform: translateY(-3px);
     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
 }
/*.align-center{
  special styling was added in template line 22 and 31
}*/

#body {
   padding-bottom:80px;   /* Height of the footer */
}
</style>