import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';

const MovieDetails = ({
  title,
  overview,
  genres,
  poster_path,
  release_date,
  vote_average,
}) => {
  const genre = genres.map(genre => genre.name).join(', ');
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.round(vote_average * 10);

  return (
    <>
      <h2 className={styles.title}>MovieDetails</h2>
      <li className={styles.item}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div className={styles.wrap}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.span}> ({releaseDate})</span>
          </h3>
          <p className={styles.text}>User Score: {`${voteAverage}%`}</p>
          <h4 className={styles.subtitle}>Overview</h4>
          <p className={styles.text}>{overview}</p>
          <h4 className={styles.subtitle}>Genres</h4>
          <p className={styles.text}>{genre}</p>
        </div>
      </li>
    </>
  );
};

MovieDetails.defaultProps = {
  title: 'unknown',
  overview: 'Information not found',
  genres: [],
  poster_path: 'Image not found',
  release_date: 'Date not found',
  vote_average: 0,
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MovieDetails;
