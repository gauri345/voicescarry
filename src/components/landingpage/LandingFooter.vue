<template>
    <nav class="navbar fixed-bottom navbar-dark bg-primary">
        <div class="picture-wrapper" >
          <img alt="Uni Mannheim" src="../../assets/Logo_UMA_EN_Weiss.png" style="float: left"/>
          <img alt="Vaude" src="../../assets/vaude-logo.jpg" style="float: right"/>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'LandingFooter'
}
</script>

<style scoped>
nav {
background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
margin-top:2%;
}
img {
  height: 50px;
}
.picture-wrapper{
  width:100%;
}
</style>