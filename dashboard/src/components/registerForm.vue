<template>
<main class="form-register">
  <form :class="validationClass" novalidate>
  <div class="row g-3">
    <div class="col-sm-4">
      <label for=fullName class="col-form-label">Full Name:</label>
    </div>
    <div class="col-auto">
      <input type="text" id="fullName" class="form-control" required>
    </div>

    <div class="col-sm-4">
      <label for="address" class="col-form-label">Address:</label>
    </div>
    <div class="col-auto">
      <input type="text" id="address" class="form-control" required>
    </div>
    <div class="col-sm-4">
      <label for="password" class="col-form-label">Telephone:</label>
    </div>
    <div class="col-auto">
      <input type="number" id="telephone" class="form-control">
    </div>

    <div class="col-sm-4">
      <label for="email" class="col-form-label">Email:</label>
    </div>
    <div class="col-auto">
      <input type="email" id="email" class="form-control" required>
    </div>

    <div class="col-sm-4">
      <label for="password" class="col-form-label">Password:</label>
    </div>
    <div class="col-auto">
      <input type="password" id="password" class="form-control" v-model="password" required>
    </div>

    <div class="col-sm-4">
      <label for="repeatPassword" class="col-form-label">Repeat Password:</label>
    </div>
    <div class="col-auto">
      <input type="password" id="repeatPassword" v-model="repeatPassword" class="form-control" required>
    </div>

    <div>
      <button class="w-100 btn btn-lg btn-primary" @click="handleRegister">register</button>
    </div>

    <div v-if="errMessage" class="alert alert-danger" role="alert">{{ errMessage }}</div>

  </div>
  </form>
</main>

  <router-link to="/">
    <button class="btn btn-lg btn-primary button">go to homepage</button>
  </router-link>
</template>

<script>
export default {
  name: "registerForm",
  data(){
    return{
      validationClass:'needs-validation',
      fullName:'',
      address:'',
      telephone:'',
      email:'',
      password:'',
      repeatPassword:'',
      errMessage: ''
    }
  },
  methods:{
    handleRegister(event){
      event.preventDefault();
      this.validationClass = 'was-validated';
      if(this.password!== this.repeatPassword){
        // form is not valid
        this.errMessage = 'password did not match'
      }else{
        this.errMessage = ''
      }
    },
  }
}
</script>

<style scoped>

.form-register {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  margin: auto;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #efeff5;
  margin-top: 5%;
}
html,
body {
  height: 100%;
}
</style>