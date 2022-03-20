<template>
  <div>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link class="navbar-brand px-3" to="/">CLOVER</router-link>
      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <router-link class="nav-link px-3" to="/user/login">Sign out</router-link>
        </div>
        <button aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler d-md-none collapsed" data-bs-target="#sidebarMenu" data-bs-toggle="collapse"
                type="button">
          <span class="navbar-toggler-icon"></span>
        </button>

      </div>
    </header>

    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active">Dashboard</a>
          </li>
        </ul>
      </div>
    </nav>

  </div>

</template>

<script>
export default {
  name: "DashboardHome"
}
</script>

<style scoped>
header {
  margin-top: 0;
}
</style>