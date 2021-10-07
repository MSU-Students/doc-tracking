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
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-list padding class="menu-list">

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

          <q-item clickable v-ripple to="Incoming">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> INCOMING </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Returned">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> RETURNED </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="TrackDocs">
            <q-item-section avatar>
              <q-icon name="Logout" />
            </q-item-section>

            <q-item-section> TRACK DOCUMENTS </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="LandingPage">
            <q-item-section avatar>
              <q-icon name="logout" />
            </q-item-section>

            <q-item-section> LOGOUT </q-item-section>
          </q-item>

        </q-list>
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
<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>
