import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/pro-solid-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { App } from 'vue';

const vuetifyConfig = (app: App) => {
  app.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
  library.add(fad);
  library.add(fass);

  return createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
    theme: {
      defaultTheme: 'dark',
    }
  });
};


export {
  vuetifyConfig,
};