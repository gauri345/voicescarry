<template>
  <div class="card">
    <div class="card-body bg-dark">
      <h3 class="mb-3">Add new language.</h3>
      <div class="row mb-3">
        <div class="col-auto col-sm-2">
          <label class="col-form-label" for="display">Display:</label>
        </div>
        <div class="col-6">
          <input id="display" class="form-control" type="text">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-2">
          <label class="col-form-label" for="ISO">ISO:</label>
        </div>
        <div class="col-6">
          <input id="ISO"  class="form-control" type="text">
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-2">
          <label class="col-form-label" for="flag">Flag:</label>
        </div>
        <div class="col-6">
          <input type="file" class="form-control" id="flag">
        </div>
      </div>

      <div >
        <button class="btn btn-outline-secondary mx-2">Submit</button>
        <router-link to="/" class="btn btn-outline-secondary">Back</router-link>
      </div>
    </div>


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