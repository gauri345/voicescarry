<template>
  <ComponentHeader text="Questions"/>
  <QuestionCard></QuestionCard>

</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";
import QuestionCard from "@/components/question/QuestionCard";

export default {
  name: "QuestionComponent",
  components: {
    QuestionCard,
    ComponentHeader
  },

}
</script>

<style scoped>

</style>