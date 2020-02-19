import axios from './node_modules/axios';
import Infra from './Infra';
import Models from './Models';

export default () => {
  const { request } = Infra({ axios });
  const { gifsApi } = Models({ request });

  return {
    gifsApi,
  };
};
