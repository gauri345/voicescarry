<template>
  <Question questionNumber="1" questionTitle="How happy are you with your working conditions?" />
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'App',
  components: {
    Question
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
