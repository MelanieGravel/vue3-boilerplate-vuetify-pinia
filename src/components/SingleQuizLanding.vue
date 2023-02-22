<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue';
import HeroImage from './common/HeroImage.vue';
import { shuffle } from '../utils';
import { Quizz, QuizzItem, QuizzMistake } from '../models/quizz.model';
import { quizzes } from '../data/quizzes';
import { useRoute } from 'vue-router';
import QuestionCard from './common/QuestionCard.vue';
import { isEqual, sortBy } from 'lodash';

export default defineComponent({
  name: 'QuizzezLanding',
  components: {
    HeroImage,
    QuestionCard,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    let goodAnswers: Ref<number> = ref<number>(0);
    let currentQuestionIndex: Ref<number> = ref<number>(0);
    let quizData: Quizz = quizzes[id as string];
    let quizQuestions: QuizzItem[] = quizData.questions;
    let quizMistakes: Ref<QuizzMistake[]> = ref([]);

    const currentQuestion = computed<QuizzItem>(() => {
      return quizQuestions[currentQuestionIndex.value];
    });

    const canDisplayResult = computed<boolean>(() => {
      return currentQuestionIndex.value >= quizQuestions.length;
    });

    const score = computed<number>(() => {
      return Math.round(goodAnswers.value / (quizQuestions.length) * 100);
    });

    function answerQuestion(answerIndexes: number[]): void {
      if (isEqual(sortBy(answerIndexes), currentQuestion.value.goodAnswerIndexes)) {
        goodAnswers.value++;
      } else {
        const correctAnswers = currentQuestion.value.goodAnswerIndexes.map((value) => {
          return currentQuestion.value.answers[value];
        });
        const userAnswers = answerIndexes.map((value) => {
          return currentQuestion.value.answers[value];
        });
        quizMistakes.value.push(
          {
            question: currentQuestion.value.question,
            correctAnswers,
            userAnswers,
            explanation: currentQuestion.value.explanation || '',
          },
        );
      }
      currentQuestionIndex.value++;
    }

    function resetTest(): void {
      quizQuestions = shuffle(quizQuestions);
      goodAnswers.value = 0;
      currentQuestionIndex.value = 0;
      quizMistakes.value = [];
    }

    quizQuestions = shuffle(quizQuestions);

    return {
      quizData,
      currentQuestionIndex,
      currentQuestion,
      goodAnswers,
      canDisplayResult,
      score,
      quizMistakes,
      answerQuestion,
      resetTest,
    };
  },
  computed: {},
});
</script>

<template>
  <v-container fluid class="justify-center align-center">
    <hero-image
      :title="quizData.title"
      :height="120"
    >
    </hero-image>
    <template v-if="canDisplayResult">
      <v-card class="ma-auto mt-10 text-center" max-width="800">

        <v-card-title>
          Quizz over
        </v-card-title>
        <v-card-text>
          <p class="text-h1">{{ score }}%</p>

          <v-card class="text-left">
            <template v-for="(mistake) in quizMistakes">
              <v-card-text class="text-subtitle-1 text-white">{{ mistake.question }}</v-card-text>
              <v-card-subtitle
                class="text-error"
                v-for="(userAnswer, index) in mistake.userAnswers"
                :key="'userAnswer_'+index"
              >
                <v-icon class="mr-4">fad fa-circle-xmark</v-icon>
                {{ userAnswer }}
              </v-card-subtitle>
              <v-card-subtitle
                class="text-success text-primary-lighten-1"
                v-for="(correctAnswer, index) in mistake.correctAnswers"
                :key="'correctAnswer'+index"
              >
                <v-icon class="mr-4">fad fa-circle-check</v-icon>
                {{ correctAnswer }}
              </v-card-subtitle>
              <v-card-text class="text-grey">{{ mistake.explanation }}</v-card-text>
            </template>
          </v-card>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-around">
          <v-btn color="primary" to="/">
            <v-icon class="mr-2">fad fa-arrow-left</v-icon>
            More quizzez
          </v-btn>
          <v-btn color="secondary" @click="resetTest">
            <v-icon class="mr-2">fad fa-rotate-left</v-icon>
            Try Again
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>

    <template v-else>
      <question-card
        :questionNumber="currentQuestionIndex"
        :currentQuestion="currentQuestion"
        @answerQuestion="answerQuestion">
      </question-card>
    </template>
  </v-container>
</template>

<style scoped lang="scss">
</style>
