<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 730px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-black" style="height: 50px">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>MSU Document Tracking</q-toolbar-title>
          <div class="flex flex-right">
          <q-btn outline style="color: white;" label="LOGOUT" to="Login"/>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-list padding style=" margin-top: 150px; border-right: 1px solid #ddd">
            
          <q-item clickable v-ripple to="Documents">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> DOCUMENTS </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="Incoming">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> INCOMING </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Received">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> RECEIVED </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Outcoming">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> OUTGOING </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Returned">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> RETURNED </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="TrackDocs">
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section> TRACK DOCUMENTS </q-item-section>
          </q-item>

        </q-list>
        <q-img class="absolute-top" src="../assets/unnamed.png" style="height: 150px; width: 250px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/images7.png">
            </q-avatar>
            <div class="text-weight-bold">Employee Account</div>
            <div>@emp.1234</div>
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
  background-image: url(../assets/image15.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}

</style>
