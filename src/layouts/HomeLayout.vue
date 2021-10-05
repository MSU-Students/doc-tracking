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
          <q-item clickable v-ripple to="AllDoc">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> All Documents </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="TrackDoc">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Track Document </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="DocType">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Documents Type </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Office">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Office </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="ManageAccount">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Manage Account </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="LandingPage">
            <q-item-section avatar>
              <q-icon name="Logout" />
            </q-item-section>

            <q-item-section> Logout </q-item-section>
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
