<template>
<q-page class="q-pa-lg bg-image">
    <div class="text-h4 text-bold">
      <q-icon
        name="assignment"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      Office
    </div>

    <br />

    <q-table
      title="Records"
      :rows="offices"
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
            e
            dense
            flat
            icon="add"
            @click="onNewOffice()"
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
              @click="onEditOffice(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteOffice(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 400px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Edit User</div>
                  <div class="text-h6" v-else>Add Office</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">Office</div>
                    <q-input
                            outlined dense
                            v-model="presentOffice.office"
                          />                 
                   </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveOffice" v-close-popup />
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
                  <span class="q-ml-sm">Confirm Delete {{presentOffice.office}}?</span>
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
import { OfficeInfo } from 'src/store/office/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('office', ['offices', 'activeOffice'])
  },
  methods: {
    ...mapActions('office', ['newOffice', 'editOffice', 'deleteOffice'])
  }
})
export default class ManageAccount extends Vue {

  //vuex properties
  offices!:OfficeInfo[];
  newOffice!:(office:OfficeInfo) => Promise<void>;
  editOffice!:(office:OfficeInfo) => Promise<void>;
  deleteOffice!:(office:OfficeInfo) => Promise<void>;
  //local
   columns = [
    {
      name: 'office',
      required: true,
      label: 'OFFICE',
      align: 'left',
      field: (row: OfficeInfo) => row.office,
      format: (val: string) => `${val}`,
    },
    
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;

  defaultOffice: OfficeInfo = {
    idNumber: '',
    office: '',
   
    
  }

  presentOffice = {...this.defaultOffice};
  filter = '';

  onNewOffice() {
    this.presentOffice =  {...this.defaultOffice};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditOffice(office:OfficeInfo) {
    this.presentOffice = {...office};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteOffice(office:OfficeInfo) {
    this.presentOffice = {...office};
    this.confirmDelete = true;
  }

  async onSaveOffice() {
    if (!this.editRow) {
      await this.newOffice(this.presentOffice);
    } else {
      await this.editOffice(this.presentOffice);
    }
  }
  async onCofirmDelete() {
    await this.deleteOffice(this.presentOffice);
    this.confirmDelete = false;
  }
}
</script>
