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
      <div class="button-next">
        <GeneralButton text="Next"></GeneralButton>
      </div>
    </div>

    <!-- The progress bar goes here -->
    <div class="progress">
      <Progress current-page-number="1"></Progress>
    </div>
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
      currentQuestion: store.state.currentQuestion
    }
  },

  beforeCreate: function () {
    const questionNumber = this.$route.params.number;
    store.setQuestionAction(parseInt(questionNumber));
  }
}
</script>

<style>

.navigation-buttons {
  margin-top: 20px;
  margin-bottom: 20px;
}

.question-container {
  min-height: 300px;
}
</style>