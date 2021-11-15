<template>
    <!-- The Header bar goes here -->
   
      <div class="Image">
      <img alt="Image" src="@/assets/homepagewoman.png" />
    </div>
     
    <div class="homepageblue"> <br> {{ hpwelcome  }} <br><br><br> {{ hpenter  }}<br><br> {{ hpfeature  }} <br><br> {{ hpinfo  }} </div>

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

     <!-- The Footer bar goes here -->
    <div class="footer">
      <Footer></Footer>
    </div>

  
</template>


<script>
  import CustomButton from "@/components/CustomButton";
  import Footer from "@/components/Footer";
 

  
  export default {
    name: "Homepage",
    props: {
    hpwelcome: {
    type: String,
    default: "Welcome!" },
    hpenter: {
    type: String,
    default: "You’ve successfully entered this survey." },
    hpfeature: {
    type: String,
    default: "We have two features in this page, Survey and Complaints." },
    hpinfo: {
    type: String,
    default: "If you want know more about the survey, please click on the info icon below."}
  },
    components: {CustomButton, 
    Footer,
    }
  }
</script>

<style>

.hpwelcome {
position: absolute;
width: 211px;
height: 100.57px;
left: 168px;
top: 63.32px;

font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;

/* White */

color: #FFFFFF;
}

.hpenter {
position: absolute;
width: 211px;
height: 100.57px;
left: 168px;
top: 63.32px;

font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;

/* White */

color: #FFFFFF;
}

.hpfeature {
position: absolute;
width: 211px;
height: 100.57px;
left: 168px;
top: 63.32px;

font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;

/* White */

color: #FFFFFF;
}

.hpinfo {
position: absolute;
width: 211px;
height: 100.57px;
left: 168px;
top: 63.32px;

font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 33px;

/* White */

color: #FFFFFF;
}

.Image {

scale: 0.5;
max-height: 40px;
max-width: 40px;
shape-outside: circle(10%);
border-radius: 10%;
}

.homepageblue {

min-height: 300px;
min-width: 100px;

left: 0px;
top: 0px;

/* Gradient */

background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
/* blue */

box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 40px 40px 41px 0px;
}




</style>