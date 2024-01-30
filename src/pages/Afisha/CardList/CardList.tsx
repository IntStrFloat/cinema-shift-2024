import { Card } from '../Card/Card';
import styles from './CardList.module.css';

export const CardList = () => {
  const movies = Array.from({ length: 10 }, () => ({
    rating: 5,
    subTitle: 'Крутой фильм',
    title: 'Стражи галактики',
    genre: 'Фантастика',
    description: 'США, 2023',
    img: './StraziGalaktiki.png',
  }));
  return (
    <div className={styles.cardList}>
      {movies.map((movie) => (
        <Card key={movie.title} {...movie} />
      ))}
    </div>
  );
};
