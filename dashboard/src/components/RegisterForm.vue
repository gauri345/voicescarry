<template>
  <main class="form-register">
    <form :class="validationClass" novalidate>
      <div class="row g-3">
        <div class="col-sm-4">
          <label class="col-form-label" for=fullName>Full Name:</label>
        </div>
        <div class="col-auto">
          <input id="fullName" class="form-control" required type="text">
        </div>

        <div class="col-sm-4">
          <label class="col-form-label" for="address">Address:</label>
        </div>
        <div class="col-auto">
          <input id="address" class="form-control" required type="text">
        </div>
        <div class="col-sm-4">
          <label class="col-form-label" for="password">Telephone:</label>
        </div>
        <div class="col-auto">
          <input id="telephone" class="form-control" type="number">
        </div>

        <div class="col-sm-4">
          <label class="col-form-label" for="email">Email:</label>
        </div>
        <div class="col-auto">
          <input id="email" class="form-control" required type="email">
        </div>

        <div class="col-sm-4">
          <label class="col-form-label" for="password">Password:</label>
        </div>
        <div class="col-auto">
          <input id="password" v-model="password" class="form-control" required type="password">
        </div>
        <div class="col-sm-4">
          <label class="col-form-label" for="repeatPassword">Repeat Password:</label>
        </div>
        <div class="col-auto">
          <input id="repeatPassword" v-model="repeatPassword" class="form-control" required type="password">
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
import {mapActions} from "vuex";

export default {
  name: "RegisterForm",
  data() {
    return {
      validationClass: 'needs-validation',
      fullName: '',
      address: '',
      telephone: '',
      email: '',
      password: '',
      repeatPassword: '',
      errMessage: ''
    }
  },
  methods: {
    ...mapActions(['registerAction']),

    handleRegister(event) {
      event.preventDefault();
      this.validationClass = 'was-validated';
      const emailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };
      if (emailValidation(this.fullName) && this.address && this.email && this.password && this.repeatPassword !== '' && this.password === this.repeatPassword) {
        this.registerAction(
            {
              fullName: this.fullName,
              address: this.address,
              telephone: this.telephone,
              email: this.email,
              password: this.password,
              repeatPassword: this.repeatPassword
            });
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