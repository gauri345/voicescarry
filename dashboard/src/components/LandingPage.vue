<template>
  <div class="login-form-container">
    <div class="card bg-transparent border-0">
      <div class="card-body">

        <div class="form-greetings py-3">
          <h3 class="h3">WELCOME</h3>
        </div>

        <div class="form-container">
          <div class="login-form">
            <form>

              <div class="mb-3">
                <input v-model="email" :class="emailClass" placeholder="Email" type="email"
                       @input="emailChange"/>
              </div>

              <div class="mb-3">
                <input v-model="password" :class="passwordClass" placeholder="Password" type="password"
                       @input="passwordChange"/>
              </div>

              <div class="mb-3">
                <input id="flexCheckDefault" class="form-check-input m-1" type="checkbox" value="">
                <label class="form-check-label" for="flexCheckDefault">
                  Remember Me
                </label>
              </div>

              <div class="mb-3">
                <button class="btn btn-info login-button">Login</button>
              </div>
            </form>
          </div>
        </div>

        <div class="form-register footer mt-auto">
          <router-link class="footer-link" to="/forget-password">Forgot Password</router-link>
          |
          <router-link class="footer-link" to="/">Please register</router-link>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import FormValidation from "@/util/FormValidation";
import '@/assets/login.css';

export default {
  name: "landingPage",
  data() {
    return {
      formValidated: false,
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false
    }
  },

  computed: {
    emailClass: function () {
      return {
        'form-control': true,
        'is-valid': this.emailValid && this.formValidated,
        'is-invalid': !this.emailValid && this.formValidated
      }
    },
    passwordClass: function () {
      return {
        'form-control': true,
        'is-valid': this.passwordValid && this.formValidated,
        'is-invalid': !this.passwordValid && this.formValidated,
      }
    }
  },
  methods: {
    emailChange() {
      this.formValidated = true;
      if (FormValidation.validateEmail(this.email)) {
        this.emailValid = true;
      } else {
        this.emailValid = false;
      }
    },
    passwordChange(){
      this.formValidated = true;
      if (this.password !== ''){
        this.passwordValid = true;
      }else{
        this.passwordValid = false;
      }
    }
  }
}
</script>

<style scoped>
</style>