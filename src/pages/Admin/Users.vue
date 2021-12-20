<template>
 <q-page class="q-pa-lg bg-image">
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
      :rows="users"
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
            e
            dense
            flat
            icon="add"
            @click="onNewUser()"
          />
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
              @click="onEditUser(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteUser(props.row)"
            />

            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 800px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Edit User</div>
                  <div class="text-h6" v-else>New User</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                 <div class="col">
                  <div class="text-subtitle1 text-bold">First Name</div> 
                  <q-input
                    outlined dense
                    v-model="presentUser.FName"
                  />
                </div>
                <div class="col">
                   <div class="text-subtitle1 text-bold">Middle Name</div>
                  <q-input
                    outlined dense
                    v-model="presentUser.MName"
                  />
                </div>
                <div class="col">
                  <div class="text-subtitle1 text-bold">Last Name</div>
                  <q-input
                    outlined dense
                    v-model="presentUser.LName"
                  />
                </div>

                </q-card-section>
                <q-card-section class="q-gutter-md row">
                  <div class="col">
                   <div class="text-subtitle1 text-bold">Username</div>
                   <q-input
                    outlined dense
                    v-model="presentUser.username"
                  />
                </div>
                <div class="col">
                  <div class="text-subtitle1 text-bold">Password</div>
                  <q-input
                    outlined dense
                    v-model="presentUser.password"
                  />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                  <div class="text-subtitle1 text-bold">Email</div>
                  <q-input
                    outlined dense
                    v-model="presentUser.email"
                  />
                </div>
                <div class="col">
                   <div class="text-subtitle1 text-bold">Role</div>
                  <q-select
                    outlined dense
                    v-model="presentUser.role"
                    :options="options"
                  />
                </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveUser" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-dialog v-model="confirmDelete" persistent>
              <q-card style="width: 300px">
                <q-card-section class="row items-center">
                  <q-avatar
                    size="sm"
                    icon="warning"
                    color="red-10"
                    text-color="white"
                  />
                  <span class="q-ml-sm">Confirm Delete {{presentUser.FName}}?</span>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    flat
                    label="Cancel"
                    color="primary"
                    v-close-popup="cancelEnabled"
                    :disable="!cancelEnabled"
                  />
                  <q-btn flat label="Confirm" @click="onCofirmDelete" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </q-td>       
      </template>
    </q-table>
</q-page>
</template>
<script lang="ts">
import { UserInfo } from 'src/store/user/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('user', ['users', 'activeUser'])
  },
  methods: {
    ...mapActions('user', ['newUser', 'editUser', 'deleteUser'])
  }
})
export default class ManageAccount extends Vue {

  //vuex properties
  users!:UserInfo[];
  newUser!:(user:UserInfo) => Promise<void>;
  editUser!:(user:UserInfo) => Promise<void>;
  deleteUser!:(user:UserInfo) => Promise<void>;
  //local
   columns = [
    {
      name: 'name',
      required: true,
      label: 'Name',
      align: 'left',
      field: (row: UserInfo) =>
        row.FName + ' ' + row.MName + '. ' + row.LName,
      format: (val: string) => `${val}`,
    },
    {
      name: 'email',
      align: 'center',
      label: 'Email',
      field: 'email',
    },
    { name: 'role', align: 'center', label: 'Role', field: 'role' },
    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;

  defaultUser: UserInfo = {
    FName: '',
    MName: '',
    LName: '',
    username: '',
    password: '',
    email: '',
    role: '',
    status: 'Active',
  }

  presentUser = {...this.defaultUser};
  filter = '';
  options = ['Admin', 'Employee'];
  

  onNewUser() {
    this.presentUser =  {...this.defaultUser};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditUser(user:UserInfo) {
    this.presentUser = {...user};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteUser(user:UserInfo) {
    this.presentUser = {...user};
    this.confirmDelete = true;
  }

  async onSaveUser() {
    if (!this.editRow) {
      await this.newUser(this.presentUser);
    } else {
      await this.editUser(this.presentUser);
    }
  }
  async onCofirmDelete() {
    await this.deleteUser(this.presentUser);
    this.confirmDelete = false;
  }
}
</script>
