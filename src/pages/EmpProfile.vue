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
              <img src="../assets/pics.jpg" />
            </q-avatar>
             </q-card-section
          ><br />
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-bold text-h5 ellipsis">Inshidar P. Panganting</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-pa-xs q-gutter-xs">
          <q-input outlined dense v-model="Fname" placeholder="FIRST NAME" />
          <q-input outlined dense v-model="Mname" placeholder="MIDDLE NAME"/>
          <q-input outlined dense v-model="Lname" placeholder="LAST NAME"/>
          <q-input outlined dense v-model="office" placeholder="OFFICE"/>
           <q-input outlined dense v-model="status" placeholder="STATUS"/>
             
              <div class="q-pa-md q-gutter-xs">
                <q-btn
                class="full-width"
                outline
                rounded
                color="blue-6"
                label="E D I T"
                
              />
             
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
  Fname = '';
  Mname = '';
  Lname = '';
  office = '';
  status = '';
  
}
</script>


