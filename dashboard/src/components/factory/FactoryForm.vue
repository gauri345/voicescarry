<template>
  <button class="btn btn-success" type="submit">Save</button>&nbsp;&nbsp;
  <button class="btn btn-danger" @click="$router.push('/factory')">Cancel</button>
</template>

<script>
export default {
  name: "FactoryForm"
}
</script>

<style scoped>

</style>