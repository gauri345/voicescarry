<template>

    <div class="triangle-isosceles left">
        {{ description }}
    </div>
    
</template>

<script>

export default {
    name: 'SpeechBubble',
    props: {
        description: String,
    }
}
</script>


<style>

.triangle-isosceles{
  position: relative;
  width: 50%;
  padding: 15px;
  margin: 20px 0;
  color: rgb(255, 255, 255);
  background: linear-gradient(#338bfd, #1477F8);
  border-radius: 10px;  
}

.triangle-isosceles:after{
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50px;
  display:block;
  width:0;
  height: 0;
  
  border-top: 15px solid #1477F8;
  
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
}

.triangle-isosceles.left{
  background: #1477F8;
  margin-left: 250px;
}

.triangle-isosceles.left:after{
  top: auto;
  right: auto;
  bottom: 20px;
  left: -55px;
  
  border-bottom: 10px solid transparent;
  border-left: 60;
  border-right: 55px solid #1477F8;
  border-top: 10px solid transparent;
}

</style>