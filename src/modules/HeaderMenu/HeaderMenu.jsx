import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.css';
import { items } from './items';

const getLinkClassName = ({ isActive }) => {
  return isActive ? styles.linkActive : styles.link;
};

const HeaderMenu = () => {
  const elements = items.map(({ id, name, to }) => (
    <li key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.menu}>
      <div className={styles.wrap}>
        <ul className={styles.list}>{elements}</ul>
      </div>
    </nav>
  );
};

export default HeaderMenu;
