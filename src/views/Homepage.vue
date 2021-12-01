<template>

  <Header>
    <div class="div-vertical">
      <div class="div-top-img"><img alt="top image" class="img-top" src="@/assets/homepagewoman.png"/></div>
      <div class="div-top-txt">
        <br>{{ $t('homepage_welcome') }}<br>
        <br> {{ $t('homepage_entered_message') }}<br>
        <br> {{ $t('homepage_feature_message') }}<br>
        <br> {{ $t('homepage_info_message') }}
      </div>
    </div>
  </Header>

  <router-link to="/question/1">
    <div class="navigation-buttons">
      <GeneralButton icon="assignment" :text="$t('homepage_start_survey')"></GeneralButton>
    </div>
  </router-link>

  <router-link to="/complaint">
    <div class="navigation-buttons">
      <GeneralButton icon="assignment_late" text="Report a complaint"></GeneralButton>
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
  components: {
    GeneralButton,
    Header,
    Footer,
  }
}
</script>

<style scoped>
.img-top {
  width: 50%;
  shape-outside: circle(10%);
  border-radius: 10%;
  vertical-align: top;
}

.div-top-txt {
  /*float:center;*/
  display: inline-block;
}

.div-top-img {
  float: left;
}

.div-vertical {
  width: fit-content;
  margin: auto;
  color: white;

}

.navigation-buttons {
  width: 80%;
  display: inline-block;
}

.btn {
  margin-top: 5%;
}

</style>