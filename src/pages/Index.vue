<template>
  <q-page class="bg-blue-3 flex flex-center absolute-mid-center">
    <div
      class="
        text-center text-h4 text-bold text-arial text-brown
        absolute-mid-top
      "
    >
      Welcome to the MSU Document Tracking System
    </div>
    <div class="q-pa-lg" style="width: 600px">
      <q-option-group
        v-model="navPos"
        :options="navigationPositions"
        color="purple"
        inline
        class="q-mb-md"
      />

      <q-carousel
        v-model="slide"
        swipeable
        animated
        :navigation-position="navPos"
        navigation
        padding
        height="300px"
        class="bg-purple text-black rounded-borders flex-center"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <q-header>
      <q-toolbar class="bg-white">
        <img src="~assets/Logo_MSU60th.jpg" style="height: 70px; width: 70px" />

        <div class="text-h3 text-bold text-broadway text-brown absolute-center">
          MSU Document Tracking System
        </div>
      </q-toolbar>
    </q-header>

    <div
      class="
        text-center text-h3 text-bold text-arial text-brown
        q-pt-lg
        absolute-bottom
      "
    >
      Welcome to the MSU Document Tracking System

      <div class="text-center text-h6 text-arial text-brown q-pa-lg">
        The Document Tracking System (DTS) of Mindanao State University Main
        Campus (MSU-Main) is an information system capable of tracking the paper
        trail of documents created within MSU offices. The DTS includes
        information on the originating and receiving office and personnel, as
        well as the time elapsed between departments.
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      navPos: ref('bottom'),
      navigationPositions: [],

      slide: ref('style'),
      lorem: 'bghdfghjkl',
    };
  },
};
</script>
