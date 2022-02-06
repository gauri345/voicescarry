<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
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
                  <p>Do we store_old the data?</p>
                </div>
                <div class="modal-footer">
                  <router-link :to="'/homepage'">
                    <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Finish the survey</button>
                  </router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </transition>
  </div>

  <SurveyButton class="submit" text="Submit" @click="submitSurvey" />

</template>

<script>
import SurveyButton from "@/components/survey/SurveyButton";

export default {
  name: 'FinishModal',
  components: {
    SurveyButton
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    submitSurvey() {

      console.log("submitting");

      this.showModal = true;
    }
  }
}
</script>

<style scoped>
.modal-title {
  font-weight: bold;
  text-align: left;
  color: black;
}

.modal-content {
  font-weight: normal;
  text-align: left;
  color: black;
}

.btn {
  background: #4EB562;
  border-color: #4EB562;
  width: 150px;
  height: 50px;
}

.close {
  border: none;
  border-radius: 5px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

</style>