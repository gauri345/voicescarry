<template>
  <div class="login-form-container">
    <div class="card bg-transparent border-0">
      <form class="card-body">

        <div class="form-greetings py-3">
          <h3 class="h3">WELCOME</h3>
        </div>

        <div class="form-container">
          <div class="login-form">
            <div class="mb-3">
              <input v-model="email" autocomplete="on" :class="userInputClasses(this.emailValid)" placeholder="Email" type="email"
                     @input="emailChange"/>
            </div>

            <div class="mb-3">
              <input v-model="password" :class="userInputClasses(this.passwordValid)" placeholder="Password"
                     type="password"
                     @input="passwordChange"/>
            </div>

            <div v-if="getErrorMessage" class="alert alert-danger" role="alert">{{ getErrorMessage }}</div>

            <div class="mb-3">
              <input id="rememberMe" class="form-check-input m-1" type="checkbox" value="" v-model="rememberMe" aria-labelledby="rememberMeLabel">
              <label class="form-check-label" for="rememberMe" id="rememberMeLabel">
            Remember me</label>
            </div>

            <div class="mb-3">
              <button class="btn btn-info login-button" @click="loginConfirm">Login</button>
            </div>
          </div>
        </div>

        <div class="form-register footer mt-auto">
          <router-link class="footer-link text-info" to="/user/forget-password">Forgot Password</router-link>
          |
          <router-link class="footer-link text-info" to="/user/register">Register</router-link>
        </div>

      </form>
    </div>
  </div>

</template>

<script>
import FormValidation from "@/util/FormValidation";
import '@/assets/login.css';
import {mapActions, mapGetters} from "vuex";
import CryptoJS from 'crypto-js';
export default {
  name: "LoginPage",
  data() {
    return {
      formValidated: false,

      emailValid: false,
      passwordValid: false,

      email: '',
      password: '',
      rememberMe: false
    }
  },
  computed: {
    ...mapGetters(['getErrorMessage']),
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


    encryptPassword(password){
      return CryptoJS.AES.encrypt(password, 'test').toString();
    },

    loginConfirm() {
      this.formValidated = true;
      if (this.emailValid && this.passwordValid) {
        if(this.rememberMe===true){
          const rememberMe = {
            email: this.email,
            password: this.encryptPassword(this.password)
          };
          localStorage.removeItem("remember_me");
          localStorage.setItem("remember_me", JSON.stringify(rememberMe));
        } else {
          localStorage.removeItem("remember_me");
        }

        this.loginAction(
            {
              email: this.email,
              password: this.password
            });
      }
    }
  },

  created() {
    const itemFromLocalStorage = JSON.parse(localStorage.getItem('remember_me' ));
    if (itemFromLocalStorage) {
      const bytes = CryptoJS.AES.decrypt(itemFromLocalStorage.password, 'test');
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      this.password = originalPassword
      this.email = itemFromLocalStorage.email;
      this.passwordValid = true;
      this.emailValid = true;
      this.rememberMe = true
    }
  },
  mounted() {
    this.$store.dispatch('hideAlert');
  }
}
</script>

<style scoped>
</style>