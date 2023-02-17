import { App } from 'vue';

import 'vuetify/styles';

import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { aliases, fa } from 'vuetify/iconsets/fa-svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


const boilerplateDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#212121',
    'surface-variant': '#BDBDBD',
    'on-surface-variant': '#424242',
    primary: '#BB86FC',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC5',
    'secondary-darken-1': '#03DAC5',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    vue: '#42d392',
  },
};

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
      defaultTheme: 'boilerplateDarkTheme',
      themes: {
        boilerplateDarkTheme,
      },
    },
  });
};


export {
  vuetifyConfig,
};