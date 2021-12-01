<template>
  <section class="persona-container">
    <div class="center">
      <div class="image-wrapper">
        <img alt="Persona" src="../../assets/Woman.png"/>
      </div>
      <div class="speech-wrapper">
        <SpeechBubble :description=" $t('speechBubbleName') "/>
        <SpeechBubble :description=" $t('speechBubbleQR') "/>
      </div>
    </div>
  </section>

  <section class="pageentry">
    <form @submit.prevent="handleSubmit">
      <label>{{$t('labelFactoryCode')}}</label>
      <input v-model="code" required type="code">
      <div v-if="codeError" class="error">{{ codeError }}</div>
      <div class="submit">
        <router-link to="/homepage">
          <GeneralButton :text=" $t('generalButtonStartSurvey')"/>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
import GeneralButton from '../GeneralButton.vue'
import SpeechBubble from '../landingpage/SpeechBubble.vue'

export default {
  data() {
    return {
      code: '',
      codeError: null,
    }
  },
  components: {
    GeneralButton,
    SpeechBubble
  },
  methods: {
    handleSubmit() {
      // validate factory code
      this.codeError = this.code.length > 5 ?
          '' : 'The factory code is numeric and has to be 6 characters long!'
      if (!this.codeError) {
        // make request to database to save user
        console.log('code: ', this.code)
      }
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

form {
  width: 80%;
  margin-top: 2%;
  background: white;
  text-align: left;
  display: inline-block;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  font-size: 0.6em;
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
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  width: 60%;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>