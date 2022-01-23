<template>
  <div class="dropup">
    <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="material-icons language-icon">language</span>
    </button>

    <ul class="dropdown-menu">
     <li><a href="#" class="lang-button" @click="changeLanguage">EN</a></li>
     <li> <a href="#" class="lang-button" @click="changeLanguage">VI&nbsp;</a></li>
    </ul>

  </div>
</template>
<script>


export default {
  name: 'LanguageSwitcher',
  components: {},
  methods: {
    changeLanguage(event) {
      const locale = event.target.innerHTML.toLocaleLowerCase();
      this.$i18n.locale = locale;
      localStorage.setItem('language', locale)
    }
  }
};
</script>

<style scoped>
.dropup .dropdown-toggle::after {
  margin-bottom: 1px;
  font-size: 25px;
}
.dropup .dropdown-menu{
  top: auto;
  bottom: 100%;
  margin-bottom: 0.4rem;

}

.dropup button {
  background: white;
  border: 1px solid #bbc3d1;
  color: #114EA5;
}

.dropdown-toggle {
  background: transparent;
  border-radius: 5px;
}

.dropdown-menu {
  margin: 0;
  padding: 0;
  max-width: 100%;
  min-width: unset;
}

.dropdown-menu li{
  border-bottom: 2px solid #d6d6d7;
}

.lang-button {
  padding: 10px;
  text-decoration: none;
}

.lang-button:hover {
  text-decoration: none;
}

.language-icon {
  font-size: 100%;
  position: absolute;
  left: 8%;
  top: 20%;
}

.dropup .dropdown-toggle::after {
  margin-bottom: -5px;
  font-size: 25px;
  margin-left: 16px;
}


</style>
