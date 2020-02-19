export default({gifsApi}) => {
  async function searchGifs({commit}, keyword) {
    const gifs = await gifsApi.searchGifs(keyword);
    commit('setGifs',gifs);
  }
  return {
    searchGifs,
  };
};