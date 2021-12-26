<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="move_to_inbox"
          color="deep-orange"
          style="font-size: 4rem"
        />
        Incoming Documents
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
          </div>
        </template>

        <template v-slot:body-cell-Actions="props">
          <q-td :props="props">
            <div class="q-gutter-sm">
              <q-btn
                round
                color="green"
                icon="mark_as_unread"
                size="sm"
                flat
                dense
                @click="editRow = true"
              />
              <q-dialog v-model="editRow" persistent>
                <q-card style="width: 900px">
                  <q-card-section class="row">
                    <div class="text-h6 text-bold">Receive Document?</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section align="center" class="q-gutter-md">
                    <div class="">
                     Please click CONFIRM if you want to receive the document.
                    </div>
                  </q-card-section>
                  <q-card-actions align="center">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn flat label="Confirm" color="primary" v-close-popup />
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
                      <q-input outlined dense />
                    </div>
                  </q-card-section>
                  <q-card-actions align="right">
                    <q-btn flat label="Cancel" color="red-10" v-close-popup />
                    <q-btn flat label="Save" color="primary" v-close-popup />
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
      name: 'file',
      align: 'center',
      label: 'FILE/PHOTO',
      field: 'file',
    },
    {
      name: 'type',
      align: 'center',
      label: 'TYPE',
      field: 'type',
    },
    {
      name: 'office',
      align: 'center',
      label: 'OFFICE',
      field: 'office',
    },
    {
      name: 'sender',
      align: 'center',
      label: 'SENDER',
      field: 'sender',
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
      office: 'Accounting',
      sender: 'Shidar',
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
  file = '';
  type = '';
  date = '';
  time = '';
  text = '';
  files = '';
  filter = '';

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
