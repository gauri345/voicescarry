<template>
  <div class="questionTitle">
    SHINE principle
  </div>
  <!-- Question Container -->
  <div class="question-container" >
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
          <GeneralButton text="Previous" icon1="arrow_backwards">
          </GeneralButton>
        </router-link>
      </div>
      <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
        <router-link :to="'/question/' + nextQuestion.questionNumber">
          <GeneralButton text="Next" icon2="arrow_forwards">
          </GeneralButton>
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

export default {
  name: 'Question',
  components: {
    Content,
    Description,
    GeneralButton,
    Progress,
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

<style scoped>
.navigation-buttons{
  width: 90%;
  display: inline-block;
}
.button-previous {
  display: inline-block;
  width: 40%;
  margin-right: 2%;
}

.button-next{
  display: inline-block;
  width: 40%;
  margin-left: 2%;
}
.questionTitle {
  position: relative;
  width: 100%;
  height: 30%;
  text-align: center;


  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-size: 24px;

  /* Gradient */
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  /* blue */
  box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
  border-radius: 0px 0px 41px 0px;
}

</style>
