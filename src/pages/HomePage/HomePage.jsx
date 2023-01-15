import styles from './HomePage.module.css';
import TrendingMovies from '../../components/TrandingMovies/TrandingMovies';

const HomePage = () => {
  return (
    <div className={styles.div}>
      <h2>Tranding today</h2>
      <TrendingMovies />
    </div>
  );
};

export default HomePage;
