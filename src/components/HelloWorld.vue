<script lang="ts">
import { defineComponent, PropType, Ref, ref } from 'vue';

interface DocItem {
  img: string;
  title: string;
  text: string;
  url: string;
  cssClass: string;
  isFull?: boolean;
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: Object as PropType<String>,
      default: 'Boilerplate Vue 3, Typescript, Vuetify, FontAwesome, Pinia, Vue Router',
    },
  },
  setup() {
    const count: Ref<number> = ref(0);

    const docItems: DocItem[] = [
      {
        img: 'images/vue.svg',
        title: 'Vue',
        text: 'An approachable, performant and versatile framework for building web user interfaces.',
        url: 'https://vuejs.org/',
        cssClass: 'hello-world__title__vue',
      },
      {
        img: 'images/vite.svg',
        title: 'Vite',
        text: 'Get ready for a development environment that can finally catch up with you.',
        url: 'https://vitejs.dev/',
        cssClass: 'hello-world__title__vite',
      },
      {
        img: 'images/vuetify-logo-v3-dark.svg',
        title: 'Vuetify',
        text: 'Vuetify is a no design skills required UI Library with beautifully handcrafted Vue Components.',
        url: 'https://vuetifyjs.com/en/',
        cssClass: 'hello-world__title__vuetify',
      },
      {
        img: 'images/font-awesome-frameworks-developer.svg',
        title: 'Font Awesome',
        text: 'The internet\'s favorite icon set,used by millions of designers, developers, and content creators',
        url: 'https://fontawesome.com/icons',
        cssClass: 'hello-world__title__fa',
        isFull: true,
      },
      {
        img: 'images/pinia-logo.svg',
        title: 'Pinia',
        text: 'Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
        url: 'https://pinia.vuejs.org/',
        cssClass: 'hello-world__title__pinia',
      },
    ];

    return {
      count,
      docItems,
    };
  },
});
</script>

<template>
  <v-container>
    <h1>{{ msg }}</h1>
    <v-row class="mt-4">
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" v-for="(item, i) in docItems" :key="`docItem_${i}`">
        <v-card>
          <div
            class="hello-world__img"
            :class="{
                  'py-4': !item.isFull,
               }"
          >
            <div :class="`hello-world__title__bg ${item.cssClass}__bg`">
            </div>
            <v-img
                :aspect-ratio="16/9"
                :src="item.img"
                :class="{
                  'py-4': item.isFull,
               }"
                fit
              ></v-img>
          </div>
          <v-divider></v-divider>
          <v-card-title class="text-h4 font-weight-bold py-4">
            <span :class="item.cssClass">{{ item.title }}</span>
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn link :href="item.url">
              <v-icon class="mr-2">fad fa-arrow-up-right-from-square</v-icon>
              Go To Doc
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.hello-world {
  &__img {
    background-color: #333;
  }

  &__title {
    direction: ltr;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow-wrap: break-word;

    &__bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50%;
      position: absolute;
      border-radius: 50%;
      top:0%;
      left: 25%;
      z-index: 0;
      //opacity: 0.5;
    }

    &__vue {
      -webkit-text-size-adjust: 100%;
      --vt-c-indigo: #213547;
      --vt-c-text-light-1: var(--vt-c-indigo);
      --vt-c-text-1: var(--vt-c-text-light-1);
      font-family: var(--vt-font-family-base);
      color: var(--vt-c-text-1);
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      &__bg {
        --vue-home-hero-image-background-image: linear-gradient( 15deg, #42d392 65%, #647eff 30% );
        --vue-home-hero-image-filter: blur(64px);
        background-image: var(--vue-home-hero-image-background-image);
        filter: var(--vue-home-hero-image-filter);
      }
    }

    &__vite {
      -webkit-text-size-adjust: 100%;
      --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
      --vp-home-hero-image-filter: blur(72px);
      font-family: var(--vp-font-family-base);
      color: var(--vp-home-hero-name-color);
      background: var(--vp-home-hero-name-background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      &__bg {
        --vp-home-hero-image-background-image: linear-gradient( 15deg, #bd34fe 65%, #41d1ff 30% );
        --vp-home-hero-image-filter: blur(64px);
        background-image: var(--vp-home-hero-image-background-image);
        filter: var(--vp-home-hero-image-filter);
      }
    }

    &__vuetify {
      --vtf-home-hero-name-background: -webkit-linear-gradient(120deg, #AEDDFF 30%, #1866C0);
      color: var(--vtf-home-hero-name-background);
      background: var(--vtf-home-hero-name-background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      &__bg {
        --vtf-home-hero-image-background-image: linear-gradient( 15deg, #AEDDFF 65%, #1866C0 30% );
        --vtf-home-hero-image-filter: blur(64px);
        background-image: var(--vtf-home-hero-image-background-image);
        filter: var(--vtf-home-hero-image-filter);
      }
    }

    &__fa {
      --fa-home-hero-name-background: -webkit-linear-gradient(120deg, #1C7DD5 40%, #C2C7D1);
      color: var(--fa-home-hero-name-background);
      background: var(--fa-home-hero-name-background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      &__bg {
        --fa-home-hero-image-background-image: linear-gradient( 15deg, #1C7DD5 65%, #C2C7D1 30% );
        --fa-home-hero-image-filter: blur(64px);
        background-image: var(--fa-home-hero-image-background-image);
        filter: var(--fa-home-hero-image-filter);
      }
    }

    &__pinia {
      --pa-home-hero-name-background: -webkit-linear-gradient(120deg, #f7d336 40%, #8ae99c);
      color: var(--pa-home-hero-name-background);
      background: var(--pa-home-hero-name-background);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      &__bg {
        --pa-home-hero-image-background-image: linear-gradient( 15deg, #f7d336 65%, #8ae99c 30% );
        --pa-home-hero-image-filter: blur(64px);
        background-image: var(--pa-home-hero-image-background-image);
        filter: var(--pa-home-hero-image-filter);
      }
    }
  }
}
</style>
