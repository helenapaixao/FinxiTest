import Requester from './Requester';

export default ({ axios }) => {
  const request = Requester({ axios });

  return {
    request,
  };
};
