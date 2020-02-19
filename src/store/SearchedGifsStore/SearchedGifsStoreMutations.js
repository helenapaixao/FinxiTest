export default () => {
  function setGifs(state, gifs) {
    state.gifs = gifs;
  }

  return {
    setGifs,
  };
};
