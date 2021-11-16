<template>
  <Header/>
  <h1>Welcome to the Landing Page</h1>
  <router-link to="/homepage">
    <GeneralButton text="Enter the survey"></GeneralButton>
  </router-link>
  <LandingFooter/>
</template>

<script>
  import GeneralButton from "@/components/GeneralButton";
  import LandingFooter from "@/components/landingpage/LandingFooter.vue"
  import Header from "@/components/Header";

  export default {
    name: "Landingpage",
    components: { 
      GeneralButton, 
      LandingFooter, 
      Header 
      }
  }
</script>