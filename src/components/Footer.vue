<template>
    <nav class="navbar justify-content-center navbar-expand fixed-bottom navbar-dark bg-primary">
            <div class="navbar-nav">
                    <a class="nav-item nav-link">
                      <router-link to="/homepage">
                        <span class= "material-icons">home</span>
                        Home
                      </router-link>
                    </a>
                    <a class="nav-item nav-link">
                      <router-link to="/question/1">
                        <span class= "material-icons">assignment</span>
                        Survey
                      </router-link>
                    </a>
                    <a class="nav-item nav-link">
                      <router-link to="/complaint">
                      <span class= "material-icons">assignment_late</span>
                      Complaint 
                      </router-link>
                    </a>
                    <a class="nav-item nav-link" href="#"><span class= "material-icons">language</span>Language</a>
            </div>
    </nav>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style scoped>
nav {
    background: radial-gradient(122.27% 198.92% at -22.27% -27.38%, #0070BA 0%, #1546A0 100%);
    margin-top: 10px;
}

a {
  display: flex;
  align-items: center;
}

a:visited {
  color:rgba(255, 255, 255, 0.75);
  text-decoration: none;
}
a:link {
  color:rgba(255, 255, 255, 0.75);
  text-decoration: none;
}

</style>
