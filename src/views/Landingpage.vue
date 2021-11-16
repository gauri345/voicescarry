<template>
  <h1>Welcome to the Landing Page</h1>
  <router-link to="/homepage">
    <GeneralButton text="Enter the survey"></GeneralButton>
  </router-link>
</template>

<script>
  import GeneralButton from "@/components/GeneralButton";

  export default {
    name: "Landingpage",
    components: { GeneralButton }
  }
</script>