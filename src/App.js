import HeaderMenu from './modules/HeaderMenu';
import UserRoutes from './UserRoutes';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <HeaderMenu />
      <UserRoutes />
    </div>
  );
};

export default App;
