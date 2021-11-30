<template>
  <div class="landingpage">

    {{$t('message')}}

    <LanguageSwitcher/>
    <Header HeaderText="Project 'Measuring Employee Wellbeing'"/>
    <TextField/>
    <LandingFooter/>
  </div>
</template>

<script>

import LanguageSwitcher from "@/components/LanguageSwitcher";
import LandingFooter from "@/components/landingpage/LandingFooter.vue"
import Header from "@/components/Header";
import TextField from "@/components/landingpage/TextField"

export default {
  name: "Landingpage",
  components: {
    LandingFooter,
    Header,
    TextField,
    LanguageSwitcher
  },
  data() {
    console.log(this.$i18n.locale)

  }
}
</script>

<style>
.landingpage {
  overflow: hidden;
}
</style>