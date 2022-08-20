<template>
  <AlertBox/>
  <form @submit="submitForm">

    <div class="row g3">
      <div class="col-md-6">
        <div class="row mb-3">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start" for="questionNumber">
            Languages:
          </label>
          <div class="col-sm-9">
            <div class="card">
              <div class="card-body">
                <div v-for="language in supportedLanguages" :key="language" class="input-group mb-3">
                  <span class="input-group-text">
                    <input v-bind:id="language.value" v-model="language.isSelected" :disabled="language.value === 'english'"
                           name="language" type="checkbox" v-bind:value="language.value"
                           @change="languagesChanged"/>
                  </span>
                  <label aria-label="Language" class="form-control"
                         type="text">{{ ucFirst(language.text) }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">&nbsp;</div>

      <div class="col-md-6">
        <div class="row">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start" for="questionNumber">
            Number:
          </label>
          <div class="col-sm-9">
            <input id="questionNumber" v-model="questionNumber" class="form-control form-control-sm"
                   placeholder="Question Number"
                   required type="number"/>
          </div>
        </div>
      </div>

      <div class="col-md-6">&nbsp;</div>
      <div class="col-md-6  mt-3">
        <div class="row">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start">Title</label>

          <template v-for="(questionTitle, index) in questionTitles" :key="index">
            <div class="col-sm-9 mb-1">
             <textarea v-model="questionTitle.content" :placeholder="ucFirst(questionTitle.lang)"
                       class="form-control"
                       rows="3"></textarea>
            </div>
            <div class="col-sm-3">&nbsp;</div>
          </template>
        </div>

      </div>

      <div class="col-md-6">&nbsp;</div>
      <div class="col-md-6 mt-3">
        <div class="row">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start">Additional Information:</label>

          <template v-for="(additionalInformation, index) in additionalInformationList" :key="index">
            <div class="col-sm-9 mb-1">
              <textarea v-model="additionalInformation.content" :placeholder="ucFirst(additionalInformation.lang)"
                        class="form-control"
                        rows="3"></textarea>
            </div>
            <div class="col-sm-3">&nbsp;</div>
          </template>
        </div>
      </div>

      <div class="col-md-6">&nbsp;</div>

      <div class="col-md-6">
        <div class="row mt-4">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start">
            Type:
          </label>
          <div class="col-sm-9">
            <select id="questionType" v-model="questionType" class="form-select form-select-lg" required>
              <option v-for="answer in answers" v-bind:key="answer.type" :value="answer.type">
                {{ ucFirst(answer.type) }}
              </option>
            </select>
          </div>

        </div>
      </div>

      <div class="col-md-6"> &nbsp;</div>
      <div class="col-md-6 mt-4">
        <div class="row">
          <label class="col-sm-3 col-form-label col-form-label-sm text-start">
            Answers:
          </label>
          <div class="col-sm-9">
            <div class="row card text-dark">
              <div v-for="answerValue in selectedAnswer.values" :key="answerValue" class="col-sm-auto">
                <div class="alert-info alert m-0">{{ answerValue.value }}</div>
                <div class="row card-body">
                  <template v-for="(detail, index) in answerValue.details" :key="index">
                    <label class="col-sm-3 col-form-label col-form-label-sm question-form-label control-label">
                      {{ ucFirst(detail.lang) }}
                    </label>
                    <div class="col-md-9 mb-2">
                      <input class="form-control" required type="text" v-model="detail.content"/>
                    </div>
                    <hr>
                  </template>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <hr/>
    <div class="ms-3 mb-5 row">
      <button class="col-auto btn btn-success" type="submit">Save</button>&nbsp;&nbsp;
      <button class="col-auto btn btn-danger" @click="$router.push('/question')">Cancel</button>
    </div>

  </form>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "QuestionForm",
  components: {
    AlertBox
  },
  methods: {
    ...mapActions({
      languagesChanged: 'questionForm/languagesChanged',
      fetchAnswerTypes: 'questionForm/fetchAnswerTypes',
      fetchQuestionById: 'questionForm/fetchQuestionById',
      saveQuestion: 'questionForm/saveQuestion',
    }),

    ucFirst(string) {
      return string[0].toUpperCase() + string.slice(1);
    },

    submitForm(event) {
      this.saveQuestion();
      event.preventDefault();
    },
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchAnswerTypes();
    if (this.$route.params.id) {
      this.fetchQuestionById(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters({
      supportedLanguages: 'questionForm/supportedLanguages',
      questionTitles: 'questionForm/questionTitles',
      additionalInformationList: 'questionForm/additionalInformationList',
      answers: 'questionForm/answers',
      selectedAnswer: 'questionForm/selectedAnswer'
    }),
    questionType: {
      get() {
        return this.$store.state.questionForm.questionType
      },
      set(value) {
        this.$store.commit('questionForm/UPDATE_QUESTION_TYPE', value)
      }
    },
    questionNumber: {
      get() {
        return this.$store.state.questionForm.questionNumber
      },
      set(value) {
        this.$store.commit('questionForm/UPDATE_QUESTION_NUMBER', value)
      }
    },
  }
}
</script>

<style scoped>
</style>