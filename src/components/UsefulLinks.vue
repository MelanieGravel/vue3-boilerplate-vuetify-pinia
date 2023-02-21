<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import HeroImage from './HeroImage.vue';

interface GradientColor {
  color: string;
  gradientPosText: string;
  gradientPosBg: string;
}

interface DocItem {
  img: string;
  title: string;
  text: string;
  url: string;
  cssClass: string;
  colors?: GradientColor[];
  isFull?: boolean;
}

export default defineComponent({
  name: 'UsefulLinks',
  components: {
    HeroImage,
  },
  setup() {
    const count: Ref<number> = ref(0);

    const docItems: DocItem[] = [
      {
        img: 'images/vue.svg',
        title: 'Vue',
        text: 'An approachable, performant and versatile framework for building web user interfaces.',
        url: 'https://vuejs.org/',
        cssClass: 'vue',
        colors: [
          {
            color: '#42d392',
            gradientPosText: '25%',
            gradientPosBg: '65%',
          },
          {
            color: '#647eff',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
      {
        img: 'images/vuetify-logo-v3-dark.svg',
        title: 'Vuetify',
        text: 'Vuetify is a no design skills required UI Library with beautifully handcrafted Vue Components.',
        url: 'https://vuetifyjs.com/en/',
        cssClass: 'vuetify',
        colors: [
          {
            color: '#56b8ff',
            gradientPosText: '30%',
            gradientPosBg: '65%',
          },
          {
            color: '#1866c0',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
      {
        img: 'images/font-awesome-frameworks-developer.svg',
        title: 'Font Awesome',
        text: 'The internet\'s favorite icon set,used by millions of designers, developers, and content creators',
        url: 'https://fontawesome.com/icons',
        cssClass: 'fa',
        isFull: true,
        colors: [
          {
            color: '#1c7dd5',
            gradientPosText: '25%',
            gradientPosBg: '65%',
          },
          {
            color: '#FFD43B',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
      {
        img: 'images/pinia-logo.svg',
        title: 'Pinia',
        text: 'Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
        url: 'https://pinia.vuejs.org/',
        cssClass: 'pinia',
        colors: [
          {
            color: '#f7d336',
            gradientPosText: '40%',
            gradientPosBg: '65%',
          },
          {
            color: '#8ae99c',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
      {
        img: 'images/vite.svg',
        title: 'Vite',
        text: 'Get ready for a development environment that can finally catch up with you.',
        url: 'https://vitejs.dev/',
        cssClass: 'vite',
        colors: [
          {
            color: '#bd34fe',
            gradientPosText: '30%',
            gradientPosBg: '65%',
          },
          {
            color: '#41d1ff',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
    ];

    function gradient(colors: GradientColor[], isBackground: boolean = false): string {
      let gradientStyle = 'linear-gradient(';
      gradientStyle += isBackground ? '15deg' : '315deg';
      colors.forEach(function (e: GradientColor) {
        gradientStyle += isBackground ? `, ${e.color} ${e.gradientPosBg}` : `, ${e.color} ${e.gradientPosText}`;
      });
      gradientStyle += ')';
      return `background: ${gradientStyle}`;
    }

    return {
      count,
      docItems,
      gradient,
    };
  },
});
</script>

<template>
  <v-container fluid>
    <hero-image
      title="Melanie Gravel's Boilerplate"
      subtitle="Boilerplate Vue 3, Typescript, Vuetify, FontAwesome, Pinia, Vue Router. It's not your to build your own application!"
      img-u-r-l="/images/ml_hero.jpeg"
    >
    </hero-image>
    <v-row class="mt-4">
      <v-col cols="12" sm="6" md="6" lg="4" xl="3" v-for="(item, i) in docItems" :key="`docItem_${i}`">
        <v-card :class="`useful-links__card ${item.cssClass}`">
          <div
            class="useful-links__card__wrapper"
            :class="{
                  'py-4': !item.isFull,
               }"
          >
            <div class="useful-links__card__bg" :style="gradient(item.colors, true)"></div>
            <v-img
              class="useful-links__card__img"
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
            <span class="useful-links__card__title" :style="gradient(item.colors, false)">{{ item.title }}</span>
          </v-card-title>
          <!--          <v-card-subtitle>-->
          <!--            {{ gradient(item.colors, false) }}-->
          <!--          </v-card-subtitle>-->
          <v-card-text class="useful-links__card__text">
            {{ item.text }}
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn link :href="item.url" target="_blank">
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
.useful-links {
  &__card {

    &__wrapper {
      background-color: #000;
    }

    &__bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 50%;
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 25%;
      direction: ltr;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      box-sizing: border-box;
      overflow-wrap: break-word;
      -webkit-font-smoothing: antialiased;
      filter: blur(48px);
    }

    &__title {
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
      -webkit-text-size-adjust: 100%;
    }

    &__text {
      min-height: 56px;
    }
  }
}
</style>
