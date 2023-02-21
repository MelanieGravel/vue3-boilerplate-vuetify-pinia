<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import { useDisplay } from 'vuetify';
import FakeDataView from './components/FakeDataView.vue';

export default defineComponent({
  name: 'App',
  components: {
    FakeDataView,
  },
  setup() {
    const menuOpen: Ref<boolean> = ref(true);
    const { mdAndUp } = useDisplay();

    return {
      menuOpen,
      mdAndUp,
    }
  },
});
</script>

<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-nav-icon class="d-sm-none" icon="fad fa-bars" @click="menuOpen = !menuOpen"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-h5"><v-icon color="vue">fab fa-vuejs</v-icon> Vue 3 Boilerplate</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="menuOpen"
      :expand-on-hover="mdAndUp"
      :rail="mdAndUp"
    >
      <v-list density="compact" nav>
        <v-list-item
          title="Home"
          to="/"
          prepend-icon="fass fa-home"
        ></v-list-item>
        <v-list-item
          title="Fake"
          to="/fake"
          prepend-icon="fass fa-robot-astromech"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped>
</style>
