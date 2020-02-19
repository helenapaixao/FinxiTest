<template>
  <section class="hero is-dark">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="@/assets/logo.svg" alt="Logo">
              <h1>Maior buscador de gif do mundo</h1>
            </a>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="field is-grouped">
          <div class="control has-icons-right is-expanded">
            <input
              v-model="searchInput"
              class="input is-rounded"
              type="text"
            />
          </div>

          <div class="control">
            <button @click="emitSearchKeyword" class="button is-info">Buscar</button>
          </div>

          <div class="control">
            <button @click="clearSearchKeyword" class="button">Limpar</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',

  model: {
    prop: 'keyword',
    event: 'submit',
  },

  props: {
    keyword: {
      type: String,
    },
  },

  data() {
    return {
      searchInput: '',
    };
  },

  methods: {
    emitSearchKeyword() {
      this.$emit('submit', this.searchInput);
    },

    clearSearchKeyword() {
      this.searchInput = '';
      this.$emit('submit', this.searchInput);
    },
  },
};
</script>
