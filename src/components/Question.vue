<template>
  <!--- Header must be included here -->
  <div class="header">
    <h1>This is header</h1>
  </div>
  <!-- Question Container -->
  <div class="question-container">
   <Description></Description>
    <Content></Content>
    <!-- The button to navigate between questions goes here -->
    <div class="progress-buttons">
      <div class="button-next">
        <Button></Button>
      </div>
    </div>

    <!-- The progress bar goes here -->
    <div class="progress">
      <Progress></Progress>
    </div>
  </div>
</template>

<script>
import Progress from "@/components/Progress";
import Button from "@/components/Button";
import Description from "@/components/question/Description";
import Content from "@/components/question/Content";

export default {
  name: 'Question',
  components: {
    Content,
    Description,
    Button,
    Progress
  },
  props: {
    questionNumber: String,
    questionTitle: String
  }
}
</script>

<style>
.question-container {
  min-height: 300px;
  border: 1px solid #2c3e50;
}


/** Some temporary Header Style. Please remove this once the header component is completed **/
.header {
  border: 1px solid #2c3e50;
  min-height: 100px;
  margin-bottom: 10px;
}
</style>