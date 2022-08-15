<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar bg-dark collapse show">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a aria-current="page" class="nav-link text-info active" href="#">
            <span class="material-icons-outlined">home</span>Home</a>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-info" to="/users">
            <span class="material-icons-outlined">people_outline</span> Users
          </router-link>
        </li>

        <li class="nav-item">
          <a aria-controls="questionsCollapse" aria-expanded="false" class="nav-link text-info" data-bs-toggle="collapse"
             href="#questionsCollapse" role="button">
            <span class="material-icons-outlined">quiz</span>Questions
          </a>

          <div id="questionsCollapse" class="collapse">
            <div class="card card-body">
              <router-link class="nav-link text-info" to="/question-type">
                <span class="material-icons-outlined">rule</span>Question Types
              </router-link>
              <router-link class="nav-link text-info" to="/question">
                <span class="material-icons-outlined">question_mark</span>Questions
              </router-link>
            </div>
          </div>


        </li>
        <li class="nav-item">
          <router-link class="nav-link text-info" to="/surveys">
            <span class="material-icons-outlined">poll</span>Surveys
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-info" to="/feedbacks">
            <span class="material-icons-outlined">reviews</span>Feedbacks
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-info" to="/factory">
            <span class="material-icons-outlined">factory</span>Factory
          </router-link>
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
  height: 100vh;
}

.nav-item {
  text-transform: uppercase;
  text-align: left;
}

.row > * {
  padding-right: 0;
  padding-left: 0;
}

.material-icons-outlined {
  bottom: -5px;
  position: relative;
  margin-right: 10px;
}
</style>