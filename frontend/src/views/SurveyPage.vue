<template>
  <div class="survey-page">
    <Header HeaderIcon="spa" HeaderText="Wellbeing at Work"/>

    <!-- Question Container including voting-->
    <div class="question-container">
      <SurveyAnswers :question-title="getCurrentQuestion.questionTitle" @answered="answered"/>

      <!-- The button to navigate between questions goes here -->
      <div class="navigation-buttons">
        <div v-if="getPreviousQuestion.order !== undefined" class="button-previous">
          <SurveyButton icon1="arrow_backwards" :text="$t('button_previous')" @btnClick="previousQuestion"/>
        </div>
        <div v-if="getNextQuestion.order !== undefined" class="button-next">
          <SurveyButton icon2="arrow_forwards" :text="$t('button_next')" @btnClick="handleNextButton"/>
        </div>
        <div v-if="getNextQuestion.order === undefined" class="button-next">
          <FinishModal/>
        </div>
      </div>
        <!-- The progress bar goes here -->
        <Progress id="progressbar" :current-page-number="getCurrentQuestion.order"
                  :total-questions="getTotalQuestionCount"></Progress>
      
    </div>
  </div>
  <Footer/>
</template>

<script>
import SurveyButton from "@/components/survey/SurveyButton";
import Progress from "@/components/utils/Progress";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FinishModal from "@/components/survey/FinishModal";
import SurveyAnswers from "@/components/survey/SurveyAnswers";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'SurveyPage',
  components: {
    SurveyButton,
    SurveyAnswers,
    Progress,
    Footer,
    Header,
    FinishModal
  },

  methods: {
    ...mapActions(
        [
          'initializeQuestionState',
          'clearSelectedQuestions',
          'storeAnswerInLocalStorage',
          'navigateToNextQuestion',
          'navigateToPreviousQuestion'
        ]
    ),

    answered: function (answer) {
      this.storeAnswerInLocalStorage(answer);
    },

    handleNextButton() {
      this.navigateToNextQuestion();
    },

    nextQuestion() {
      return this.navigateToNextQuestion();
    },

    previousQuestion() {
      return this.navigateToPreviousQuestion();
    }
  },

  created() {
    const questionNumber = this.$route.params.number;
    this.clearSelectedQuestions();
    this.initializeQuestionState(parseInt(questionNumber));
  },

  computed: {
    ...mapGetters([
      'getAllQuestions',
      'getPreviousQuestion',
      'getCurrentQuestion',
      'getNextQuestion',
      'getTotalQuestionCount'
    ])
  },
}
</script>

<style scoped>
.survey-page{
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
