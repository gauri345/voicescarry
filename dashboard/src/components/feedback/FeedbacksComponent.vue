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
    <tr>
      <td>xxx</td>
      <td>yyyy</td>
      <td class="roles-td">cccc</td>
      <td>
        <a href="javascript:void(0);">
          <span class="material-icons-outlined text-danger"
                title="Delete User">delete</span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";

export default {
  name: "FeedbacksComponent",
  components: {
    ComponentHeader
  }
}
</script>

<style scoped>

</style>