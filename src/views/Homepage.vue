<template>
  <Header/>
  <h1>Welcome to the Home Page</h1>
  <router-link to="/question/1">
    <GeneralButton text="Start Questionnaire"></GeneralButton>
  </router-link>
  <Footer/>
</template>

<script>
  import GeneralButton from "@/components/GeneralButton";
  import Footer from "@/components/Footer"
  import Header from "@/components/Header";

  export default {
    name: "Homepage",
    components: { 
      GeneralButton,
      Header,
      Footer
     }
  }
</script>

