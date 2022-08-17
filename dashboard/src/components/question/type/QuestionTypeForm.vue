<template>
  <AlertBox/>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Answer Type</label>
    <div class="col-auto">
      <input v-model="answerType" class="form-control" name="answerType"
             placeholder="Answer Type" type="text">
    </div>
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Answer Values:</label>
    <div class="col-auto">
      <div class="row">
        <div class="col-auto">
          <input v-model="answerValue" class="form-control" name="questionType" placeholder="Value"
                 type="text">
        </div>
        <div class="col-auto">
          <a class="btn btn-success material-icons text-white text-decoration-none" type="button"
             @click="addNewAnswerValue">
            add
          </a> &nbsp;
        </div>
      </div>
      <div class="row">
        <div class="col-auto">
          <ul class="list-group answers-list mt-2 ">
            <li v-for="(answer, index) in answerValues" :key="index" class="list-group-item mb-1">
              {{ answer }}
              <span class="material-icons text-danger delete-answer-icon"
                    @click="removeAnswerValue(answer)">close</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-start border-top border-1">
    <button class=" btn btn-success mt-3" type="button" @click="saveQuestionsType">Save</button>
    <button class="btn btn-danger mt-3" @click="$router.push('/question-type')">Cancel</button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "QuestionTypeForm",
  components: {AlertBox},
  methods: {
    ...mapActions(['saveQuestionsType', 'fetchQuestionTypeById']),
    addNewAnswerValue() {
      this.$store.commit('UPDATE_QUESTION_TYPE_VALUES')
    },
    removeAnswerValue(answerValue) {
      this.$store.commit('REMOVE_ANSWER_VALUE', answerValue)
    }
  },
  computed: {
    ...mapGetters(['answerValue', 'answerValues']),
    answerType: {
      get() {
        return this.$store.state.questionTypeForm.questionType
      },
      set(value) {
        this.$store.commit('UPDATE_QUESTION_TYPE', value)
      }
    },
    answerValue: {
      get() {
        return this.$store.state.questionTypeForm.answerValue
      },
      set(value) {
        this.$store.commit('UPDATE_ANSWER_VALUE', value)
      }
    },
  },

  mounted() {
    this.fetchQuestionTypeById(this.$route.params.id);
  }
}
</script>

<style scoped>
.answers-list {
  width: 25rem;
}

.delete-answer-icon {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
}

.btn {
  margin-left: 1rem;
}
</style>