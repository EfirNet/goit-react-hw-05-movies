import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from '../../shared/api/api';
import styles from './CastPage.module.css';

const CastPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setState(prevState => ({
        ...prevState,
        loading: true,
        error: false,
      }));
      try {
        const { cast } = await getCastById(id);
        setState(prevState => ({
          ...prevState,
          items: cast,
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
    fetchReviews();
  }, [id]);

  const { items } = state;

  const elements = items.map(
    ({ id, original_name, character, profile_path }) => {
      const profilePhoto = `https://image.tmdb.org/t/p/w200${profile_path}`;
      return (
        <li className={styles.item} key={id}>
          <img className={styles.img} src={profilePhoto} alt={original_name} />
          <p className={styles.text}>
            <span className={styles.span}>Name:</span> {original_name}
          </p>
          <p className={styles.text}>
            <span className={styles.span}>Character:</span> {character}
          </p>
        </li>
      );
    }
  );

  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default CastPage;
