<template>
  <form @submit.prevent="handleSubmit">
    <label>Factory code:</label>
    <input type="code" v-model="code" required>
    <div v-if="codeError" class="error">{{ codeError }}</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      codeError: null,
    }
  },
  methods: {
    handleSubmit() {
      // validate password
      this.codeError = this.code.length > 5 ?
        '' : 'Password must be at least X characters long/Wrong password'
      if (!this.codeError) {
        // make request to database to save user
        console.log('code: ', this.code)
      }
    }
  }
}
</script>

<style>
  form {
    max-width: 420px;
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
    width: 234px;
    height: 39px;
    left: 15px;
    top: 35px;

    /* White */
    background: #FFFFFF;
    border: 1px solid rgba(36, 54, 86, 0.3);
    box-sizing: border-box;
    border-radius: 20px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>