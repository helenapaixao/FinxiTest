export default () => {
  function removeGifs(state) {
    return state.gifs;
  }

  return {
    removeGifs,
  };
};