import reduceGifObjects from './mappers/reduceGifObjects';

export default ({ request }) => {
  async function getTrendingGifs() {
    try {
      const { data: rawGifs } = await request.get('/gifs/trending');
      return rawGifs.map(reduceGifObjects);
    } catch (error) {
      console.error('[GifsApi/getTrendingGifs]', error);
    }

    return null;
  }

  async function searchGifs(keyword) {
    try {
      const { data: rawGifs } = await request.get(`/gifs/search?q=${keyword}`);
      return rawGifs.map(reduceGifObjects);
    } catch (error) {
      console.error('[GifsApi/searchGifs]', error);
    }

    return null;
  }
//   async function deleteGifs(gif) {
//     try{
      
//     }
//     this.$http.delete('http://localhost:3000/cars/' + id)
//     .then(() => {              
//         commit('DELETE_CAR', id)
//     })
// }

//       return null;
//   }
  return {
    getTrendingGifs,
    searchGifs,
  };
};