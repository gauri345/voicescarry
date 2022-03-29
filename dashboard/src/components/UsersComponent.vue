<template>
  <HeaderMenu/>
  <div class="container-fluid">
    <div class="row">
      <SidebarMenu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Users</h1>
          <a class="btn btn-info add-new-button"><span class="material-icons-outlined">add_circle_outline</span> ADD NEW</a>
        </div>
        <table class="table table-striped">
          <thead class="table-primary">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Activated</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody class="table-bordered">
          <tr>
            <td>Gauri Maya Upreti</td>
            <td>gauri.upreti1@gmail.com</td>
            <td>Admin</td>
            <td>
              <a href="#"> <span class="material-icons-outlined red">highlight_off</span></a>
            </td>
            <td>
              <a href="#"> <span class="material-icons-outlined">edit</span></a>
              <a href="#"> <span class="material-icons-outlined">delete</span></a>
            </td>
          </tr>
          <tr>
            <td>Gauri Maya Upreti</td>
            <td>gauri.upreti1@gmail.com</td>
            <td>Admin</td>
            <td>
              <a href="#"> <span class="material-icons-outlined green">check_circle</span></a>
            </td>
            <td>
              <a href="#"> <span class="material-icons-outlined">edit</span></a>
              <a href="#"> <span class="material-icons-outlined">delete</span></a>
            </td>
          </tr>
          <tr>
            <td>Gauri Maya Upreti</td>
            <td>gauri.upreti1@gmail.com</td>
            <td>Admin</td>
            <td>
              <a href="#"> <span class="material-icons-outlined green">check_circle</span></a>
            </td>
            <td>
              <a href="#"> <span class="material-icons-outlined">edit</span></a>
              <a href="#"> <span class="material-icons-outlined">delete</span></a>
            </td>
          </tr>
          <tr>
            <td>Gauri Maya Upreti</td>
            <td>gauri.upreti1@gmail.com</td>
            <td>Admin</td>
            <td>
              <a href="#"> <span class="material-icons-outlined red">highlight_off</span></a>
            </td>
            <td>
              <a href="#"> <span class="material-icons-outlined">edit</span></a>
              <a href="#"> <span class="material-icons-outlined">delete</span></a>
            </td>
          </tr>
          </tbody>
        </table>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/components/HeaderMenu";
import SidebarMenu from "@/components/SidebarMenu";

export default {
  name: "UsersComponent",
  components: {
    SidebarMenu, HeaderMenu
  }
}
</script>

<style scoped>
.table {
  background: rgba(255, 255, 255, .5);
}

.table-bordered {
  color: white;
  border-bottom: 1px solid #052446;
}

.table-primary > tr > th {
  background-color: #052446;
  color: white;
}
.material-icons-outlined {
  position: relative;
  bottom: -5px;
  margin-right: 2px;
}

.add-new-button {
  font-weight: 300;
}

.green {
  color: green;
}
.red {
  color: red;
}
</style>