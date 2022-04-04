<template>
  <div class="card">
    <div class="card-body bg-dark">
      <div class="row">
        <div class="uk-flag">
          <img :src="require('../../assets/uk.svg')" alt="england flag" class="rounded img-thumbnail bg-dark border-0"/>
        </div>
        <div class="vi-flag">
          <img :src="require('../../assets/Vietnam.svg')" alt="england flag"
               class="rounded  img-thumbnail bg-dark border-0"/>
        </div>
      </div>
      <router-link class="btn btn-outline-secondary float-end" to="/language/form">Add new language</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageList"
}
</script>

<style scoped>
.vi-flag {
  max-width: 30%;
  height: 20%;
}
.uk-flag {
  max-width: 25%;
}
</style>