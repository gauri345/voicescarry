<template>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Question Type</label>
    <input v-model="question" class="form-control-color" name="questionType"
           placeholder="Question Type" type="text">
  </div>
  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start">Answer Values</label>
    <input v-model="answer" class="form-control-color" name="questionType"
           placeholder="Answer Values" type="text">
  </div>
  <div class="d-flex justify-content-start border-top border-1">
    <button class=" btn btn-success mt-3" type="button" @click="saveQuestionsType">Save</button>
    <button class="btn btn-danger mt-3" @click="$router.push('/question-type')">Cancel</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "QuestionTypeForm",
  method: {
    ...mapActions(['saveQuestionsType']),
  }
}
</script>

<style scoped>
.form-control-color {
  width: 25rem;
}

.btn {
  margin-left: 1rem;
}
</style>