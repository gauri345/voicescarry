<template>
  <div class="container">
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
          <router-link class="footer-link" to="/">Forgot Password</router-link>
          |
          <router-link class="footer-link" to="/">Please register</router-link>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import FormValidation from "@/util/FormValidation";

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

.login-button {
  min-width: 50%;
}

.container {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 430px;
  background: rgba(0, 0, 0, .3)
}

.card-body {
  padding: 0;
}

.form-container {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  text-align: center;
}

.form-register {
  padding-bottom: 1em;
}

.form-control {
  background-color: #d4dce3;
}

.footer-link {
  text-decoration: none;
  text-transform: uppercase;
  font-size: .8rem;
  color: #b5d1ed;
  font-weight: 500;
}

.footer-link:hover {
  color: #d6dce0;
}
</style>