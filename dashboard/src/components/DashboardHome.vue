<template>
  <div>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand px-3" to="/">CLOVER</router-link>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a class="nav-link px-3" href="javascript:void(0);" @click="signOut">Sign out</a>
        </div>
        <button aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler d-md-none collapsed" data-bs-target="#sidebarMenu" data-bs-toggle="collapse"
                type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
    </header>

    <ul>
      <a href="/users">Users</a>

      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
      <!--
        when click on user on must land on users page.
        The user page must contain a table of all users stored in th database.

        Create a form to add a role. The role contains (role_name, description)
          1. the role must be available under route users/role
          2. There must be one role list page (function to add, edit, delete the role.)
          3. There must be one role form page to add and edit role (users/role/form/?role_id={role_id})


      -->
    </ul>


    <h1>Welcome {{userEmail}}</h1>
  </div>

</template>

<script>
export default {
  name: "DashboardHome",
  data() {
    return {
      userEmail: ''
    }
  },

  methods: {
    signOut: function () {
      localStorage.removeItem("session");
      this.$router.push({name: 'userLoginPage'});
    }
  },

  created() {
    const session = JSON.parse(localStorage.getItem("session"));
    this.userEmail = session.email;
  }
}
</script>

<style scoped>
header {
  margin-top: 0;
}
</style>