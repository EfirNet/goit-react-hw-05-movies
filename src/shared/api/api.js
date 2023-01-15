import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const APIKEY = '90ff20d482691dd64f3226f1017ad871';

export const getMovie = async (page = 1) => {
  const {
    data: { results },
  } = await instance.get('trending/movie/day', {
    params: {
      api_key: APIKEY,
      page,
    },
  });
  return results;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`, {
    params: {
      api_key: APIKEY,
    },
  });
  return data;
};

export const getMoviesByQuery = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      api_key: APIKEY,
      query,
    },
  });
  return data;
};

export const getCastById = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`, {
    params: {
      api_key: APIKEY,
    },
  });
  return data;
};

export const getRewiesById = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`, {
    params: {
      api_key: APIKEY,
    },
  });
  return data;
};
