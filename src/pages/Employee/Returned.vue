<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="collections_bookmark"
          color="deep-orange"
          style="font-size: 4rem"
        />
        Hold Documents
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
                color="pink"
                icon="drafts"
                size="sm"
                flat
                dense
                @click="editRow = true"
              />
              <q-dialog v-model="editRow" persistent>
                <q-card style="width: 700px">
                  <q-card-section class="row">
                    <div class="text-h6">Return</div>
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
                        <br />
                        <div class="text-subtitle1 text-bold">To:</div>
                        <q-select
                          class="bg-white"
                          outlined
                          v-model="unitreturn"
                          :options="unitReturn"
                          dense
                          label="Employee"
                        />
                        <br />

                        <div class="text-subtitle1 text-bold">To:</div>
                        <q-select
                          class="bg-white"
                          outlined
                          v-model="unitoffice"
                          :options="unitOffice"
                          dense
                          label="Office"
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
      name: 'status',
      align: 'center',
      label: 'STATUS',
      field: 'status',
    },
    {
      name: 'employee',
      align: 'center',
      label: 'EMPLOYEE',
      field: 'employee',
    },
    {
      name: 'office',
      align: 'center',
      label: 'OFFICE',
      field: 'office',
    },
    { name: 'comment', align: 'center', label: 'COMMENTS', field: 'comment' },
    { name: 'Actions', align: 'center', label: 'Actions', field: 'Actions' },
  ];
  rows = [
    {
      code: '20186327',
      document: 'Testing',
      status: 'Returned',
      employee: 'Azimah',
      office: 'CICS',
      type: 'Communication Letter',
      comment: 'blabjdhsga',
    },
  ];

  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  Details = false;
  code = '';
  document = '';
  employee = '';
  office = '';
  status = '';
  type = '';
  date = '';
  time = '';
  text = '';
  unitreturn = '';
  unitReturn = ['Vice Chancelor', 'Secretary', 'Chairperson'];
  unitoffice = '';
  unitOffice = ['Accounting', 'Records Management Office', 'HRDO', 'CICS'];
  files = '';
  filter = '';

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
