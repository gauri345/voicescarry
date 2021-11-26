<template>
  <div class="surveypage">
    <div class="questionTitle">
      <div class="ShinePrinciple">
        <span class="material-icons">self_improvement</span>
        {{currentQuestion.questionCategory}}
      </div>
    </div>
    <!-- Question Container including voting-->
    <div class="question-container" >
      <Content  :question-title="currentQuestion.questionTitle"
                :additional-information="currentQuestion.additionalInformation"
                :question-content="currentQuestion.questionTitle"
                :question-number="currentQuestion.questionNumber">
      </Content>

      <!-- The button to navigate between questions goes here -->
      <div class="navigation-buttons">
        <div v-if="previousQuestion.questionNumber !== undefined" class="button-previous">
          <router-link :to="'/question/' + previousQuestion.questionNumber">
            <SurveyButton text="Previous" icon1="arrow_backwards">
            </SurveyButton>
          </router-link>
        </div>
        <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
          <router-link :to="'/question/' + nextQuestion.questionNumber">
            <SurveyButton text="Next" icon2="arrow_forwards">
            </SurveyButton>
          </router-link>
        </div>
      </div>

      <!-- The progress bar goes here -->
      <Progress :current-page-number="currentQuestion.questionNumber"></Progress>

    </div>
    <Footer/>
  </div>  
</template>

<script>
import Progress from "@/components/Progress";
import Content from "@/components/question/Content";
import SurveyButton from "@/components/question/SurveyButton";
import store from "@/store";
import Footer from "@/components/Footer"

export default {
  name: 'Question',
  components: {
    Content,
    SurveyButton,
    Progress,
    Footer,
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
.surveypage{
  overflow:hidden;
  display: block;
}

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
  height: 20%;
  padding-bottom: 10%;
  background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
  box-shadow: 0px 16px 36px -16px rgba(21, 70, 160, 0.5);
  border-radius: 0px 0px 41px 0px;
}
.ShinePrinciple {
  width: 100%;
  position: absolute;
  bottom: 10px;
  text-align: center;

  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-size: 3vw;
}
.material-icons {
  font-size: 5vw;
  vertical-align: text-bottom;
}

</style>
