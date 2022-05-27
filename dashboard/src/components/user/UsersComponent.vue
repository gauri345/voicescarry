<template>
  <ComponentHeader text="Users"/>
  <table class="table bg-dark text-info text-lg-start">
    <thead class="table-bordered">
    <tr class="text-info">
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">address</th>
      <th scope="col" class="text-center">Activated</th>
      <th scope="col" class="text-center">Action</th>
    </tr>
    </thead>
    <tbody class="table-bordered">
    <tr v-for="user in allUsers" :key="user.id">
      <td>{{ user.fullName }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.address }}</td>
      <td class="text-center">
        <a v-if="user.isActive && !loadingActivateUser" href="javascript:void(0);" @click="toggleUserStatus(user)">
          <span class="material-icons-outlined text-success" title="Deactivate User">check_circle</span>
        </a>
        <a v-else-if="!user.isActive && !loadingActivateUser" href="javascript:void(0);" @click="toggleUserStatus(user)">
          <span class="material-icons-outlined text-danger" title="Deactivate User">cancel</span>
        </a>

        <div v-if="loadingActivateUser" class="spinner-border text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

      </td>
      <td class="text-center">
        <a href="javascript:void(0);">
          <span class="material-icons-outlined text-danger" data-bs-target="#deleteUser"
                data-bs-toggle="modal" title="Delete User">delete</span>
        </a>
      </td>
    </tr>
    </tbody>
  </table>
  <ActivateUserModal/>
  <DeleteConfirmationModel/>

</template>

<script>
import ActivateUserModal from "@/components/user/ActivateUserModal";
import ComponentHeader from "@/components/ComponentHeader";
import DeleteConfirmationModel from "@/components/user/DeleteUserConfirmationModel";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UsersComponent",
  components: {
    DeleteConfirmationModel,
    ComponentHeader,
    ActivateUserModal
  },

  methods: {
    ...mapActions(['fetchAllUsers', 'toggleUserStatus'])
  },
  computed: {
    ...mapGetters(['allUsers', 'hasError', 'errorMessage', 'loadingActivateUser'])
  },

  mounted() {
    this.fetchAllUsers();
  }
}
</script>

<style scoped>
.material-icons-outlined {
  position: relative;
  bottom: -5px;
  margin-right: 2px;
}

.add-new-button {
  font-weight: 300;
}

.roles-td {
  text-transform: capitalize;
}
</style>