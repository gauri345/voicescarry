<template>
    <!-- The Header bar goes here -->
     <Header/>
    <div class="homepageblue">
      <div class="div-vertical">
        <div class="div-top-img"><img class="img-top" alt="top image" src="@/assets/homepagewoman.png" /></div>
        <div class="div-top-txt"><br> {{ hpwelcome  }} <br><br><br> {{ hpenter  }}<br><br> {{ hpfeature  }} <br><br> {{ hpinfo  }} </div>
      </div>
    </div>

    <router-link to="/complaint">
    <div class="navigation-buttons">
      <div class="button-next">
        <GeneralButton text="Report a complaint"></GeneralButton>
      </div>
    </div>
    </router-link>

    <router-link to="/question/1">
    <div class="navigation-buttons">
      <div class="button-next">
        <GeneralButton text="Start Survey"></GeneralButton>
      </div>

    </div>
    </router-link>

     <!-- The Footer bar goes here -->
    <div class="footer">
      <Footer/>
    </div>

  
</template>


<script>
  import GeneralButton from "@/components/GeneralButton";
  import Footer from "@/components/Footer"
  import Header from "@/components/Header";
 

  
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
    components: {GeneralButton, 
    Header,
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

.img-top {
width: 240px;
shape-outside: circle(10%);
border-radius: 10%;
}

.div-top-txt{
  float:left
}

.div-top-img{
  float:left
}

.div-vertical{
  width: fit-content;
  margin: auto;
}


.homepageblue {

min-height: 300px;
min-width: 100px;

/* left: 0px;
top: 0px; */

/* Gradient */

background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
/* blue */

box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 40px 40px 41px 0px;

color: #FFFFFF;
display: flex;
align-items: center;
}




</style>