<template>
    
  <Header>
      <div class="div-vertical">
        <div class="div-top-img"><img class="img-top" alt="top image" src="@/assets/homepagewoman.png" /></div>
        <div class="div-top-txt">
          <br> {{ hpwelcome  }} <br><br> {{ hpinfo  }} <br><br>
            <span class="material-icons info" data-bs-target=".bd-example-modal-sm" data-bs-toggle="modal">info</span>
              <InformationModal/>
        </div>
      </div>
  </Header>

   <router-link to="/question/1">
    <div class="navigation-buttons">
        <GeneralButton text="Start Survey" icon="assignment"></GeneralButton>
    </div>
    </router-link>

    <router-link to="/complaint">
    <div class="navigation-buttons">
        <GeneralButton text="Report a complaint" icon="assignment_late"></GeneralButton>
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
  import InformationModal from "@/components/question/InformationModal";
 

  
  export default {
    name: "Homepage",
    props: {
    hpwelcome: {
    type: String,
    default: "Welcome to the survey on worker-wellbeing!" },
    hpinfo: {
    type: String,
    default: "If you want know more about the survey, please click on the info icon below."}
  },
    components: {
      GeneralButton, 
      Header,
      Footer,
      InformationModal    }
  }
</script>

<style scoped>
.img-top {
width: 50%;
shape-outside: circle(10%);
border-radius: 10%;
vertical-align: text-bottom;
}

.div-top-txt{
  display:inline-block;
}

.div-top-img{
  display: inline-block;
}

.navigation-buttons{
  width: 80%;
  display: inline-block;
}
.btn{
  margin-top: 5%;
}
.material-icons.info {
  font-size: 32px;
  cursor: pointer;
  vertical-align: center;
}

</style>