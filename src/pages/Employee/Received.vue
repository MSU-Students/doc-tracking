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
                  color="pink-10"
                  dense
                  flat
                  size="sm"
                  icon="navigation"
                  @click="addUser = true"
                />
                <q-dialog v-model="addUser">
                  <q-card style="width: 600px">
                    <q-card-section class="row flex flex-center">
                      <div class="text-h6">PREVIEW DETAILS</div>
                      <q-space />
                      <q-btn flat round dense icon="close" v-close-popup />
                    </q-card-section>

                    <q-card-section class="q-gutter-md">
                      <q-btn-dropdown color="primary" label="Release">
                        <q-list>
                          <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                              <q-item-label>Release</q-item-label>
                            </q-item-section>
                          </q-item>

                          <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                              <q-item-label>Hold</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-btn-dropdown>

                      <q-btn-dropdown color="primary" label="Release">
                        <q-list>
                          <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                              <q-item-label>Accounting Office</q-item-label>
                            </q-item-section>
                          </q-item>

                          <q-item clickable v-close-popup @click="onItemClick">
                            <q-item-section>
                              <q-item-label
                                >Office of the President</q-item-label
                              >
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-btn-dropdown>
                    </q-card-section>

                    <q-card-actions align="center">
                      <q-btn flat label="Close" color="red-10" v-close-popup />
                      <q-btn flat label="Print" color="primary" v-close-popup />
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
                      <q-btn flat label="Save" color="primary" v-close-popup />
                      <q-dialog v-model="save" persistent>
                        <q-card>
                          <q-card-section class="row items-center">
                            <q-avatar
                              icon="signal_wifi_off"
                              color="primary"
                              text-color="white"
                            />
                            <span class="q-ml-sm"
                              >Documents Released Successfully.</span
                            >
                          </q-card-section>

                          <q-card-actions align="right">
                            <q-btn
                              flat
                              label="Confirm"
                              color="primary"
                              v-close-popup
                            />
                          </q-card-actions>
                        </q-card>
                      </q-dialog>
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
  fname = '';
  username = '';
  password = '';
  email = '';
  save = '';
  filter = '';
  options = ['Admin', 'Employee'];

  onItemClick() {
    console.log('Clicked!');
  }
}
</script>
