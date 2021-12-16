<template>
<q-page class="bg-image">
  <div class="q-pa-md">
    <div class="text-h4 text-bold">
      <q-icon
        name="mark_as_unread"
        color="deep-orange"
        style="font-size: 4rem"
      />
      Received Documents
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
            label="Create Documents"
            color="primary"
            dense
            size="13px"
            flat
            icon="add"
            @click="addUser = true"
          />
          <q-dialog v-model="addUser" persistent>
            <q-card style="width: 900px">
              <q-card-section class="row">
                <div class="text-h6">Add Documents</div>
                <q-space />
                <q-btn flat round dense icon="close" v-close-popup />
              </q-card-section>

              <q-card-section class="q-gutter-md">
                <div class="row">
                  <div class="col col-md-8">
                    <q-input
                      class="q-py-md"
                      outlined
                      v-model="code"
                      placeholder="CODE"
                    />
                    <q-input
                      class="q-py-md"
                      outlined
                      v-model="document"
                      label="DOCUMENT"
                    />
                    <q-input
                      class="q-py-md"
                      outlined
                      v-model="type"
                      label="TYPE"
                    />
                  </div>
                  <div class="col-md-4 q-pl-md">
                    <q-input
                      class="q-py-md"
                      outlined
                      v-model="date"
                      label="DATE"
                    />
                    <q-input
                      class="q-py-md"
                      outlined
                      v-model="time"
                      label="TIME"
                    />

                    <div class="q-py-md">
                      <q-file
                        v-model="files"
                        label="Upload File"
                        filled
                        multiple
                        style="max-width: 300px"
                      >
                        <template v-slot:prepend>
                          <q-icon name="photo_camera" />
                        </template>
                      </q-file>
                    </div>
                  </div>
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
      
      <template v-slot:body-cell-Actions="props">
        <q-td :props="props">
          <div class="q-gutter-sm">

            <q-btn
              round
              color="blue"
              icon="send"
              size="sm"
              flat
              dense
              @click="editRow = true"
            />
            <q-dialog v-model="editRow" persistent>
              <q-card style="width: 500px; max-width: 50vw">
                <q-card-section class="row">
                  <div class="text-h6">Document</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <div class="center">
                    <div class="col col-md-8">
                       <div class="text-subtitle1 text-bold">Code</div>
                    <q-input
                      class="bg-white"
                      outlined
                      v-model="code"
                      dense
                    />
                    <br/>
                      <div class="text-subtitle1 text-bold">Action:</div>
                    <q-select
                     class="bg-white"
                    outlined
                       v-model="unitAct"
                       :options="unitAction"
                       dense
                       label="Status"
                      />
                      <br/>
                 <div class="text-subtitle1 text-bold">To:</div>
                    <q-select
                     class="bg-white"
                    outlined
                       v-model="unitToo"
                       :options="unitTo"
                       dense
                       label="Office"
                      />
                       <br/>
                 <div class="text-subtitle1 text-bold">To:</div>
                    <q-select
                     class="bg-white"
                    outlined
                       v-model="unitemployee"
                       :options="unitEmployee"
                       dense
                       label="Employee"
                      />
                    </div>
                    
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Send" color="primary" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>
            <q-btn
              round
              color="red"
              icon="print"
              size="sm"
              flat
              dense
              @click="dialog = true"
            />
            <q-dialog v-model="dialog" persistent>
              <q-card style="width: 400px">
                <q-card-section class="row">
                  <div class="text-h4 text-bold">CODE</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                   <div class="center-7">
                    <q-input
                      outlined
                      dense
                    />
                  </div>
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn flat label="Cancel" color="red-10" v-close-popup />
                  <q-btn flat label="Send" color="primary" v-close-popup />
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
      name: 'peektype',
      align: 'center',
      label: 'TYPE',
      field: 'peektype',
    },
  ];
  Peekrows = [
    {
      peek: 'Accounting',
      peektype: 'Leave',
     
    },
  ];
  dialog = false;
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
  unitAct = '';
  unitAction = ['Release', 'Hold'];
  unitToo = '';
  unitTo = ['Accounting', 'Records Management Office', 'HRDO', 'CICS'];
  unitemployee = '';
  unitEmployee = ['Vice Chancellor', 'Chairperson', 'Secretary', 'Liason'];
  files = '';
  filter = '';

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
