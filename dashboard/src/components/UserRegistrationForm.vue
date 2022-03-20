<template>
  <div class="login-form-container">
    <div class="card bg-transparent border-0">
      <div class="card-body">

        <div class="form-greetings py-3">
          <h3 class="h3">Registration Form</h3>
        </div>

        <div class="form-container">
          <div class="login-form">
            <form>

              <div class="mb-3">
                <input v-model="fullName" class="form-control" placeholder="Full name" type="text"/>
              </div>

              <div class="mb-3">
                <input v-model="address" class="form-control" placeholder="Address" type="text"/>
              </div>


              <div class="mb-3">
                <input v-model="telephone" class="form-control" placeholder="Telephone" type="number"/>
              </div>

              <div class="mb-3">
                <input v-model="email" class="form-control" placeholder="Email" type="email"
                       @input="emailChange"/>
              </div>

              <div class="mb-3">
                <input v-model="password" class="form-control" placeholder="Password" type="password"
                       @input="passwordChange"/>
              </div>


              <div class="mb-3">
                <input v-model="passwordRepeat" class="form-control" placeholder="Repeat Password" type="password"/>
              </div>
              <div class="mb-3">
                <button class="btn btn-info login-button">Register</button>
                <router-link class="btn btn-info login-button" to="/landingPage">Login</router-link>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import '@/assets/login.css';
export default {
  name: "UserRegistrationForm"
}

</script>

<style scoped>
.login-button {
  min-width: 25%;
  margin: 1rem;

}

</style>