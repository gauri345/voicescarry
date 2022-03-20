<template>
  <main class="form-register">
    <form :class="validationClass" novalidate>
      <div class="row g-3">
        <div class="col-sm-4">
          <label class="col-form-label" for=fullName>Full Name:</label>
        </div>
        <div class="col-auto">
          <input id="fullName" class="form-control" required type="text" v-model="fullName">
        </div>

        <div class="col-sm-4">
          <label class="col-form-label" for="address">Address:</label>
        </div>
        <div class="col-auto">
          <input id="address" class="form-control" required type="text" v-model="address">
        </div>
        <div class="col-sm-4">
          <label class="col-form-label" for="password">Telephone:</label>
        </div>
        <div class="col-auto">
          <input id="telephone" class="form-control" type="number" v-model="telephone">
        </div>

        <div class="col-sm-4">
          <label class="col-form-label" for="email">Email:</label>
        </div>
        <div class="col-auto">
          <input id="email" class="form-control" required type="email" v-model="email">
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
          <button class="w-50 btn btn-lg btn-primary" @click="handleRegister">register</button>
        </div>
        <div v-if="error" class="alert alert-danger" role="alert">{{ error }}</div>
        <div v-if="userRegistrationErrorMessage" class="alert alert-danger" role="alert">{{ userRegistrationErrorMessage }}</div>
      </div>
    </form>
  </main>

  <router-link to="/">
    <button class="btn btn-lg btn-primary button">go to homepage</button>
  </router-link>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import FormValidation from "@/util/FormValidation";

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
      error: ''
    }
  },
  computed: {
    ...mapGetters(['userRegistrationErrorMessage'])
  },
  methods: {
    ...mapActions(['registerAction']),

    handleRegister(event) {

      event.preventDefault();


    const isUserInformationValid = FormValidation.confirmUserInformation(this.fullName, this.address);
    if(!isUserInformationValid){
      this.error = 'User information is not provided.';
      this.validationClass = 'was-validated';
    }
      const isEmailValid = FormValidation.validateEmail(this.email);
      if (!isEmailValid) {
        this.error = "Email is not valid.";
        this.validationClass = 'was-validated';
      }

      const isPasswordConfirmValid = FormValidation.confirmPasswordValid(this.password, this.repeatPassword);
      if (!isPasswordConfirmValid) {
        this.error = "Passwords do not match.";
        this.validationClass = 'was-validated';
      }


      if (isEmailValid && isPasswordConfirmValid && isUserInformationValid) {
            this.registerAction(
            {
              fullName: this.fullName,
              address: this.address,
              telephone: this.telephone,
              email: this.email,
              password: this.password
            }
            );
      }
    },
  }
}
</script>

<style scoped>

.form-register {
  width: 100%;
  max-width: 500px;
  padding: 10px;
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