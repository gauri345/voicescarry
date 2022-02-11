<template>
  <div aria-hidden="true" aria-labelledby="homepageModal" class="modal fade bd-example-modal-sm" id="homepageModal" role="dialog" tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"> {{ $t('homepage_modal_title') }} </h5>
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <span class="material-icons audio" v-on:click="readPageContent">volume_up</span>
          <p> 
            {{ $t('homepage_modal_text_one') }} 
            <br><br>
            {{ $t('homepage_modal_text_two') }} 
            <br><br>
            {{ $t('homepage_modal_text_three') }} 
            <br><br>
            {{ $t('homepage_modal_text_four') }} 
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button"> {{ $t('button_close') }} </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {textReader} from "@/util/speech";

export default {
  name: 'HomepageModal',
  data() {
    return {
      isReading: false
    }
  },
  methods: {
    readPageContent: function () {
    const textToRead =
        this.$i18n.t('homepage_modal_text_one') +
        this.$i18n.t('homepage_modal_text_two') +
        this.$i18n.t('homepage_modal_text_three') +
        this.$i18n.t('homepage_modal_text_four').replace('!', '. ')
    console.log(this.$i18n.locale);
    textReader(textToRead);
    }
  }
}
</script>

<style scoped>
.modal-title {
  font-weight: bold;
  text-align: left;
  color:black;
  font-size: 24px;
}
.modal-content {
  font-weight: normal;
  text-align: left;
  color: black;
}
.btn {
  font-size:20px;
  font-weight: bold;
}
.close {
  border: none;
  border-radius: 5px;
}
.material-icons.audio {
  cursor: pointer;
  color: #2c3e50;
  margin-top:0.2em;
  margin-bottom: 0.2em;
}

</style>