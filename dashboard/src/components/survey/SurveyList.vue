<template>
  <AlertBox/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">#</th>
      <th scope="col">Factory Code</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="(survey, index) in allSurveys" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ survey.factoryCode }}</td>
      <td>{{ survey.surveyDate }}</td>
      <td>
        <a class="material-icons text-decoration-none text-info" href="javascript:void(0);" @click="previewAnswers(survey.surveyCode)" >preview</a>
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

export default {
  name: "SurveyList",
  components: {
    AlertBox
  },
  methods: {
    ...mapActions(['fetchAllSurveys']),
    downloadSurveyAnswers(surveyCode) {
      window.location.href = `${ApiConfig.API_BASE_URL}/surveys/downloadAnswers/${surveyCode}`;
    },
    previewAnswers(surveyCode) {
      this.$router.push('/surveys/answers/survey-code=' + surveyCode)
    }
  },
  mounted() {
    this.fetchAllSurveys();
  },
  computed: {
    ...mapGetters(['allSurveys'])
  }
}
</script>

<style scoped>

</style>