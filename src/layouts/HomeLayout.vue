<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 730px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-pink" style="height: 50px">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>MSU Document Tracking</q-toolbar-title>
         <div class="flex flex-right">
            <q-btn round dense icon="settings">
              <q-menu>
                <div class="row no-wrap q-pa-lg">
                  <div class="column items-center">
                    <q-avatar size="72px">
                      <img src="../assets/pics.jpg" />
                    </q-avatar>

                    <div class="text-subtitle6 q-mt-md q-mb-xs">Inshidar P. Panganting</div>
                    <q-separator horizontal inset class="q-mx-lg" />

                    <q-card
                      class="flex flex-center q-mb-lg"
                      style="width: 150px; height: 80px"
                    >
                      <q-btn
                        icon="person"
                        color="primary"
                        label="Profile"
                        push
                        size="sm"
                        v-close-popup to="AdminProfile"
                      />
                      <q-separator />
                      <q-btn
                        icon="logout"
                        color="primary"
                        label="Logout"
                        push
                        size="sm"
                        v-close-popup
                        to="Login"
                      />
                    </q-card>
                  </div>
                </div>
              </q-menu>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-list padding style=" margin-top: 150px; border-right: 1px solid #ddd">
            
          <q-item clickable v-ripple to="AllDoc">
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>

            <q-item-section> All Documents </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="TrackDoc">
            <q-item-section avatar>
              <q-icon name="trending_up" />
            </q-item-section>

            <q-item-section> Track Document </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="DocType">
            <q-item-section avatar>
              <q-icon name="assignment" />
            </q-item-section>

            <q-item-section> Documents Type </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Office">
            <q-item-section avatar>
              <q-icon name="apartment" />
            </q-item-section>

            <q-item-section> Office </q-item-section>
          </q-item>

           <q-item clickable v-ripple to="Users">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>

            <q-item-section> Users </q-item-section>
          </q-item>

        </q-list>
        <q-img class="absolute-top" src="../assets/unnamed.png" style="height: 150px; width: 250px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/images7.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      drawer: ref(false),
    };
  },
};
</script>
<style>
.bg-image
{
  background-image: url(../assets/image29.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}

</style>
