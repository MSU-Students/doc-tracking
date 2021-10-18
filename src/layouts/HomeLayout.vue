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
            <q-btn-dropdown
              class="glossy"
              outline
              style="color: white"
              icon="person"
            >
              <div class="row no-wrap q-pa-md">
                <div class="column items-center">
                  <q-avatar size="50px">
                    <img src="../assets/unnamed.png" />
                  </q-avatar>

                  <div class="text-subtitle1 q-mt-md q-mb-xs">Admin</div>

                  <q-btn
                    color="primary"
                    label="Logout"
                    to="Login"
                    push
                    size="sm"
                    v-close-popup
                  />
                </div>
              </div>
            </q-btn-dropdown>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-list padding style="margin-top: 150px; border-right: 1px solid #ddd">
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
        </q-list>
        <q-img
          class="absolute-top"
          src="../assets/unnamed.png"
          style="height: 150px; width: 250px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../assets/images7.png" />
            </q-avatar>
            <div class="text-weight-bold">Admin Account</div>
            <div>@admin</div>
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
.bg-image {
  background-image: url(../assets/image19.png);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>
