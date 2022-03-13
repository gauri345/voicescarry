<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*{
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding:0;
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}
/* gives all headers and footers the same background color*/
.navbar{
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
}
.material-icons {
font-size: 35px;
vertical-align: text-bottom;
}
</style>
