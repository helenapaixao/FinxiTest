export default ({ gifsApi }) => {
  async function searchGifs({ commit }, keyword) {
    if (!keyword) return;

    const gifs = await gifsApi.searchGifs(keyword);
    commit('setGifs', gifs);
  }

  return {
    searchGifs,
  };
};