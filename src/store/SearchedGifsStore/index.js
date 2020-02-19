import GifsStoreActions from './SearchedGifsStoreActions';
import GifsStoreGetters from './SearchedGifsStoreGetters';
import GifsStoreMutations from './SearchedGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  getters: GifsStoreGetters(),
  mutations: GifsStoreMutations(),
  state: {
    gifs: [],
  },
});
