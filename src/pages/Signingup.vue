<template>
  <q-page class="bg-blue">
    <div>
      <h2 class="flex flex-center text-white" style="weight-bolder">
        SIGN UP Page
      </h2>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-card class="absolute-center" style="width: 450px">
          <div class="q-gutter-md q-pa-md">
            <q-input filled v-model="Fname" label="FULL NAME" />
            <q-input filled v-model="ad" label="ADDRESS" />
            <q-input filled v-model="em" label="EMAIL" />
            <q-input filled v-model="uname" label="USERNAME" />

            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'pass'"
              label="PASSWORD"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>

            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'pass'"
              label="PASSWORD"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>

         
             <div class="q-pa-md flex flex-center">
    <q-btn-dropdown  style="width: 200px" color="blue" label="Select User">
      <q-list class="bg-blue text-white ">
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Admin</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Client</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>User</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
     <div class="q-pa-md q-gutter-sm flex flex-center">
            <div class="flex flex-center">
              <q-btn
                color="blue"
                text-color="white"
                label="CONFIRM"
                to="Login"
                style="width: 200px"
              />
  </div>
            
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      Fname: '',
      ad: '',
      em: '',
      uname: '',
      pass: '',
      password: '',
      isPwd: ref(false),
    };
  },
};
</script>
