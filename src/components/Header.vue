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
box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
border-radius: 0px 0px 41px 0px;
color: white;
}

.HeaderText{
width: 100%;
text-align: center;
color: rgba(255, 255, 255);
font-style: normal;
font-size: 24px;
}
</style>