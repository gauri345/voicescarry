<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <component-header text = "Surveys" />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";
import ComponentHeader from "@/components/ComponentHeader";
export default {
  name: "SurveysComponent",
  components:{
    ComponentHeader,
    SidebarMenu, HeaderMenu
  }
}
</script>

<style scoped>

</style>