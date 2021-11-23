<template>
  <div class="landingpage">
    <Header/>
    <TextField/>
    <LandingFooter/>
  </div>
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

<style>
.landingpage{
  overflow:hidden;
}
</style>