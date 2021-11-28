<template>
 <div class="surveyheader">
      <HeaderSurvey :question-category="currentQuestion.questionCategory"
                    :question-icon="currentQuestion.questionIcon">
      </HeaderSurvey>
</div>

  <form @submit.prevent="handleSubmit">

    <label>Gender</label>
    <select v-model="gender">
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>

    <label>Age</label>
    <select v-model="age">
      <option value="twentyoryounger">20 or younger</option>
      <option value="twentyonethirty">21 - 30</option>
      <option value="thirtyonefourty">31 - 40</option>
      <option value="fourtyonefifty">41 - 50</option>
      <option value="fiftyonesixty">51 - 60</option>
      <option value="sixtyoneseventy">61 - 70</option>
      <option value="seventyorolder">71 or older</option>
    </select>

    <label>Position</label>
    <select v-model="position">
      <option value="worker">Worker</option>
      <option value="manager">Manager</option>
    </select>

    <div class="submit">
        <router-link to="/homepage">
            <GeneralButton text="Submit the Questionnaire"/>
        </router-link>
    </div>
  </form>
<Footer/>
</template>

<script>
import GeneralButton from "@/components/GeneralButton";
import Footer from "@/components/Footer";
import HeaderSurvey from "@/components/question/HeaderSurvey";
import store from "@/store"

export default {

    components: {
        GeneralButton,
        Footer,
        HeaderSurvey
    },
  data() {
    return {
      gender: 'female',
      age: 'twentyoryounger',
      position: 'worker',
      currentQuestion: store.state.currentQuestion,
      previousQuestion: store.state.previousQuestion,
      questionCategory: store.state.questionCategory,
      questionIcon: store.state.questionIcon
    }
  },
  methods: {
    handleSubmit() {
        console.log('gender: ', this.gender)
        console.log('age: ', this.age)
        console.log('position: ', this.position)
      }
    }
}
</script>

<style scoped>
  form {
    max-width: 100%;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    font-size: 18px;
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
  select {
    display: block;
    height: 50px;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  .submit {
    text-align: center;
  }
  .surveyheader {
  overflow:hidden;
  display: block;
}
</style>