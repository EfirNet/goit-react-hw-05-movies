import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../../shared/api/api';
import MovieSearchForm from '../MovieSearchForm';
import MoviesList from '../MoviesList';
import styles from './MovieSearch.module.css';

const MovieSearch = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { items } = state;

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));

      try {
        const { results } = await getMoviesByQuery(search);
        setState(prevState => ({
          ...prevState,
          loading: false,
          items: results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => setSearchParams({ query: search });

  return (
    <div className={styles.wrap}>
      <MovieSearchForm onSubmit={changeSearch} />
      <MoviesList items={items} />
    </div>
  );
};

export default MovieSearch;
