<template>
  <AlertBox/>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start" for="key">Translation Key</label>
    <input v-model="key" class="form-control-color disabled " name="key" type="text"/>
  </div>

  <div class="mb-3 row">
    <label class="col-sm-2 col-form-label d-flex justify-content-start" for="languageCode">Is Active?</label>
    <input v-model="isActive" class="form-control-color" name="languageCode" placeholder="language code"
           type="checkbox" />
  </div>

  <div class="d-flex justify-content-start border-top border-1 mt-1">
    <button class="btn btn-success mt-3" type="button">Save</button>&nbsp;&nbsp;
    <button class="btn btn-danger mt-3" @click="$router.push('/translation')">Cancel</button>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "TranslationForm",
  components: {
    AlertBox
  },
  computed: {
    ...mapGetters({
      translation: 'translationForm/translations'
    }),
    key: {
      get() {
        console.log(this.$store.state.translationForm.translation.key)
        return this.$store.state.translationForm.translation.key
      },
      set(value) {
        this.$store.commit('translationForm/UPDATE_TRANSLATION_KEY', value)
      }
    },
    isActive: {
      get() {
        return this.$store.state.translationForm.translation.isActive
      },
      set(value) {
        this.$store.commit('translationForm/UPDATE_STATUS', value)
      }
    },
  },
  methods: {
    ...mapActions({
      fetchTranslationById: 'translationForm/fetchTranslationById'
    }),
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchTranslationById(this.$route.params.id);
  },
}
</script>

<style scoped>
.form-control-color {
  width: 25rem;
}
</style>