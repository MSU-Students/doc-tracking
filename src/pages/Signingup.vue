<template>
  <q-page class="bg-image">
    <div>
      <h2 class=" text-black flex flex-center text-white" style="weight-bolder">
        SIGN UP PAGE
      </h2>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-card class="absolute-center bg-blue-5" style="width: 450px">
          <div class="q-gutter-md q-pa-md">
            <q-input filled v-model="Fname" label="FULL NAME" />
            <q-input filled v-model="ad" label="ADDRESS" />
            <q-input filled v-model="em" label="EMAIL" />
            <q-input filled v-model="uname" label="USERNAME" />

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

          <div class="q-pa-xs flex flex-center bg-blue-5">
            <div class="q-pa-md" style="width: 300px">
              <div class="q-gutter-md bg-blue" >
                <q-select
                  color="black" 
                  filled
                  v-model="model"
                  :options="options"
                  label="STATUS"
                />
              </div>
            </div>
            <div class="q-pa-xs q-gutter-sm flex flex-center">
              <div class="flex flex-center">
                <q-btn
                  color="blue"
                  text-color="black"
                  label="CONFIRM"
                  to="Login"
                  style="width: 300px"
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
      isPwd: ref(true),
      model: ref(null),

      options: ['Employee', 'Client'],
    };
  },
};
</script>
