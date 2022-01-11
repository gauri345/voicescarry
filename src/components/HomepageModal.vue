<template>
  <div aria-hidden="true" aria-labelledby="homepageModal" class="modal fade bd-example-modal-sm" id="homepageModal" role="dialog"
       tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Information on the project 'wellbeing at work'</h5>
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <p>Info needed</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageModal',
}
</script>

<style scoped>
.modal-title {
  font-weight: bold;
  text-align: left;
  color:black;
}
.modal-content {
  font-weight: normal;
  text-align: left;
  color: black;
}
.btn {
    width: 150px;
    height: 50px;
}
.close {
  border: none;
  border-radius: 5px;
}

</style>