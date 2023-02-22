<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import HeroImage from './common/HeroImage.vue';

interface GradientColor {
  color: string;
  gradientPosText: string;
  gradientPosBg: string;
}

interface DocItem {
  title: string;
  text: string;
  url: string;
  img?: string;
  icon?: string;
  colors?: GradientColor[];
  isFull?: boolean;
}

export default defineComponent({
  name: 'QuizzezLanding',
  components: {
    HeroImage,
  },
  setup() {
    const count: Ref<number> = ref(0);

    const docItems: DocItem[] = [
      {
        icon: 'fab fa-atlassian',
        title: 'Atlassian',
        text: 'Run a world-class agile software company—from discovery to delivery and operations.',
        url: '/quizz/atlassian',
        colors: [
          {
            color: '#0065FF',
            gradientPosText: '25%',
            gradientPosBg: '65%',
          },
          {
            color: '#DEEBFF',
            gradientPosText: '',
            gradientPosBg: '30%',
          },
        ],
      },
      {
        icon: 'fab fa-aws',
        title: 'AWS',
        text: 'Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform.',
        url: '/quizz/aws',
        colors: [
          {
            color: '#eb6008',
            gradientPosText: '25%',
            gradientPosBg: '65%',
          },
          {
            color: '#527fff',
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
      title="Quizzes"
      :height="320"
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
              v-if="item.img"
              class="useful-links__card__img"
              :aspect-ratio="16/9"
              :src="item.img"
              :class="{
                  'py-4': item.isFull,
               }"
              fit
            ></v-img>
            <div
              v-if="item.icon"
              class="d-flex align-center justify-center"
            >
              <v-icon
                class="my-8"
                size="240"
              >
                {{ item.icon }}
              </v-icon>
            </div>
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
            <v-btn link :to="item.url">
              Go To Quizz
              <v-icon class="ml-2">fad fa-right</v-icon>
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
