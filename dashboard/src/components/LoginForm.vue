<template>
  <main class="form-sign-in">
    <form>
     <h1 class="h3">Please sign in</h1>
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="email address">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="password">
        <label for="floatingPassword">password</label>
      </div>
      <div class="sign-in">
          <router-link to="/dashboardPage">
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </router-link>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "LoginForm"
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
.sign-in{
  margin-top: 1rem;
}
.checkbox{
  margin-top: 1rem;
}

</style>