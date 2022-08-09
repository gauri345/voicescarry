<template>
  <AlertBox/>
  <table class="table-borderless text-left">
    <tr>
      <th>Factory:</th>
      <td>
        <select id="factoryCode" class="form-select form-select" required>
          <option>Select a Factory</option>
          <option>Vaude</option>
        </select>
      </td>
    </tr>
    <tr>
      <th>Questions:</th>
      <td>
        <ul class="list-group">
          <li class="list-group-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">An item</li>
          <li class="list-group-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">A second item</li>
          <li class="list-group-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">A third item</li>
          <li class="list-group-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">A fourth item</li>
          <li class="list-group-item"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">And a fifth one</li>
        </ul>
      </td>
    </tr>
  </table>

  <div class="d-flex justify-content-start border-top border-1 mt-1">
    <button class="btn btn-success mt-3" type="button">Save</button>&nbsp;&nbsp;
    <button class="btn btn-danger mt-3" @click="$router.push('/survey')">Cancel</button>
  </div>

</template>

<script>
import AlertBox from "@/components/util/AlertBox";

export default {
  name: "SurveyForm",
  components: {
    AlertBox
  },
}
</script>

<style scoped>
.form-control-color {
  width: 25rem;
}
</style>