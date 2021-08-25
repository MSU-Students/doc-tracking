<template>
<q-page class="bg-blue">


<div>
  <h2 class="flex flex-center text-white"  style="weight-bolder"> DOCUMENT TRACKING SYSTEM</h2> 
 
</div>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-card class="absolute-center" style="width: 300px">
        <div class="q-gutter-md">
          <q-input filled v-model="text" label="Username" />

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
          </q-input>
        </div>

   <div class="q-pa-md text-center">
    <div class="q-gutter-sm">
      <q-radio v-model="shape" val="client" label="Client" />
      <q-radio v-model="shape" val="employee" label="Employee" />
      
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
  </div>

        <div class="q-pa-md q-gutter-sm flex flex-center">
          <div>
            <q-btn
              color="blue"
              text-color="white"
              label="Log In"
              style="width: 250px"
            />
          </div>
          <q-btn
            color="blue"
            label="Sign Up"
            to="Signingup"
            style="width: 250px"
          />
        </div>
      </q-card>
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
    };
  },
};
</script>
