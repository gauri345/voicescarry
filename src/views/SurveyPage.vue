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
          <router-link :to="'/operations/' + previousQuestion.questionNumber">
            <SurveyButton icon1="arrow_backwards" text="Previous">
            </SurveyButton>
          </router-link>
        </div>
        <div v-if="previousQuestion.questionNumber ==24" class="button-previous" data-bs-target=".bd-example-modal-pm" data-bs-toggle="modal">
            <FinishModal :additional-information="additionalInformation" 
                                  :question-content="questionContent"/>
            <SurveyButton text="Submit" class="submit"></SurveyButton>
        </div>

        <div v-if="nextQuestion.questionNumber !== undefined" class="button-next">
          <router-link :to="'/operations/' + nextQuestion.questionNumber">
            <SurveyButton icon2="arrow_forwards" text="Next">
            </SurveyButton>
          </router-link>
        </div>
      </div>

      <!-- The progress bar goes here -->
      <Progress id="progressbar" :current-page-number="currentQuestion.questionNumber" :total-questions="totalQuestionCount"></Progress>

    </div>
    <Footer/>
  </div>
</template>

<script>
import SurveyContent from "@/components/survey/SurveyContent";
import SurveyButton from "@/components/survey/SurveyButton";
import Progress from "@/components/utils/Progress";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FinishModal from "@/components/survey/FinishModal";
import {mapActions, mapGetters} from "vuex";


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

  methods: {
    ...mapActions(['initializeQuestionState', 'clearSelectedQuestions'])
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
    ]),

    currentQuestion() {
      return this.getCurrentQuestion
    },

    previousQuestion() {
      return this.getPreviousQuestion;
    },

    nextQuestion() {
      return this.getNextQuestion;
    },

    totalQuestionCount() {
        return this.getTotalQuestionCount;
    }
  },
}
</script>

<style scoped>
.survey-page {
  overflow: hidden;
  display: block;
}

.navigation-buttons {
  width: 90%;
  display: inline-block;
}

.button-previous {
  display: inline-block;
  width: 40%;
  margin-right: 2%;
}

.button-next {
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
