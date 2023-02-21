<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroImage',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    isCentered: {
      type: Boolean,
      default: true,
    },
    imgURL: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: undefined,
    },
  },
});
</script>

<template>
  <v-parallax
    class="hero-image"
    :src="imgURL"
    :height="height"
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
.hero-image {
  img {
    filter: brightness(40%);
  }
}
</style>