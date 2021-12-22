<template>
    <Header id="headercomplaint" HeaderIcon="assignment_late" HeaderText="Complaint"/>
    <p> Click on the button to report a complaint directly to an independent partner of Vaude. 
        For more information, visit this link: 
        <a href="https://csr-report.vaude.com/gri-en/social/complaints-system.php">Fair Wear Complaint Helpline</a> 
    </p>
    <div class=buttonwrapper>
      <ComplaintButton onclick=" window.open('http://www.vaude.de','_blank')" text="Go to the Complaint System of Vaude"/>
    </div>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ComplaintButton from "@/components/complaint/ComplaintButton"

export default {
  name: 'Complaint',
  components: {
      Header,
      Footer,
      ComplaintButton
      }
}
</script>

<style scoped>
#headercomplaint {
  height: 70px;
  width: 100%;
}
</style>