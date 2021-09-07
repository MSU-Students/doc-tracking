<template>
  <div class="q-pa-md absolute-center">
    <div class="q-gutter-y-md column" style="width: 600px">
     
      <q-input class="text-italic" filled v-model="ph" placeholder="Enter barcode here" />
      <q-btn outline style="color: goldenrod;" color="grey-4" text-color="primary" glossy unelevated icon="shopping_cart" label="Track" />
      
    
      
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false)
    }
  }
}
</script>