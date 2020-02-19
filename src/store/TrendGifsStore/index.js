import TrendGifsStoreActions from './TrendGifsStoreActions';
import TrendGifsStoreGetters from './TrendGifsStoreGetters';
import TrendGifsStoreMutations from './TrendGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: TrendGifsStoreActions({ gifsApi }),
  getters: TrendGifsStoreGetters(),
  mutations: TrendGifsStoreMutations(),
  state: {
    gifs: [],
  },
});
