<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Users</h1>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";
export default {
  name: "UsersComponent",
  components: {
    SidebarMenu, HeaderMenu
  }
}
</script>

<style scoped>

</style>