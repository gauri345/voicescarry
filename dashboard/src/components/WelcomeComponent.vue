<template>
  <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Welcome {{ userEmail }}</h1>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body bg-dark">
          <div class="row">
            <div class="col-auto">
              <label class="col-form-label">ENG</label>
            </div>
            <div class="col-auto">
              <img :src="require('../assets/england.jpg')" alt="england flag"/>
            </div>
          </div>

          <div class="row">
            <div class="col-auto">
              <label class="col-form-label">VIE</label>
            </div>
            <div class="col-auto">
              <img :src="require('../assets/vietnam.png')" alt="england flag"/>
            </div>
          </div>
          <router-link to="/language/form" class="btn btn-outline-secondary float-end">Add new language</router-link>
        </div>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="card">
        <div class="card-body bg-dark">
          <img :src="require('../assets/chart.png')" alt="england flag"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeComponent",
  data() {
    return {
      userEmail: '',
    }
  },

  created() {
    const session = JSON.parse(localStorage.getItem("session"));
    this.userEmail = session.email;
  }
}
</script>

<style scoped>
</style>