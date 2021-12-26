<template>
  <q-page class="q-pa-lg bg-image">
    <div class="text-h4 text-bold">
      <q-icon name="assignment" color="light-blue-6" style="font-size: 4rem" />
      Document Type
    </div>

    <br />

    <q-table
      title="Records"
      :rows="doctypes"
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
            label="Create Document Type"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="onNewDoctype()"
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
              @click="onEditDoctype(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteDoctype(props.row)"
            />
            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 500px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Edit Document Type</div>
                  <div class="text-h6" v-else>Document Type</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">Category</div>
                    <q-input outlined dense v-model="presentDoctype.category" />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn
                    flat
                    label="Save"
                    color="primary"
                    @click="onSaveDoctype"
                    v-close-popup
                  />
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
                  <span class="q-ml-sm"
                    >Confirm Delete {{ presentDoctype.category }}?</span
                  >
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
  </q-page>
</template>
<script lang="ts">
import { DoctypeInfo } from 'src/store/doctype/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState } from 'vuex';

@Options({
  computed: {
    ...mapState('doctype', ['doctypes', 'activeDoctype']),
  },
  methods: {
    ...mapActions('doctype', ['newDoctype', 'editDoctype', 'deleteDoctype']),
  },
})
export default class ManageAccount extends Vue {
  //vuex properties
  doctypes!: DoctypeInfo[];
  newDoctype!: (doctype: DoctypeInfo) => Promise<void>;
  editDoctype!: (doctype: DoctypeInfo) => Promise<void>;
  deleteDoctype!: (doctype: DoctypeInfo) => Promise<void>;
  //local
  columns = [
    {
      name: 'category',
      required: true,
      label: 'CATEGORY',
      align: 'left',
      field: (row: DoctypeInfo) => row.category,
      format: (val: string) => `${val}`,
    },

    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];

  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;

  defaultDoctype: DoctypeInfo = {
    idNumber: '',
    category: '',
  };

  presentDoctype = { ...this.defaultDoctype };
  filter = '';

  onNewDoctype() {
    this.presentDoctype = { ...this.defaultDoctype };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditDoctype(doctype: DoctypeInfo) {
    this.presentDoctype = { ...doctype };
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteDoctype(doctype: DoctypeInfo) {
    this.presentDoctype = { ...doctype };
    this.confirmDelete = true;
  }

  async onSaveDoctype() {
    if (!this.editRow) {
      await this.newDoctype(this.presentDoctype);
    } else {
      await this.editDoctype(this.presentDoctype);
    }
  }
  async onCofirmDelete() {
    await this.deleteDoctype(this.presentDoctype);
    this.confirmDelete = false;
  }
}
</script>
