<template>
  <component-header text="Feedbacks"/>
  <div v-if="feedbackDeleteInfo" class="alert alert-success" role="alert">
    Feedback successfully deleted
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div v-if="feedbackDeleteError" class="alert alert-danger" role="alert">
    Failed deleting the feedback.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div v-if="serverErrorDisplayed" class="alert alert-danger" role="alert">
    Problem connecting to server. Please try again.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
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
      <td>{{ feedback.surveyCode }}</td>
      <td class="roles-td">{{ feedback.content }}</td>
      <td>
        <a href="javascript:void(0);">
          <span class="material-icons-outlined text-danger" title="Delete Feedback"
                @click="handleDeleteFeedback(feedback._id)">delete</span>
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
    ...mapActions(['fetchFeedback', 'deleteFeedback']),
    handleDeleteFeedback(feedbackId) {
      this.deleteFeedback(feedbackId)
      console.log(feedbackId);
    }
  },
  mounted() {
    this.fetchFeedback();
  },

  computed: {
    ...mapGetters(['allFeedbacks', 'feedbackDeleteError', 'feedbackDeleteInfo', 'serverErrorDisplayed'])
  }
}
</script>

<style scoped>

</style>