export default () => {
  function currentGifs(state, gifs) {
    state.currentGifs = gifs;
  }

  return {
    currentGifs,
  };
};