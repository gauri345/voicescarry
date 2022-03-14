<template>
  <main class="form-sign-in ">
    <form :class="validationClass" novalidate>
      <h1 class="h3">Please sign in</h1>
      <div class="form-floating">
        <input id="email" v-model="emailAddress" class="form-control" placeholder="email address" required type="email">
        <label for="email">Email address</label>
      </div>
      <div class="form-floating">
        <input id="password" v-model="password" class="form-control" placeholder="password" required type="password">
        <label for="password">password</label>
      </div>
      <div class="sign-in">
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click="handleSubmit">Sign in</button>
      </div>
    </form>
  </main>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      formValid: false,
      validationClass: 'needs-validation',
      emailAddress: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['loginAction']),
    handleSubmit(event) {
      event.preventDefault();
      this.validationClass = 'was-validated'
      const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      };
      if (validateEmail(this.emailAddress) && this.password !== '') {
        this.formValid = true;
      }
      if (this.formValid) {
        this.loginAction(
            {
              email: this.emailAddress,
              password: this.password
            }
        );

        this.$router.push('dashboardPage')
      }
    }
  }
}
</script>
<style scoped>
.form-sign-in {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
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

.sign-in {
  margin-top: 1rem;
}

.checkbox {
  margin-top: 1rem;
}
</style>