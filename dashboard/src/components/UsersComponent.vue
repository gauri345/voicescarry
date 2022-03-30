<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <ComponentHeader text="Users" />
        <table class="table bg-dark text-info text-lg-start">
          <thead class="table-bordered">
          <tr class="text-info">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Activated</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody class="table-bordered">
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td class="roles-td">{{ createRolesToDisplay(user.roles) }}</td>
            <td>
              <a v-if="'active' === user.status" href="javascript:void(0);"> <span
                  class="material-icons-outlined text-success" title="Deactivate User">check_circle</span></a>

              <a v-else href="javascript:void(0);"> <span
                  class="material-icons-outlined text-danger" data-bs-target="#activateUser" data-bs-toggle="modal"
                  title="Activate User">highlight_off</span></a>
            </td>
            <td>
              <a href="#"> <span class="material-icons-outlined text-danger" title="Delete User">delete</span></a>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>

  <ActivateUserModal />

</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";

import bootstrap from 'bootstrap/dist/js/bootstrap';
import ActivateUserModal from "@/components/ActivateUserModal";
import ComponentHeader from "@/components/ComponentHeader";

export default {
  name: "UsersComponent",
  components: {
    ComponentHeader,
    ActivateUserModal,
    SidebarMenu, HeaderMenu
  },

  data() {
    return {
      userList: [
        {
          id: "kiringmiring",
          name: "Gauri Upreti",
          email: "gauri.upreti1@gmail.com",
          status: "active",
          roles: ["admin"]
        },
        {
          id: "kiringmiring",
          name: "Pawan Bhattarai",
          email: "pawan.bhattarai@gmail.com",
          status: "inactive",
          roles: ["surveyor"]
        },
        {
          id: "kiringmiring",
          name: "John Doe",
          email: "john.doe@gmail.com",
          status: "inactive",
          roles: ["ANALYST", "surveyor"]
        }
      ]
    }
  },

  methods: {
    createRolesToDisplay(roles) {
      return roles
          .map(role => role.toLowerCase())
          .join(', ');
    },

    activateUser(user) {
      new bootstrap.Modal(document.getElementById('myModal'), {});
      console.log(user);
    }
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