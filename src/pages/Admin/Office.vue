<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="apartment"
          color="blue-10"
          style="font-size: 4rem"
        />
        Office
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
              label="Create Office"
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
                  <div class="text-h6">Create Office</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <div class="center-7">
                    <div class="text-subtitle1 text-bold">Office</div>
                    <q-input outlined dense />
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
                icon="edit"
                size="sm"
                flat
                dense
                @click="editRow = true"
              />
              <q-dialog v-model="editRow" persistent>
                <q-card style="width: 900px">
                  <q-card-section class="row">
                    <div class="text-h6">Edit Office</div>
                    <q-space />
                    <q-btn flat round dense icon="close" v-close-popup />
                  </q-card-section>

                  <q-card-section class="q-gutter-md">
                    <div class="center-7">
                      <div class="text-subtitle1 text-bold">Office</div>
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
  office: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: 'office',
      required: true,
      label: 'OFFICE',
      align: 'left',
      field: (row: IRow) => row.office,
      format: (val: string) => `${val}`,
    },
    { name: 'Actions', align: 'center', label: 'Actions', field: 'Actions' },
  ];
  rows = [
    {
      office: 'Accounting',
    },
    {
      office: 'HRDO',
    },
    {
      office: 'Budget Office',
    },
  ];

  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  code = '';
  files = '';
  filter = '';

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
