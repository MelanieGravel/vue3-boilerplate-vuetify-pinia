<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from 'vue';
import { QuizzItem } from '../../models/quizz.model';

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
    let choice: Ref<number | undefined> = ref(undefined);
    let choices: Ref<number[]> = ref([]);

    let isAnswerButtonEnabled = computed<boolean>(() => {
      return choice.value !== undefined || choices.value.length > 0;
    });

    function answerQuestion(): void {
      if(props.currentQuestion.goodAnswerIndexes.length > 1) {
        emit('answerQuestion', choices.value);
      } else {
        emit('answerQuestion', [choice.value]);
      }
      choice.value = undefined;
      choices.value = [];
    }

    return {
      choice,
      choices,
      isAnswerButtonEnabled,
      answerQuestion,
    };
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

      <v-radio-group v-if="currentQuestion.goodAnswerIndexes.length === 1" v-model="choice">
        <v-radio v-for="(answer, index) in currentQuestion.answers"
                 :key="'radio_'+index"
                 :label="answer"
                 :value="index"
                 true-icon="fad fa-circle-dot"
                 false-icon="fad fa-circle"
        >
        </v-radio>
      </v-radio-group>


      <template v-else>
        <v-checkbox v-for="(answer, index) in currentQuestion.answers"
                    v-model="choices"
                    :key="'check_'+index"
                    :label="answer"
                    :value="index"
                    true-icon="fad fa-square-check"
                    false-icon="fad fa-square"
        >
        </v-checkbox>
      </template>
    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
        :disabled="!isAnswerButtonEnabled"
        @click="answerQuestion"
      >
        Next
        <v-icon class="ml-2">fad fa-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.hero-image {
  img {
    filter: brightness(40%);
  }
}
</style>