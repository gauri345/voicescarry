<template>
  <AlertBox/>
  <table class="table bg-dark text-info text-lg-start caption-top">
    <caption>
      <div class="input-group mb-3">
        <DatePicker v-model="dateFrom">
          <template v-slot="{ inputValue, togglePopover }">
            <span class="text-white h6">From: </span>
            <input :value="inputValue" class="form-control-sm me-3" readonly
                   @click="togglePopover()"/>
          </template>
        </DatePicker>
        <DatePicker v-model="dateTo">
          <template v-slot="{ inputValue, togglePopover }">
            <span class="text-white h6">To: </span>
            <input :value="inputValue" class="form-control-sm" readonly @click="togglePopover()"/>
          </template>
        </DatePicker>

        <a class="btn btn-sm btn-warning ms-1" title="Click to apply the filters." type="button" @click="filterSurveys">Filter</a>
        <a class="btn btn-sm btn-dark material-icons ms-1" style="float: right;" title="Download all Survey Answers"
           @click="downloadAllSurveyAnswers">download</a>
        <a class="btn btn-sm btn-danger ms-1" title="Reset all filters" type="button" @click="resetFilters">Reset</a>

        <router-link class="btn btn-dark position-absolute" style="right: 15px;" to="/surveys/form/id=">Create new survey</router-link>

      </div>

    </caption>

    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">#</th>
      <th scope="col">Survey Name</th>
      <th scope="col">Factory Code</th>
      <th scope="col">Questions</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="(survey, index) in allSurveys" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ survey.surveyName }}</td>
      <td>{{ survey.factory.name }}</td>
      <td>{{ survey.questions.length }}</td>
      <td>
        <router-link :to="`/surveys/form/id=${survey._id}`" class="material-icons text-decoration-none text-info"
                     title="Edit Survey">edit
        </router-link>
        <a class="material-icons text-decoration-none text-info" href="javascript:void(0);"
           @click="previewAnswers(survey.surveyCode)">preview</a>
        <a class="material-icons text-decoration-none text-info" href="javascript:void(0);"
           @click="downloadSurveyAnswers(survey.surveyCode)">download</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import AlertBox from "@/components/util/AlertBox";
import {mapActions, mapGetters} from "vuex";
import ApiConfig from "@/config/ApiConfig";
import {DatePicker} from 'v-calendar';

export default {
  name: "SurveyList",
  components: {
    AlertBox,
    DatePicker
  },
  methods: {
    ...mapActions(['fetchAllSurveys', 'filterSurveys', 'resetFilters', 'downloadFilteredSurveyAnswers']),
    downloadSurveyAnswers(surveyCode) {
      window.location.href = `${ApiConfig.API_BASE_URL}/surveys/downloadAnswers/${surveyCode}`;
    },
    downloadAllSurveyAnswers() {
      window.location.href = `${ApiConfig.API_BASE_URL}/surveys/downloadAnswers`;
    },
    previewAnswers(surveyCode) {
      this.$router.push('/surveys/answers/survey-code=' + surveyCode)
    }
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchAllSurveys();
  },
  computed: {
    ...mapGetters(['allSurveys']),
    dateFrom: {
      get() {
        return this.$store.state.surveyList.dateFrom
      },
      set(value) {
        this.$store.commit('UPDATE_DATE_FROM', value)
      }
    },
    dateTo: {
      get() {
        return this.$store.state.surveyList.dateTo
      },
      set(value) {
        this.$store.commit('UPDATE_TO_FROM', value)
      }
    },
  }
}
</script>

<style scoped>
</style>