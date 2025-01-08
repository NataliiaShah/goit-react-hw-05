
import axios from 'axios';

const API_TOKEN = '8aba4e3419a44727b7eb66f35fce4fa2';
const BASE_URL = 'https://api.themoviedb.org/3';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchTrendingMovies = async page => {
  const { data } = await instance.get('/trending/movie/day', {
    params: { page },
  });
  return { movies: data.results, totalPages: data.total_pages };
};

export const fetchSearchMovies = async (query, page) => {
  const { data } = await instance.get('/search/movie', {
    params: { query, page, language: 'en-US' },
  });
  return { movies: data.results, totalPages: data.total_pages };
};

export const fetchMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data.results;
};