<template>
<q-page class="bg-image">
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon
        name="people_alt"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      Account Management
    </div>

    <br />

    <q-table
      title="Account List"
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
            label="Add User"
            color="primary"
            dense
            flat
            icon="add"
            @click="addUser = true"
          />
          <q-dialog v-model="addUser" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Add User</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-md row">
                <div class="col">
                  <q-input outlined v-model="Fname" label="First Name" />
                </div>
                <div class="col">
                  <q-input outlined v-model="Mname" label="Middle Name" />
                </div>
                <div class="col">
                  <q-input outlined v-model="Lname" label="Last Name" />
                </div>
              </q-card-section>
              <q-card-section class="q-gutter-md row">
                <div class="col">
                  <q-input outlined v-model="username" label="Username" />
                </div>
                <div class="col">
                  <q-input outlined v-model="password" label="Password" />
                </div>
              </q-card-section>

              <q-card-section class="q-gutter-md row">
                <div class="col">
                  <q-input
                    outlined
                    v-model="office"
                    label="OFFICE"
                    type="office"
                  />
                </div>
                <div class="col">
                  <q-select
                    outlined
                    v-model="role"
                    :options="options"
                    label="Roles"
                  />
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="red-10" v-close-popup />
                <q-btn flat label="Add" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </template>

      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-gutter-sm">
            <q-btn
              round
              color="blue"
              icon="edit"
              size="sm"
              flat
              dense
              @click="editRow = true"
            />
            <q-dialog v-model="editRow" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6">Add User</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="Fname" label="First Name" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="Mname" label="Middle Name" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="Lname" label="Last Name" />
                  </div>
                </q-card-section>
                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input outlined v-model="username" label="Username" />
                  </div>
                  <div class="col">
                    <q-input outlined v-model="password" label="Password" />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <q-input
                      outlined
                      v-model="office"
                      label="OFFICE"
                      type="office"
                    />
                  </div>
                  <div class="col">
                    <q-select
                      outlined
                      v-model="role"
                      :options="options"
                      label="Roles"
                    />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="dialog = true"
            />
            <q-dialog v-model="dialog" persistent>
              <q-card style="width: 300px">
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                  />
                  <span class="q-ml-sm">Confirm Delete?</span>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="primary"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn flat label="Confirm" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
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
      name: 'name',
      required: true,
      label: 'NAME',
      align: 'left',
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'office',
      align: 'center',
      label: 'OFFICE',
      field: 'office',
    },
    {
      name: 'dateCreated',
      align: 'center',
      label: 'DATE CREATED',
      field: 'dateCreated',
    },
    { name: 'role', align: 'center', label: 'ROLE', field: 'role' },
    { name: 'status', align: 'center', label: 'STATUS', field: 'status' },
   
    { name: 'action', align: 'center', label: 'ACTIONS', field: 'action' },
  ];
  rows = [
    {
      name: 'Inshidar P. Panganting',
      office: 'CICS',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
    },
    {
      name: 'Azimah D. Ampuan',
      office: 'CICS',
      dateCreated: 'December 23, 1998',
      role: 'Employee',
      status: 'Active',
    },
    {
      name: 'Norol Carim Maruhom',
      office: 'HRDO',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  Fname = '';
  Mname = '';
  Lname = '';
  username = '';
  password = '';
  office = '';
  role = '';
  filter = '';
  options = ['Admin', 'Employee'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
