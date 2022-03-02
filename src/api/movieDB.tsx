import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8c2e8c2aad4334e1e2f9adbdc23031e5',
    language: 'en-US',
  },
});

export default movieDB;
