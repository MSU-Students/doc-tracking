<template>

  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
     

      <q-input v-model="ph" label="Email"  placeholder="type your email"  />
    </div>
  </div>

  <div class="q-pa-md q-gutter-sm">
    
    <div class="q-gutter-md">
      
      <q-btn outline color="primary" label="Outline" />
      <q-btn outline rounded color="primary" label="Outline Rounded" />
    </div>
  </div>
  
  <div class="q-pa-md absolute-center" style="width: 300px">
    <div class="q-gutter-md">
      <q-select v-model="model" :options="options" label="Standard" />

      <q-select filled v-model="model" :options="options" label="Filled" />
    </div>
  </div>
   <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-input v-model="password" filled type="password" hint="Password" />

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-input v-model="email" filled type="email" hint="Email" />

      <q-input v-model="search" filled type="search" hint="Search">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>

     
    </div>
  </div>
  
</template>
