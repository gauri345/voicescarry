<template>
  <nav class="navbar fixed-bottom navbar-dark bg-primary">
    <div class="picture-wrapper">
      <img alt="Uni Mannheim" src="../../assets/UMA-logo.png" class="uni-logo"/>
      <img alt="Vaude" src="../../assets/vaude-logo.png" class="vaude-logo"/>
    </div>

    <div class="language-changer">
        <LanguageSwitcher/>
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
.uni-logo {
  height: 30px;
  border-right: 1px solid #FFFFFF;
  padding-right: 10px;
  vertical-align: center;
}

.vaude-logo {
  height: 45px;
  padding-left: 10px;
  vertical-align: center;
  bottom: -20px;
}

.language-changer {
  position: relative;
  display: flex;
  vertical-align: center;
}


</style>