<template>
<HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
    <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <component-header text = "Questions" />
        <QuestionCard></QuestionCard>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";
import componentHeader from "@/components/ComponentHeader";
import QuestionCard from "@/components/question/QuestionCard";
export default {
name: "QuestionComponent",
  components:{
    QuestionCard,
    SidebarMenu, HeaderMenu, componentHeader
  },

}
</script>

<style scoped>

</style>