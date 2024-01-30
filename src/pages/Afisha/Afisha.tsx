import styles from './Afisha.module.css';

import { CardList } from './CardList/CardList';
export const Afisha = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Афиша</h1>
      <div></div>
      <CardList />
    </div>
  );
};
