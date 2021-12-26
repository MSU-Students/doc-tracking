<template>
  <q-page class="q-pa-lg bg-image">
    <div class="text-h4 text-bold">
      <q-icon name="description" color="light-blue-6" style="font-size: 4rem" />
      All Documents
    </div>

    <br />

    <q-table
      title="Records"
      :rows="docs"
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
            label="Create Document"
            color="primary"
            e
            dense
            flat
            icon="add"
            @click="onNewDoc()"
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
              @click="onEditDoc(props.row)"
            />

            <q-btn
              color="red-10"
              icon="delete"
              size="sm"
              class="q-ml-sm"
              flat
              round
              dense
              @click="onDeleteDoc(props.row)"
            />

            <q-dialog v-model="activeUser" persistent>
              <q-card style="width: 350px; max-width: 100vw" class="q-pa-sm">
                <q-card-section class="row">
                  <div class="text-h6" v-if="editRow">Edit Document</div>
                  <div class="text-h6" v-else>New Document</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">Upload File:</div>
                    <q-uploader
                      label="Documents"
                      auto-upload
                      url="http://localhost:4444/upload"
                      multiple
                    />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">CODE</div>
                    <q-input outlined dense v-model="presentDoc.code" />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">DOCUMENT TYPE</div>
                    <q-select
                      class="bg-white"
                      outlined
                       v-model="presentDoc.type"
                      :options="getDocsType"
                      dense
                      label="Document"
                    />
                  </div>
                </q-card-section>

                <q-card-section class="q-gutter-md row">
                  <div class="col">
                    <div class="text-subtitle1 text-bold">DATE</div>
                    <q-input
                      outlined
                      dense
                      v-model="presentDoc.date"
                      type="date"
                    />
                  </div>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn
                    flat
                    label="Save"
                    color="primary"
                    @click="onSaveDoc"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>

            <q-btn
             round
             color="green-10"
             icon="send"
             size="sm"
             flat
             dense
              @click="sending = true"
            />
                  <q-dialog v-model="sending" persistent>
                    <q-card style="width: 900px">
                      <q-card-section class="row">
                        <div class="text-h4 text-bold">SEND</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <div class="center-7">
                          <div class="text-subtitle1 text-bold">To:</div>
                          <q-select
                            class="bg-white"
                            outlined
                            v-model="unitOffice"
                            :options="getOffice"
                            dense
                            label="Office"
                          />
                          <br />
                          <div class="text-subtitle1 text-bold">To:</div>
                          <q-select
                            class="bg-white"
                            outlined
                            v-model="unitProf"
                            :options="getProf"
                            dense
                            label="Employee"
                          />
                        </div>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn
                          flat
                          label="Cancel"
                          color="red-10"
                          v-close-popup
                        />
                        <q-btn
                          flat
                          label="Send"
                          color="primary"
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
                    >Confirm Delete {{ presentDoc.code }}?</span
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
import { DocInfo } from 'src/store/document/state';
import { Vue, Options } from 'vue-class-component';
import { mapActions, mapState, mapGetters } from 'vuex';

@Options({
  computed: {
    ...mapState('document', ['docs', 'activeDoc']),
    ...mapGetters('doctype', ['getDocsType']),
    ...mapGetters('office', ['getOffice']),
    ...mapGetters('profession', ['getProf']),
  },
  methods: {
    ...mapActions('document', ['newDoc', 'editDoc', 'deleteDoc']),
  },
})
export default class ManageAccount extends Vue {
  //vuex properties
  docs!: DocInfo[];
  getDocsType!: string[];
  getOffice!: string[];
  getProf!: string[];
  newDoc!: (doc: DocInfo) => Promise<void>;
  editDoc!: (doc: DocInfo) => Promise<void>;
  deleteDoc!: (doc: DocInfo) => Promise<void>;
  //local
  columns = [
    {
      name: 'code',
      required: true,
      label: 'CODE',
      align: 'left',
      field: (row: DocInfo) => row.code,
      format: (val: string) => `${val}`,
    },
    {
      name: 'file',
      align: 'center',
      label: 'FILE/PHOTO',
      field: 'file',
    },
    {
      name: 'type',
      align: 'center',
      label: 'Document Type',
      field: 'type',
    },
    {
      name: 'date',
      align: 'center',
      label: 'DATE',
      field: 'date',
    },
    { name: 'action', align: 'center', label: 'Action', field: 'action' },
  ];
  confirmDelete = false;
  cancelEnabled = true;
  activeUser = false;
  editRow = false;
  sending = false;

  unitType = null;
  unitOffice = null;
  unitProf = null;

  defaultDoc: DocInfo = {
    file: '',
    code: '',
    type: '',
    date: '',
  }

  presentDoc = { ...this.defaultDoc };
  filter = '';

  onNewDoc() {
    this.presentDoc = { ...this.defaultDoc };
    this.editRow = false;
    this.activeUser = true;
  }

  onEditDoc(document: DocInfo) {
    this.presentDoc = { ...document };
    this.editRow = true;
    this.activeUser = true;
  }
  onDeleteDoc(document: DocInfo) {
    this.presentDoc = { ...document };
    this.confirmDelete = true;
  }

  async onSaveDoc() {
    if (!this.editRow) {
      await this.newDoc(this.presentDoc);
    } else {
      await this.editDoc(this.presentDoc);
    }
  }
  async onCofirmDelete() {
    await this.deleteDoc(this.presentDoc);
    this.confirmDelete = false;
  }
}
</script>
