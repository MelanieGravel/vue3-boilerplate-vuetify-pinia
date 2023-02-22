<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue';
import HeroImage from './HeroImage.vue';
import { shuffle } from '../utils';
import { QuizzItem, QuizzMistake } from '../models/quizz.model';
import { quizzes } from '../data/quizzes';
import { useRoute, useRouter } from 'vue-router';
import QuestionCard from './QuestionCard.vue';

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
    let quizData: QuizzItem[] = quizzes[id as string];
    let quizMistakes: Ref<QuizzMistake[]> = ref([]);

    const currentQuestion = computed<QuizzItem>(() => {
      return quizData[currentQuestionIndex.value];
    });

    const canDisplayResult = computed<boolean>(() => {
      return currentQuestionIndex.value >= quizData.length;
    });

    const score = computed<number>(() => {
      return Math.round(goodAnswers.value / (quizData.length) * 100);
    });

    function answerQuestion(answerIndex: number): void {
      console.log('quiz ', answerIndex);
      if (answerIndex === currentQuestion.value.goodAnswerIndex) {
        goodAnswers.value++;
      } else {
        quizMistakes.value.push(
          {
            question: currentQuestion.value.question,
            goodAnswer: currentQuestion.value.answers[currentQuestion.value.goodAnswerIndex],
            wrongAnswer: currentQuestion.value.answers[answerIndex],
            explanation: currentQuestion.value.explanation || '',
          },
        );
      }
      currentQuestionIndex.value++;
    }

    function resetTest(): void {
      quizData = shuffle(quizData);
      goodAnswers.value = 0;
      currentQuestionIndex.value = 0;
      quizMistakes.value = [];
    }

    quizData = shuffle(quizData);

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
      title="Single Quiz"
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
              <v-card-subtitle class="text-error">
                <v-icon class="mr-4">fad fa-circle-xmark</v-icon>
                {{ mistake.wrongAnswer }}
              </v-card-subtitle>
              <v-card-subtitle class="text-success text-primary-lighten-1">
                <v-icon class="mr-4">fad fa-circle-check</v-icon>
                {{ mistake.goodAnswer }}
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
