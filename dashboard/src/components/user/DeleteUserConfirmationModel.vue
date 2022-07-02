<template>
  <div :id="'deleteUser' + userId" aria-hidden="true" aria-labelledby="deleteModalLabel" class="modal fade"
       tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 id="exampleModalLabel" class="modal-title">Confirmation</h5>
          <button aria-label="Close" class="btn-close bg-light" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body bg-secondary">
          Do you want to permanently delete.
        </div>
        <div class="modal-footer bg-dark">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button" @click="deleteUser(userId)">Yes
          </button>
          <button class="btn btn-primary" data-bs-dismiss="modal" type="button">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "DeleteUserConfirmationModel",
  props: {
    userId: String
  },
  methods: {
    ...mapActions(['deleteUser'])
  }
}
</script>

<style scoped>

</style>