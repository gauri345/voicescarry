<template>
  <div class="landingpage">
    <Header id="headerlanding" :HeaderText="$t('headerText')"/>
    <div id="body">
    <TextField/>
    </div>
    <div id="footer">
    <LandingFooter/>
    </div>
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
.landingpage {
  overflow: hidden;
}
body {
   height:100%;
}
#body {
  padding-bottom:80px;   /* Height of the footer */
}
#headerlanding {
  height: 70px;
  width: 100%;
}
</style>