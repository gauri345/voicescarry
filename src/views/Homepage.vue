<template>
  <h1>Welcome</h1>
  <router-link to="/question">
    <CustomButton name="Start Questionnaire"></CustomButton>
  </router-link>
</template>

<script>
  import CustomButton from "@/components/CustomButton";
  export default {
    name: "Homepage",
    components: {CustomButton}
  }
</script>

