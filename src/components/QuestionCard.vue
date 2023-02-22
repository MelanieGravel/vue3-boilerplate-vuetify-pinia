<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { QuizzItem } from '../models/quizz.model';

export default defineComponent({
  name: 'QuestionCard',
  props: {
    questionNumber: {
      type: Number,
      required: true,
    },
    currentQuestion: {
      type: Object as PropType<QuizzItem>,
      required: true,
    },
  },
  emits: ['answerQuestion'],
  setup(props, {emit}) {
    function answerQuestion(answerIndex: number): void {
      console.log('card ', answerIndex);
      emit('answerQuestion', answerIndex);
    }

    return {
      answerQuestion,
    }
  },
});
</script>

<template>
  <v-card class="ma-auto mt-10 text-center" max-width="800">
    <v-card-title>
      Question {{ questionNumber + 1 }}
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
  </v-card>
</template>

<style lang="scss">
.hero-image {
  img {
    filter: brightness(40%);
  }
}
</style>