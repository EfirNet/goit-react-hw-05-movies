import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li className={styles.item} key={id}>
      <Link
        className={styles.link}
        to={`/movie/${id}`}
        state={{ from: location }}
      >
        {title}
      </Link>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
