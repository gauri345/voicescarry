<template>
  <h1>Welcome</h1>
  <router-link to="/question/1">
    <GeneralButton text="Start Questionnaire"></GeneralButton>
  </router-link>
</template>

<script>
  import GeneralButton from "@/components/GeneralButton";
  export default {
    name: "Homepage",
    components: {GeneralButton}
  }
</script>

