<template>
  <HeaderMenu />
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/components/home/HeaderMenu";
import SidebarMenu from "@/components/home/SidebarMenu";
export default {
  name: "ApplicationIndex",
  components: {SidebarMenu, HeaderMenu}
}
</script>

<style scoped>

</style>