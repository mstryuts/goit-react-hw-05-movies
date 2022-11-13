import axios from 'axios';

const API_KEY = 'api_key=6fbec25b96d4d8cea73389e893def982';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrending = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day?${API_KEY}`);
  return data;
};

const getMovie = async q => {
  const { data } =
    await axios.get(`${BASE_URL}search/movie?${API_KEY}&query=${q}&include_adult=false
`);

  return data;
};

const getMovieById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);

  return data;
};

const getCastById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`);

  return data;
};

const getReviewsById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews?${API_KEY}`);

  return data;
};

export { getTrending, getMovie, getMovieById, getCastById, getReviewsById };
