<template>
  <component-header text="Feedbacks"/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Factory Code</th>
      <th scope="col">Survey Code</th>
      <th scope="col">Feedback Message</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="feedback in allFeedbacks" :key="feedback.id">
      <td>{{ feedback.factoryCode }}</td>
      <td>{{feedback.surveyCode}}</td>
      <td class="roles-td">{{feedback.content}}</td>
      <td>
        <a href="javascript:void(0);">
          <span class="material-icons-outlined text-danger" title="Delete User">delete</span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "FeedbacksComponent",
  components: {
    ComponentHeader
  },
  methods: {
    ...mapActions(['fetchFeedback'])
  },
  mounted() {
    console.log('component mounted')
    this.fetchFeedback();
  },

  computed: {
    ...mapGetters(['allFeedbacks'])
  }
}
</script>

<style scoped>

</style>