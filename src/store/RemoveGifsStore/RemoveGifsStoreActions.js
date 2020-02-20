export default ({ gifsApi }) => {
  async function removeGifs({ commit }, keyword) {
    if (!keyword) return;

    const gifs = await gifsApi.removeGifs(keyword);
    commit('removeGifs', gifs);
  }

  return {
    removeGifs,
  };
};