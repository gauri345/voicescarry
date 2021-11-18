<template>
  <section class="persona" style="height:400px">
    <img alt="Persona" src="../../assets/Woman.png" style="float: left" />
  
    <SpeechBubble description="Hi! My name is..."/>
    <SpeechBubble description="I will guide you through the survey."/>
    <SpeechBubble description="To enter the survey, please type your factory code or access via QR code."/>
    <SpeechBubble description="Factory code / QR code can be found in ...."/>
  
  </section>

  <section class="pageentry">
    <form @submit.prevent="handleSubmit">
      <label>Factory code:</label>
      <input type="code" v-model="code" required>
      <div v-if="codeError" class="error">{{ codeError }}</div>
      <div class="submit">
        <router-link to="/homepage">
        <GeneralButton text="Enter the survey"/>
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

<style>
img {
  max-height: 400px;
}
form {
    width:auto;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
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

    /* White */
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
.persona {
  background-image: url('../../assets/Background.png');
}
</style>