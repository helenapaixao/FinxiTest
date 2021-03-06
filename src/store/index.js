import Vue from 'vue';
import Vuex from 'vuex';
import SearchedGifsStore from './SearchedGifsStore';
import TrendGifsStore from './TrendGifsStore';
import RemoveGifsStore from './RemoveGifsStore';


import Services from '@/Services';

const { gifsApi } = Services();

const modules = {
  SearchedGifsStore: SearchedGifsStore({ gifsApi }),
  TrendGifsStore: TrendGifsStore({ gifsApi }),
  RemoveGifsStore: RemoveGifsStore({gifsApi}),

};

Vue.use(Vuex);
const store = new Vuex.Store({ modules });

export default store;