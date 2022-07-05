<template>
  <form class="row g-3">
    <div class="col-md-6">
      <input id="questionNumber" class="form-control" type="number" placeholder="Question Number" />
    </div>
    <div class="col-md-6">
      <select class="form-select form-select" id="questionType">
        <option selected>Question Type</option>
        <option value="select">Select</option>
        <option value="scale">Scale</option>
      </select>
    </div>
    <div class="col-12">
      <QuestionCard cardTitle="Question Title" />
    </div>
    <div class="col-12">
      <label class="form-label" for="inputAddress2">Address 2</label>
      <input id="inputAddress2" class="form-control" placeholder="Apartment, studio, or floor" type="text">
    </div>
    <div class="col-md-6">
      <label class="form-label" for="inputCity">City</label>
      <input id="inputCity" class="form-control" type="text">
    </div>
    <div class="col-md-4">
      <label class="form-label" for="inputState">State</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label class="form-label" for="inputZip">Zip</label>
      <input id="inputZip" class="form-control" type="text">
    </div>
    <div class="col-12">
      <button class="btn btn-primary" type="button/">Save</button>
      &nbsp;&nbsp;
      <router-link to="/question/" class="btn btn-danger">Cancel</router-link>
    </div>
  </form>
</template>

<script>
import QuestionCard from "@/components/question/QuestionCard";
export default {
  name: "QuestionForm",
  components: {QuestionCard}
}
</script>

<style scoped>

</style>