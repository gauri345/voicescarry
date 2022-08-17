<template>
  <AlertBox/>
  <router-link class="btn btn-dark" style="float: right;" to="/question-type/form/id=">Add</router-link>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">#</th>
      <th scope="col">Type</th>
      <th scope="col">Answer Values</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="(questionType, index) in questionTypes" :key="index">
      <td>{{ index }}</td>
      <td>{{ questionType.questionType }}</td>
      <td>
        <ul class="list-group list-group-horizontal">
          <li class="list-group-item" v-for="(answer, index) in questionType.answerValues" :key="index">{{ answer }}</li>
        </ul>
      </td>
      <td>
        <router-link :to="'/question/form/id=1'" data-bs-toggle="tooltip" title="Edit Question">
          <span class="material-icons text-info">edit</span>
        </router-link>
        <a data-bs-toggle="tooltip" href="javascript:void(0);" title="Delete question">
          <span class="material-icons text-danger">delete</span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "QuestionTypeList",
  components: {
    AlertBox
  },

  methods: {
    ...mapActions(['fetchAllQuestionTypes'])
  },

  computed: {
    ...mapGetters(['questionTypes'])
  },

  mounted() {
    this.fetchAllQuestionTypes();
  }
}
</script>

<style scoped>

</style>