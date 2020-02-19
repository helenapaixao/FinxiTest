<template>
  <div class="columns is-multiline">
    <div
      v-for="gif in gifs"
      :key="gif.id"
      class="column is-one-fifth gif-column"
    >
      <GifCard :gifData="gif" />
    </div>
  </div>
</template>

<script>
import GifCard from './GifCard.vue';

export default {
  name: 'GifsList',

  components: {
    GifCard,
  },

  props: {
    gifs: {
      type: Array,
    },
  },
};
</script>

<style>
</style>
