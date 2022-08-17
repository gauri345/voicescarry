<template>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Question Type</label>
    <input v-model="questionType" class="form-control-color" name="questionType"
           placeholder="Question Type" type="text">
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Answer Values:</label>


    <div class="row">
      <div class="col-auto">
        <input v-model="answerValue" class="form-control-color" name="questionType" placeholder="Value"
               type="text">
        <button class="btn btn-success material-icons text-white text-decoration-none" type="button"
                @click="addNewAnswerValue">
          add
        </button> &nbsp;
        <ul class="list-group answers-list ">
          <li v-for="(answer, index) in answerValues" :key="index" class="list-group-item">
            {{ answer }}
            <span class="material-icons text-danger delete-answer-icon" @click="removeAnswerValue(answer)">close</span>
          </li>
        </ul>
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

export default {
  name: "QuestionTypeForm",
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
    questionType: {
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
.form-control-color {
  width: 25rem;
  cursor: none !important;
}

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