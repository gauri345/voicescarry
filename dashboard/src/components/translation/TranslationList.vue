<template>
  <AlertBox/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Translation Key</th>
      <th scope="col">Languages</th>
      <th scope="col">Excerpt (in English)</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="(translation, index) in translations" v-bind:key="index">
      <th scope="col">{{ translation.key }}</th>
      <th scope="col">{{ extractLanguages(translation.items) }}</th>
      <th scope="col">{{ extractEnglishExcerpt(translation.items) }}</th>
      <th scope="col">
        <span :class="createStatusIconClasses(translation)"
              title="Click to deactivate Translation">{{ translation.isActive ? "check_circle" : "cancel" }}</span>
      </th>
      <th scope="col">
        <a :data-bs-target="`#viewTranslations_${translation._id}`" data-bs-toggle="modal" href="javascript:void(0);">
          <span class="material-icons-outlined text-info" title="Preview Translation">preview</span>
        </a>
        <router-link :to="`/translation/form/id=${translation._id}`"
                     class="material-icons text-decoration-none text-info" title="Edit Translations">edit
        </router-link>

        <!-- Modal -->
        <div :id="`viewTranslations_${translation._id}`" aria-hidden="true" class="modal fade" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header bg-dark">
                <h5>Translations for key <b class="text-white">[ {{ translation.key }} ]</b></h5>
                <button aria-label="Close" class="close bg-danger border-0 text-white" data-dismiss="modal"
                        type="button">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <table class="table">
                  <thead>
                  <tr>
                    <th scope="col">Language</th>
                    <th scope="col">Text</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(translationDetail, detailsIndex) in translation.items" v-bind:key="detailsIndex">
                    <th scope="row">{{ translationDetail.lang }}</th>
                    <td>{{ translationDetail.content }}</td>
                  </tr>
                  </tbody>
                </table>
                <div class="modal-body text-danger">

                </div>
                <div class="modal-footer">
                  <button class="btn btn-danger" data-bs-dismiss="modal" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </th>
    </tr>
    </tbody>
  </table>
</template>

<script>
import AlertBox from "@/components/util/AlertBox";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "TranslationList",
  components: {
    AlertBox
  },
  methods: {
    ...mapActions({
      fetchAllTranslations: 'translationList/fetchAllTranslations'
    }),

    createStatusIconClasses(translation) {
      if (translation.isActive) {
        return {
          "material-icons-outlined": true,
          "text-success": true
        }
      } else {
        return {
          "material-icons-outlined": true,
          "text-danger": true
        }
      }
    },

    extractLanguages(items) {
      return items.reduce((a, b) => a + ["", ", "][+!!a.length] + b.lang, "");
    },

    extractEnglishExcerpt(translationItems) {
      const englishItem = translationItems.filter(translationItem => translationItem.lang === 'np');

      if (englishItem.length >= 1) {
        return englishItem[0].content.substr(0, 50);
      }

      return "No Except available.";
    }
  },
  computed: {
    ...mapGetters({
      translations: 'translationList/translations'
    })
  },
  mounted() {
    this.$store.dispatch('hideAlert');
    this.fetchAllTranslations();
  }
}
</script>

<style scoped>

</style>