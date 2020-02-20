export default () => {
  function currentGifs(state) {
    return state.gifs;
  }

  return {
    currentGifs,
  };
};