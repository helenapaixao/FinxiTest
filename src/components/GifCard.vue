<template>
<div class="card">
  <div class="card-image">
    <img
    class="image"/>
    <footer class="card-footer">
      <span
      v-if="wasfaved"
      class="card-footer-item copied-clipboard-text">
      Gif Favoritado
      </span>
      <a
      v-else
      @click="teste"
      class="card-footer-item share-button">
  Favoritar
      </a>
    </footer>
  </div>
</template>
<script>
export default {
  name:'CardGif',
  data() {

  },
  methods: {

  },
}
</script>