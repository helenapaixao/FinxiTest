import axios from 'axios';
import Infra from './Infra';
import Models from './Models';

export default () => {
  const { request } = Infra({ axios });
  const { gifsApi } = Models({ request });

  return {
    gifsApi,
  };
};
