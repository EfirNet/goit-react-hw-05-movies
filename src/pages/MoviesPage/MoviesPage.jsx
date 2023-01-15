import styles from './MoviesPage.module.css';
import MovieSearch from '../../components/MovieSearch';

const MoviesPage = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.title}>Movies page</h2>
      <MovieSearch />
    </div>
  );
};

export default MoviesPage;
