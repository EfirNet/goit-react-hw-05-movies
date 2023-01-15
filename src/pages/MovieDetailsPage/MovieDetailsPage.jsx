import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from '../../shared/api/api';
import MovieDetails from '../../components/MovieDetails';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  const { movie, loading, error } = state;

  useEffect(() => {
    const fetchMovie = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const data = await getMovieById(id);
        setState(prevState => ({
          ...prevState,
          movie: { ...data },
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error,
        }));
      }
    };
    fetchMovie();
  }, [id]);

  const isMovie = Object.keys(movie).length > 0;
  const goBack = () => navigate(from);

  return (
    <div className={styles.wrap}>
      {loading && <p className={styles.text}>...Loading</p>}
      {error && <p className={styles.text}>Movie not found</p>}
      {isMovie && (
        <button className={styles.button} onClick={goBack}>
          Go Back
        </button>
      )}
      {isMovie && <MovieDetails {...movie} />}
      {isMovie && <h3 className={styles.info}>Additional information</h3>}
      <div className={styles.wrap}>
        {isMovie && (
          <Link className={styles.link} to={`cast`} state={{ from }}>
            Cast
          </Link>
        )}
        {isMovie && (
          <Link className={styles.link} to={`reviews`} state={{ from }}>
            Reviews
          </Link>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
