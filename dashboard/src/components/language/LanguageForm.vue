<template>
  <HeaderMenu></HeaderMenu>
  <sidebar-menu></sidebar-menu>
  <WelcomeComponent></WelcomeComponent>
  <!--
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <component-header text="language" />

        <div class="card">
          <div class="card-body bg-dark">
            <h3>Add new language.</h3>
            <div class="row">
              <div class="col-auto">
                <label for="display" class="col-form-label">Display:</label>
              </div>
              <div class="col-auto">
                <input type="text" id="display" class="form-control" aria-describedby="passwordHelpInline">
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  --->

</template>

<script>

//import HeaderMenu from "@/components/HeaderMenu";
//import SidebarMenu from "@/components/SidebarMenu";
//import ComponentHeader from "@/components/ComponentHeader";

import WelcomeComponent from "@/components/WelcomeComponent";
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";
export default {
  name: "LanguageForm",
  components: {SidebarMenu, HeaderMenu, WelcomeComponent},
  // components: {
    //HeaderMenu, SidebarMenu, ComponentHeader,
  //},
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>