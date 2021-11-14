<template>

  <!-- Question Container -->
  <div class="question-container">
    <Description
        :additional-information="currentQuestion.additionalInformation"
        :question-content="currentQuestion.questionTitle"
        :question-number="currentQuestion.questionNumber"
    ></Description>
    <Content :question-title="currentQuestion.questionTitle"></Content>

    <!-- The button to navigate between questions goes here -->
    <div class="navigation-buttons">
      <div v-if="previousQuestion.questionNumber !== undefined" class="button-previous">
        <router-link :to="'/question/' + previousQuestion.questionNumber">
          <GeneralButton text="Previous" left="0" position="relative" top="0"></GeneralButton>
        </router-link>
      </div>
      <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
        <router-link :to="'/question/' + nextQuestion.questionNumber">
          <GeneralButton text="Next" left="0" position="relative" top="0"></GeneralButton>
        </router-link>
      </div>
    </div>

    <!-- The progress bar goes here -->
    <Progress :current-page-number="currentQuestion.questionNumber"></Progress>

  </div>
</template>

<script>
import Progress from "@/components/Progress";
import Description from "@/components/question/Description";
import Content from "@/components/question/Content";
import GeneralButton from "@/components/GeneralButton";
import store from "@/store";

export default {
  name: 'Question',
  components: {
    Content,
    Description,
    GeneralButton,
    Progress
  },

  data: function () {
    return {
      currentQuestion: store.state.currentQuestion,
      nextQuestion: store.state.nextQuestion,
      previousQuestion: store.state.previousQuestion
    }
  },

  beforeCreate: function () {
    store.clearSelectedQuestions();
    store.setQuestionsAction(parseInt(this.$route.params.number));
  }
}
</script>

<style>

.navigation-buttons {
  position: absolute;
  margin-bottom: 20px;
  top: 55%;
  left: 33%;
  margin-top: -50px;
  margin-left: -50px;
}

.button-previous {
  position: relative;
  margin-right: 20px;
  float: left;
}

.button-next {
  float: left;
}

.question-container {
  min-height: 300px;
}
</style>