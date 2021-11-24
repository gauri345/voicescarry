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
    questionIcon: Element,
  }
}
</script>

<style scoped>
    .questionTitle {
    position: relative;
    width: 100%;
    height: 20%;
    padding-bottom: 10%;
    background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
    box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
    border-radius: 0px 0px 41px 0px;
    }
    .question-category {
    width: 100%;
    position: absolute;
    bottom: 10px;
    text-align: center;

    color: rgba(255, 255, 255, 0.7);
    font-style: normal;
    font-size: 3vw;
    } 
    .material-icons {
    font-size: 4vw;
    vertical-align: text-bottom;
    }
</style>