<template>
<q-page class="bg-image">
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon
        name="camera_front"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      OFFICE
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
            label="Create Office"
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
                <q-input outlined v-model="email" label="Email" type="email" />
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
                    <q-input outlined v-model="username" label="Username" />
                    <q-input outlined v-model="password" label="Password" />
                    <q-input
                      outlined
                      v-model="email"
                      label="Email"
                      type="email"
                    />
                    <q-select
                      outlined
                      v-model="role"
                      :options="options"
                      label="Roles"
                    />
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
      name: 'office',
      align: 'center',
      label: 'OFFICE',
      field: 'office',
    },
    
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  rows = [
    
    {
      office: 'Accounting Office',
      action: 'blabla',
    },
   {
      office: 'Human Resource',
      action: 'blabla',
    },
    {
      office: 'Budget Office',
      action: 'blabla',
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
