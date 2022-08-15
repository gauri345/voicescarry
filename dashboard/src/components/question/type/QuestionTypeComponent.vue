<template>
  <ComponentHeader text="Question Types"/>
  <router-view></router-view>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";

export default {
  name: "QuestionTypeComponent",
  components: {
    ComponentHeader
  }
}
</script>

<style scoped>

</style>