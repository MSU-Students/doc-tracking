<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="trending_up"
          color="deep-orange"
          style="font-size: 4rem"
        />
        Track Documents
      </div>

      <br />
      <q-card class="q-gutter-y-md column flex flex-center">
        <div style="width: 900px">
          <q-input
            filled
            bottom-slots
            v-model="text"
            placeholder="Enter the barcode here"
          >
            <template v-slot:after>
              <q-btn
                square
                dense
                flat
                icon="trending_up"
                label="Track"
                color="blue"
              />
            </template>
          </q-input>
        </div>
      </q-card>

      <br />

      <q-table
        title="Records"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :rows-per-page-options="[0]"
        :filter="filter"
      >
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  datereceived: string;
}

@Options({})
export default class ManageAccount extends Vue {
  columns = [
    {
      name: 'datereceived',
      required: true,
      label: 'DATE RECEIVED',
      align: 'left',
      field: (row: IRow) => row.datereceived,
      format: (val: string) => `${val}`,
    },
    {
      name: 'off',
      align: 'center',
      label: 'Office',
      field: 'off',
    },
    {
      name: 'datereleased',
      align: 'center',
      label: 'Date Released',
      field: 'datereleased',
    },
    {
      name: 'offreleased',
      align: 'center',
      label: 'Office',
      field: 'offreleased',
    },

    { name: 'status', align: 'center', label: 'Status', field: 'status' },
    {
      name: 'remarks',
      align: 'center',
      label: 'Remarks',
      field: 'remarks',
    },
    {
      name: 'duration',
      align: 'center',
      label: 'Duration',
      field: 'duration',
    },
  ];
  rows = [
    {
      datereceived: 'Oct 2, 2021',
      off: 'Accounting',
      datereleased: 'Oct 2, 2021',
      offreleased: 'HRDO',
      status: 'Released',
      remarks: 'Testing',
      duration: '0 Days 0 hrs 1 min',
    },
  ];
  text = '';
  filter = '';
}
</script>
