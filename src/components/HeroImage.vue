<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroImage',
  props: {
    title: {
      type: String,
      default: 'Hero Image',
    },
    subtitle: {
      type: String,
      default: 'Build your application today!',
    },
    isCentered: {
      type: Boolean,
      default: true,
    }
  },
  setup() {

  },
});
</script>

<template>
  <v-parallax
    src="/images/ml_hero.jpeg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 text-md-h3 text-lg-h2 text-xl-h1 text-vue">
        {{ title }}
      </h1>
      <h4 class="text-subtitle-1">
        {{ subtitle }}
      </h4>
    </div>
  </v-parallax>
</template>

<style lang="scss">

</style>