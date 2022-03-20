<template>
  <div class="login-form-container">
    <div class="card bg-transparent border-0">
      <div class="card-body">

        <div class="form-greetings py-3">
          <h3 class="h3">WELCOME</h3>
        </div>

        <div class="form-container">
          <div class="login-form">
            <div class="mb-3">
              <input v-model="email" :class="userInputClasses(this.emailValid)" placeholder="Email" type="email"
                     @input="emailChange"/>
            </div>

            <div class="mb-3">
              <input v-model="password" :class="userInputClasses(this.passwordValid)" placeholder="Password"
                     type="password"
                     @input="passwordChange"/>
            </div>

            <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>

            <div class="mb-3">
              <input id="flexCheckDefault" class="form-check-input m-1" type="checkbox" value="">
              <label class="form-check-label" for="flexCheckDefault">
                Remember Me
              </label>
            </div>

            <div class="mb-3">
              <button class="btn btn-info login-button" @click="loginConfirm">Login</button>
            </div>
          </div>
        </div>

        <div class="form-register footer mt-auto">
          <router-link class="footer-link" to="/user/forget-password">Forgot Password</router-link>
          |
          <router-link class="footer-link" to="/user/register">Please register</router-link>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import FormValidation from "@/util/FormValidation";
import '@/assets/login.css';
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      formValidated: false,

      emailValid: false,
      passwordValid: false,

      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['errorMessage']),
  },
  methods: {
    ...mapActions(['loginAction']),

    userInputClasses: function (input) {
      return {
        'form-control': true,
        'is-valid': input && this.formValidated,
        'is-invalid': !input && this.formValidated,
      }
    },

    emailChange() {
      this.formValidated = true;
      if (FormValidation.validateEmail(this.email)) {
        this.emailValid = FormValidation.validateEmail(this.email);
      }
    },
    passwordChange() {
      this.formValidated = true;
      this.passwordValid = this.password !== '';
    },
    loginConfirm() {
      this.formValidated = true;
      if (this.emailValid && this.passwordValid) {
        this.loginAction(
            {
              email: this.email,
              password: this.password
            });
      }
    }
  }
}
</script>

<style scoped>
</style>