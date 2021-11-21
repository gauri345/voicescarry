<template>
    <!-- The Header bar goes here -->
     <Header/>
    <div class="homepageblue">
      <div class="div-vertical">
        <div class="div-top-img"><img class="img-top" alt="top image" src="@/assets/homepagewoman.png" /></div>
        <div class="div-top-txt"><br> {{ hpwelcome  }} <br><br><br> {{ hpenter  }}<br><br> {{ hpfeature  }} <br><br> {{ hpinfo  }} </div>
      </div>
    </div>

   <router-link to="/question/1">
    <div class="navigation-buttons">
      <div class="button-next">
        <GeneralButton text="Start Survey" icon="assignment"></GeneralButton>
      </div>
    </div>
    </router-link>

    <router-link to="/complaint">
    <div class="navigation-buttons">
      <div class="button-next">
        <GeneralButton text="Report a complaint" icon="assignment_late"></GeneralButton>
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

<style scoped>
.img-top {
width: 240px;
shape-outside: circle(10%);
border-radius: 10%;
vertical-align: 0%;
}

.div-top-txt{
  float:center;
}

.div-top-img{
  float:left
}

.div-vertical{
  width: fit-content;
  margin: auto;
}

.homepageblue {
text-align: justify;
height: 20%;
width: 50%;
margin-left:25%;
margin-right:25%;


/* Gradient */

background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
/* blue */

box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 40px 40px 40px 40px;

color: #FFFFFF;
display: flex;
align-items: center;
}

</style>