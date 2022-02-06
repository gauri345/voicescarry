<template>
  <Header class="header-complaint" header-icon="assignment_late" header-text="Complaint"/>
  <p>If you have a concern or complaint, please first raise it with your supervisor or management team.
    You can learn about your options here (button that will go to future video)</p>
  <Button class="complaint-video-button" onclick=" window.open('http://www.vaude.de','_blank')"
          style="align-items: baseline" text="Learn more about your options"/>
  <p>If you don't feel comfortable raising a complaint internally, you have options to file a complaint here (links to
    complaint mechanism).</p>
  <Button class="complaint-button" onclick=" window.open('http://www.vaude.de','_blank')"
          style="align-items: baseline" text="Go to the Complaint System"/>
  <p>Thank you for participating!</p>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Button from "@/components/utils/Button"

export default {
  name: 'ComplaintPage',
  components: {
    Header,
    Footer,
    Button
  }
}
</script>

<style>
.complaint-video-button {
  width: 60%;
}

.complaint-button {
  width: 60%;
}
</style>