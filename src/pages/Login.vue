<template>
   <q-header>
      <q-toolbar class="bg-white">
        <img src="~assets/image10.png" style="height: 70px; width: 70px" />

        <div class="text-h3 text-bold text-broadway text-pink absolute-center">
          MSU Document Tracking System
        </div>
      </q-toolbar>
    </q-header>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card 
          v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '25%' }"
        >
          <q-card-section>
            <q-avatar size="125px" class="absolute-center shadow-10">
              <img src="../assets/images7.png" />
            </q-avatar>
             </q-card-section
          ><br />
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-bold text-h5 ellipsis">DTS</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-pa-xs q-gutter-xs">
              <q-input
                v-model="username"
                label="Username"
                :rules="[
                  (val) => (val && val.length > 0) || 'Input your Username',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="people" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                :rules="[
                  (val) => (val && val.length > 0) || 'Input your password',
                ]"
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
             
              <div class="q-pa-md q-gutter-xs">
                <q-btn
                class="full-width"
                outline
                rounded
                color="blue-6"
                label="Login"
                 @click="loginUser()"
              />
              <div class="flex flex-center q-pa-md q-gutter-sm" >
              <div>Don't have an account?
                <q-btn align="middle" flat color="primary" label="Sign Up" to="Signingup"/>
                </div>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
@Options({})
export default class Login extends Vue {
  username = '';
  password = '';
  isPwd = true;

  async loginUser() {
    if (this.username == 'Admin' && this.password == 'Admin') {
      await this.$router.replace('/Dashboard');
      this.$q.notify('You are logged in');
    } else {
      this.username = '';
      this.password = '';
      this.$q.notify('Wrong Username and Password!!');
    }
  }
}
</script>


