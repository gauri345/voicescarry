<template>
  <WelcomeComponent/>
  <div class="row">
    <div class="col-sm-6">
      <router-view></router-view>
    </div>
    <div class="col-sm-6">
      <ChartsIndex/>
    </div>
  </div>
</template>

<script>

import WelcomeComponent from "@/components/home/WelcomeComponent";
import ChartsIndex from "@/components/charts/ChartsIndex";

export default {
  name: "DashboardHome",
  components: {ChartsIndex, WelcomeComponent},
}
</script>

<style scoped>
</style>

