<template>
  <router-link class="btn btn-dark" style="float: right;" to="/question/form">Add</router-link>
  <AlertBox message="This is test message" type="danger"/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Number</th>
      <th scope="col">Title</th>
      <th scope="col">Type</th>
      <th scope="col">Answers</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="question in allQuestions" :key="question._id">
      <td>{{ question.number }}</td>
      <td>{{ createDefaultTitle(question.titles) }}</td>
      <td>{{ question.questionType }}</td>
      <td>
        <a :data-bs-target="`#answerModal_${question._id}`" data-bs-toggle="modal" href="javascript:void(0)">
          View
        </a>
        <div :id="`answerModal_${question._id}`" aria-hidden="true" aria-labelledby="answerModalLabel"
             class="modal fade"
             tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 id="answerModalLabel" class="modal-title">Answers for {{ question.number }}</h5>
                <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div v-for="answer in question.answers" :key="answer._id" class="row">
                    <div class="col">{{ answer.value }}</div>
                    <div class="col">{{ createDefaultTitle(answer.items) }}</div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td>
        <a href="javascript:void(0);" title="Edit Question" data-bs-toggle="tooltip">
          <span class="material-icons">edit</span>
        </a>
        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete question">
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
  name: "QuestionList",
  components: {
    AlertBox
  },
  methods: {
    ...mapActions(['fetchAllQuestions']),
    createDefaultTitle: (questionTitles) => {
      const englishTitle = questionTitles.filter(questionTitle => questionTitle.lang === "en");
      return englishTitle[0].content;
    }
  },
  mounted() {
    this.fetchAllQuestions();
  },

  computed: {
    ...mapGetters(['allQuestions', 'serverErrorDisplayed'])
  }
}
</script>

<style scoped>

</style>