<template>
  <div aria-hidden="true" aria-labelledby="additionalInformationModal" class="modal fade bd-example-modal-pm" role="dialog"
       tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thank you for participating in the survey!</h5>
          <router-link :to="'/homepage'">
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
          </router-link>
        </div>
        <div class="modal-body">
          <p>What is the purpose of the survey?</p>
          <p>What are we doing with the data?</p>
          <p>Do we store the data?</p>
        </div>
        <div class="modal-footer">
            <router-link :to="'/homepage'">
                <button class="btn btn-secondary" background="" data-bs-dismiss="modal" type="button">Finish the survey</button>
            </router-link>
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
.btn {
    background: #4EB562;
    border-color: #4EB562;
}
.close {
  border: none;
  border-radius: 5px;
}

</style>