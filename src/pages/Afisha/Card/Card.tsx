import { FC } from 'react';
import styles from './Card.module.css';
import { Star } from '../../../../public/Star';
import { Button } from '../../../components/Button/Button';
interface CardProps {
  title: string;
  subTitle: string;
  rating: number;
  img: string;
  genre: string;
  description: string;
}
export const Card: FC<CardProps> = ({ title, genre, description, subTitle, rating, img }) => {
  const stars = Array.from({ length: 5 }, (_, i) => <Star key={i} filled={i < rating} />);
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" />
        <div className={styles.descriptionContainer}>
          <p className={styles.genre}>{genre}</p>
          <p className={styles.genre}> {description}</p>
        </div>
      </div>

      <div>
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
      <div>
        <div>{stars}</div>
        <p className={styles.subRating}>Kinopoisk - {rating}</p>
      </div>
      <Button>Подробнее</Button>
    </div>
  );
};
