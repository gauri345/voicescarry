<template>
  <Header/>
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
          <GeneralButton text="Previous"></GeneralButton>
        </router-link>
      </div>
      <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
        <router-link :to="'/question/' + nextQuestion.questionNumber">
          <GeneralButton text="Next"></GeneralButton>
        </router-link>
      </div>
    </div>

    <!-- The progress bar goes here -->
    <Progress :current-page-number="currentQuestion.questionNumber"></Progress>

  </div>
  <Footer/>
</template>

<script>
import Progress from "@/components/Progress";
import Description from "@/components/question/Description";
import Content from "@/components/question/Content";
import GeneralButton from "@/components/GeneralButton";
import store from "@/store";
import Footer from "@/components/Footer"
import Header from "@/components/Header";

export default {
  name: 'Question',
  components: {
    Content,
    Description,
    GeneralButton,
    Progress,
    Header,
    Footer
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
.navigation-buttons{
  width: 80%;
  display: inline-block;
}
.button-previous {
  display: inline-block;
  width: 20%;
  margin-right: 10px;
}

.button-next{
  display: inline-block;
  width: 20%;
  margin-left: 10px;
}
</style>
