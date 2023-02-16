import { App } from 'vue';

import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// import '../styles/settings.scss';
// import 'vuetify/lib/styles/main.sass';

const vuetifyConfig = (app: App) => {
  app.component('font-awesome-icon', FontAwesomeIcon); // Register component globally
  library.add(fad);
  library.add(fass);
  library.add(fab);

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
    },
  });
};


export {
  vuetifyConfig,
};