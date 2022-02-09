<template>
  <div aria-hidden="true" aria-labelledby="homepageModal" class="modal fade bd-example-modal-sm" id="homepageModal" role="dialog"
       tabindex="-1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Information on the project 'wellbeing at work'</h5>
            <button aria-label="Close" class="close" data-bs-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <p>We want to understand how employees are doing at work. 
            We want to provide you with the opportunity to let us know how you are feel when you are working (Do you feel safe? comfortable?). 
            <br><br>This is important to research, because when we feel uncomfortable at work, this can have a big impact on our overall lives and those around us. 
            Everyone deserves a respectful workplace. 
            <br><br>This survey will help create a baseline understanding of how employees in the textile industry feel and if they are doing well. 
            The data will help us understand the larger picture regarding the current needs of employees, current areas in which employers are doing well, and points where they can improve. 
            We at the University of Mannheim can then provide general positive feedback and constructive criticism through scientific research. 
            <br><br>This is why we need your input. Thank you for participating!</p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal" type="button">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageModal',
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

</style>