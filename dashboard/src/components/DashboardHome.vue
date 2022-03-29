<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <WelcomeComponent/>
      </main>
    </div>
  </div>
</template>

<script>

import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";
import WelcomeComponent from "@/components/WelcomeComponent";

export default {
  name: "DashboardHome",
  components: {WelcomeComponent, SidebarMenu, HeaderMenu},
}
</script>

<style scoped>
</style>

