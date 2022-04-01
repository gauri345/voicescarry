<template>
  <div id="activateUser" aria-hidden="true" aria-labelledby="activateUserLabel" class="modal fade"
       tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 id="activateUserLabel" class="modal-title">Activate User</h5>
          <button aria-label="Close" class="btn-close bg-light" data-bs-dismiss="modal" type="button"></button>
        </div>
        <div class="modal-body bg-secondary">
          <h4>Select roles for the user</h4>
          <div class="list-group ">
            <label class="list-group-item text-light">
              <input class="form-check-input me-1" type="checkbox" value="">
              Admin (will have access to all available features)
            </label>
            <label class="list-group-item text-light">
              <input class="form-check-input me-1" type="checkbox" value="">
              Surveyor (will have access to questions)
            </label>
            <label class="list-group-item text-light">
              <input class="form-check-input me-1" type="checkbox" value="">
              Analyst (Can analyse the result of the data)
            </label>
          </div>
        </div>
        <div class="modal-footer bg-dark">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
          <button class="btn btn-primary" type="button">Activate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActivateUserModal"
}
</script>

<style scoped>

.list-group-item {
  background: transparent;
  text-align: left;
}

</style>