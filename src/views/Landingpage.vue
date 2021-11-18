<template>
  <Header/>
  <h1>Welcome to the Landing Page</h1>
  <TextField/>
  <LandingFooter/>
</template>

<script>

  import LandingFooter from "@/components/landingpage/LandingFooter.vue"
  import Header from "@/components/Header";
  import TextField from "@/components/landingpage/TextField"

  export default {
    name: "Landingpage",
    components: {  
      LandingFooter, 
      Header,
      TextField
      }
  }
</script>