<template>
  <q-page class="bg-image">
    <div class="q-pa-md">
      <div class="text-h4 text-bold">
        <q-icon
          name="account_circle"
          color="light-blue-6"
          style="font-size: 4rem"
        />
        All Documents
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
              flat
              icon="add"
              @click="addUser = true"
            />
            <q-dialog v-model="addUser">
              <q-card style="width: 350px">
                <q-card-section class="row">
                  <div class="text-h6">Add Documents</div>
                  <q-space />
                  <q-btn flat round dense icon="close" v-close-popup />
                </q-card-section>

                <q-card-section class="q-gutter-md">
                  <q-input outlined v-model="name" label="Title" />
                  <div class="q-pa-md" style="max-width: 300px">
                    <q-input
                      label="Description"
                      v-model="text"
                      filled
                      type="textarea"
                    />
                  </div>

                  <q-btn-dropdown label="Type" style="width: 300px">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Communication Letter</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Contract of Service</q-item-label>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <q-item-label>Leave</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>

                   <div class="q-pa-md" style="max-width: 300px">
                    <q-input
                      label="Purpose"
                      v-model="text"
                      filled
                      type="textarea"
                    />
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
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <div>
              <q-td>
                  <q-btn
                  color="green"
                  icon="navigation"
                  size="sm"
                  class="q-ml-sm"
                  flat
                  round
                  dense
                  @click="prev= true"
                />
                <q-dialog v-model="prev">
                  <q-card style="width: 350px">
                    <q-card-section class="row">
                      <div class="text-h6">PREVIEW DETAILS</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md">
                      <q-input filled v-model="text" :dense="dense" label="table dapat aya ka history na "/>
                    </q-card-section>

                    <q-card-actions align="right">
                      <q-btn flat label="Close" color="red-10" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
                
                <q-btn
                  color="green"
                  icon="shopping_cart"
                  size="sm"
                  class="q-ml-sm"
                  flat
                  round
                  dense
                  @click="editRow = true"
                />
                <q-dialog v-model="editRow">
                  <q-card style="width: 350px">
                    <q-card-section class="row">
                      <div class="text-h6">CODE</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md">
                      <q-input filled v-model="text" :dense="dense" />
                    </q-card-section>

                    <q-card-actions align="center">
                      <q-btn flat label="Close" color="red-10" v-close-popup />
                      <q-btn flat label="Print" color="primary" v-close-popup />
                    </q-card-actions>
                  </q-card>
                </q-dialog>
             
                <q-btn
                  color="red-10"
                  icon="delete"
                  size="sm"
                  class="q-ml-sm"
                  flat
                  round
                  dense
                  @click="dialog = true"
                />
                
                <q-dialog v-model="dialog" persistent>
                  <q-card style="width: 300px">
                    <q-card-section class="row items-center">
                      <q-avatar
                        size="sm"
                        icon="warning"
                        color="red-10"
                        text-color="white"
                      />
                      <span class="q-ml-sm">Confirm Delete?</span>
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
                        color="primary"
                        v-close-popup
                      />
                    </q-card-actions>
                    
                  </q-card>
                </q-dialog>

              </q-td>
            </div>

            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
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
      name: 'code',
      required: true,
      label: 'CODE',
      align: 'left',
      field: (row: IRow) => row.name,
      format: (val: string) => `${val}`,
    },
    {
      name: 'document',
      align: 'center',
      label: 'DOCUMENT',
      field: 'document',
    },
    { name: 'type', align: 'center', label: 'Type', field: 'type' },
    {
      name: 'datetime',
      align: 'center',
      label: 'DATE / TIME',
      field: 'datetime',
    },

  ];
  rows = [
    {
      code: '10110010001',
      document: 'Testing',
      type: 'leave',
      datetime: 'September 02, 2021 / 2pm',
     
    },
    {
      code: '02131031001',
      document: 'dunno',
      type: 'communication letter',
      datetime: 'September 02, 2021 / 2pm',
     
    },
  ];
  dialog = false;
  cancelEnabled = true;
  addUser = false;
  editRow = false;
  name = '';
  text = '';
  dense = '';
  username = '';
  password = '';
  prev = '';
  email = '';
  role = '';
  filter = '';
  options = ['Admin', 'Employee'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
