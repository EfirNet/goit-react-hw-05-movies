import { RotatingTriangles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <RotatingTriangles
      colors={['#51E5FF', '#7DE2D1', '#FF7E6B']}
      height="100"
      width="100"
    />
  </div>
);

export default Loader;
