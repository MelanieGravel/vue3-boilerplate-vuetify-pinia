<template>
  <v-toolbar>
    <v-btn @click="createItem" color="primary">
      <v-icon class="mr-2">fad fa-plus</v-icon>
      Add Fake Item
    </v-btn>
    <v-btn @click="deleteAllItems" color="error">
      <v-icon class="mr-2">fad fa-trash</v-icon>
      Clear All
    </v-btn>
  </v-toolbar>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :title="`${item.name} (${item.quantity})`"
      :subtitle="item.description"
    >
      <template v-slot:append>
        <v-btn @click="updateItem(item.id)" variant="tonal" color="info" class="mr-2">
          <v-icon class="mr-2">fad fa-pen</v-icon>
          Update
        </v-btn>
        <v-btn @click="deleteItem(item.id)" variant="tonal" color="error">
          <v-icon class="mr-2">fad fa-xmark</v-icon>
          Delete
        </v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { FakeItem, generateFakeData } from '../models/fake.model';
import { useFakeStore } from '../store/fake';

export default defineComponent({
  name: 'FakeDataView',
  setup() {
    const items = ref<FakeItem[]>([]);
    const fakeStore = useFakeStore();
    onMounted(() => {
      items.value = fakeStore.items;
    });

    function createItem() {
      fakeStore.createNewItem(generateFakeData());
    }

    function deleteItem(id: string) {
      fakeStore.deleteItem(id);
    }

    function updateItem(id: string) {
      fakeStore.updateItem(id, generateFakeData());
    }

    function deleteAllItems() {
      fakeStore.deleteAllItems();
    }

    return {
      items,
      createItem,
      deleteItem,
      updateItem,
      deleteAllItems,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>