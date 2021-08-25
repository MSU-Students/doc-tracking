<template>
<q-page class="bg-blue">


<div>
  <h2 class="flex flex-center text-white"  style="weight-bolder"> Signing Page</h2> 
 
</div>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-card class="absolute-center" style="width: 300px">
        <div class="q-gutter-md">
            
          <q-input filled v-model="text" label="FULL NAME" />
          <q-input filled v-model="text" label="ADDRESS" />
          <q-input filled v-model="text" label="EMAIL" />
          <q-input filled v-model="text" label="USERNAME" />

          <q-input
            v-model="password"
            filled
            :type="isPwd ? 'password' : 'text'"
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

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="PASSWORD">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
          </template>
      </q-input>
          
        </div>

        <div class="q-pa-md q-gutter-sm flex flex-center">
          <div>
            <q-btn
              color="blue"
              text-color="white"
              label="CONFIRM" to="Login"
              style="width: 250px"
            />
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
      text: '',
      password:'',
      isPwd: ref(true),
    };
  },
};
</script>
