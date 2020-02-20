import GifsStoreActions from './RemoveGifsStoreActions';
import GifsStoreGetters from './RemoveGifsStoreGetters';
import GifsStoreMutations from './RemoveGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  getters: GifsStoreGetters(),
  mutations: GifsStoreMutations(),
  state: {
    gifs: [],
  },
});