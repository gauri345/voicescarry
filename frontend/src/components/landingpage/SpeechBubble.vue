<template>

    <div class="speechbubble">
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


<style scoped>
.speechbubble{
  background: #1546A0;
  border-radius: 10px;
  display:inline-block;
  width: 80%;
  color: rgb(255, 255, 255);
  position: relative;
  vertical-align: top;
  padding: 0.5em;
  margin-top: 0.5em;
  max-height:100%;
}
.speechbubble::before{
  background-color: #1546A0;
  content: "\00a0";
  display: block;
  height:16px;
  width: 20px;
  position: absolute;
  top:10px;
  left:-9px;
  transform:rotate(29deg) skew(-35deg);
  -moz-transform: rotate(29deg) skew(-35deg);
  -ms-transform: rotate(29deg) skew(-35deg);
  -o-transform: rotate(29deg) skew(-35deg);
  -webkit-transform: rotate(29deg) skew(-35deg);
}

</style>