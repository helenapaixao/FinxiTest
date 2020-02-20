export default () => {
  function removeGifs(state, gifs) {
    state.gifs.splice(gifs,1);
  }

  return {
    removeGifs,
  };
};