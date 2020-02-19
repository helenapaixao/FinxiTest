<template>
  <div class="homepage">
    <Hero v-model="keyword" />

    <section v-if="keyword" class="section searched-gifs-container">
      <h1 class="title is-4">Procurando por: {{ keyword }}</h1>
      <GifsList :gifs="searchedGifs" />
    </section>

    <section v-else class="section trend-gifs-container">
      <h1 class="title is-4">Gifs mais populares</h1>
      <GifsList :gifs="trendGifs" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Hero from '@/components/Hero.vue';
import GifsList from '@/components/GifsList.vue';

export default {
  name: 'home',
  components: {
    Hero,
    GifsList,
  },

  async created() {
    await this.fetchTrendingGifs();
  },

  data() {
    return {
      keyword: '',
    };
  },

  watch: {
    keyword() {
      this.searchGifs(this.keyword);
    },
  },

  computed: {
    ...mapGetters({
      searchedGifs: 'SearchedGifsStore/getGifs',
      trendGifs: 'TrendGifsStore/getGifs',
    }),
  },

  methods: {
    ...mapActions({
      fetchTrendingGifs: 'TrendGifsStore/fetchTrendingGifs',
      searchGifs: 'SearchedGifsStore/searchGifs',
    }),
  },
};
</script>
