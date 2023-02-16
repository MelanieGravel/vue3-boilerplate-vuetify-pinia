<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import FakeDataView from './components/FakeDataView.vue';


export default defineComponent({
  name: 'App',
  components: {
    FakeDataView,
  }
});
</script>

<template>
  <v-layout>
    <v-app-bar title="Quizzez"></v-app-bar>
    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Home" to="/"></v-list-item>
        <v-list-item title="Fake" to="/fake"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
