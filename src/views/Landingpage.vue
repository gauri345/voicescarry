<template>
  <div class="landingpage">

    <LanguageSwitcher/>
    <Header :HeaderText="$t('headerText')"/>
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
  }
}
</script>

<style>
.landingpage {
  overflow: hidden;
}
</style>