<template>
  <div class="landingpage">
    {{ $t("message.value", { value: 'This is an example of content translation' }) }}
    <Header HeaderText="Project 'Measuring Employee Wellbeing'"/>
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