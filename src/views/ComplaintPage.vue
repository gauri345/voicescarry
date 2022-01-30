<template>
    <Header id="headerComplaint" HeaderIcon="assignment_late" HeaderText="Complaint"/>
    <p> Click on the button to report a complaint directly to an independent partner of Vaude. 
        For more information, visit this link: 
        <a href="https://csr-report.vaude.com/gri-en/social/complaints-system.php">Fair Wear Complaint Helpline</a> 
    </p>
    <div class="buttonWrapper">
      <Button style="align-items: baseline" onclick=" window.open('https://www.vaude.de','_blank')" id="complaintButton" text="Go to the Complaint System of Vaude"/>
    </div>
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
#complaintButton{
  width:80%;
}
</style>