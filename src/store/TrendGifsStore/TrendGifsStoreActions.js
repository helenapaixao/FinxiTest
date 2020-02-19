  
export default ({ gifsApi }) => {
  async function fetchTrendingGifs({ commit }) {
    const gifs = await gifsApi.getTrendingGifs();

    commit('setGifs', gifs);
  }

  return {
    fetchTrendingGifs,
  };
};