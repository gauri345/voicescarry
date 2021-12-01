<template>
  <div class="locale-changer">
    <select v-model="$i18n.locale" @change="changeLanguage">
      <option value="vi" :selected="$i18n.locale === 'vi'">🇻🇳</option>
      <option value="en" :selected="$i18n.locale === 'en'">🇬🇧</option>
    </select>
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