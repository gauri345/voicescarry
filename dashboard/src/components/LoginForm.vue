<template>
  <main class="form-sign-in">
    <form :class="validationClass" novalidate>
      <div class="form-floating">
        <input id="email" v-model="emailAddress" class="form-control" placeholder="Email" required type="email"
               @focus="clearPassword()" aria-selected="true">
        <label for="email">Email</label>
      </div>
      <div class="form-floating">
        <input id="password" v-model="password" class="form-control" placeholder="Password" required type="password"
               @focus="clearPassword()">
        <label for="password">Password</label>
      </div>

      <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>

      <div class="sign-in button">
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click="handleSubmit">Sign in</button>
      </div>
      <router-link to="/registerForm">
        <button class="w-100 btn btn-lg btn-primary button">Register form</button>
      </router-link>
    </form>
  </main>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      validationClass: 'needs-validation',
      emailAddress: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters(['errorMessage'])
  },
  methods: {
    ...mapActions(['loginAction', 'clearErrorMessage']),

    clearPassword() {
      this.clearErrorMessage();
      this.password = '';
    },
    handleSubmit(event) {
      event.preventDefault();
      this.validationClass = 'was-validated';
      const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };
      if (validateEmail(this.emailAddress) && this.password !== '') {
        this.loginAction(
            {
              email: this.emailAddress,
              password: this.password
            }
        );
      }
    }
  }
}
</script>
<style scoped>
.alert{
  margin-top: 1rem;
}
.form-floating{
  margin-bottom: 1rem;
}
.form-sign-in {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-top: 10%;
  background-color: #efeff5;
}

html,
body {
  height: 100%;
}

body {
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.button {
  margin-top: 1rem;
}

.checkbox {
  margin-top: 1rem;
}
</style>