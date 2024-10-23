import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?apikey=66522c28';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${API_URL}&s=${query}`);
  return response.data.Search || [];
};
