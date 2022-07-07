<template>
  <router-link class="btn btn-dark" style="float: right;" to="/factory/form/id=">Add</router-link>
  <AlertBox/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Number</th>
      <th scope="col">Factory Nme</th>
      <th scope="col">Code</th>
      <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="(factory, index) in allFactories" v-bind:key="index">
      <th scope="col">{{ index + 1 }}</th>
      <th scope="col">{{ factory.name }}</th>
      <th scope="col">{{ factory.code }}</th>
      <th scope="col">
        <router-link :to="`/factory/form/id=${factory._id}`" class="material-icons text-decoration-none text-danger" title="Edit Factory">edit</router-link>
      </th>
    </tr>
    </tbody>
  </table>

</template>

<script>
import AlertBox from "@/components/util/AlertBox";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "FactoryList",
  components: {
    AlertBox
  },
  methods: {
    ...mapActions(['fetchAllFactories']),
  },
  computed: {
    ...mapGetters(['allFactories'])
  },
  mounted() {
    this.fetchAllFactories();
  }
}
</script>

<style scoped>

</style>