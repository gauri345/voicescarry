<template>
    <nav class="navbar justify-content-center navbar-expand fixed-bottom navbar-dark bg-primary">
            <div class="navbar-nav">
                    <a class="nav-item nav-link">
                      <router-link to="/homepage">
                        <span class= "material-icons" title="Home">home</span>
                      </router-link>
                    </a>
                    <a class="nav-item nav-link">
                      <router-link to="/question/information">
                        <span class= "material-icons" title="Information">assignment</span>
                      </router-link>
                    </a>
                    <a class="nav-item nav-link">
                      <router-link to="/complaint">
                      <span class= "material-icons" title="Complaint">assignment_late</span>
                      </router-link>
                    </a>
                    <a class="nav-item nav-link" href="#">
                      <div>
                      <LanguageSwitcher />
                      </div>
                    </a>

            </div>
    </nav>
</template>

<script>
import LanguageSwitcher from "@/components/utils/LanguageSwitcher";

export default {
  name: 'Footer',
  components: {
    LanguageSwitcher
  }
}

</script>

<style scoped>
nav {
    margin-top: 10px;
    height: 43px;
    width: 100%;
}

a {
  display: flex;
  align-items: center;
}

a:visited {
  color:rgba(255, 255, 255);
  text-decoration: none;
}
a:link {
  color:rgba(255, 255, 255);
  text-decoration: none;
}
</style>
