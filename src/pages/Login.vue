<template>
  <q-page class="bg-image">
    <div>
      <h2 class="flex flex-center text-black" style="weight-bolder">
        DOCUMENT TRACKING SYSTEM
      </h2>
    </div>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="width: 300px">
        <q-card class="absolute-center bg-blue-3" style="width: 450px">
          <div class="q-gutter-md q-pa-md">
            <div>
              <h4 class="flex flex-center text-black" style="weight-bolder">
                LOG IN
              </h4>
            </div>
            <q-input filled v-model="text" label="Username">
              <template v-slot:prepend>
                <q-icon name="people" />
              </template>
            </q-input>

            <q-input
              v-model="password"
              filled
              :type="isPwd ? 'password' : 'text'"
              label="Password"
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
            <div>
              <div class="q-pa-xs">
                <q-checkbox v-model="right" label="Remember my Password" />

                <div class="q-pa-md text-center">
                  Select User As <strong>{{ shape }}</strong>
                  <div class="q-gutter-xs">
                    <q-radio v-model="shape" val="Client" label="Client" />
                    <q-radio v-model="shape" val="Employee" label="Employee" />
                    <div class="q-pa-md q-gutter-md flex flex-center">
                      <q-btn
                        outline
                        color="deep-orange"
                        text-color="black"
                        label="LOG IN"
                        style="width: 300px"
                      />
                      <q-btn
                        outline
                        color="deep-blue"
                        label="SIGN UP"
                        to="Signingup"
                        style="width: 300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
  <q-page-container>
    <router-view />
  </q-page-container>
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
