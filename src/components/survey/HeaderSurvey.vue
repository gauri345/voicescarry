<template>
    <div class="questionTitle">
      <div class="question-category">
        <span class="material-icons">{{ questionIcon }}</span>
        {{ questionCategory }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'QuestionModal',
  props: {
    questionCategory: String,
    questionIcon: String,
  }
}
</script>

<style scoped>
    .questionTitle {
    position: relative;
    width: 100%;
    height: 70px;
    background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
    box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
    border-radius: 0px 0px 41px 0px;
    }
    .question-category {
    width: 100%;
    position: absolute;
    bottom: 15px;
    text-align: center;
    color: rgba(255, 255, 255);
    font-style: normal;
    font-size: 25px;
    } 
    .material-icons {
    font-size: 35px;
    vertical-align: text-bottom;
    }
</style>