<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="account_circle"
          color="light-blue-6"
          style="font-size: 4rem"
        />
        USERS
      </div>

      <br />

      <q-table
        title="Records"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"
        :filter="filter"
      >
        <template v-slot:top-right>
          <div class="q-pa-md q-gutter-sm row">
            <q-input
              outlined
              rounded
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn
              label="Create User"
              color="primary"
              dense
              flat
              icon="add"
              @click="addUser = true"
            />
            <q-dialog v-model="addUser">
              <q-card style="width: 350px">
                <q-card-section class="row">
                  <div class="text-h6">Add User</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <q-input outlined v-model="name" label="First Name" />
                  <q-input outlined v-model="name" label="Middle Initial" />
                  <q-input outlined v-model="name" label="Last Name" />
                  <q-input outlined v-model="name" label="Office" />
                  <q-input
                    outlined
                    v-model="email"
                    label="Email"
                    type="email"
                  />
                  <q-input outlined v-model="username" label="Username" />
                  <q-input outlined v-model="password" label="Password" />

                  <q-select
                    outlined
                    v-model="role"
                    :options="options"
                    label="Roles"
                  />
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Add" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <div>
              <q-td>
                <q-btn
                  round
                  color="blue"
                  icon="edit"
                  size="sm"
                  flat
                  dense
                  @click="editRow = true"
                />
                <q-dialog v-model="editRow">
                  <q-card style="width: 350px">
                    <q-card-section class="row">
                      <div class="text-h6">Edit User</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md">
                      <q-input outlined v-model="name" label="First Name" />
                      <q-input outlined v-model="name" label="Middle Initial" />
                      <q-input outlined v-model="name" label="Last Name" />
                      <q-input outlined v-model="name" label="Username" />
                      <q-input outlined v-model="name" label="Rule" />
                      <q-input outlined v-model="username" label="Office" />
                      <q-input outlined v-model="name" label="Status" />
                      <q-input outlined v-model="password" label="Password" />
                      
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn flat label="Cancel" color="red-10" v-close-popup />
                      <q-btn flat label="Save" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                
              </q-td>
            </div>

            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  name: string;
}
@Options({})
export default class ManageAccount extends Vue {
  columns = [
     {
      name: 'username',
      align: 'center',
      label: 'USERNAME',
      field: 'document',
    },
    {
      name: 'name',
      align: 'center',
      label: 'NAME',
      field: 'document',
    },
    { name: 'role', align: 'center', label: 'RULE', field: 'type' },
    {
      name: 'office',
      align: 'center',
      label: 'OFFICE',
      field: 'datetime',
    },

    { name: 'status', align: 'center', label: 'STATUS', field: 'action' },
  ];
  rows = [
    {
      username: 'admin',
      name: 'Luffy',
      role: 'Administrator',
      office: 'Accounting',
      
    },
    {
      username: 'user1',
      name: 'Sanchi',
      role: 'Employee',
      office: 'Engineering',
      
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = '';
  username = '';
  password = '';
  email = '';
  role = '';
  filter = '';
  options = ['Admin', 'Employee'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
