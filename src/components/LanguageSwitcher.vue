<template>
  <div>
    <a href="#" class="btn btn-outline-info lang-button" @click="changeLanguage">EN</a>
    |
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

<style>
.lang-button {
  border: none;
  padding: 0;
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 90%;
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
</style>
