<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse show">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a aria-current="page" class="nav-link active" href="#">
            <span class= "material-icons-outlined">home</span>Home</a>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/users/component">
            <span class="material-icons-outlined">people_outline</span>  Users
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/questions">
            <span class="material-icons-outlined">quiz</span>Questions</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/surveys">
            <span class="material-icons-outlined">poll</span>Surveys</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/feedbacks">
          <span class="material-icons-outlined">reviews</span>Feedbacks</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SidebarMenu"
}
</script>

<style scoped>
.sidebar {
  background-color: #052446;
  height: 100vh;
}
.nav-item {
  border-bottom: 1px dotted #074385;
  text-transform: uppercase;
  text-align: left;
}
.nav-link {
  color: #b1c7e0;
}
.row>* {
  padding-right: 0;
  padding-left: 0;
}

.material-icons-outlined {
  bottom: -5px;
  position: relative;
  margin-right: 10px;
}
</style>