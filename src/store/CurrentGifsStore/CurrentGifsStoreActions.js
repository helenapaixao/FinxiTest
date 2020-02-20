export default ({ gifsApi }) => {
  async function currentGifs({ commit }, keyword) {
    if (!keyword) return;

    const gifs = await gifsApi.currentGifs(keyword);
    commit('currentGifs', gifs);
  }

  return {
    currentGifs,
  };
};