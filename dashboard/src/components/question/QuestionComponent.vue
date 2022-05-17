<template>
  <ComponentHeader text="Questions"/>
  <QuestionList />

</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";
import QuestionList from "@/components/question/QuestionList";

export default {
  name: "QuestionComponent",
  components: {
    QuestionList,
    ComponentHeader
  }
}
</script>

<style scoped>

</style>