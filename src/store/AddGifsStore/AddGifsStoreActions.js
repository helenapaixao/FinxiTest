export default ({ gifsApi }) => {
  async function addGifs({ commit }, keyword) {
    if (!keyword) return;

    const gifs = await gifsApi.addGifs(keyword);
    commit('addGifs', gifs);
  }

  return {
    addGifs,
  };
};