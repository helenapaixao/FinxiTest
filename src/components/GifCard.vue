<template>
  <div class="card">
    <div class="card-image">
      <img
        class="image"
        :src="gifData.downsampledUrl"
        :alt="gifData.title"
      />
    </div>
    <footer class="card-footer">
      <span
        v-if="wasCopied"
        class="card-footer-item copied-clipboard-text"
      >
        Gif favoritado!
      </span>

      <a
        v-else
        @click="share(gifData.url)"
        class="card-footer-item share-button"
      >
        Favoritar
      </a>
    </footer>
  </div>
</template>

<script>
import copyToClipboard from '@/utils/copyToClipboard';

export default {
  name: 'GifCard',

  props: {
    gifData: {
      type: Object,
    },
  },

  data() {
    return {
      wasCopied: false,
    };
  },

  methods: {
    share(url) {
      this.wasCopied = true;
      copyToClipboard(url);

      setTimeout(() => { this.wasCopied = false; }, 1000);
    },
  },
};
</script>

<style>
</style>
