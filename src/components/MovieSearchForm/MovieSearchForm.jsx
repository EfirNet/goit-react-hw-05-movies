import PropTypes from 'prop-types';
import styles from './MovieSearchForm.module.css';
import { useState } from 'react';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({ search: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ search: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.lable}>
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="search"
          value={state.search}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          placeholder="Movie search"
        />
      </label>
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

MovieSearchForm.defaultProps = {
  onSubmit: () => {},
};

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MovieSearchForm;
