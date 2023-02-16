import { defineStore } from 'pinia';
import { FakeItem, generateFakeData } from '../models/fake.model';

export type RootState = {
  items: FakeItem[];
};

export const useFakeStore = defineStore({
  id: 'fakeStore',
  state: () =>
    ({
      items: [],
    } as RootState),

  actions: {
    createNewItem(item: FakeItem) {
      if (!item) return;

      this.items.push(item);
    },

    updateItem(id: string, payload: FakeItem) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = generateFakeData();
      }
    },

    deleteItem(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    deleteAllItems() {
      this.items.splice(0, this.items.length);
    },

    findIndexById(id: string) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});