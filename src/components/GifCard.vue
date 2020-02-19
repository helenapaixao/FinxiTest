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

     <div>
   <!-- Button trigger modal -->
<button class="button is-primary modal-button" v-on:click="isShowModal = true">
  Informações
</button>

<div class="modal" v-bind:class="{ 'is-active': isShowModal }">
  <div class="modal-background" v-on:click="isShowModal = false"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{gifData.title}}</p>
      <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
    </header>
    <section class="modal-card-body">
     <img :src="gifData.imageUrl"/>
    </section>
    <footer class="modal-card-foot">
      <button class="button" v-on:click="isShowModal = false">Fechar</button>
    </footer>
  </div>
</div>
   </div>
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
      isShowModal: false
    };
  },

  methods: {
    openModal() {

    },
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
