<template>
  <div class="card">
    <div class="card-body bg-dark">
      <h3>Add new language.</h3>
      <div class="row">
        <div class="col-auto">
          <label class="col-form-label" for="display">Display:</label>
        </div>
        <div class="col-auto">
          <input id="display" aria-describedby="passwordHelpInline" class="form-control" type="text">
        </div>
      </div>
    </div>

    <router-link to="/" class="btn btn-outline-success">Back</router-link>
  </div>

</template>

<script>
export default {
  name: "LanguageForm",
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>