import { useState, useEffect } from 'react';
import { getMovie } from '../../shared/api/api';
import Loader from '../Loader';
import MoviesList from '../MoviesList';

const TrendingMovies = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: false,
        }));
        const results = await getMovie();
        setState(prevState => ({
          ...prevState,
          items: [...results],
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };
    fetchTrendingMovies();
  }, []);

  const { loading, error, items } = state;
  return (
    <>
      {loading && <Loader />}
      {error && <p>Movie not found, try again</p>}
      {Boolean(items.length) && <MoviesList items={items} />}
    </>
  );
};

export default TrendingMovies;
