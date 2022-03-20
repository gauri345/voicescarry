<template>
  <div class="login-form-container">
    <div class="card bg-transparent border-0">
      <div class="card-body">

        <div class="form-greetings py-3">
          <h3 class="h3">Password Reset</h3>
        </div>

        <div class="form-container">
          <div class="login-form">
            <form>

              <div class="mb-3">
                <input v-model="email" :class="emailClass" placeholder="Email" type="email"
                       @input="emailChange"/>
              </div>
              <div class="mb-3">
                <button class="btn btn-info login-button">Reset</button>
                <router-link class="btn btn-info login-button" to="/landingPage">Back</router-link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import '../assets/login.css';
import FormValidation from "@/util/FormValidation";

export default {
  name: "ForgetPasswordForm",
  data() {
    return {
      formValidated: false,
      email: '',
      emailValid: false,
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
  }
  }

</script>

<style scoped>
.login-button {
  min-width: 25%;
  margin: 1rem;

}


</style>