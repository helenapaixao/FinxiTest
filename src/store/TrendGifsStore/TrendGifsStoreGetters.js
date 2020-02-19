export default () => {
  function getGifs(state) {
    return state.gifs;
  }

  return {
    getGifs,
  };
};
