<template>
  <q-header>
    <q-toolbar class="bg-white">
      <img src="~assets/image10.png" style="height: 70px; width: 70px" />

      <div class="text-h3 text-bold text-broadway text-brown absolute-center">
        MSU Document Tracking System
      </div>
    </q-toolbar>
  </q-header>
  <q-page class="bg-blue-3">
    <q-card
      class="absolute-right bg-blue-3"
      style="height: 400px; width: 400px"
    >
      <div class="q-pa-lg q-gutter-xs absolute-center">
        <q-btn
          color="grey-4"
          text-color="purple"
          outline
          style="color: goldenrod"
          label="Login with your Account"
          to="Login"
        />
        <q-btn
          color="grey-4"
          text-color="purple"
          outline
          style="color: goldenrod"
          label="Click here to sign up"
          to="Signingup"
        />
      </div>
    </q-card>
    <div class="q-pa-lg q-gutter-lg absolute-left">
      <q-carousel
        style="height: 500px; width: 1000px"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="../assets/images7.png" />
        <q-carousel-slide :name="2" img-src="../assets/image13.jpg" />
        <q-carousel-slide :name="3" img-src="../assets/image14.jpg" />
        <q-carousel-slide :name="4" img-src="../assets/image19.png" />
      </q-carousel>

      <div
        class="
          text-center text-h4 text-bold text-arial text-brown
          absolute-mid-top
        "
      >
        Welcome to the MSU Document Tracking System
      </div>
    </div>
  </q-page>
  <div class="text-center text-h6 text-arial text-brown q-pa-lg">
    The Document Tracking System (DTS) of Mindanao State University Main Campus
    (MSU-Main) is an information system capable of tracking the paper trail of
    documents created within MSU offices. The DTS includes information on the
    originating and receiving office and personnel, as well as the time elapsed
    between departments.
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>
