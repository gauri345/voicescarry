<template>
  <section class="persona-container">
    <div class="center">
      <div class="image-wrapper">
        <img alt="Persona" src="../../assets/fullbody-persona.png"/>
      </div>
      <div class="speech-wrapper">
        <SpeechBubble :description=" $t('landing_intro') "/>
        <SpeechBubble :description=" $t('landing_qr') "/>
      </div>
    </div>
  </section>

  <section class="pageentry">
    <div class="form" @submit="handleSubmit">
      <label>{{$t('label_factory_code')}}</label>
      <input v-model="factoryCode" required type="text" @click="handleInputClick" autofocus>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      <div class="submit">
        <Button :text=" $t('button_landingpage')" @btnClick="handleSubmit" style="align-items: stretch"/>
      </div>
    </div>
  </section>

</template>

<script>
import Button from '@/components/utils/Button'
import SpeechBubble from '../landingpage/SpeechBubble'
import {mapActions, mapGetters} from "vuex";

export default {
  name:"LandingContent",
  components: {
    Button,
    SpeechBubble
  },
  methods: {
    ...mapActions(["submitForm", "clearErrorMessage"]),
    handleSubmit() {
      this.submitForm();
    },
    handleInputClick() {
      this.clearErrorMessage();
    }
  },
  computed: {
    ...mapGetters(['getErrorMessage']),
    errorMessage: function () {
      return this.getErrorMessage;
    },
    factoryCode: {
      get() {
        return this.$store.state.factoryCode;
      },
      set(value) {
        this.$store.commit('UPDATE_CODE', value);
      },
    }
  }
}
</script>

<style scoped>
.persona-container {
  width: 100%;
  max-height: 320px;
  margin-top: 2%;
  display: inline-block;
  overflow: hidden;
  background-image: url('../../assets/Background.png');
}

.center {
  display: flex;
}

.image-wrapper {
  width: 50%;
  height: 100%;
}

.speech-wrapper {
  width: 50%;
  height: 100%;
}

img {
  max-height: 320px;
}

.form {
  width: 80%;
  margin-top: 2%;
  background: white;
  text-align: left;
  display: inline-block;
  border-radius: 10px;
}

label {
  color: black;
  display: inline-block;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  height: 43px;
  font-size: 12px;
  left: 15px;
  top: 35px;
  background: #FFFFFF;
  border: 1px solid rgba(36, 54, 86, 0.3);
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 1em;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>