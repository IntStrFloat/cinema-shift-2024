import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <img src="./Logo.svg" alt="Логотип" />
        <div>Профиль</div>
        <div>Билеты</div>
        <div className={styles.exit}>
          <img src="./Exit.svg" alt="" />
          <p>Выйти</p>
        </div>
      </header>
      <div className={styles.hr}></div>
      <Outlet />
    </div>
  );
};
