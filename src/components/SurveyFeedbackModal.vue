<template>
  <div aria-hidden="true" aria-labelledby="SurveyFeedbackModal" class="modal fade bd-example-modal-pm" role="dialog"
      tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Feedback</h5>
          <router-link :to="'/homepage'">
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
          </router-link>
        </div>
        <div class="modal-body">
          <p>Thank you for providing feedback to us!</p>
        </div>
        <div class="modal-footer">
            <router-link :to="'/homepage'">
                <button class="btn btn-secondary" background="" data-bs-dismiss="modal" type="button">Back to homepage</button>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyFeedbackModalModal',
}
</script>

<style scoped>
.modal-title {
  font-weight: bold;
  text-align: left;
  color:black;
  font-size:26px;
}
.modal-content {
  font-weight: bold;
  text-align: left;
  color: black;
}
.btn {
  background: #4EB562;
  border-color: #4EB562;
  font-size:20px;
  font-weight: bold;
}
.close {
  border: none;
  border-radius: 5px;
}

</style>