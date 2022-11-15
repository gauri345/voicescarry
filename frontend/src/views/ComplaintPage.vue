<template>
  <Header id="headercomplaint" HeaderIcon="assignment_late" :HeaderText="$t('header_text_complaint')"/>
  <div id="body">
    <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
    <p> {{ $t('complaint_intro') }}</p>
      <div class=buttonwrapper>
      <Button style="align-items: baseline" onclick=" window.open('http://www.vaude.de','_blank')" id="complaintvideobutton" :text="$t('button_complaint_video')"/>
    </div>
    <p> {{ $t('complaint_button_intro') }}</p>
    <div class=buttonwrapper>
      <Button style="align-items: baseline" onclick=" window.open('http://www.vaude.de','_blank')" id="complaintbutton" :text="$t('button_report_complaint')"/>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/utils/Button";
import {textReader} from "@/util/speech";

export default {
  name: 'ComplaintPage',
  components: {
      Header,
      Footer,
      Button
      },
  data() {
    return {
    isReading: false
    }
  },
  methods: {
    readPageContent: function () {
      const textToRead =
        this.$i18n.t('complaint_intro') +
        this.$i18n.t('complaint_button_intro');
      console.log(this.$i18n.locale);
      textReader(textToRead);
    }
  }
}
</script>

<style scoped>
#body {
  padding-bottom: 80px;
  font-size: 20px;
  margin-left: 10%;
  margin-right: 10%;
}
#complaintvideobutton{
  width: 80%;
}
#complaintbutton{
  width: 80%;
}
.buttonwrapper{
  margin: 0.5em 0 0.5em 0;
}
.material-icons.audio {
  cursor: pointer;
  color: #2c3e50;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}
</style>