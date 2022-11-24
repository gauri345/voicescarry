<template>
  <div class="dropup">
    <button aria-expanded="false" class="dropdown-toggle" data-bs-toggle="dropdown" type="button">
      <span class="current-language-text">{{ currentLanguage }}</span>
    </button>
    <ul class="dropdown-menu">
      <li v-for="language in languageList">
        <a class="lang-button" href="#" @click="handleLanguageChange">{{ language.code }}</a>
      </li>
    </ul>
  </div>
</template>
<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: 'LanguageSwitcher',
  components: {},
  methods: {
    ...mapActions({
      fetchAllLanguages: 'languageSwitcher/fetchAllLanguages',
      changeLanguage: 'languageSwitcher/changeLanguage'
    }),
    handleLanguageChange(event) {
      const locale = event.target.innerHTML.toLocaleLowerCase();
      this.$i18n.locale = locale;
      this.changeLanguage(locale);
    }
  },
  computed: {
    ...mapGetters({
      languageList: 'languageSwitcher/languageList',
      currentLanguage: 'languageSwitcher/currentLanguage'
    })
  },
  mounted() {
    this.fetchAllLanguages();
  }
};
</script>

<style scoped>
.dropup .dropdown-toggle::after {
  margin-bottom: 1px;
  font-size: 25px;
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 0.4rem;

}

button {
  border: none;
  color: #fff;
}

.dropdown-toggle {
  border: 1px solid #7a8589;
  background: transparent;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding: 2px 5px 2px 5px;
}

.dropdown-menu {
  margin: 0;
  padding: 0;
  min-width: 20px;
}

.dropdown-menu li {
  border-bottom: 2px solid #d6d6d7;
}

.lang-button {
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
}

.lang-button:hover {
  text-decoration: none;
}

.current-language-text {
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
}
</style>
