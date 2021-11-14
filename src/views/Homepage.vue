<template>

  <div>
    
    <!-- The Header bar goes here -->
    <div class="header">
      <Header text="Welcome! You’ve successfully entered this survey."></Header>
    </div>
    <div class="footer">
      <Footer text="Random Footer Text"></Footer>
    </div>


  </div>
  <router-link to="/question">
    <CustomButton text="Start a Questionnaire"></CustomButton>
  </router-link>
</template>

<script>
  import CustomButton from "@/components/CustomButton";
  import Header from "@components/Header";
  import Footer from "components/Footer";
  
  export default {
    name: "Homepage",
    components: {CustomButton, 
    Header, 
    Footer
    }

  }
</script>

