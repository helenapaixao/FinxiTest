<template>
  <div class="card">
    <div class="card-image">
      <img class="image" :src="gifData.downsampledUrl" :alt="gifData.title" />
    </div>
    <footer class="card-footer">
      <span v-if="wasCopied" class="card-footer-item copied-clipboard-text">
        Gif salvo!
      </span>

      <a v-else @click="share(gifData.url)" class="card-footer-item share-button">
        Salvar Gif
      </a>

      <div>
        <div class="control">
        <button class="button is-primary modal-button" v-on:click="isShowModal = true">
          Detalhe
        </button>
        </div>
        <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
          <div class="modal-background" v-on:click="isShowModal = false"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">{{ gifData.title }}</p>
              <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
            </header>
            <section class="modal-card-body">
              <img class="image" :src="gifData.downsampledUrl" :alt="gifData.title" />
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
import copyToClipboard from "@/utils/copyToClipboard";

export default {
  name: "GifCard",

  props: {
    gifData: {
      type: Object
    }
  },

  data() {
    return {
      wasCopied: false,
      isShowModal: false
    };
  },

  methods: {
    openModal() {},
    share(url) {
      this.wasCopied = true;
      copyToClipboard(url);

      setTimeout(() => {
        this.wasCopied = false;
      }, 1000);
    },
    saveToFavorite(id) {
      this.$store.commit('addToFavourite',id);
    },
    removeToFavorite(id) {
      this.$store.commit('removeFromFavorite',id);
    }
  }
};
</script>

<style></style>
