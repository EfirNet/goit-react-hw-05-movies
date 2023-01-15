import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiesById } from '../../shared/api/api';
import styles from './ReviewsPage.module.css';

const ReviewsPage = () => {
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
        const { results } = await getRewiesById(id);
        setState(prevState => ({
          ...prevState,
          items: results,
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

  const elements = items.map(({ author, content, id }) => (
    <li key={id}>
      <h3 className={styles.subtitle}>Author: {author}</h3>
      <p className={styles.text}>{content}</p>
    </li>
  ));
  return (
    <>
      {items.length > 0 ? (
        <ul className={styles.list}>{elements}</ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default ReviewsPage;

// import styles from './ReviewsPage.module.css';

// const ReviewsPage = () => {
//   return (
//     <div className={styles.div}>
//       <h2>Reviews page</h2>
//     </div>
//   );
// };

// export default ReviewsPage;
