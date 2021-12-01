<template>
  <div>
    &nbsp;
    <a href="#" class="btn btn-outline-info lang-button">EN</a>
    |
    <a class="btn btn-outline-info lang-button">VI</a>

    <!--<select v-model="$i18n.locale" @change="changeLanguage">
      <option value="vi" :selected="$i18n.locale === 'vi'">🇻🇳</option>
      <option value="en" :selected="$i18n.locale === 'en'">en</option>
    </select> -->
  </div>
</template>
<script>


export default {
  name: 'LanguageSwitcher',
  components: {},
  methods: {
    changeLanguage(event) {
      localStorage.setItem('language', event.target.value)
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
