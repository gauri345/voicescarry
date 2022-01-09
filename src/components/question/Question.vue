<template>
  <div class="surveypage">
      <HeaderSurvey :question-category="currentQuestion.questionCategory"
                    :question-icon="currentQuestion.questionIcon">
      </HeaderSurvey>

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
        <div v-if="previousQuestion.questionNumber ==23" class="button-previous" data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
            <FinishModal :additional-information="additionalInformation" 
                                  :question-content="questionContent"/>
            <SurveyButton text="Submit" class="submit"></SurveyButton>
        </div>

        <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
          <router-link :to="'/question/' + nextQuestion.questionNumber">
            <SurveyButton text="Next" icon2="arrow_forwards">
            </SurveyButton>
          </router-link>
        </div>
      </div>

      <!-- The progress bar goes here -->
      <Progress id="progressbar" :current-page-number="currentQuestion.questionNumber"></Progress>

    </div>
    <Footer/>
  </div>  
</template>

<script>
import Progress from "@/components/utils/Progress";
import Content from "@/components/question/Content";
import SurveyButton from "@/components/question/SurveyButton";
import store from "@/store";
import Footer from "@/components/Footer";
import HeaderSurvey from "@/components/question/HeaderSurvey";
import FinishModal from "@/components/question/FinishModal";


export default {
  name: 'Question',
  components: {
    Content,
    SurveyButton,
    Progress,
    Footer,
    HeaderSurvey,
    FinishModal
  },

  data: function () {
    return {
      currentQuestion: store.state.currentQuestion,
      nextQuestion: store.state.nextQuestion,
      previousQuestion: store.state.previousQuestion,
      questionCategory: store.state.questionCategory,
      questionIcon: store.state.questionIcon
    }
  },

  beforeCreate: function () {
    store.clearSelectedQuestions();
    store.setQuestionsAction(parseInt(this.$route.params.number));
  },
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
.submit {
  display: inline-block;
  width: 100%;
  margin-left: 2%;
  background: #4EB562;
}
#progressbar {
   padding-bottom:20px;   /* Height of the footer */
}
</style>
