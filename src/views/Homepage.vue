<template>
    <!-- The Header bar goes here -->
    <div class="header">
      <Header text="Welcome! You’ve successfully entered this survey."></Header>
       <h1>Welcome! </h1>
       <h2> You’ve successfully entered this survey.</h2>
       <p>We have two featuresin this page, Survey and Complaints.</p>
       <p>If you want know more about the survey, please click on the info icon below.</p>
    </div>
       

    <!-- The Footer bar goes here -->
    <div class="footer">
      <Footer text="Random Footer Text"></Footer>
    </div>

    <div class="navigation-buttons">
      <div class="button-next">
        <CustomButton name="Report a complaint"></CustomButton>
      </div>
    </div>

    <router-link to="/question">
    <div class="navigation-buttons">
      <div class="button-next">
        <CustomButton name="Start Survey"></CustomButton>
      </div>
    </div>
  </router-link>
</template>

<script>
  import CustomButton from "@/components/CustomButton";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  
  export default {
    name: "Homepage",
    components: {CustomButton, 
    Header, 
    Footer,
    }

  }
</script>

<style>


</style>