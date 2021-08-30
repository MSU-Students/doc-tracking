<template>
  <q-page class="bg-image">
    <q-header>
      <q-toolbar class="bg-white">
        <div class="text-h3 text-bold text-broadway text-pink absolute-center">
          Document Tracking System
        </div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md">
      <q-card class="absolute-center bg-white" style="width: 500px">
        <div class="q-gutter-md q-pa-md">
          <div>
        <h4 class="flex flex-center text-blue text-bold">
          Create Account
        </h4>
      </div>
          <q-input class="bg-blue-3" filled v-model="Fname" label="NAME" />
          <q-input class="bg-blue-3" filled v-model="em" label="EMAIL" />

          <q-select class="bg-blue-3"
            color="black"
            filled
            v-model="model"
            :options="options"
            label="STATUS"
          />

          <q-input class="bg-blue-3"
            v-model="pass"
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

          <q-input class="bg-blue-3"
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'pass'"
            label="CONFIRM PASSWORD"
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
        <div class="q-pa-xl q-gutter-md flex flex-center">
          <q-btn
                outline
                rounded
                color="primary"
                label="Sign Up" to="Login"
                style="width: 300px"
              />
         
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      Fname: '',
      em: '',
      uname: '',
      pass: '',
      password: '',
      isPwd: ref(true),
      model: ref(null),

      options: ['Employee', 'Client'],
    };
  },
};
</script>
