<template>
  <ComponentHeader text="Answer Types"/>
  <router-view></router-view>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";

export default {
  name: "AnswerTypeComponent",
  components: {
    ComponentHeader,
  },
  mounted() {
    this.$store.dispatch('hideAlert');
  }
}
</script>

<style scoped>

</style>