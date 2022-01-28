<template>
  <div class="surveypage">
      <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>

    <!-- Question Container including voting-->
    <div class="question-container" >
      <SurveyContent  :question-title="currentQuestion.questionTitle"
                :question-content="currentQuestion.questionTitle"
                :question-number="currentQuestion.questionNumber">
      </SurveyContent>

      <!-- The button to navigate between questions goes here -->
      <div class="navigation-buttons">
        <div v-if="previousQuestion.questionNumber !== undefined" class="button-previous">
          <router-link :to="'/question/' + previousQuestion.questionNumber">
            <SurveyButton text="Previous" icon1="arrow_backwards">
            </SurveyButton>
          </router-link>
        </div>
        <div v-if="previousQuestion.questionNumber ==24" class="button-previous" data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
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
import Progress from "@/components/survey/Progress";
import SurveyContent from "@/components/survey/SurveyContent";
import SurveyButton from "@/components/survey/SurveyButton";
import store from "@/store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FinishModal from "@/components/survey/FinishModal";


export default {
  name: 'SurveyPage',
  components: {
    SurveyContent,
    SurveyButton,
    Progress,
    Footer,
    Header,
    FinishModal
  },

  data: function () {
    return {
      currentQuestion: store.state.currentQuestion,
      nextQuestion: store.state.nextQuestion,
      previousQuestion: store.state.previousQuestion,
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
