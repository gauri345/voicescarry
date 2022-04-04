<template>
  <div class="modal fade" id="deleteUser" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
          <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-secondary">
          Do you want to permanently delete.
        </div>
        <div class="modal-footer bg-dark">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Yes</button>
          <button type="button" class="btn btn-primary">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteUserConfirmationModel"
}
</script>

<style scoped>

</style>