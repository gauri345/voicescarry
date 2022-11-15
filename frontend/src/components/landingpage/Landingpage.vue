<template>
  <div class="landingpage">
    <Header id="headerLanding" :HeaderText="$t('header_text')" HeaderIcon="spa" />
    <div id="body">
    <LandingContent/>
    </div>
    <div id="footer">
    <LandingFooter/>
    </div>
  </div>
</template>

<script>

import LandingFooter from "@/components/landingpage/LandingFooter.vue"
import Header from "@/components/Header";
import LandingContent from "@/components/landingpage/LandingContent"

export default {
  name: "Landingpage",
  components: {
    LandingFooter,
    Header,
    LandingContent
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
#headerLanding {
  height: 70px;
  width: 100%;
}
</style>