<template>
  <AlertBox/>
  <table class="table-borderless text-left">
    <tr>
      <th>Survey Name:</th>
      <td>
        <div class="container text-start">
          <div class="row">
            <div class="col mb-2">
              <input class="form-control" name="surveyName" v-model="surveyName"  placeholder="A name for the survey."/>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>Factory:</th>
      <td>
        <div class="container text-start">
          <div class="row">
            <div class="col mb-2">
              <select id="factoryId" v-model="factoryId" class="form-select form-select" required>
                <option>Select a Factory</option>
                <option v-for="factory in factoryList" :key="factory._id" :value="factory._id">
                  {{ factory.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th>Questions:</th>
      <td>
        <div class="container text-start mb-2">
          <div class="row">
            <div v-for="(chunk, index) in groupQuestionList(questionList)" :key="index" class="col">
              <div v-for="question in chunk" :key="question.questionId" class="input-group">
                <div class="input-group-text rounded-0">
                  <input :id="question.questionId" :value="question.questionId" class="form-check" type="checkbox"
                         @change="toggleQuestionToSurvey(question.questionId)">
                </div>
                <label class="form-control rounded-0"> {{ question.questionTitle }}</label>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>
        <div class="container text-start">
          <div class="row">
            <div class="col">
              <div class="d-flex justify-content-start mt-1">
                <button class="btn btn-success mt-3" type="button" @click="addSurvey">Save</button>&nbsp;&nbsp;
                <button class="btn btn-danger mt-3" @click="$router.push('/surveys')">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </table>

</template>

<script>
import AlertBox from "@/components/util/AlertBox";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SurveyForm",
  components: {AlertBox},
  methods: {
    ...mapActions(["fetchFactories", "fetchAllQuestions", "addSurvey", "toggleQuestionToSurvey"]),
    groupQuestionList(questionList) {
      let chunks = [[], [], []];
      let count = 0;
      let row = 0;
      for (let i = 0; i < questionList.length; i++) {
        if (count % 3 !== 0) row++;
        else row = 0;
        chunks[row].push(questionList[i]);
        count++;
      }
      return chunks;
    }
  },
  computed: {
    ...mapGetters(["factoryList", "questionList"]),
    factoryId: {
      get() {
        return this.$store.state.surveyForm.survey.factoryId
      },
      set(value) {
        this.$store.commit('UPDATE_FACTORY_ID_IN_SURVEY', value)
      }
    },
    surveyName: {
      get() {
        return this.$store.state.surveyForm.survey.surveyName
      },
      set(value) {
        this.$store.commit('UPDATE_SURVEY_NAME_IN_SURVEY', value)
      }
    },
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchFactories();
    this.fetchAllQuestions()
  }
}
</script>

<style scoped>
</style>