<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse show">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a aria-current="page" class="nav-link active" href="#">
            <span class= "material-icons-outlined">home</span>Home</a>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/user-list">
            <span class="material-icons-outlined">people_outline</span>  Users
          </router-link>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="material-icons-outlined">quiz</span>Questions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="material-icons-outlined">poll</span>Surveys</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="material-icons-outlined">reviews</span>Feedbacks</a>
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