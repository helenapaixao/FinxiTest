import axios from 'axios';
import Infra from '../Services/Infra/Requester/index';
import Models from './Models';

export default () => {
  const { request } = Infra({ axios });
  const { gifsApi } = Models({ request });

  return {
    gifsApi,
  };
};
