<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue';
import HeroImage from './HeroImage.vue';
import { shuffle } from '../utils';
import { QuizzItem } from '../models/quizz.model';
import { quizzes } from '../data/quizzes';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'QuizzezLanding',
  components: {
    HeroImage,
  },
  setup() {
    let goodAnswers: Ref<number> = ref<number>(0);
    let currentQuestionIndex: Ref<number> = ref<number>(0);
    const route = useRoute();
    const id = route.params.id;
    let quizData: QuizzItem[] = quizzes[id as string];

    const currentQuestion = computed<QuizzItem>(() => {
      return quizData[currentQuestionIndex.value];
    });

    const canDisplayResult = computed<boolean>(() => {
      return currentQuestionIndex.value >= quizData.length;
    });

    const score = computed<number>(() => {
      return Math.round(goodAnswers.value / (quizData.length)*100);
    });

    function answerQuestion(index: number): void {
      if (index === currentQuestion.value.goodAnswerIndex) {
        goodAnswers.value++;
      }
      currentQuestionIndex.value++;
    }

    function resetTest(): void {
      quizData = shuffle(quizData);
      goodAnswers.value = 0;
      currentQuestionIndex.value = 0;
    }

    quizData = shuffle(quizData);

    return {
      quizData,
      currentQuestionIndex,
      currentQuestion,
      answerQuestion,
      goodAnswers,
      canDisplayResult,
      score,
      resetTest,
    };
  },
  computed: {},
});
</script>

<template>
  <v-container fluid class="justify-center align-center">
    <hero-image
      title="Single Quiz"
      height="120"
    >
    </hero-image>
    <v-card class="ma-auto mt-10 text-center" max-width="800">
      <template v-if="canDisplayResult">
        <v-card-title>
          Quizz over
        </v-card-title>
        <v-card-text>
          <span class="text-h1">{{score}}%</span>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn color="primary" to="/"><v-icon class="mr-2">fad fa-arrow-left</v-icon>More quizzez</v-btn>
          <v-btn color="secondary" @click="resetTest"><v-icon class="mr-2">fad fa-rotate-left</v-icon>Try Again</v-btn>
        </v-card-actions>
      </template>

      <template v-else >
        <v-card-title>
          Question {{ currentQuestionIndex + 1 }}
        </v-card-title>
        <v-card-text>
          {{ currentQuestion.question }}

          <v-list class="text-left">
            <v-list-item v-for="(answer, index) in currentQuestion.answers"
                         @click="answerQuestion(index)"
                         prepend-icon="fad fa-circle">
              {{ answer }}
            </v-list-item>
          </v-list>
        </v-card-text>
      </template>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
</style>
