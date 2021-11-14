<template>
  <router-link to="/question">
    <GeneralButton text="Start Questionnaire"></GeneralButton>
  </router-link>
</template>

<script>
  import GeneralButton from "@/components/GeneralButton";
  
  export default {
    name: "Homepage",
    components: { GeneralButton }
  }
</script>

