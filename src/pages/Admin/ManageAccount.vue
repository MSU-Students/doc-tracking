<template>
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon
        name="account_circle"
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
          <q-btn @click="onNewManage()"
            label="Add User"
            color="primary"
            dense
            flat
            icon="add"
          />
          <q-dialog v-model="activeUser" persistent>
            <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
              <q-card-section class="row">
                <div class="text-h6">Add User</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-md row">
                <div class="col">
                    <q-input
                        outlined
                        v-model="presentManage.idNumber"
                        label="IDnumder"
                      />
                  <q-input outlined v-model="presentManage.Fname" label="First Name" />
                </div>
                <div class="col">
                  <q-input outlined v-model="presentManage.Mname" label="Middle Name" />
                </div>
                <div class="col">
                  <q-input outlined v-model="presentManage.Lname" label="Last Name" />
                </div>
              </q-card-section>
              <q-card-section class="q-gutter-md row">
                <div class="col">
                  <q-input outlined v-model="presentManage.username" label="Username" />
                </div>
                <div class="col">
                  <q-input outlined v-model="presentManage.password" label="Password" />
                </div>
              </q-card-section>

              <q-card-section class="q-gutter-md row">
                <div class="col">
                  <q-input
                    outlined
                    v-model="email"
                    label="Email"
                    type="email"
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
                <q-btn flat label="Add" color="primary" @click="onSaveStudent" v-close-popup />
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
              @click="onEditManage(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteManage(props.row)"
            />

            <q-dialog v-model="confirmDelete" persistent>
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
                  <q-btn
                      flat
                      label="Confirm"
                      @click="onCofirmDelete"
                      color="primary"
                      v-close-popup
                    />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts">
import { IManageInfo } from 'src/store/users/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
    computed: {
    ...mapState('manage', ['manages', 'activeManage'])
  },
  methods: {
    ...mapActions('manage', ['newManage', 'editManage', 'deleteManage'])
  }
})
export default class ManageAccount extends Vue {

    //vuex properties
  manages!:IManageInfo[];
  newManage!:(manage:IManageInfo) => Promise<void>;
  editManage!:(manage:IManageInfo) => Promise<void>;
  deleteManage!:(manage:IManageInfo) => Promise<void>;
  //local

  columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: IManageInfo) => row.Fname + row.Lname,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    {
      name: 'dateCreated',
      align: 'center',
      label: 'Date Created',
      field: 'dateCreated',
    },
    { name: 'role', align: 'center', label: 'Role', field: 'role' },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    {
      name: 'lastLogin',
      align: 'center',
      label: 'Last Login',
      field: 'lastLogin',
    },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  rows = [
    {
      name: 'Basam C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
    {
      name: 'Basem C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
    {
      name: 'Arefa C. Serad',
      email: 'basamserad1998@gmail.com',
      dateCreated: 'December 23, 1998',
      role: 'Admin',
      status: 'Active',
      lastLogin: '11 / 11 / 2001',
    },
  ];
  confirmDelete = false;
  activeUser = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;

  defaultManage: IManageInfo = {

  idNumber: '',
  Fname: '',
  Mname: '',
  Lname: '',
  username: '',
  password: '',
  email: '',
 
  }
  onItemClick() {
    console.log('Clicked!');
  }

  presentManage = {...this.defaultManage};
  filter = '';
  options = ['Cashier', 'Admin'];

  onNewManage() {
    this.presentManage =  {...this.defaultManage};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditManage(manage:IManageInfo) {
    this.presentManage = {...manage};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteManage(manage:IManageInfo) {
    this.presentManage = {...manage};
    this.confirmDelete = true;
  }

  async onSaveManage() {
    if (!this.editRow) {
      await this.newManage(this.presentManage);
    } else {
      await this.editManage(this.presentManage);
    }
  }
  async onCofirmDelete() {
    await this.deleteManage(this.presentManage);
    this.confirmDelete = false;
  }
}

</script>