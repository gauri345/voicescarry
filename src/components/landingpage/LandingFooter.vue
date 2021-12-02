<template>
  <nav class="navbar fixed-bottom navbar-dark bg-primary">
    <div class="picture-wrapper">
      <img alt="Uni Mannheim" src="../../assets/Logo_UMA_EN_Weiss.png" class="uni-logo"/>
      <img alt="Vaude" src="../../assets/image-removebg-preview.png" class="vaude-logo"/>
      <div class="language-changer">
        <LanguageSwitcher/>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher";

export default {
  name: 'LandingFooter',
  components: {
    LanguageSwitcher
  }
}
</script>

<style scoped>
nav {
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  margin-top: 2%;
}

img {
  height: 50px;
}

.picture-wrapper {
  width: 100%;
  text-align: left;
}

.uni-logo {
  height: 50px;
  border-right: 1px solid #FFFFFF;
  padding-right: 10px;
}

.vaude-logo {
  height: 100px;
  padding-left: 10px;
  vertical-align: bottom;
  bottom: -20px;
  position: absolute;
}

.language-changer {
  position: absolute;
  top: 20px;
  right: 30px;
}


</style>