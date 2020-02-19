import GifsApi from './GifsApi';

export default ({ request }) => {
  const gifsApi = GifsApi({ request });

  return {
    gifsApi,
  };
};
