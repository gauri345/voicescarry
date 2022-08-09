<template>
  <AlertBox/>
  <table class="table-borderless text-left">
    <tr>
      <th>Factory:</th>
      <td>
        <select id="factoryCode" class="form-select form-select" required>
          <option>Select a Factory</option>
          <option v-for="factory in factoryList" :key="factory._id" :value="factory.code">{{factory.name}}</option>
        </select>
      </td>
    </tr>
    <tr>
      <th>Questions:</th>
      <td>
        <ul class="list-group">
          <li class="list-group-item" v-for="question in questionList" :key="question.questionId">
            <input class="form-check-input" type="checkbox" :value="question.questionId" id="flexCheckDefault">
            {{question.questionTitle}}
          </li>

        </ul>
      </td>
    </tr>
  </table>

  <div class="d-flex justify-content-start border-top border-1 mt-1">
    <button class="btn btn-success mt-3" type="button">Save</button>&nbsp;&nbsp;
    <button class="btn btn-danger mt-3" @click="$router.push('/survey')">Cancel</button>
  </div>

</template>

<script>
import AlertBox from "@/components/util/AlertBox";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SurveyForm",
  components:{AlertBox},
  methods: {
    ...mapActions(["fetchFactories", "fetchAllQuestions"])
  },
  computed:{
    ...mapGetters(["factoryList", "questionList"])
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