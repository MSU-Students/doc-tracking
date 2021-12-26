<template>
<q-page class="q-pa-lg bg-image">
    <div class="text-h4 text-bold">
      <q-icon
        name="person"
        color="light-blue-6"
        style="font-size: 4rem"
      />
      Profession
    </div>

    <br />

    <q-table
      title="Records"
      :rows="profs"
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
            label="Create Position"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="onNewProf()"
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
              @click="onEditProf(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteProf(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 400px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Edit Position</div>
                  <div class="text-h6" v-else>Add Position</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">Position</div>
                    <q-input
                            outlined dense
                            v-model="presentProf.position"
                          />                 
                   </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Save" color="primary" @click="onSaveProf" v-close-popup />
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
                  <span class="q-ml-sm">Confirm Delete {{presentProf.position}}?</span>
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
import { ProfInfo } from 'src/store/profession/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';


@Options({
  computed: {
    ...mapState('profession', ['profs', 'activeProf'])
  },
  methods: {
    ...mapActions('profession', ['newProf', 'editProf', 'deleteProf'])
  }
})
export default class ManageAccount extends Vue {

  //vuex properties
  profs!:ProfInfo[];
  newProf!:(prof:ProfInfo) => Promise<void>;
  editProf!:(prof:ProfInfo) => Promise<void>;
  deleteProf!:(prof:ProfInfo) => Promise<void>;
  //local
   columns = [
    {
      name: 'position',
      required: true,
      label: 'POSITION',
      align: 'left',
      field: (row: ProfInfo) => row.position,
      format: (val: string) => `${val}`,
    },
    
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;

  defaultProf: ProfInfo = {
    idNumber: '',
    position: '',
   
  }

  presentProf = {...this.defaultProf};
  filter = '';

  onNewProf() {
    this.presentProf =  {...this.defaultProf};
    this.editRow = false;
    this.activeUser = true;
  }

  onEditProf(prof:ProfInfo) {
    this.presentProf = {...prof};
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteProf(prof:ProfInfo) {
    this.presentProf = {...prof};
    this.confirmDelete = true;
  }

  async onSaveProf() {
    if (!this.editRow) {
      await this.newProf(this.presentProf);
    } else {
      await this.editProf(this.presentProf);
    }
  }
  async onCofirmDelete() {
    await this.deleteProf(this.presentProf);
    this.confirmDelete = false;
  }
}
</script>
