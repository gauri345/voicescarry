<template>
  <Header id="headercomplaint" HeaderIcon="assignment_late" HeaderText="Complaint"/>
  <p>If you have a concern or complaint, please first raise it with your supervisor or management team. 
    You can learn about your options here (button that will go to future video)</p>
    <div class=buttonwrapper>
    <GeneralButton style="align-items: baseline" onclick=" window.open('http://www.vaude.de','_blank')" id="complaintvideobutton" text="Learn more about your options"/>
  </div>
  <p>If you don't feel comfortable raising a complaint internally, you have options to file a complaint here (links to complaint mechanism).</p>
  <div class=buttonwrapper>
    <GeneralButton style="align-items: baseline" onclick=" window.open('http://www.vaude.de','_blank')" id="complaintbutton" text="Go to the Complaint System"/>
  </div>
  <p>Thank you for participating!</p>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GeneralButton from "@/components/GeneralButton"

export default {
  name: 'ComplaintPage',
  components: {
      Header,
      Footer,
      GeneralButton
      }
}
</script>

<style>
#complaintvideobutton{
  width:60%;
}
#complaintbutton{
  width:60%;
}
</style>