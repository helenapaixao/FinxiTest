export default () => {
  function addGifs(state, gifs) {
    state.gifs.push(gifs);
  }

  return {
    addGifs,
  };
};