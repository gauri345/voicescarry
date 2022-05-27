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
          <h5 class="h5">Activated user can perform the following</h5>
          <ul class="list-group list-group-flush bg-dark">
            <li class="list-group-item text-info">An item</li>
            <li class="list-group-item text-info">A second item</li>
            <li class="list-group-item text-info">A third item</li>
            <li class="list-group-item text-info">A fourth item</li>
            <li class="list-group-item text-info">And a fifth one</li>
          </ul>


          <div class="list-group ">
            <div class="list-group-item">
              <h5 class="h6 text-info"></h5>
            </div>
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