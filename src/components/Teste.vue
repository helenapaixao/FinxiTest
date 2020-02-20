<template>
  <div class="product-box">
    <div class="product-image">
      <img>
      <!-- <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews"/> -->
    </div>
    <div>
      <h2>teste</h2>
      <span>teste</span>
      <btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(currentGifs)">
        Buy Now
      </btn>
      <btn btnColor="btn btn-large btn-info"
          @click.native="openModal()">
        More Info
      </btn>
    </div>
    <modal>{{ currentGifs.details }}</modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import btn from './Btn';
// import stars from './Stars';
// import modal from './Modal';

export default {
  components: {
    // btn,
    // stars,
    // modal,
  },

  computed: {
    ...mapGetters({
      currentGifs: 'getCurrentGif',
    }),
  },

  methods: {
    ...mapActions([
      'addGifs',
      'showOrHiddenModal',
    ]),
    addProductToCart(gif) {
      this.addProduct(gif);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;
  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
