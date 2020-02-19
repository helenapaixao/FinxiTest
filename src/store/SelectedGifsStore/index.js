import GifsStoreActions from './SelectedGifsStoreActions';
import GifsStoreGetters from './SelectedGifsStoreGetters';
import GifsStoreMutations from './SelectedGifsStoreMutations';

export default ({ gifsApi }) => ({
  namespaced: true,
  actions: GifsStoreActions({ gifsApi }),
  getters: GifsStoreGetters(),
  mutations: GifsStoreMutations(),
  state: {
    selectedGif: {},
  },
});