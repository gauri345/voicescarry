<template>
  <form>
    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label d-flex justify-content-start" for="factoryName">Factory Name</label>
      <input name="factoryName" v-model="factoryName" class="form-control-color" placeholder="Factory Name" type="text">
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label d-flex justify-content-start" for="factoryCode">Factory Code</label>
      <input name="factoryCode" v-model="factoryCode" class="form-control-color" placeholder="Factory Code" type="text">
    </div>

    <div class="d-flex justify-content-start border-top border-1 mt-1">
      <button class="btn btn-success mt-3" type="submit">Save</button>&nbsp;&nbsp;
      <button class="btn btn-danger mt-3" @click="$router.push('/factory')">Cancel</button>
    </div>
  </form>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FactoryForm",
  computed: {
    ...mapGetters(['factoryCode', 'factoryName']),
  },
  methods: {
    ...mapActions(['fetchFactoryById']),
  },
  mounted() {
    if (this.$route.params.id) {
      this.fetchFactoryById(this.$route.params.id);
    }
  },
}
</script>

<style scoped>
.form-control-color {
  width: 25rem;
}
</style>