import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { vuetifyConfig } from './plugins/vuetify';
import router from './router';

const app = createApp(App);

app.use(createPinia())
  .use(vuetifyConfig(app))
  .use(router)
  .mount('#app');
