export default ({ requestRawInstance }) => {
  async function get(path) {
    const { data } = await requestRawInstance.get(path);
    return data;
  }

  return {
    get,
  };
};
