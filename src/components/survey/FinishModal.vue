<template>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Thank you for participating in the survey!</h5>
                <router-link :to="'/question/ending'">
                  <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </router-link>
              </div>
              <div class="modal-body">
                <p>What is the purpose of this survey? <br><br>
                  Answer: We want to understand how employees are doing at work.
                  When we feel uncomfortable at work, this can have a big impact on our overall lives and those around
                  us.
                  This survey provides us with a baseline understanding of how employees feel and if they are doing
                  well.
                  The data will help us understand the larger picture and provide general positive feedback and
                  constructive criticism to employers.
                  We also want to better understand differences in wellbeing at work across different countries.
                  <br><br>
                  What are we doing with the data?
                  <br><br>
                  Answer: We are analysing the data for larger trends in wellbeing in the textile industry.
                  None of the data can be traced to any individual, so your answers are completely confidential.
                  Answers from employees working in different locations will be compared and scientifically analysed.
                  After data collection, we hope to publish results in the near future that we can share with you here.
                  We also take your feedback into consideration in updating this survey and website.
                  <br><br>
                  Do we store the data?
                  <br><br>
                  Answer: The University of Mannheim does store the data, but all answers are anonymous.</p>
              </div>
              <div class="modal-footer">
                <router-link :to="'/question/ending'">
                  <button background="" class="btn btn-secondary" data-bs-dismiss="modal" type="button">Finish the
                    survey
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <SurveyButton class="submit" text="Submit" @click="submitSurvey"/>

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
    hideModal() {
      this.showModal = false;
    },
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
  font-size: 26px;
}

.modal-content {
  font-weight: bold;
  text-align: left;
  color: black;
}

.btn {
  background: #4EB562;
  border-color: #4EB562;
  font-size: 20px;
  font-weight: bold;
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