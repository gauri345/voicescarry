<template>
  <div aria-hidden="true" aria-labelledby="additionalInformationModal" class="modal fade bd-example-modal-sm" role="dialog"
       tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ questionContent }}</h5>
          <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ additionalInformation }}</p>
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
  name: 'InformationModal',
  props: {
    questionContent: String,
    additionalInformation: String
  }
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
.close {
  border: none;
  border-radius: 5px;
}
</style>
