<template>
  <div class="card bg-dark">
    <div class="card-body card-body-container">
        <div class="add-question row">
          <div class="col-auto">
            <label class="col-form-label"> Question title:</label>
          </div>
            <div v-for="(questionField, index) in addQuestionField" :key="index" class="row m-1">
              <div class="col-1"></div>
              <div class="col-6">
                <input v-model="questionField.question" :name="`addQuestionFiled[${index}][question]`"
                       class="form-control" placeholder="Type a question" type="text">
              </div>

              <div class="col-2">
                <select v-model="questionField.language" :name="`addQuestionFiled[${index}][language]`"
                        aria-label="Default select example" class="form-select form-control">
                  <option v-for="(language, index) in languages " :key="index" :value="language.value">
                    {{ language.text }}
                  </option>
                </select>
              </div>
              <div class="col-1">
                <a href="javascript:void(0);" @click="DeleteQuestion(index)"> <span class="material-icons-outlined">delete</span></a>
              </div>
            </div>
          <div class="col-1">
            <div class="col-auto">
              <a href="javascript:void(0);" @click="AddQuestion"> <span class="material-icons-outlined">add_circle_outline</span></a>
            </div>
          </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  data() {
    return {
      addQuestionField: [
        {
          question: '',
          language: '',

        }
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

    AddQuestion() {

      this.addQuestionField.push({
        question: '',
        language: '',

      })
    },
    DeleteQuestion(index){
      this.addQuestionField.splice(index, 1);

    }

  }

}
</script>

<style scoped>
.btn {
margin-right: 10px;
}
</style>

