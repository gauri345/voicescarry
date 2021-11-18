<template>
    <Header/>
    <h1>This is the complaint page </h1>
    <GeneralButton onclick=" window.open('http://www.vaude.de','_blank')" text="Go to the Complaint System of Vaude"/>
    <Footer/>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/components/Header";
import GeneralButton from "@/components/GeneralButton"

export default {
  name: 'Complaint',
  components: {
      Header,
      Footer,
      GeneralButton
      }
}
</script>

<style scoped>
.btn {
    width: 555px;
}
</style>