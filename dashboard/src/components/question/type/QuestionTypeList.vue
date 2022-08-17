<template>
  <router-link class="btn btn-dark" style="float: right;" to="/question-type/form/id=">Add</router-link>
  <AlertBox/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Number</th>
      <th scope="col">Type</th>
      <th scope="col">Answer Values</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr>
      <td>1</td>
      <td>sdfsf</td>
      <td>sdfdsf</td>
      <td>
        <router-link :to="'/question/form/id=1'" data-bs-toggle="tooltip" title="Edit Question">
          <span class="material-icons text-info">edit</span>
        </router-link>
        <a data-bs-toggle="tooltip" href="javascript:void(0);" title="Delete question">
          <span class="material-icons text-danger">delete</span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>

</template>

<script>
import AlertBox from "@/modules/util/alert-box";

export default {
  name: "QuestionTypeList",
  components: {
    AlertBox
  }
}
</script>

<style scoped>

</style>