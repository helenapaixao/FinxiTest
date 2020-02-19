import HttpMethods from './HttpMethods';

export default ({ axios }) => {
  const requestRawInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  const { interceptors: { request } } = requestRawInstance;

  request.use((config) => {
    const { rawParams = {} } = config;
    const params = Object.assign(rawParams, {
      api_key: process.env.VUE_APP_API_KEY,
    });

    return {
      ...config,
      params,
    };
  });

  return HttpMethods({ requestRawInstance });
};
