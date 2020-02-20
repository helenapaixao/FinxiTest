import GifsStoreActions from './CurrentGifsStoreActions';
import GifsStoreGetters from './CurrentGifsStoreGetters';
import GifsStoreMutations from './CurrentGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  getters: GifsStoreGetters(),
  mutations: GifsStoreMutations(),
  state: {
    gifsCurrent: {},
  },
});