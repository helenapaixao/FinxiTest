import GifsStoreActions from './AddGifsStoreActions';
import GifsStoreGetters from './AddGifsStoreGetters';
import GifsStoreMutations from './AddGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  getters: GifsStoreGetters(),
  mutations: GifsStoreMutations(),
  state: {
    gifs: [],
  },
});