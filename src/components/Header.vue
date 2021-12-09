<template>
    <nav class="navbar relative-top navbar-dark bg-primary">
        <slot></slot>
        <div class="HeaderText">
          <span class="material-icons">{{ HeaderIcon }}</span>
          {{ HeaderText }}
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Header',
  props:{
    HeaderText:String,
    HeaderIcon:String,
    }
  ,

}
</script>

<style scoped>
nav {
background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 0px 0px 41px 0px;
color: white;
margin-bottom: 2%;
}

.HeaderText{
width: 100%;
text-align: center;
color: rgba(255, 255, 255);
font-style: normal;
font-size: 24px;
}

.material-icons {
font-size: 4vw;
vertical-align: text-bottom;
}
  
</style>