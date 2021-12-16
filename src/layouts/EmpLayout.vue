<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 730px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-blue-10" style="height: 50px">
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
                        v-close-popup to="EmpProfile"
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

      <q-drawer class="bg-blue-3" v-model="drawer" show-if-above :width="250" :breakpoint="500">
        <q-list padding style="margin-top: 150px; border-right: 1px solid #ddd">
          <q-item clickable v-ripple to="Documents">
            <q-item-section avatar>
              <q-icon name="source" />
            </q-item-section>

            <q-item-section> DOCUMENTS </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="Incoming">
            <q-item-section avatar>
              <q-icon name="move_to_inbox" />
            </q-item-section>

            <q-item-section> INCOMING </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Received">
            <q-item-section avatar>
              <q-icon name="mark_as_unread" />
            </q-item-section>

            <q-item-section> RECEIVED </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Outgoing">
            <q-item-section avatar>
              <q-icon name="call_missed_outgoing" />
            </q-item-section>

            <q-item-section> OUTGOING </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Hold">
            <q-item-section avatar>
              <q-icon name="label_important" />
            </q-item-section>

            <q-item-section> HOLD </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="Returned">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> RETURNED </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="TrackDocs">
            <q-item-section avatar>
              <q-icon name="stacked_line_chart" />
            </q-item-section>

            <q-item-section> TRACK DOCUMENTS </q-item-section>
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
      drawerRight: ref(false),
    };
  },
};
</script>
<style>
.bg-image {
  background-image: url(../assets/image9.jpg);
  background-blend-mode: overlay;
  background-position: center;
  background-size: 100%;
}
</style>
