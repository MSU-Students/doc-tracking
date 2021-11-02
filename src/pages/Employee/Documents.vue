<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="local_shipping"
          color="deep-orange"
          style="font-size: 4rem"
        />
        Documents
      </div>

      <br />
      <div class="row">
        <div class="q-pr-md col">
          <q-table
            class="my-sticky-column-table"
            title="Records"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :rows-per-page-options="[0]"
            :filter="filter"
          >
            <template v-slot:top-right>
              <div class="q-pa-md q-gutter-sm">
                <q-input
                  outlined
                  rounded
                  dense
                  debounce="500"
                  v-model="filter"
                  placeholder="Search"
                >
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
            </template>

            <template v-slot:body-cell-Actions="props">
              <q-td :props="props">
                <div class="q-gutter-sm">
                  <q-btn
                    round
                    color="blue"
                    icon="more_vert"
                    size="md"
                    flat
                    dense
                    @click="Details = true"
                  />
                  <q-dialog v-model="Details">
                    <q-card
                      style="width: 800px; max-width: 100vw"
                      flat
                      bordered
                    >
                      <q-card-section>
                        <div class="text-h6 text-center">
                          HISTORY
                          <q-btn
                            round
                            flat
                            dense
                            icon="close"
                            class="float-right"
                            color="grey-8"
                            v-close-popup
                          ></q-btn>
                        </div>
                      </q-card-section>
                      <q-separator />
                      <q-card-section>
                        <div>DATE RECEIVED:</div>
                        <div>CODE:</div>
                        <div>Status:</div>
                      </q-card-section>
                      <q-card-section>
                        <q-table
                          title="Document Details"
                          :rows="Peekrows"
                          :columns="Peekcolumns"
                          row-key="peek"
                          :rows-per-page-options="[0]"
                          :filter="filter"
                        >
                        </q-table>
                      </q-card-section>
                    </q-card>
                  </q-dialog>

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
                    <q-card style="width: 900px">
                      <q-card-section class="row">
                        <div class="text-h6">Edit Documents</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <div class="center">
                          <div class="col col-md-8">
                            <br />
                            <div class="text-subtitle1 text-bold">CODE</div>
                            <q-input
                              class="bg-white"
                              outlined
                              v-model="code"
                              dense
                            />
                            <br />
                            <div class="text-subtitle1 text-bold">
                              Documents
                            </div>
                            <q-input
                              class="bg-white"
                              outlined
                              v-model="document"
                              dense
                            />
                            <br />
                            <div class="text-subtitle1 text-bold">
                              Document Type
                            </div>
                            <q-select
                              class="bg-white"
                              outlined
                              v-model="unittype"
                              :options="unitType"
                              dense
                              label="Document"
                            />
                          </div>
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
                          label="Save"
                          color="primary"
                          v-close-popup
                        />
                      </q-card-actions>
                    </q-card>
                  </q-dialog>
                  <q-btn
                    round
                    color="green-7"
                    icon="print"
                    size="sm"
                    flat
                    dense
                    @click="dialog = true"
                  />
                  <q-dialog v-model="dialog" persistent>
                    <q-card style="width: 900px">
                      <q-card-section class="row">
                        <div class="text-h4 text-bold">CODE</div>
                        <q-space />
                        <q-btn flat round dense icon="close" v-close-popup />
                      </q-card-section>

                      <q-card-section class="q-gutter-md">
                        <div class="center-7">
                          <q-input outlined dense />
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
                          label="Save"
                          color="primary"
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
                            v-model="unitoff"
                            :options="unitoffice"
                            dense
                            label="Office"
                          />
                          <br />
                          <div class="text-subtitle1 text-bold">To:</div>
                          <q-select
                            class="bg-white"
                            outlined
                            v-model="unitemp"
                            :options="unitemployee"
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
                </div>
              </q-td>
            </template>
          </q-table>
        </div>

        <q-card flat bordered class="my-card bg-blue-3 center">
          <q-card-section class="q-gutter-lg">
            <div class="text-h5">Create Documents</div>
            <q-separator />
            <div class="center q-gutter-md">
              <div>
                <div class="text-subtitle1 text-bold">Code</div>
                <q-input class="bg-white" outlined v-model="code" dense />
                <br />
                <div class="text-subtitle1 text-bold">Upload File:</div>
                <q-uploader
                  label="Documents"
                  auto-upload
                  url="http://localhost:4444/upload"
                  multiple
                />
                <br />
                <div class="text-subtitle1 text-bold">Document Type</div>
                <q-select
                  class="bg-white"
                  outlined
                  v-model="unittype"
                  :options="unitType"
                  dense
                  label="Document"
                />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Add" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  code: string;
}

interface peekrow {
  peek: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: 'code',
      required: true,
      label: 'CODE',
      align: 'left',
      field: (row: IRow) => row.code,
      format: (val: string) => `${val}`,
    },
    {
      name: 'document',
      align: 'center',
      label: 'DOCUMENTS',
      field: 'document',
    },
    {
      name: 'type',
      align: 'center',
      label: 'TYPE',
      field: 'type',
    },
    {
      name: 'date',
      align: 'center',
      label: 'DATE',
      field: 'date',
    },
    { name: 'time', align: 'center', label: 'TIME', field: 'time' },
    { name: 'Actions', align: 'center', label: 'Actions', field: 'Actions' },
  ];
  rows = [
    {
      code: '20186327',
      document: 'Testing',
      type: 'Communication Letter',
      date: '10/2/2021',
      time: '2pm',
    },
  ];
  Peekcolumns = [
    {
      name: 'peek',
      required: true,
      label: 'OFFICE',
      align: 'left',
      field: (row: peekrow) => row.peek,
      format: (val: string) => `${val}`,
    },
    {
      name: 'peektime',
      align: 'center',
      label: 'TIME',
      field: 'peektime',
    },
    {
      name: 'peekoff',
      align: 'center',
      label: 'OFFICE',
      field: 'peekoff',
    },
    {
      name: 'peekremarks',
      align: 'center',
      label: 'REMARKS',
      field: 'peekremarks',
    },
    {
      name: 'peekduration',
      align: 'center',
      label: 'DURATION',
      field: 'peekduration',
    },
  ];
  Peekrows = [
    {
      peek: 'Accounting',
      peektime: '11',
      peekOff: '11',
      peekremarks: '100',
      peekduration: '11',
    },
  ];
  dialog = false;
  sending = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  Details = false;
  code = '';
  document = '';
  type = '';
  date = '';
  time = '';
  text = '';
  files = '';
  filter = '';
  unitoff = '';
  unitoffice = ['Accounting', 'Records Management Office', 'HRDO', 'CICS'];
  unitemp = '';
  unitemployee = ['Vice Chancelor', 'Secretary', 'Liason', 'Chairperson'];
  unittype = '';
  unitType = ['Communication Letter', 'Leave', 'Purchase Request'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>

<style lang="sass">
.my-sticky-column-table
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */

  thead tr:first-child th:first-child
    /* bg color is important for th; just specify one */
    background-color: #fff

  td:first-child
    background-color: #c1f4cd

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
</style>
