<template>
  <div>
    <span class="material-icons">language</span>
    <a href="#" class="btn btn-outline-info lang-button lang-button-first" @click="changeLanguage">EN</a>
    <a class="btn btn-outline-info lang-button" @click="changeLanguage">VI</a>
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
.lang-button {
  border: none;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255);
  font-size: 90%;
  font-weight: bold;
}

.btn-outline-info {
  padding: 0;
  margin: 0;
}

.btn {
  padding: 0;
}

.btn-outline-info:hover {
  background: none;
}

.material-icons {
  vertical-align: bottom;
  padding-right: 5px;
  color: #FFFFFF;
}

.lang-button-first{
  border-right: 1px solid #FFFFFF;
  border-radius: 0;
  padding-right: 7px;
  margin-right: 7px;
}

</style>
