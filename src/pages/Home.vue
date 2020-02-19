<template>
  <div>
    <Hero v-model="keyword"/>
    <section v-if="keyword" class="section searched-gifs-container">
      <h1 class="title is-4">Procurando o gif</h1>
    </section>
    <section>
      <h1>Gifs que podem salvar o mundo</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Hero
  },

  async created() {

  },

  data() {

  },
  watch: {

  },
  computed: {

  },
  methods: {

  },
};
</script>