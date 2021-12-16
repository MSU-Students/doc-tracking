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
            <h4 class="flex flex-center text-blue text-bold">Create Account</h4>
          </div>
          <q-input class="bg-blue-3" filled v-model="Fname" label="FIRST NAME" />
          <q-input class="bg-blue-3" filled v-model="Mname" label="MIDDLE NAME"/>
          <q-input class="bg-blue-3" filled v-model="Lname" label="LAST NAME"/>
          <q-input class="bg-blue-3" filled v-model="office" label="OFFICE"/>
           <q-input class="bg-blue-3" filled v-model="status" label="STATUS"/>

        </div>
        <div class="q-pa-md q-gutter-sm flex flex-center" >
     <q-btn color="red" label="Back" icon="close" to="Login"/>     
    <q-btn label="Register" color="primary" @click="prompt = true" />


    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Create Your Account</div>
        </q-card-section>

        <q-card-section class="q-pt-md q-gutter-md">
          <q-input filled v-model="Uname" label="USERNAME" />

      <q-input v-model= "password" filled :type="isPwd ? 'password' : 'text'" label="PASSWORD">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
        </q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn outline color="red" flat label="Close" icon="close" v-close-popup />
          <q-btn outline color="green" flat label="Save" icon="add" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
      Mname: '',
      Lname: '',
      Uname: '',
      office: '',
      status: '',
      password: '',
      isPwd: ref(true),
      prompt: ref(false),
      model: ref(null),

    };
  },
};
</script>
