<template>
  <q-page class="bg-image">
    <div>
      <h3 class="text-black text-white" style="weight-bolder">SIGN UP here!</h3>
    </div>
    <div class="q-pa-md">
      <q-card class="absolute-center bg-blue-3" style="width: 500px">
        <div class="q-gutter-xs q-pa-md">
          <q-input filled v-model="Fname" label="FULL NAME" />
          <q-input filled v-model="em" label="EMAIL" />
          <q-input filled v-model="uname" label="USERNAME" />
          <q-select
            color="black"
            filled
            v-model="model"
            :options="options"
            label="STATUS"
          />

          <q-input
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

          <q-input
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
            class="glossy"
            rounded
            outline
            color="blue"
            text-color="black"
            label="CONFIRM"
            to="Login"
            style="width: 250px"
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
