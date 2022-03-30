<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 ">

        <ComponentHeader text="Questions"/>

        <div class="card-body form-body">

          <div class="row">

            <div class="col-6 text-lg-start">
              <label class="col-sm-3 col-form-label" for="question-number">Question number:</label>
              <div class="col-sm-10">
                <input id="question-number" class="form-control" placeholder="select number" type="number">
              </div>
            </div>

            <div class="col-6 text-lg-start">
              <label class="col-sm-3 col-form-label" for="question-number">Question type:</label>
              <select aria-label="Default select example" class="form-select">
                <option selected>Open this select menu</option>
                <option value="1">scale</option>
                <option value="2">yes/no</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">

          <div class="row g-4 align-items-center">

            <div class="col-auto">
              <div class="question-title-label" for="question-title">Question Title:</div>
            </div>

            <div class="col-auto">
              <input id="question-title" class="form-control" placeholder="select number" type="text"/>
            </div>

            <div class="col-auto ">
              <select aria-label="Default select example" class="form-select" >
                <option v-for="(language, index) in languages " :key="index" :value="language.value">
                  {{ language.text }}
                </option>
              </select>
            </div>

            <div class="col-auto">
              <a href="#" @click="addQuestionTitle"> <span class="material-icons-outlined">add_circle_outline</span></a>
              <a href="#"> <span class="material-icons-outlined">delete</span></a>

            </div>
          </div>


        </div>

      </main>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu";
import HeaderMenu from "@/components/HeaderMenu";
import ComponentHeader from "@/components/ComponentHeader";

export default {
  name: "QuestionsComponent",
  components: {
    ComponentHeader,
    SidebarMenu, HeaderMenu
  },
  data() {
    return {
      questionTitles: [
        {},
        {},


      ],
      languages: [
        {
          text: 'Select language',
          value: ''
        },
        {
          text: 'English',
          value: 'en'
        },
        {
          text: 'Vietnamese',
          value: 'vi'
        }
      ],
    }
  },
  methods: {
    addQuestionTitle(event) {
      event.preventDefault();

      console.log(this.questionTitles);
    },
  }
}
</script>

<style scoped>

.form-body {
  background: #282d32;
}

</style>