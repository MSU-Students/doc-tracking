<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="account_circle"
          color="light-blue-6"
          style="font-size: 4rem"
        />
        Track Documents
      </div>
      <q-card class="q-gutter-y-md column flex flex-center">
        <div  style="width: 900px" >

      <q-input filled bottom-slots v-model="text" label="Enter the barcode here">

        <template v-slot:after>
          <q-btn square dense flat icon="search"  label="Track" color="blue"/>
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
        <template v-slot:top-right>
        
        </template>
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component';
interface IRow {
  name: string;
}
@Options({})
export default class ManageAccount extends Vue {
  columns = [
   
    {
      name: 'DateReceived',
      align: 'center',
      label: 'Date Received',
      field: 'document',
    },
    {
      name: 'Off',
      align: 'center',
      label: 'Office',
      field: 'document',
    },
     {
      name: 'DateReleased',
      align: 'center',
      label: 'Date Released',
      field: 'document',
    },
    {
      name: 'OffReleased',
      align: 'center',
      label: 'Office',
      field: 'document',
    },

    { name: 'status', align: 'center', label: 'Status', field: 'type' },
    {
      name: 'Remarks',
      align: 'center',
      label: 'Remarks',
      field: 'document',
    },
    {
      name: 'duration',
      align: 'center',
      label: 'Duration',
      field: 'datetime',
    },

  ];
  rows = [
    
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = '';
  username = '';
  password = '';
  email = '';
  role = '';
  filter = '';
  options = ['Admin', 'Employee'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
