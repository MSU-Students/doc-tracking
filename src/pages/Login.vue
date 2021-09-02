<template>
  <q-page class="bg-image">
    <q-header>
      <q-toolbar class="bg-white">
        

        <div class="text-h3 text-bold text-broadway text-pink absolute-center">
          Document Tracking System
        </div>
      </q-toolbar>
    </q-header>

    <div
      class="q-gutter-md q-pa-md absolute-center bg-white"
      style="width: 450px; height: 550px"
    >
      <div>
        <h4 class="flex flex-center text-blue text-bold">
          Sign into your Account
        </h4>
      </div>

      <q-input class="bg-blue-3" filled v-model="text" placeholder="Username">
        <template v-slot:prepend>
          <q-icon name="people" />
        </template>
      </q-input>

      <q-input
        class="bg-blue-3"
        placeholder="Password"
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <div class="q-pa-xs">
        <q-checkbox v-model="right" label="Remember me" />

        <div class="q-pa-xs text-center">
          Select User As <strong>{{ shape }}</strong>
          <div class="q-gutter-xs">
            <q-radio v-model="shape" val="Client" label="Client" />
            <q-radio v-model="shape" val="Employee" label="Employee" />
            <div class="q-pa-lg q-gutter-md">
              <q-btn
                outline
                rounded
                color="primary"
                label="LOG IN"
                style="width: 300px"
             
              />
             <q-btn
                outline
                rounded
                color="primary"
                label="SIGN UP" to="Signingup"
                style="width: 300px"
             
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      text: ref(''),
      password: ref(''),
      isPwd: ref(true),
      shape: ref(''),
      right: ref(true),
    };
  },
};
</script>
